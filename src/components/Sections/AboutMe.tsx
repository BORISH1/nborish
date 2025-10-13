// components/Sections/AboutMe.tsx
'use client';

import AnimateInView from '../Animation/AnimateInView';
import { motion } from 'framer-motion';

const AboutMe = () => {
  // Define the path to your PDF in the public folder
  const resumePath = "/assets/NingombamBorishSingh.pdf"; 

  return (
    <section id="about" className="py-20 relative z-10 bg-transparent">
      <AnimateInView className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full shadow-lg shadow-cyan-400/30"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Hello! I'm <span className="text-cyan-300">Ningombam Borish Singh</span>
              </h3>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-normal tracking-wide">
                A passionate <span className="text-cyan-300 font-semibold">Full Stack Developer</span> with a focus on creating intuitive, high-performance user experiences. My expertise lies in building dynamic web applications with modern frameworks.
              </p>
              <p className="text-lg md:text-xl text-white/75 leading-relaxed font-normal tracking-wide">
                With <span className="text-blue-300 font-semibold">0.5+ years</span> in the industry, I thrive on bringing complex designs to life and optimizing web performance. I constantly explore new technologies to deliver cutting-edge solutions.
              </p>
            </div>

            {/* Approach */}
            <div className="space-y-6">
              <h4 className="text-2xl md:text-3xl font-bold text-white">
                My <span className="text-cyan-300">Approach</span>
              </h4>
              <ul className="space-y-4">
                {[
                  "Building clean, maintainable, and scalable code",
                  "Ensuring responsive design for all devices",
                  "Prioritizing user experience and accessibility",
                  "Collaborating closely with design and backend teams",
                  "Staying updated with latest technologies",
                  "Writing tested and documented code"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-3 text-white/80 text-lg font-normal"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0 shadow-sm shadow-cyan-400/50"></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Stats & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "0.5+", label: "Years Experience", color: "from-cyan-400 to-blue-500" },
                { number: "5+", label: "Projects Completed", color: "from-blue-400 to-purple-500" },
                { number: "3+", label: "Successful Deployments", color: "from-purple-400 to-pink-500" },
                { number: "7+", label: "Technologies", color: "from-green-400 to-cyan-500" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm font-medium tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technologies */}
            <div className="space-y-6">
              <h4 className="text-2xl md:text-3xl font-bold text-white text-center">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "React", "TypeScript", "Next.js", "Tailwind", 
                  "Vue", "Node.js", "Html", "Framer Motion"
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium backdrop-blur-sm hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-center p-6 rounded-2xl backdrop-blur-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20"
            >
              <p className="text-lg italic text-white/80 font-light leading-relaxed">
                "Turning complex problems into simple, beautiful designs"
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href={resumePath} // Use the defined path
              download="NingombamBorishSingh.pdf" // Triggers the download with this file name
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center py-4 px-8 text-lg font-semibold rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center py-4 px-8 text-lg font-semibold rounded-2xl border-2 border-white/30 text-white backdrop-blur-lg hover:bg-white/10 transition-all duration-300"
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>
      </AnimateInView>
    </section>
  );
};

export default AboutMe;