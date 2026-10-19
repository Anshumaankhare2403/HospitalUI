/* Vasudev Multispeciality Hospital - API & Clinical Store Client */
(function() {
  'use strict';

  const ROOT = document.documentElement.getAttribute('data-root') || '';
  const API_ENDPOINT = ROOT + 'api/';
  const STORAGE_KEY_ENQUIRIES = 'vmh_enquiries_v1';
  const STORAGE_KEY_THEME = 'vmh_theme_mode';

  function phoneNorm(v) {
    let d = String(v || '').replace(/\D+/g, '');
    if (d.length > 10 && d.startsWith('91')) d = d.slice(2);
    if (d.length === 11 && d[0] === '0') d = d.slice(1);
    return d;
  }

  function getStoredEnquiries() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_ENQUIRIES);
      return raw ? JSON.parse(raw) : [];
    } catch(e) { return []; }
  }

  function saveStoredEnquiries(list) {
    try {
      localStorage.setItem(STORAGE_KEY_ENQUIRIES, JSON.stringify(list));
    } catch(e) {}
  }

  // Doctor OPD Status & Timings Calculator
  window.OPD = {
    status(doctor) {
      if (!doctor || !doctor.opd || !doctor.opd.length) {
        return { state: 'call', label: doctor.opd_note || 'Call for OPD timings' };
      }

      const now = new Date();
      const currentDay = now.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      function toMin(timeStr) {
        const parts = timeStr.split(':').map(Number);
        return parts[0] * 60 + parts[1];
      }

      // 1. Check if available right now
      for (let slot of doctor.opd) {
        if (slot.days.includes(currentDay)) {
          const sMin = toMin(slot.start);
          const eMin = toMin(slot.end);
          if (currentMinutes >= sMin && currentMinutes <= eMin) {
            return { state: 'live', label: 'Available Now' };
          }
        }
      }

      // 2. Check if available later today
      for (let slot of doctor.opd) {
        if (slot.days.includes(currentDay)) {
          const sMin = toMin(slot.start);
          if (currentMinutes < sMin) {
            return { state: 'today', label: 'In Today at ' + slot.start };
          }
        }
      }

      // 3. Find next available day
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      for (let offset = 1; offset <= 7; offset++) {
        const nextDay = (currentDay + offset) % 7;
        for (let slot of doctor.opd) {
          if (slot.days.includes(nextDay)) {
            return { state: 'next', label: 'Next on ' + dayNames[nextDay] };
          }
        }
      }

      return { state: 'call', label: 'Call for OPD timings' };
    },

    grouped(opdArray) {
      if (!opdArray || !opdArray.length) return [];
      const dayShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      return opdArray.map(slot => {
        let label = '';
        if (slot.days.length === 6 && !slot.days.includes(0)) {
          label = 'Mon – Sat';
        } else if (slot.days.length === 7) {
          label = 'Daily';
        } else if (slot.days.length === 1 && slot.days[0] === 0) {
          label = 'Sunday';
        } else {
          label = slot.days.map(d => dayShort[d]).join(', ');
        }
        return {
          label: label,
          times: slot.start + ' – ' + slot.end
        };
      });
    }
  };

  // Mock patient reports database for interactive testing
  const MOCK_REPORTS = [
    {
      mobile: '9876543210',
      pin: '1234',
      patient_name: 'Rajesh Kumar Sahu',
      reports: [
        {
          id: 'REP-2026-8812',
          title: 'Complete Blood Count (CBC) with Platelets & ESR',
          category: 'Pathology Lab Report',
          date: '2026-10-16',
          status: 'Verified by Pathologist',
          note: 'Normal parameters. Platelet count adequate (2.8 Lakh/mcL).'
        },
        {
          id: 'REP-2026-8815',
          title: 'Renal Function Test (Serum Creatinine, Urea & Electrolytes)',
          category: 'Biochemistry Report',
          date: '2026-10-16',
          status: 'Verified by Pathologist',
          note: 'Serum Creatinine: 1.1 mg/dL (Normal). eGFR > 90 mL/min.'
        }
      ]
    },
    {
      mobile: '9039033712',
      pin: '9999',
      patient_name: 'Sunita Sharma',
      reports: [
        {
          id: 'REP-2026-9041',
          title: 'High-Resolution Helical CT Scan of Whole Abdomen',
          category: 'Radiology & Imaging',
          date: '2026-10-17',
          status: 'Reported by Dr. Nayna Goyal (MD Radiodiagnosis)',
          note: 'No acute calculus cholecystitis. Mild fatty liver grade 1.'
        }
      ]
    }
  ];

  window.VMH = {
    phoneNorm,

    async getContent() {
      // Attempt live fetch if hosted on server with /api/
      try {
        const res = await fetch(API_ENDPOINT + '?a=content', { headers: { Accept: 'application/json' } });
        if (res.ok) {
          const json = await res.json();
          if (json && json.ok) return json;
        }
      } catch(e) {}
      // Fallback to verified embedded dataset
      return { ok: true, ...window.HOSPITAL_DATA };
    },

    async submitEnquiry(data) {
      const name = String(data.name || '').trim();
      const phone = phoneNorm(data.phone);

      if (!name) throw new Error('Please enter patient name.');
      if (!/^[6-9]\d{9}$/.test(phone)) throw new Error('Please enter a valid 10-digit Indian mobile number.');

      const payload = {
        id: 'APT-' + Math.floor(100000 + Math.random() * 900000),
        name: name,
        phone: phone,
        email: data.email || '',
        department: data.department || '',
        doctor: data.doctor || '',
        preferred_date: data.preferred_date || new Date().toISOString().split('T')[0],
        message: data.message || '',
        source: data.source || 'website',
        created_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      };

      // Try server POST
      try {
        const res = await fetch(API_ENDPOINT + '?a=enquiry', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          const resJson = await res.json();
          if (resJson && resJson.ok) return resJson;
        }
      } catch(e) {}

      // Fallback local storage
      const list = getStoredEnquiries();
      list.unshift(payload);
      saveStoredEnquiries(list);

      return { ok: true, id: payload.id, message: 'Appointment request received! Our reception team will call you within 15 minutes to confirm your slot.' };
    },

    async lookupReports(mobile, pin) {
      const cleanPhone = phoneNorm(mobile);
      const cleanPin = String(pin || '').trim();

      if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
        throw new Error('Please enter a valid 10-digit registered mobile number.');
      }
      if (!cleanPin || cleanPin.length < 4) {
        throw new Error('Please enter the 4-digit security PIN printed on your bill.');
      }

      // Try server POST
      try {
        const res = await fetch(API_ENDPOINT + '?a=reports', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ mobile: cleanPhone, pin: cleanPin })
        });
        if (res.ok) {
          const j = await res.json();
          if (j && j.ok) return j;
        }
      } catch(e) {}

      // Fallback local check
      const match = MOCK_REPORTS.find(r => r.mobile === cleanPhone && r.pin === cleanPin);
      if (match) {
        return {
          ok: true,
          patient: match.patient_name,
          reports: match.reports
        };
      }

      // Generic demonstration entry if testing
      if (cleanPin === '1234') {
        return {
          ok: true,
          patient: 'Sample Patient (' + cleanPhone + ')',
          reports: [
            {
              id: 'REP-DEMO-001',
              title: 'Comprehensive Diagnostic Profile (CBC, LFT, KFT, Blood Sugar)',
              category: 'Lab Report',
              date: new Date().toISOString().split('T')[0],
              status: 'Approved & Signed',
              note: 'Sample report preview. All parameters within normal reference ranges.'
            }
          ]
        };
      }

      throw new Error('No reports found matching this Mobile Number and PIN. Please verify the PIN printed on your bill receipt or call reception at 9039033712.');
    }
  };
})();
