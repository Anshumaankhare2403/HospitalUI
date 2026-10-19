import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    // Client-side simulation of subscription
    setStatus('success');
    setMessage('Thank you for subscribing! Health updates and doctor schedules will be delivered to your inbox.');
    setEmail('');
  };

  return (
    <section className="py-16 md:py-20 bg-[#f5f8fc] relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Box with subtle light tint & clinical border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#e9f0fa]/70 via-white to-[#f5f8fc] rounded-4xl p-8 sm:p-12 md:p-16 border border-[#d5deec] shadow-md text-center relative overflow-hidden"
        >
          {/* Decorative background accent */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#1c2b8f]/5 blur-2xl pointer-events-none" />

          <div className="max-w-xl mx-auto relative z-10 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#d42a31] bg-[#fdecec] px-3.5 py-1.5 rounded-full">
              Stay Informed
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-[#0f1a46]">
              Subscribe To Our Newsletter
            </h2>

            <p className="text-xs sm:text-sm text-[#56618a] leading-relaxed">
              Get monthly wellness updates, preventive screening reminders, and consultant OPD timetable notices directly in your inbox.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="pt-4 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-2.5 bg-white p-2 rounded-2xl sm:rounded-full border border-[#d5deec] shadow-sm focus-within:border-[#1c2b8f] focus-within:ring-2 focus-within:ring-[#1c2b8f]/15 transition-all">
                <div className="relative flex-1 flex items-center pl-3">
                  <Mail className="w-4 h-4 text-[#94a3b8] shrink-0" />
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status !== 'idle') setStatus('idle');
                    }}
                    className="w-full px-3 py-2 text-xs sm:text-sm outline-none text-[#0f1a46] placeholder:text-[#94a3b8] bg-transparent"
                    aria-label="Email address for newsletter"
                  />
                </div>
                <Button
                  type="submit"
                  variant="danger"
                  size="md"
                  className="rounded-full shadow-md shrink-0"
                >
                  Subscribe
                </Button>
              </div>

              {/* Status Message */}
              {status === 'error' && (
                <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-red-600 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{message}</span>
                </div>
              )}
              {status === 'success' && (
                <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-emerald-600 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{message}</span>
                </div>
              )}

              <p className="text-[11px] text-[#56618a] mt-3">
                Zero spam. We respect your medical privacy and unsubscribe is one click away.
              </p>
            </form>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
