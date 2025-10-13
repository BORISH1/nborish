// components/Animation/WaterBall.tsx
'use client';

import { useEffect, useRef } from 'react';

interface WaterBallProps {
  size: string;
  positionClasses: string;
  animationDelay: number;
  color?: string;
  intensity?: 'low' | 'medium' | 'high';
}

const WaterBall = ({ 
  size, 
  positionClasses, 
  animationDelay, 
  color = "from-blue-400 via-cyan-300 to-teal-200",
  intensity = "medium"
}: WaterBallProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const getIntensityValues = () => {
      switch (intensity) {
        case 'high':
          return { waves: 8, speed: 0.02, amplitude: 25 };
        case 'medium':
          return { waves: 6, speed: 0.015, amplitude: 20 };
        case 'low':
          return { waves: 4, speed: 0.01, amplitude: 15 };
        default:
          return { waves: 6, speed: 0.015, amplitude: 20 };
      }
    };

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const { waves, speed, amplitude } = getIntensityValues();

    let time = animationDelay;
    let animationId: number;

    const animate = () => {
      time += speed;
      
      // Clear canvas with slight transparency for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);
      
      // Create gradient
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) / 2
      );
      
      // Dynamic gradient based on time for color shifting
      const hueShift = Math.sin(time * 0.5) * 10;
      
      // Apply gradient colors based on prop
      if (color.includes('blue') && color.includes('cyan')) {
        gradient.addColorStop(0, `hsl(${210 + hueShift}, 80%, 60%)`);
        gradient.addColorStop(0.5, `hsl(${180 + hueShift}, 70%, 50%)`);
        gradient.addColorStop(1, `hsl(${160 + hueShift}, 60%, 40%)`);
      } else if (color.includes('purple')) {
        gradient.addColorStop(0, `hsl(${270 + hueShift}, 70%, 60%)`);
        gradient.addColorStop(0.5, `hsl(${240 + hueShift}, 65%, 55%)`);
        gradient.addColorStop(1, `hsl(${220 + hueShift}, 60%, 45%)`);
      } else if (color.includes('teal')) {
        gradient.addColorStop(0, `hsl(${180 + hueShift}, 75%, 55%)`);
        gradient.addColorStop(0.5, `hsl(${160 + hueShift}, 70%, 50%)`);
        gradient.addColorStop(1, `hsl(${140 + hueShift}, 65%, 45%)`);
      } else {
        // Default blue gradient
        gradient.addColorStop(0, `hsl(${200 + hueShift}, 80%, 60%)`);
        gradient.addColorStop(0.5, `hsl(${180 + hueShift}, 75%, 55%)`);
        gradient.addColorStop(1, `hsl(${160 + hueShift}, 70%, 50%)`);
      }

      ctx.fillStyle = gradient;
      
      // Draw animated water ball with wave effect
      ctx.beginPath();
      
      for (let i = 0; i <= width; i++) {
        const x = i;
        const y = height / 2 + Math.sin(i * waves / width + time) * amplitude * 
                   Math.sin(time * 0.3) + 
                   Math.cos(i * 3 / width + time * 1.5) * amplitude * 0.3;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      // Close the path to create a filled shape
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fill();

      // Add bubble effects
      for (let i = 0; i < 3; i++) {
        const bubbleX = (width / 2) + Math.cos(time * 2 + i) * (width / 3);
        const bubbleY = (height / 2) + Math.sin(time * 1.5 + i) * (height / 3);
        const bubbleSize = 2 + Math.sin(time * 3 + i) * 1.5;
        
        ctx.beginPath();
        ctx.arc(bubbleX, bubbleY, bubbleSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + Math.sin(time * 2 + i) * 0.2})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    // Start animation after delay
    const startTimeout = setTimeout(() => {
      animate();
    }, animationDelay * 200);

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(animationId);
    };
  }, [animationDelay, color, intensity]); // Now all dependencies are properly included

  return (
    <div className={`absolute ${size} ${positionClasses}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full rounded-full opacity-80"
        style={{
          filter: `blur(${intensity === 'high' ? '12px' : intensity === 'medium' ? '8px' : '6px'})`,
          mixBlendMode: 'screen'
        }}
      />
      {/* Additional glow effect */}
      <div 
        className={`absolute inset-0 rounded-full blur-xl opacity-30 ${color.replace(/from|via|to/g, 'bg')}`}
        style={{
          animation: `pulse ${4 + animationDelay * 0.5}s ease-in-out infinite alternate`
        }}
      />
    </div>
  );
};

export default WaterBall;