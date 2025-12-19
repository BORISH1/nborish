// components/Sections/Education.tsx
'use client';

import { motion } from 'framer-motion';

const educationHistory = [
  {
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "Rohini College of Engineering and Technology, Tamil Nadu, India",
    year: "2023 - Present",
    description: "Focused on object-oriented programming, data structures, and algorithms.",
    gpa: "8.68/10.0",
    highlights: ["Web Technologies", "Human-Computer Interaction", "Performance Optimization", "Database Management"]
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Comprehensive Concept School, Imphal, India",
    year: "2021 - 2023",
    description: "Specialized in Science stream with a focus on Physics, Chemistry, and Mathematics.",
    gpa: "3.8/4.0",
    highlights: ["Physics", "Chemistry", "Mathematics", "Biology"]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative z-10 bg-transparent">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full shadow-lg shadow-cyan-400/30"></div>
          <p className="text-xl md:text-2xl text-white/70 mt-6 font-light tracking-wide max-w-2xl mx-auto">
            Academic journey that shaped my technical expertise and problem-solving skills
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/50 to-blue-500/50 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-16">
            {educationHistory.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Year Badge */}
                <div className="flex-shrink-0 w-full md:w-2/5 mb-6 md:mb-0">
                  <div className={`flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <div className="inline-flex items-center px-6 py-3 rounded-2xl backdrop-blur-lg bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 shadow-lg">
                      <span className="text-cyan-300 text-lg md:text-xl font-bold tracking-wide">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-white/10 shadow-lg z-10"></div>

                {/* Education Card */}
                <div className="flex-grow w-full md:w-3/5">
                  <div className="p-8 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/10">
                    {/* Degree & Institution */}
                    <div className="space-y-4 mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-xl md:text-2xl font-semibold text-cyan-300">
                        {edu.institution}
                      </p>
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30">
                        <span className="text-cyan-300 text-sm font-semibold">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-white/75 leading-relaxed mb-6 font-normal tracking-wide">
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold text-lg">Key Focus Areas:</h4>
                      <div className="flex flex-wrap gap-3">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <motion.span
                            key={highlightIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: highlightIndex * 0.1 }}
                            className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium backdrop-blur-sm hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                          >
                            {highlight}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
                      <div className="flex items-center space-x-2 text-cyan-400/60">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">Completed</span>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg"
                      >
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-4 rounded-2xl backdrop-blur-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse mr-3"></div>
            <p className="text-white/80 text-lg font-light">
              Continuously learning and adapting to new technologies and methodologies
            </p>
          </div>
        </motion.div>
    </section>
  );
};

export default Education;