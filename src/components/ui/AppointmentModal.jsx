import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Phone, CheckCircle2, Clock } from 'lucide-react';
import Button from './Button';
import { doctorsData } from '../../data/doctors';

export default function AppointmentModal({ isOpen, onClose, selectedDoctor = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    doctorId: selectedDoctor ? selectedDoctor.id : '',
    date: '',
    timeSlot: 'Morning (10:00 AM - 01:00 PM)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (selectedDoctor) {
      setFormData(prev => ({ ...prev, doctorId: selectedDoctor.id }));
    }
    // Set tomorrow as default date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setFormData(prev => ({ ...prev, date: tomorrow.toISOString().split('T')[0] }));
  }, [selectedDoctor, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    const refId = 'APT-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(refId);
    setSubmitted(true);
    setError('');
  };

  const handleReset = () => {
    setSubmitted(false);
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 md:p-8 overflow-hidden border border-[#d5deec]"
        >
          {/* Close button */}
          <button
            onClick={handleReset}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F5F5F5] hover:bg-[#EAEAEA] flex items-center justify-center text-[#404040] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="text-center py-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle2 className="w-10 h-10" />
              </motion.div>
              <h3 className="text-2xl font-bold font-poppins text-[#404040] mb-2">
                Appointment Requested!
              </h3>
              <p className="text-sm text-[#666666] mb-4">
                Your appointment reference ID is <span className="font-semibold text-[#1c2b8f]">{bookingRef}</span>. Our healthcare desk will contact you within 15 minutes to confirm your slot.
              </p>
              <div className="bg-[#F5F5F5] p-4 rounded-2xl text-left text-xs space-y-1.5 mb-6 text-[#404040]">
                <div><b>Patient:</b> {formData.name}</div>
                <div><b>Phone:</b> {formData.phone}</div>
                <div><b>Date:</b> {formData.date} ({formData.timeSlot})</div>
                <div><b>Doctor:</b> {doctorsData.find(d => d.id === formData.doctorId)?.name || 'Next Available Specialist'}</div>
              </div>
              <Button onClick={handleReset} variant="primary" className="w-full">
                Done
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1c2b8f] bg-[#1c2b8f]/10 px-3 py-1 rounded-full">
                  Healthcare Scheduling
                </span>
                <h3 className="text-2xl font-bold font-poppins text-[#404040] mt-2">
                  Book an Appointment
                </h3>
                <p className="text-xs text-[#666666] mt-1">
                  Connect with experienced clinical specialists.
                </p>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-600 text-xs rounded-xl border border-red-100 font-medium">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#404040] mb-1">
                    Patient Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C5C5C5]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-[#d5deec] focus:border-[#1c2b8f] focus:outline-none focus:ring-2 focus:ring-[#1c2b8f]/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#404040] mb-1">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C5C5C5]" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-[#d5deec] focus:border-[#1c2b8f] focus:outline-none focus:ring-2 focus:ring-[#1c2b8f]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#404040] mb-1">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C5C5C5]" />
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-[#d5deec] focus:border-[#1c2b8f] focus:outline-none focus:ring-2 focus:ring-[#1c2b8f]/20"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#404040] mb-1">
                    Select Specialist
                  </label>
                  <select
                    value={formData.doctorId}
                    onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#d5deec] focus:border-[#1c2b8f] focus:outline-none focus:ring-2 focus:ring-[#1c2b8f]/20 bg-white"
                  >
                    <option value="">-- Any Available Specialist --</option>
                    {doctorsData.map(d => (
                      <option key={d.id} value={d.id}>
                        {d.name} ({d.specialty})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#404040] mb-1">
                    Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C5C5C5]" />
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-[#d5deec] focus:border-[#1c2b8f] focus:outline-none focus:ring-2 focus:ring-[#1c2b8f]/20 bg-white"
                    >
                      <option>Morning (10:00 AM - 01:00 PM)</option>
                      <option>Afternoon (02:00 PM - 05:00 PM)</option>
                      <option>Evening (05:00 PM - 08:00 PM)</option>
                    </select>
                  </div>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
                  Confirm Booking Request
                </Button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

