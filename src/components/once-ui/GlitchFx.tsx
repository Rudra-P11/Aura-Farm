"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface GlitchFxProps {
  children: React.ReactNode;
  speed?: "slow" | "medium" | "fast";
  interval?: number;
  className?: string;
}

export const GlitchFx = ({ children, speed = "medium", interval = 3000, className }: GlitchFxProps) => {
  const speedMap = {
    slow: 0.5,
    medium: 0.1,
    fast: 0.05
  };

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      {/* Base Layer */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Glitch Layers (Visible on Hover or Interval) */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 mix-blend-screen"
        animate={{ 
          x: [-2, 2, -2], 
          opacity: [0, 0.8, 0],
          clipPath: [
            "inset(10% 0 80% 0)", 
            "inset(80% 0 10% 0)", 
            "inset(40% 0 40% 0)"
          ] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: speedMap[speed], 
          repeatDelay: Math.random() * 2 
        }}
        style={{ left: "-2px", color: "red", background: "rgba(255,0,0,0.1)" }}
      >
        {children}
      </motion.div>

      <motion.div 
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 mix-blend-screen"
        animate={{ 
          x: [2, -2, 2], 
          opacity: [0, 0.8, 0],
          clipPath: [
            "inset(80% 0 10% 0)", 
            "inset(10% 0 80% 0)", 
            "inset(40% 0 50% 0)"
          ] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: speedMap[speed], 
          repeatDelay: Math.random() * 2 
        }}
        style={{ left: "2px", color: "cyan", background: "rgba(0,255,255,0.1)" }}
      >
        {children}
      </motion.div>
    </div>
  );
};