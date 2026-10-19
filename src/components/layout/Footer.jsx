import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ShieldCheck, HeartPulse } from 'lucide-react';
import HospitalLogo from '../ui/HospitalLogo';

export default function Footer() {
  return (
    <footer className="bg-[#f8fafc] text-[#0f1a46] pt-16 pb-12 border-t border-[#d5deec] font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Column 1: Hospital Logo & About */}
          <div className="lg:col-span-2 space-y-4">
            <HospitalLogo size={48} showText={true} />
            <p className="text-xs text-[#56618a] leading-relaxed max-w-sm mt-3">
              NABH-certified multispeciality hospital in Raipur providing round-the-clock emergency trauma care, Apollo dialysis clinic, modular operation theatres, and specialist OPD clinics.
            </p>
            
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0f1a46] bg-white border border-[#d5deec] px-3.5 py-1.5 rounded-full w-fit shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#d42a31]" />
              <span>NABH Certified · PESHCO-2024-9227</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.facebook.com/VasudevMultispecialtyHospital" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-full bg-white border border-[#d5deec] flex items-center justify-center text-[#56618a] hover:bg-[#1c2b8f] hover:text-white transition-colors" 
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/vasudev_multispecialtyhospital/" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-full bg-white border border-[#d5deec] flex items-center justify-center text-[#56618a] hover:bg-[#1c2b8f] hover:text-white transition-colors" 
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white border border-[#d5deec] flex items-center justify-center text-[#56618a] hover:bg-[#1c2b8f] hover:text-white transition-colors" 
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white border border-[#d5deec] flex items-center justify-center text-[#56618a] hover:bg-[#1c2b8f] hover:text-white transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Clinical Departments */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#0f1a46] uppercase tracking-wider">
              Departments
            </h4>
            <ul className="space-y-2 text-xs text-[#56618a]">
              <li><a href="#departments" className="hover:text-[#1c2b8f] transition-colors">Nephrology &amp; Dialysis</a></li>
              <li><a href="#departments" className="hover:text-[#1c2b8f] transition-colors">Urology &amp; Kidney Stones</a></li>
              <li><a href="#departments" className="hover:text-[#1c2b8f] transition-colors">Laparoscopic Surgery</a></li>
              <li><a href="#departments" className="hover:text-[#1c2b8f] transition-colors">Obstetrics &amp; Gynaecology</a></li>
              <li><a href="#departments" className="hover:text-[#1c2b8f] transition-colors">Orthopaedics &amp; Trauma</a></li>
              <li><a href="#departments" className="hover:text-[#1c2b8f] transition-colors">Radiology &amp; CT Scan</a></li>
            </ul>
          </div>

          {/* Column 3: Patient Care */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#0f1a46] uppercase tracking-wider">
              Patient Care
            </h4>
            <ul className="space-y-2 text-xs text-[#56618a]">
              <li><a href="#contact" className="hover:text-[#1c2b8f] transition-colors">24×7 Emergency &amp; Ambulance</a></li>
              <li><a href="#departments" className="hover:text-[#1c2b8f] transition-colors">Apollo Dialysis Unit</a></li>
              <li><a href="tel:+919039033712" className="hover:text-[#1c2b8f] transition-colors">Home Blood Sample Collection</a></li>
              <li><a href="#doctors" className="hover:text-[#1c2b8f] transition-colors">Find Specialist Doctor</a></li>
              <li><a href="#booking-widget" className="hover:text-[#1c2b8f] transition-colors">Ayushman &amp; Cashless TPA</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & 24x7 Emergency */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#0f1a46] uppercase tracking-wider">
              24×7 Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-[#56618a]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d42a31] shrink-0 mt-0.5" />
                <span className="leading-tight text-[#0f1a46]">
                  Mahadev Ghat Road, Near Raipura Chowk, beside Rohinipuram Talab, Daganiya, Raipur (C.G.) 492013
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d42a31] shrink-0" />
                <div>
                  <span className="text-[10px] text-[#d42a31] font-bold block">EMERGENCY HOTLINE</span>
                  <a href="tel:+917987025114" className="hover:text-[#1c2b8f] font-bold text-[#0f1a46]">79870 25114</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#1c2b8f] shrink-0" />
                <div>
                  <span className="text-[10px] text-[#56618a] block">HELP DESK &amp; OPD</span>
                  <a href="tel:+919039033712" className="hover:text-[#1c2b8f] font-medium text-[#0f1a46]">90390 33712</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1c2b8f] shrink-0" />
                <a href="mailto:vasudevhospital.ryp@gmail.com" className="hover:text-[#1c2b8f] truncate text-[#0f1a46]">
                  vasudevhospital.ryp@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Divider & Copyright */}
        <div className="pt-8 border-t border-[#d5deec] flex flex-col sm:flex-row items-center justify-between text-xs text-[#56618a] gap-4">
          <p>© {new Date().getFullYear()} Vasudev Multispeciality Hospital &amp; Research Centre. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#1c2b8f] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#1c2b8f] transition-colors">Patient Rights</a>
            <a href="#" className="hover:text-[#1c2b8f] transition-colors">NABH Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
