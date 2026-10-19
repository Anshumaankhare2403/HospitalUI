/* Vasudev Multispeciality Hospital - AI Health Assistant & Triage Engine */
(function() {
  'use strict';

  const esc = (s) => String(s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function initChatbot() {
    const data = window.HOSPITAL_DATA;
    if (!data) return;

    const fab = document.getElementById('chat-fab');
    const panel = document.getElementById('chat-panel');
    const closeBtn = document.getElementById('chat-close');
    const msgContainer = document.getElementById('chat-msgs');
    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send');
    const quickBar = document.getElementById('chat-quick');

    if (!fab || !panel) return;

    function openChat() {
      panel.classList.add('open');
      if (!msgContainer.children.length) {
        addMessage('bot', `Namaste! I am the Vasudev Hospital digital assistant. How can I help you today? You can ask about <b>doctor timings</b>, <b>Ayushman Bharat</b>, <b>visiting hours</b>, or <b>book an appointment</b>.`);
      }
      setTimeout(() => input && input.focus(), 200);
    }

    function closeChat() {
      panel.classList.remove('open');
    }

    fab.addEventListener('click', openChat);
    if (closeBtn) closeBtn.addEventListener('click', closeChat);

    function addMessage(sender, html, isEmergency) {
      const div = document.createElement('div');
      div.className = `chat-msg ${sender} ${isEmergency ? 'em' : ''}`;
      div.innerHTML = html;
      msgContainer.appendChild(div);
      msgContainer.scrollTop = msgContainer.scrollHeight;
    }

    function handleUserInput(userText) {
      const q = String(userText || '').trim().toLowerCase();
      if (!q) return;

      addMessage('user', esc(userText));
      input.value = '';

      // 1. Emergency Intercept Check
      const emKeywords = ['emergency', 'accident', 'unconscious', 'bleeding', 'chest pain', 'heart attack', 'not breathing', 'आपातकाल', 'इमरजेंसी', 'बेहोश', 'दुर्घटना', 'serious'];
      if (emKeywords.some(k => q.includes(k))) {
        addMessage('bot', `
          <p>🚨 <b>Emergency Triage Alert:</b></p>
          <p>For immediate life-threatening emergency, call our trauma line now:</p>
          <p style="margin: 8px 0;"><a class="btn btn-red" href="tel:+917987025114" style="padding: 6px 14px; font-size: 0.88rem;">Call 79870 25114</a></p>
          <p>Our ICU, Ambulance, and emergency physicians are available 24×7 on Mahadev Ghat Road, Near Raipura Chowk, Daganiya.</p>
        `, true);
        return;
      }

      // 2. Doctor matching
      for (let doc of data.doctors) {
        const docNameClean = doc.name.toLowerCase().replace('dr.', '').trim();
        if (q.includes(docNameClean) || (doc.name_hi && q.includes(doc.name_hi.replace('डॉ.', '').trim()))) {
          const status = window.OPD ? window.OPD.status(doc) : { label: 'Active' };
          const grouped = window.OPD ? window.OPD.grouped(doc.opd) : [];
          const timingStr = grouped.length ? grouped.map(g => `${g.label}: ${g.times}`).join('<br>') : (doc.opd_note || 'Call for timings');
          
          addMessage('bot', `
            <b>${esc(doc.name)}</b> (${esc(doc.designation)})<br>
            <small style="color: var(--muted);">${esc(doc.qualifications)}</small><br>
            <p style="margin-top: 6px;"><b>Status:</b> <span class="pill ${status.state}">${esc(status.label)}</span></p>
            <p style="margin-top: 4px; font-size: 0.85rem;"><b>OPD Timings:</b><br>${timingStr}</p>
            <p style="margin-top: 8px;"><button class="btn btn-navy" onclick="window.bookDoctor('${esc(doc.id)}')" style="padding: 6px 14px; font-size: 0.85rem;">Book Appointment</button></p>
          `);
          return;
        }
      }

      // 3. Department / Specialty matching
      for (let dept of data.departments) {
        const aliases = (dept.aliases || '').split(',').map(a => a.trim().toLowerCase());
        if (q.includes(dept.name.toLowerCase()) || aliases.some(a => a && q.includes(a))) {
          const matchingDocs = data.doctors.filter(d => d.department === dept.slug);
          let docListHtml = matchingDocs.map(d => `• <b>${esc(d.name)}</b> (${esc(d.designation)})`).join('<br>');
          addMessage('bot', `
            <b>${esc(dept.name)} (${esc(dept.name_hi)})</b><br>
            ${esc(dept.summary)}<br>
            ${matchingDocs.length ? `<p style="margin-top: 8px;"><b>Specialists:</b><br>${docListHtml}</p>` : ''}
            <p style="margin-top: 8px;"><a class="btn btn-navy" href="#appointment" style="padding: 6px 14px; font-size: 0.85rem;">Book ${esc(dept.name)}</a></p>
          `);
          return;
        }
      }

      // 4. Visiting Hours check
      if (q.includes('visit') || q.includes('timing') || q.includes('hours') || q.includes('मिलने')) {
        addMessage('bot', `
          <b>Inpatient Visiting Hours:</b><br>
          • <b>General Wards:</b> 10 AM – 12 PM & 5 PM – 7 PM (Max 2 visitors)<br>
          • <b>ICU / CCU:</b> 11 – 11:30 AM & 6 – 6:30 PM (Strictly 1 visitor)<br>
          • <b>Maternity:</b> 10 AM – 1 PM & 4 – 7 PM<br>
          <small>Passes must be collected from reception. Masks required.</small>
        `);
        return;
      }

      // 5. Insurance / Ayushman check
      if (q.includes('ayushman') || q.includes('insurance') || q.includes('cashless') || q.includes('cghs') || q.includes('esic') || q.includes('आयुष्मान')) {
        addMessage('bot', `
          <b>Cashless Treatment & Ayushman Bharat:</b><br>
          Yes, we accept <b>Ayushman Bharat (PM-JAY)</b>, CGHS, ESIC, CSEB, and private insurers like Tata AIG, Vidal Health TPA, Aditya Birla, SBI General, and Universal Sompo.<br>
          Please bring your Ayushman card and Aadhaar card to the 24×7 TPA Desk.
        `);
        return;
      }

      // 6. Reports lookup check
      if (q.includes('report') || q.includes('test') || q.includes('blood') || q.includes('रिपोर्ट')) {
        addMessage('bot', `
          <b>Online Diagnostic Reports:</b><br>
          You can check your lab and CT/X-Ray reports online. Scroll to the <b>Patient Reports</b> section or enter your 10-digit mobile number and invoice PIN.<br>
          <a class="btn btn-navy" href="#patients" style="display:inline-block; margin-top:8px; padding:6px 14px; font-size:0.85rem;">Go to Patient Reports</a>
        `);
        return;
      }

      // 7. General FAQs matching
      for (let faq of data.faqs) {
        const words = faq.q.toLowerCase().split(' ');
        const matches = words.filter(w => w.length > 3 && q.includes(w));
        if (matches.length >= 2) {
          addMessage('bot', `<b>${esc(faq.q)}</b><br>${esc(faq.a)}`);
          return;
        }
      }

      // Default Helpdesk Fallback
      addMessage('bot', `
        I would be happy to connect you with our hospital desk. You can call directly at <b>9039033712</b> / <b>7987025114</b> or submit an appointment request:
        <p style="margin-top: 8px;"><a class="btn btn-navy" href="#appointment" style="padding: 6px 14px; font-size: 0.85rem;">Book Appointment</a></p>
      `);
    }

    if (sendBtn && input) {
      sendBtn.addEventListener('click', () => handleUserInput(input.value));
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleUserInput(input.value);
      });
    }

    if (quickBar) {
      quickBar.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (btn) handleUserInput(btn.textContent);
      });
    }
  }

  window.addEventListener('DOMContentLoaded', initChatbot);
})();
