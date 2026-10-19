import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import QuickBookingWidget from './components/sections/QuickBookingWidget';
import TodayOpdAndTrust from './components/sections/TodayOpdAndTrust';
import CentresOfExcellence from './components/sections/CentresOfExcellence';
import Departments from './components/sections/Departments';
import Doctors from './components/sections/Doctors';
import HospitalInfrastructure from './components/sections/HospitalInfrastructure';
import Testimonials from './components/sections/Testimonials';
import AppointmentModal from './components/ui/AppointmentModal';
import AuthModal from './components/ui/AuthModal';
import VideoModal from './components/ui/VideoModal';
import { departmentsData } from './data/departments';

export default function App() {
  const [searchFilter, setSearchFilter] = useState(null);
  const [activeDeptId, setActiveDeptId] = useState(null);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedDoctorForBooking, setSelectedDoctorForBooking] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin');
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleBookDoctor = (doctor) => {
    setSelectedDoctorForBooking(doctor);
    setIsAppointmentOpen(true);
  };

  const handleOpenAuth = (mode = 'signin') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const handleSelectSpeciality = (deptId) => {
    setActiveDeptId(deptId);
    const matched = departmentsData.find(d => d.id === deptId);
    if (matched) {
      setSearchFilter({ specialty: matched.title });
    }
    const el = document.getElementById('departments');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#f5f8fc] text-[#0f1a46] font-poppins selection:bg-[#1c2b8f]/15 selection:text-[#1c2b8f] overflow-x-hidden">
      
      {/* Main Foreground Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Bar */}
        <Navbar
          onOpenAuth={handleOpenAuth}
          onOpenAppointment={() => {
            setSelectedDoctorForBooking(null);
            setIsAppointmentOpen(true);
          }}
          onOpenVideo={() => setIsVideoOpen(true)}
        />

        {/* Hero Section */}
        <Hero
          onOpenAppointment={() => {
            setSelectedDoctorForBooking(null);
            setIsAppointmentOpen(true);
          }}
          onOpenVideo={() => setIsVideoOpen(true)}
          onOpenAuth={handleOpenAuth}
        />

        {/* Quick Booking, Doctor Search, Patient Reports & Key Stats Widget */}
        <QuickBookingWidget
          onBookAppointment={(bookingData) => {
            if (bookingData && bookingData.doctor) {
              setSelectedDoctorForBooking(bookingData.doctor);
            } else {
              setSelectedDoctorForBooking(null);
            }
            setIsAppointmentOpen(true);
          }}
          onSearchDoctors={(filter) => setSearchFilter(filter)}
        />

        {/* Centres of Excellence: Specialities we are known for (Matching Screenshot) */}
        <CentresOfExcellence
          onSelectSpeciality={handleSelectSpeciality}
          onViewAllDepartments={() => {
            const el = document.getElementById('departments');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Today's OPD Status & Care you can trust (Matching Screenshot) */}
        <TodayOpdAndTrust
          onExploreDoctors={() => {
            const el = document.getElementById('doctors');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 16 Clinical Departments Section */}
        <Departments
          activeDepartmentId={activeDeptId}
          onBookDepartment={(dept) => {
            setSelectedDoctorForBooking(null);
            setIsAppointmentOpen(true);
          }}
          onSelectDepartment={(dept) => {
            setSearchFilter({ specialty: dept ? dept.title : 'All' });
            const el = document.getElementById('doctors');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Meet Our Doctors (Horizontal Scroller) */}
        <Doctors
          searchFilter={searchFilter}
          onBookDoctor={handleBookDoctor}
        />

        {/* Hospital Infrastructure & Facilities Bento Grid (Matching Screenshot) */}
        <HospitalInfrastructure />

        {/* Patient Testimonials */}
        <Testimonials />

        {/* Footer */}
        <Footer />

      </div>

      {/* Interactive Modals */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        selectedDoctor={selectedDoctorForBooking}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

    </div>
  );
}
