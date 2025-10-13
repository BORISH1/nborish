// components/Sections/Services.tsx
'use client';

import { motion } from 'framer-motion';

// Define TypeScript interfaces
interface Service {
  title: string;
  icon: string;
  description: string;
  features: string[];
  color: string;
  delay: number;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

const servicesList: Service[] = [
  { 
    title: "Custom Web Development", 
    icon: "💻", 
    description: "Building bespoke, scalable, and high-performance websites from scratch using modern frameworks.",
    features: ["React/Next.js", "TypeScript", "Responsive Design", "API Integration"],
    color: "from-cyan-400 to-blue-500",
    delay: 0.1
  },
  { 
    title: "E-commerce Solutions", 
    icon: "🛒", 
    description: "Developing robust e-commerce platforms with seamless payment and inventory management.",
    features: ["Payment Integration", "Inventory Management", "User Dashboard", "Security"],
    color: "from-purple-400 to-pink-500",
    delay: 0.2
  },
  { 
    title: "Performance & SEO", 
    icon: "⚡", 
    description: "Optimizing sites for speed, responsiveness, and search engine visibility to maximize reach.",
    features: ["Speed Optimization", "SEO Audit", "Core Web Vitals", "Analytics"],
    color: "from-green-400 to-cyan-500",
    delay: 0.3
  },
  { 
    title: "API Integration", 
    icon: "🔗", 
    description: "Connecting third-party services and APIs to enhance functionality and user experience.",
    features: ["RESTful APIs"],
    color: "from-orange-400 to-red-500",
    delay: 0.4
  },
];

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.6, delay: service.delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="group relative p-8 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/10"
    >
      {/* Background Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
      
      {/* Animated Border */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
        <div className="absolute inset-[2px] rounded-3xl bg-gray-900/95 backdrop-blur-lg"></div>
      </div>

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300"
      >
        {service.icon}
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center leading-tight">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-white/75 text-lg leading-relaxed mb-6 text-center font-light tracking-wide">
          {service.description}
        </p>

        {/* Features List */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-lg text-center">Includes:</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {service.features.map((feature: string, featureIndex: number) => (
              <motion.span
                key={featureIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: featureIndex * 0.1 + service.delay }}
                className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium backdrop-blur-sm hover:bg-white/15 hover:border-white/30 transition-all duration-300"
              >
                {feature}
              </motion.span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 text-center"
        >
          <button className={`px-6 py-3 rounded-2xl bg-gradient-to-r ${service.color} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/20`}>
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-3 -right-3 w-6 h-6 bg-cyan-400/30 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400/30 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            My Services
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full shadow-lg shadow-cyan-400/30 mb-6"></div>
          <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development services tailored to bring your digital vision to life with cutting-edge technology and innovative solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl backdrop-blur-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to start your project?</h3>
              <p className="text-white/70 text-lg font-light">Let&apos;s discuss how I can help bring your ideas to life.</p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center py-4 px-8 text-lg font-semibold rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 min-w-[200px]"
            >
              Get Started Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;