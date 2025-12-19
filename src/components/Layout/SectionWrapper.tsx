// components/Layout/SectionWrapper.tsx
'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper = ({ children, className = '', id }: SectionWrapperProps) => {
  return (
    <section id={id} className={`py-12 sm:py-16 md:py-20 relative z-10 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;