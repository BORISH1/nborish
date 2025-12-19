// components/Sections/Hero.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaTwitter, FaLinkedinIn, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const resumePath = "/assets/NingombamBorishSingh.pdf";

  return (
    <section id="home" className="min-h-screen flex flex-col lg:flex-row items-center justify-center relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 pt-16 lg:pt-0">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center lg:text-left lg:pr-8 xl:pr-12 max-w-3xl mx-auto lg:mx-0"
      >
        {/* Name - Split into two lines like in the image */}
        <div className="mb-4 lg:mb-6 pt-9 lg:pt-20"> {/* Added pt-8 lg:pt-12 to push down */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight">
            Ningombam
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
            Borish Singh
          </h1>
        </div>

        {/* Full Stack Developer Badge - MOVED BELOW NAME */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-cyan-500/20 border border-cyan-400/30 mb-6 lg:mb-8 group hover:bg-cyan-500/30 transition-all duration-300"
        >
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse group-hover:animate-none group-hover:scale-110 transition-transform duration-300"></div>
          <span className="text-cyan-300 text-base lg:text-lg font-semibold tracking-wide">
            Full Stack Developer
          </span>
        </motion.div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 mb-6 lg:mb-8 leading-relaxed font-light max-w-2xl">
          Crafting seamless digital experiences with modern web technologies
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-white/60 mb-8 lg:mb-10 max-w-2xl leading-relaxed">
          Passionate about building intuitive, high-performance web applications. 
          I specialize in React, Next.js, and modern full-stack development.
        </p>

        {/* Separator Line */}
        <div className="hidden lg:block w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-8 lg:mb-10"></div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mb-8 lg:mb-10">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center py-4 px-8 lg:py-5 lg:px-10 text-base lg:text-lg font-semibold rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300"
          >
            Get In Touch
          </motion.a>

          <motion.a
            href={resumePath}
            download
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-3 py-4 px-8 lg:py-5 lg:px-10 text-base lg:text-lg font-semibold rounded-2xl border-2 border-white/30 text-white backdrop-blur-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            <FaDownload className="text-lg" />
            <span>Resume</span>
          </motion.a>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center lg:justify-start gap-4 lg:gap-6 mt-8 lg:mt-10"
        >
          {[
            { 
              icon: FaGithub, 
              link: 'https://github.com/Borish1', 
              color: 'hover:text-gray-300',
              label: 'GitHub'
            },
            { 
              icon: FaTwitter, 
              link: 'https://x.com/BorishNingomba4', 
              color: 'hover:text-sky-400',
              label: 'Twitter'
            },
            { 
              icon: FaLinkedinIn, 
              link: 'https://www.linkedin.com/in/ningombam-borish-singh-70b34a273/', 
              color: 'hover:text-blue-400',
              label: 'LinkedIn'
            }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative p-3 lg:p-4 rounded-2xl bg-white/10 border border-white/20 text-white/70 ${social.color} transition-all duration-300 backdrop-blur-lg hover:bg-white/15 hover:border-white/30`}
              aria-label={social.label}
            >
              <social.icon className="text-xl lg:text-2xl" />
              {/* Tooltip for desktop */}
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-xs font-medium text-white bg-gray-900/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap backdrop-blur-sm">
                {social.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex-1 flex justify-center items-center mt-12 lg:mt-0 lg:pl-8"
      >
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px]">
          {/* Outer Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse opacity-70"></div>
          
          {/* Decorative Rings */}
          <div className="absolute inset-[-20px] rounded-full border-2 border-cyan-400/10 animate-spin-slow"></div>
          <div className="absolute inset-[-40px] rounded-full border-2 border-blue-400/10 animate-spin-slow-reverse"></div>
          
          {/* Image Container */}
          <div className="relative w-full h-full rounded-full border-4 lg:border-6 border-cyan-400/30 p-3 lg:p-4 backdrop-blur-xl bg-gradient-to-br from-white/5 to-cyan-500/5">
            <Image
              src="/profile-dark.jpg"
              alt="Ningombam Borish Singh"
              fill
              className="rounded-full object-cover shadow-2xl"
              priority
              sizes="(max-width: 768px) 288px, (max-width: 1024px) 384px, 500px"
            />
          </div>

          {/* Floating Elements */}
          {[
            { position: '-top-6 -right-6', size: 'w-12 h-12 lg:w-14 lg:h-14', delay: 0 },
            { position: '-bottom-8 -left-8', size: 'w-10 h-10 lg:w-12 lg:h-12', delay: 1 },
            { position: 'top-1/3 -left-10', size: 'w-8 h-8 lg:w-10 lg:h-10', delay: 2 }
          ].map((element, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -20, 0],
                x: index % 2 === 0 ? [0, 15, 0] : [0, -15, 0],
                rotate: [0, 360, 0]
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: element.delay
              }}
              className={`absolute ${element.position} ${element.size} rounded-full bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 backdrop-blur-xl border border-white/20`}
            />
          ))}

          {/* Decorative Text */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-10 rounded-full border-2 border-dashed border-cyan-400/10"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
              <span className="text-cyan-400/20 text-xs font-bold tracking-widest uppercase">
                • Full Stack Developer • Web Developer • 
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;