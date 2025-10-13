// components/Sections/Hero.tsx
'use client'; 

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; 
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.5 } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 10 }
  },
};

const Hero = () => {
  return (
    // Hero section with full transparency to show water background
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center text-white relative z-10 p-4 md:p-8 bg-transparent">
      
      {/* Left Content Area */}
      <div className="flex-1 text-center md:text-left md:mr-8 max-w-2xl mt-16 md:mt-0 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-white">
            Ningombam Borish Singh
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-semibold mb-6 text-cyan-300 relative inline-block">
            Full Stack Developer
            <span className="absolute left-0 bottom-0 h-[3px] bg-cyan-300 w-full"></span> 
          </motion.h2>

          <motion.p variants={itemVariants} className="text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0 font-light">
            Crafting seamless digital experiences with modern web technologies. Let's build something amazing together!
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34, 211, 238, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block py-3 px-8 text-lg font-semibold rounded-full bg-cyan-400 text-white shadow-lg hover:bg-cyan-300 transition duration-300 backdrop-blur-sm border border-cyan-400/30"
            >
              Hire Me
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block py-3 px-8 text-lg font-semibold rounded-full border border-white/50 text-white shadow-lg hover:bg-white/10 transition duration-300 backdrop-blur-sm"
            >
              Let's Talk
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex justify-center md:justify-start gap-6 mt-8">
            <motion.a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.2, color: "#3b82f6" }}
              className="text-white/70 hover:text-blue-400 transition-colors duration-300 text-3xl backdrop-blur-sm p-2 rounded-full"
            >
              <FaFacebookF />
            </motion.a>
            <motion.a 
              href="https://x.com/BorishNingomba4" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.2, color: "#1da1f2" }}
              className="text-white/70 hover:text-sky-400 transition-colors duration-300 text-3xl backdrop-blur-sm p-2 rounded-full"
            >
              <FaTwitter />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/ningombam-borish-singh-70b34a273/" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.2, color: "#0a66c2" }}
              className="text-white/70 hover:text-blue-500 transition-colors duration-300 text-3xl backdrop-blur-sm p-2 rounded-full"
            >
              <FaLinkedinIn />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Image Area - Enhanced for transparent background */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1, type: 'spring', stiffness: 50 }}
        className="relative w-full md:w-1/2 flex justify-center items-center p-4 md:p-0"
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] flex justify-center items-center">
          {/* Glow effect behind image */}
          <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-2xl scale-110 animate-pulse"></div>
          
          {/* Image container with glass effect */}
          <div className="relative w-full h-full rounded-full border-2 border-cyan-400/30 backdrop-blur-sm bg-white/5 p-2">
            <Image
              src="/profile-dark.jpg" 
              alt="Jacob Aiden"
              fill
              className="rounded-full object-cover opacity-90"
              priority 
            />
          </div>
          
          {/* Floating animation elements */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400/30 rounded-full backdrop-blur-sm"
          />
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -bottom-6 -left-6 w-6 h-6 bg-blue-400/30 rounded-full backdrop-blur-sm"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;