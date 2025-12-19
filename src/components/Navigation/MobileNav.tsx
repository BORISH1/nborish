// components/Navigation/MobileNav.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiBriefcase, FiBook, FiMail } from 'react-icons/fi';

const navItems = [
  { label: 'Home', href: '#home', icon: FiHome },
  { label: 'About', href: '#about', icon: FiUser },
  { label: 'Skills', href: '#skills', icon: FiCode },
  { label: 'Projects', href: '#projects', icon: FiBriefcase },
  { label: 'Services', href: '#services', icon: FiBook },
  { label: 'Education', href: '#education', icon: FiBook },
  { label: 'Contact', href: '#contact', icon: FiMail },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-lg lg:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="absolute right-0 top-0 h-full w-64 bg-gray-900/95 backdrop-blur-lg border-l border-white/10 p-6"
            >
              <div className="flex flex-col gap-4 mt-16">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/10 transition-all duration-300"
                  >
                    <item.icon />
                    <span className="font-medium">{item.label}</span>
                  </a>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex justify-center gap-4">
                  {/* Add social icons */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 px-6 py-3 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 rounded-xl hover:bg-white/10 transition-all duration-300 text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default MobileNav;