// components/Sections/Projects.tsx
'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';

// Define TypeScript interfaces
interface Project {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  liveLink: string;
  image: string;
  stats: string[];
  color: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const projects: Project[] = [
  {
    title: "Rohini Store - used books sell and buy",
    description: "A full-featured e-commerce platform for buying and selling used books, built with html, css and javascript.",
    tags: ["Html", "Css", "JavaScript"],
    githubLink: "https://github.com/yourusername/project-one",
    liveLink: "https://demo-project-one.vercel.app",
    image: "/projects/ecommerce-platform.jpg",
    stats: ["60% Faster Load", "40% Better Conversion"],
    color: "from-cyan-400 to-blue-500"
  },
  {
    title: "SkilledLink - Local job connect",
    description: "Just a clone of LinkedIn with Next.js and Tailwind CSS",
    tags: ["Next.js", "Server Actions", "PostgreSQL", "Socket.io", "Real-time"],
    githubLink: "https://github.com/yourusername/project-two",
    liveLink: "https://miniproject-1dlo.vercel.app/",
    image: "/projects/chat-app.jpg",
    stats: ["Real-time Messaging", "End-to-End Encryption", "File Sharing"],
    color: "from-purple-400 to-pink-500"
  },
  {
    title: "Portfolio Site",
    description: "A statically generated blog and portfolio using Next.js and Markdown (MDX) for content management with optimized SEO and performance.",
    tags: ["Next.js", "SEO Optimization"],
    githubLink: "https://github.com/yourusername/this-project",
    liveLink: "https://nborish.vercel.app",
    image: "/projects/portfolio-blog.jpg",
    stats: ["SEO Score", "Instant Page Load", "MDX Support"],
    color: "from-green-400 to-cyan-500"
  },
];

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group relative rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/10 overflow-hidden"
    >
      {/* Background Gradient Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

      {/* Project Image/Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-20">💻</div>
        </div>
        {/* Stats Badge */}
        <div className="absolute top-4 right-4 z-20">
          <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
            <span className="text-white text-sm font-semibold">Project {index + 1}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 relative z-10">
        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-300 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-white/75 text-lg leading-relaxed mb-6 font-light tracking-wide">
          {project.description}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stats.map((stat: string, statIndex: number) => (
            <motion.span
              key={statIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: statIndex * 0.1 + index * 0.1 }}
              className="px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-semibold backdrop-blur-sm"
            >
              {stat}
            </motion.span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string, tagIndex: number) => (
            <motion.span
              key={tagIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: tagIndex * 0.1 + index * 0.1 }}
              className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium backdrop-blur-sm hover:bg-white/15 hover:border-white/30 transition-all duration-300"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, x: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white/80 hover:bg-white/15 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
          >
            <FiGithub className="text-lg" />
            <span className="text-sm font-semibold">Code</span>
          </motion.a>

          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, x: 2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group/btn"
          >
            <span className="text-sm">Live Demo</span>
            <FiExternalLink className="text-lg group-hover/btn:translate-x-0.5 transition-transform duration-300" />
          </motion.a>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-3 -right-3 w-6 h-6 bg-cyan-400/30 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full shadow-lg shadow-cyan-400/30 mb-6"></div>
          <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work building modern, performant web applications with cutting-edge technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 p-8 rounded-3xl backdrop-blur-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Want to see more?</h3>
              <p className="text-white/70 text-lg font-light">Explore my GitHub for more projects and contributions.</p>
            </div>
            <motion.a
              href="https://github.com/Borish1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 py-4 px-8 text-lg font-semibold rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 min-w-[200px] group/cta"
            >
              <FiGithub className="text-xl" />
              View GitHub
              <FiArrowRight className="text-xl group-hover/cta:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;