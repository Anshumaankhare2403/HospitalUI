/* Vasudev Multispeciality Hospital - Master Application Controller */
(function() {
  'use strict';

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  let appData = null;

  // Initialize Application
  async function init() {
    appData = await window.VMH.getContent();
    initTheme();
    renderHero();
    renderOpdBoard();
    renderDoctors();
    renderDepartments();
    renderFacilities();
    renderInsurance();
    renderVisiting();
    renderFaqs();
    setupAppointmentForm();
    setupReportForm();
    setupMobileNav();
  }

  // Dark / Light Theme Toggle
  function initTheme() {
    const saved = localStorage.getItem('vmh_theme_mode');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      updateThemeIcon(themeBtn);
      themeBtn.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const nextTheme = isDark ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('vmh_theme_mode', nextTheme);
        updateThemeIcon(themeBtn);
      });
    }
  }

  function updateThemeIcon(btn) {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.innerHTML = isDark ? window.ICON('sun') : window.ICON('moon');
    btn.setAttribute('aria-label', isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme');
  }

  // Render Hero Stats
  function renderHero() {
    const s = appData.settings;
    const heroTitle = document.getElementById('hero-title');
    const heroDesc = document.getElementById('hero-desc');
    const emTop = document.getElementById('top-em-phone');
    const emHdr = document.getElementById('hdr-em-phone');

    if (heroTitle) heroTitle.innerHTML = `Specialist care for <span>Raipur</span>, round the clock.`;
    if (heroDesc) heroDesc.textContent = s.about;
    if (emTop) emTop.textContent = `24×7 Emergency ${s.emergency_phone}`;
    if (emHdr) emHdr.textContent = s.emergency_phone;
  }

  // Render Today's OPD Status Board
  function renderOpdBoard() {
    const container = document.getElementById('opd-board-list');
    if (!container) return;

    const featuredDocs = appData.doctors.filter(d => d.featured || (d.opd && d.opd.length));
    container.innerHTML = featuredDocs.map(doc => {
      const status = window.OPD.status(doc);
      const monogram = doc.name.replace(/^dr\.?\s*/i, '').split(' ').map(w => w[0]).slice(0, 2).join('');
      return `
        <div class="opd-row" onclick="window.bookDoctor('${esc(doc.id)}')" style="cursor: pointer;" title="Click to book with ${esc(doc.name)}">
          <div class="opd-doc">
            <div class="doc-monogram">${esc(monogram)}</div>
            <div class="opd-doc-info">
              <strong>${esc(doc.name)}</strong>
              <small>${esc(doc.designation)}</small>
            </div>
          </div>
          <span class="pill ${status.state}">${esc(status.label)}</span>
        </div>
      `;
    }).join('');
  }

  // Render Doctor Directory
  let activeDeptFilter = 'all';
  let doctorSearchQuery = '';

  function renderDoctors() {
    const grid = document.getElementById('doctor-grid');
    const deptPills = document.getElementById('dept-filters');
    if (!grid) return;

    // Filter pills
    if (deptPills && !deptPills.children.length) {
      let pillsHtml = `<button class="dept-tag-btn active" data-dept="all">All Specialties (${appData.doctors.length})</button>`;
      const deptsWithDocs = [...new Set(appData.doctors.map(d => d.department))];
      deptsWithDocs.forEach(dSlug => {
        const dObj = appData.departments.find(dep => dep.slug === dSlug);
        const name = dObj ? dObj.name.split('&')[0].trim() : dSlug;
        pillsHtml += `<button class="dept-tag-btn" data-dept="${esc(dSlug)}">${esc(name)}</button>`;
      });
      deptPills.innerHTML = pillsHtml;

      deptPills.addEventListener('click', (e) => {
        const btn = e.target.closest('.dept-tag-btn');
        if (!btn) return;
        deptPills.querySelectorAll('.dept-tag-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeDeptFilter = btn.getAttribute('data-dept');
        filterDoctors();
      });
    }

    const searchInput = document.getElementById('doc-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        doctorSearchQuery = e.target.value.toLowerCase().trim();
        filterDoctors();
      });
    }

    filterDoctors();
  }

  function filterDoctors() {
    const grid = document.getElementById('doctor-grid');
    if (!grid) return;

    const filtered = appData.doctors.filter(d => {
      const matchDept = activeDeptFilter === 'all' || d.department === activeDeptFilter;
      const q = doctorSearchQuery;
      const matchSearch = !q || 
        d.name.toLowerCase().includes(q) ||
        (d.name_hi && d.name_hi.includes(q)) ||
        d.designation.toLowerCase().includes(q) ||
        d.qualifications.toLowerCase().includes(q) ||
        d.department.toLowerCase().includes(q);
      return matchDept && matchSearch;
    });

    if (!filtered.length) {
      grid.innerHTML = `<div style="grid-column: 1/-1; padding: 40px; text-align: center; color: var(--muted); background: var(--surface); border-radius: var(--radius);">No medical specialists found matching "${esc(doctorSearchQuery)}". Please try another search term or call reception at 9039033712.</div>`;
      return;
    }

    grid.innerHTML = filtered.map(doc => {
      const status = window.OPD.status(doc);
      const grouped = window.OPD.grouped(doc.opd);
      const monogram = doc.name.replace(/^dr\.?\s*/i, '').split(' ').map(w => w[0]).slice(0, 2).join('');
      const deptObj = appData.departments.find(dep => dep.slug === doc.department);

      return `
        <div class="doc-card" id="${esc(doc.slug)}">
          <div class="doc-top">
            <div class="doc-avatar">${esc(monogram)}</div>
            <div class="doc-details">
              <h3>${esc(doc.name)}</h3>
              ${doc.name_hi ? `<div class="doc-hi">${esc(doc.name_hi)}</div>` : ''}
              <div class="doc-desig">${esc(doc.designation)}</div>
            </div>
          </div>
          <div class="doc-degrees">${esc(doc.qualifications)}</div>
          <div style="margin-bottom: 12px;">
            <span class="pill ${status.state}">${esc(status.label)}</span>
          </div>
          <div class="doc-opd-box">
            ${grouped.length ? grouped.map(g => `<span><em>${esc(g.label)}</em><code>${esc(g.times)}</code></span>`).join('') : `<span><em>OPD</em><code>${esc(doc.opd_note || 'Call for timings')}</code></span>`}
          </div>
          ${doc.bio ? `<p style="font-size:0.85rem; color:var(--muted); margin-bottom:16px;">${esc(doc.bio)}</p>` : ''}
          <div class="doc-actions">
            <button class="btn btn-navy" onclick="window.bookDoctor('${esc(doc.id)}')">Book with Doctor</button>
            <a class="btn btn-outline" href="tel:+917987025114" title="Call Hospital">Call</a>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Departments
  function renderDepartments() {
    const grid = document.getElementById('dept-grid');
    if (!grid) return;

    grid.innerHTML = appData.departments.map(dept => {
      return `
        <div class="dept-card" id="dept-${esc(dept.slug)}">
          <div class="dept-icon">${window.ICON(dept.icon || 'stethoscope')}</div>
          <h3>${esc(dept.name)}</h3>
          <div class="dept-hi">${esc(dept.name_hi)}</div>
          <p>${esc(dept.summary)}</p>
          <div style="margin-top: auto;">
            <button class="btn btn-outline" onclick="window.selectDeptAndBook('${esc(dept.slug)}')" style="width: 100%; font-size: 0.85rem; padding: 8px 14px;">Consult Department</button>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Facilities
  function renderFacilities() {
    const grid = document.getElementById('fac-grid');
    if (!grid) return;

    grid.innerHTML = appData.facilities.map(fac => {
      return `
        <div class="fac-card">
          <b>${esc(fac.name)}</b>
          <p>${esc(fac.summary)}</p>
        </div>
      `;
    }).join('');
  }

  // Render Insurance
  function renderInsurance() {
    const grid = document.getElementById('ins-grid');
    if (!grid) return;

    grid.innerHTML = appData.insurance.map(ins => {
      return `
        <div class="ins-card">
          <div class="ins-dot"></div>
          <div>
            <b>${esc(ins.name)}</b>
            <div style="font-size: 0.78rem; color: var(--muted);">${esc(ins.type)}</div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Visiting Policy
  function renderVisiting() {
    const container = document.getElementById('visiting-content');
    if (!container) return;

    const v = appData.settings.visiting;
    container.innerHTML = `
      <table class="visiting-table">
        <thead>
          <tr>
            <th>Hospital Area / Ward</th>
            <th>Authorized Visiting Hours</th>
            <th>Attendant Guidelines</th>
          </tr>
        </thead>
        <tbody>
          ${v.hours.map(h => `
            <tr>
              <td><b>${esc(h.area)}</b></td>
              <td><code>${esc(h.time)}</code></td>
              <td style="color: var(--muted);">${esc(h.note)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div style="margin-top: 24px; background: var(--surface); padding: 20px; border-radius: var(--radius); border: 1px solid var(--line);">
        <h4 style="font-size: 1rem; margin-bottom: 12px; color: var(--navy-deep);">Visitor & Infection Control Rules:</h4>
        <ul style="padding-left: 20px; font-size: 0.9rem; color: var(--muted); line-height: 1.7;">
          ${v.rules.map(r => `<li>${esc(r)}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  // Render FAQs
  function renderFaqs() {
    const container = document.getElementById('faq-list');
    if (!container) return;

    container.innerHTML = appData.faqs.map((faq, idx) => {
      return `
        <div class="faq-card ${idx === 0 ? 'open' : ''}">
          <button class="faq-q" type="button" aria-expanded="${idx === 0}">
            <span>${esc(faq.q)}</span>
            ${window.ICON('close')}
          </button>
          <div class="faq-a">${esc(faq.a)}</div>
        </div>
      `;
    }).join('');

    container.addEventListener('click', (e) => {
      const qBtn = e.target.closest('.faq-q');
      if (!qBtn) return;
      const card = qBtn.closest('.faq-card');
      const isOpen = card.classList.contains('open');
      card.classList.toggle('open', !isOpen);
      qBtn.setAttribute('aria-expanded', !isOpen);
    });
  }

  // Appointment Form
  function setupAppointmentForm() {
    const deptSelect = document.getElementById('a-dept');
    const docSelect = document.getElementById('a-doc');
    const form = document.getElementById('appointment-form');
    const feedback = document.getElementById('appointment-feedback');
    const dateInput = document.getElementById('a-date');

    if (dateInput) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      dateInput.min = tomorrow.toISOString().split('T')[0];
      dateInput.value = tomorrow.toISOString().split('T')[0];
    }

    if (deptSelect && docSelect) {
      // Populate departments
      deptSelect.innerHTML = `<option value="">-- Choose Clinical Department --</option>` +
        appData.departments.map(d => `<option value="${esc(d.slug)}">${esc(d.name)}</option>`).join('');

      function updateDocOptions(selectedDeptSlug, preselectedDocId) {
        let docs = appData.doctors;
        if (selectedDeptSlug) {
          docs = docs.filter(d => d.department === selectedDeptSlug);
        }
        docSelect.innerHTML = `<option value="">-- Any Available Specialist --</option>` +
          docs.map(d => `<option value="${esc(d.name)}" data-id="${esc(d.id)}" ${preselectedDocId === d.id ? 'selected' : ''}>${esc(d.name)} (${esc(d.designation)})</option>`).join('');
      }

      updateDocOptions('');
      deptSelect.addEventListener('change', () => updateDocOptions(deptSelect.value));
    }

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const origBtnText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = 'Submitting Request…';
        feedback.innerHTML = '';

        try {
          const payload = {
            name: document.getElementById('a-name').value,
            phone: document.getElementById('a-phone').value,
            email: document.getElementById('a-email').value,
            department: deptSelect ? deptSelect.value : '',
            doctor: docSelect ? docSelect.value : '',
            preferred_date: dateInput ? dateInput.value : '',
            message: document.getElementById('a-msg').value
          };

          const res = await window.VMH.submitEnquiry(payload);
          feedback.innerHTML = `
            <div style="background: var(--ok-soft); color: var(--ok); padding: 16px; border-radius: 10px; border: 1px solid rgba(17, 131, 79, 0.3); margin-top: 14px;">
              <h4 style="font-size: 1.05rem; margin-bottom: 4px;">✓ Appointment Request Confirmed</h4>
              <p style="font-size: 0.9rem;">Reference Number: <b>${esc(res.id)}</b></p>
              <p style="font-size: 0.88rem; margin-top: 4px;">${esc(res.message)}</p>
              <div style="margin-top: 10px;">
                <a class="btn btn-navy" href="https://wa.me/919039033712?text=Hello%20Vasudev%20Hospital,%20I%20have%20submitted%20appointment%20${esc(res.id)}" target="_blank" style="font-size: 0.85rem; padding: 6px 14px;">WhatsApp Hospital Desk</a>
              </div>
            </div>
          `;
          form.reset();
        } catch(err) {
          feedback.innerHTML = `
            <div style="background: var(--red-soft); color: var(--red); padding: 14px; border-radius: 10px; border: 1px solid rgba(212, 42, 49, 0.3); margin-top: 14px;">
              ⚠️ <b>Error:</b> ${esc(err.message)}
            </div>
          `;
        } finally {
          btn.disabled = false;
          btn.innerHTML = origBtnText;
        }
      });
    }
  }

  // Pre-select doctor in booking modal
  window.bookDoctor = function(docId) {
    const doc = appData.doctors.find(d => d.id === docId);
    if (!doc) return;
    const deptSelect = document.getElementById('a-dept');
    const docSelect = document.getElementById('a-doc');

    if (deptSelect) {
      deptSelect.value = doc.department;
      deptSelect.dispatchEvent(new Event('change'));
    }
    if (docSelect) {
      docSelect.value = doc.name;
    }

    const apptSection = document.getElementById('appointment');
    if (apptSection) {
      apptSection.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('a-name').focus();
    }
  };

  window.selectDeptAndBook = function(deptSlug) {
    const deptSelect = document.getElementById('a-dept');
    if (deptSelect) {
      deptSelect.value = deptSlug;
      deptSelect.dispatchEvent(new Event('change'));
    }
    const apptSection = document.getElementById('appointment');
    if (apptSection) {
      apptSection.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('a-name').focus();
    }
  };

  // Report Lookup Form
  function setupReportForm() {
    const form = document.getElementById('report-form');
    const resultsContainer = document.getElementById('report-results');
    if (!form || !resultsContainer) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const mobile = document.getElementById('r-mobile').value;
      const pin = document.getElementById('r-pin').value;
      const btn = form.querySelector('button[type="submit"]');

      btn.disabled = true;
      btn.textContent = 'Searching Records…';
      resultsContainer.innerHTML = '';

      try {
        const res = await window.VMH.lookupReports(mobile, pin);
        resultsContainer.innerHTML = `
          <div class="report-result-box">
            <h4 style="font-size: 1.05rem; color: var(--navy-deep);">Reports for: <b>${esc(res.patient)}</b></h4>
            <div style="font-size: 0.8rem; color: var(--muted); margin-bottom: 12px;">Mobile: +91 ${esc(mobile)}</div>
            ${res.reports.map(rep => `
              <div class="report-item">
                <div>
                  <h4>${esc(rep.title)}</h4>
                  <small>${esc(rep.category)} · Date: ${esc(rep.date)}</small>
                  <p style="font-size: 0.8rem; color: var(--ok); margin-top: 4px;">✓ ${esc(rep.status)}</p>
                  ${rep.note ? `<p style="font-size: 0.78rem; color: var(--muted);">${esc(rep.note)}</p>` : ''}
                </div>
                <button class="btn btn-navy" onclick="window.downloadReportAlert('${esc(rep.id)}')" style="padding: 6px 14px; font-size: 0.82rem; white-space: nowrap;">Download PDF</button>
              </div>
            `).join('')}
          </div>
        `;
      } catch(err) {
        resultsContainer.innerHTML = `
          <div style="background: var(--red-soft); color: var(--red); padding: 14px; border-radius: 10px; margin-top: 16px; font-size: 0.9rem; border: 1px solid rgba(212, 42, 49, 0.2);">
            ⚠️ ${esc(err.message)}
          </div>
        `;
      } finally {
        btn.disabled = false;
        btn.textContent = 'Search Diagnostic Reports';
      }
    });
  }

  window.downloadReportAlert = function(repId) {
    alert(`Downloading verified diagnostic PDF report [${repId}]. For printed physical copies, visit the reception counter.`);
  };

  // Mobile Navigation
  function setupMobileNav() {
    const menuBtn = document.getElementById('menu-btn');
    const nav = document.getElementById('main-nav');
    if (menuBtn && nav) {
      menuBtn.addEventListener('click', () => {
        const isOpen = nav.classList.contains('open');
        nav.classList.toggle('open', !isOpen);
        menuBtn.setAttribute('aria-expanded', !isOpen);
      });
      nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          nav.classList.remove('open');
          menuBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  window.addEventListener('DOMContentLoaded', init);
})();
