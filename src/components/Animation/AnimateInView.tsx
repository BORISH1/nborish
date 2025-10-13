// components/Animation/AnimateInView.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay: 0.1 
    }
  },
};

type AnimateInViewProps = {
  children: React.ReactNode;
  className?: string;
};

const AnimateInView: React.FC<AnimateInViewProps> = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible
    >
      {children}
    </motion.div>
  );
};

export default AnimateInView;