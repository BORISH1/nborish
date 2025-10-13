// components/Animation/AnimateInView.tsx
'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

export type AnimationType = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight';

interface AnimateInViewProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  amount?: number;
}

const getVariants = (
  animation: AnimationType = 'fadeUp', 
  delay: number = 0.1, 
  duration: number = 0.6
): Variants => {
  const baseVariants: Record<AnimationType, Variants> = {
    fadeUp: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 15,
          delay,
          duration
        }
      }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: 'easeOut'
        }
      }
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 15,
          delay,
          duration
        }
      }
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 15,
          delay,
          duration
        }
      }
    }
  };

  return baseVariants[animation];
};

const AnimateInView: React.FC<AnimateInViewProps> = ({ 
  children, 
  className,
  animation = 'fadeUp',
  delay = 0.1,
  duration = 0.6,
  amount = 0.2
}) => {
  const variants = getVariants(animation, delay, duration);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        amount 
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateInView;