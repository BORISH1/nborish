// components/Sections/Contact.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ REAL API CALL to your Next.js backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('Message sent successfully! I will reply within 24 hours.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Server error.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred. Please email me directly at borishningombam@gmail.com');
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'borishningombam@gmail.com',
      link: 'mailto:borishningombam@gmail.com',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 9612024828',
      link: 'tel:+919612024828',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Rohini College, Tamil Nadu, India',
      link: '#',
      color: 'from-green-400 to-cyan-500',
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      label: 'GitHub',
      link: 'https://github.com/Borish1',
      color: 'hover:text-gray-300',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/ningombam-borish-singh-70b34a273/',
      color: 'hover:text-blue-400',
    },
    {
      icon: FiTwitter,
      label: 'Twitter',
      link: 'https://x.com/BorishNingomba4',
      color: 'hover:text-sky-400',
    },
  ];

  return (
    <section id="contact" className="py-20 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full shadow-lg shadow-cyan-400/30 mb-6"></div>
          <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
            Ready to bring your next project to life? Let&apos;s discuss how we can work together to
            create something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Section */}
          {/* Contact Info - Updated for mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div
                  className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${item.color} shadow-lg mb-3 sm:mb-0 sm:mr-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-white/70 text-xs sm:text-sm font-light">{item.label}</p>
                  <p className="text-white font-semibold text-sm sm:text-base md:text-lg break-words">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
            
            {/* ... rest of the contact info ... */}
          </motion.div>

          {/* Contact Form */}
          {/* Contact Form - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="p-4 sm:p-6 md:p-8 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl space-y-4 sm:space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Form inputs with responsive padding */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Your name"
                  />
                </motion.div>
                {/* ... other form fields ... */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Your email"
                  />
                </motion.div>
              </div>
              
              {/* Message textarea */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={status === 'Sending...'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 sm:py-4 px-6 text-sm sm:text-base rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-2xl hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
              >
                {/* Button content */}
                {status === 'Sending...' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <FiSend className="text-xl" />
                    {status || 'Send Message'}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;