import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, CheckCircle2 } from 'lucide-react';
import Button from './Button';

export default function AuthModal({ isOpen, onClose, initialMode = 'signin' }) {
  const [mode, setMode] = useState(initialMode); // 'signin' | 'signup'
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

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
          className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 md:p-8 overflow-hidden border border-[#d5deec]"
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
                className="w-16 h-16 bg-blue-100 text-[#1c2b8f] rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle2 className="w-10 h-10" />
              </motion.div>
              <h3 className="text-2xl font-bold font-poppins text-[#404040] mb-2">
                {mode === 'signin' ? 'Welcome Back!' : 'Account Created!'}
              </h3>
              <p className="text-sm text-[#666666] mb-6">
                You are successfully {mode === 'signin' ? 'signed in' : 'registered'}. You now have access to medical records, appointments, and consultations.
              </p>
              <Button onClick={handleReset} variant="primary" className="w-full">
                Continue to Portal
              </Button>
            </div>
          ) : (
            <>
              {/* Tab Selector */}
              <div className="flex bg-[#F5F5F5] p-1 rounded-2xl mb-6">
                <button
                  type="button"
                  onClick={() => { setMode('signin'); setError(''); }}
                  className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all ${
                    mode === 'signin'
                      ? 'bg-white text-[#1c2b8f] shadow-sm'
                      : 'text-[#666666] hover:text-[#404040]'
                  }`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => { setMode('signup'); setError(''); }}
                  className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all ${
                    mode === 'signup'
                      ? 'bg-white text-[#1c2b8f] shadow-sm'
                      : 'text-[#666666] hover:text-[#404040]'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold font-poppins text-[#404040]">
                  {mode === 'signin' ? 'Patient Portal Sign In' : 'Join Our Healthcare Network'}
                </h3>
                <p className="text-xs text-[#666666] mt-1">
                  {mode === 'signin'
                    ? 'Enter your credentials to access patient reports and slots.'
                    : 'Create an account for expedited consultations and family health records.'}
                </p>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-600 text-xs rounded-xl border border-red-100 font-medium">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === 'signup' && (
                  <div>
                    <label className="block text-xs font-semibold text-[#404040] mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C5C5C5]" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-[#d5deec] focus:border-[#1c2b8f] focus:outline-none focus:ring-2 focus:ring-[#1c2b8f]/20"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-[#404040] mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C5C5C5]" />
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-[#d5deec] focus:border-[#1c2b8f] focus:outline-none focus:ring-2 focus:ring-[#1c2b8f]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#404040] mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C5C5C5]" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-[#d5deec] focus:border-[#1c2b8f] focus:outline-none focus:ring-2 focus:ring-[#1c2b8f]/20"
                    />
                  </div>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
                  {mode === 'signin' ? 'Sign In to Account' : 'Create Free Account'}
                </Button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

