// components/Sections/Skills.tsx
'use client';

import { motion } from 'framer-motion';

// Define TypeScript interfaces
interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const skillsCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    icon: "⚡",
    skills: [
      { name: "React", level: 95, color: "from-cyan-400 to-blue-500" },
      { name: "Next.js", level: 90, color: "from-white to-gray-300" },
      { name: "TypeScript", level: 88, color: "from-blue-400 to-blue-600" },
      { name: "JavaScript", level: 92, color: "from-yellow-400 to-yellow-600" },
      { name: "HTML5", level: 96, color: "from-orange-400 to-red-500" },
      { name: "CSS3", level: 94, color: "from-blue-400 to-purple-500" },
      { name: "Tailwind CSS", level: 93, color: "from-cyan-400 to-blue-500" },
      { name: "Framer Motion", level: 88, color: "from-pink-400 to-purple-500" }
    ]
  },
  {
    category: "Backend & Databases",
    icon: "🔧",
    skills: [
      { name: "Node.js", level: 82, color: "from-green-400 to-green-600" },
      { name: "Express.js", level: 80, color: "from-gray-400 to-gray-600" },
      { name: "PostgreSQL", level: 75, color: "from-blue-400 to-blue-700" },
      { name: "REST APIs", level: 88, color: "from-indigo-400 to-purple-500" }
    ]
  },
  {
    category: "Tools & Methodologies",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 90, color: "from-orange-400 to-red-500" },
      { name: "VS Code", level: 95, color: "from-blue-400 to-blue-600" }
    ]
  }
];

const SkillBar = ({ skill, index }: SkillBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="space-y-2 group"
    >
      <div className="flex justify-between items-center">
        <span className="text-white font-medium text-sm md:text-base">{skill.name}</span>
        <span className="text-cyan-300 font-bold text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-3 backdrop-blur-sm">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, delay: 0.5 + index * 0.1, type: "spring" }}
          className={`h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
        >
          <motion.div
            animate={{ x: [-100, 100] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative z-10 bg-transparent">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full shadow-lg shadow-cyan-400/30"></div>
          <p className="text-xl md:text-2xl text-white/70 mt-6 font-light tracking-wide max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillsCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: catIndex * 0.2 }}
              className="p-8 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/10 group"
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {category.category}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    skill={skill} 
                    index={skillIndex} 
                  />
                ))}
              </div>

              {/* Decorative Element */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400/30 rounded-full backdrop-blur-sm"
              />
            </motion.div>
          ))}
        </div>

        {/* Overall Proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 p-8 rounded-3xl backdrop-blur-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20">
            <div className="text-center">
              <div className="text-4xl font-black text-cyan-300">0.5+</div>
              <div className="text-white/70 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-blue-300">5+</div>
              <div className="text-white/70 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-purple-300">7+</div>
              <div className="text-white/70 text-sm">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-green-300">3+</div>
              <div className="text-white/70 text-sm">Successful Deployement</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-white/70 text-lg mb-6 font-light">
            Interested in working together?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center py-4 px-8 text-lg font-semibold rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
          >
            Start a Project
          </motion.a>
        </motion.div>
    </section>
  );
};

export default Skills;