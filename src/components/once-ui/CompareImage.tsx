"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const CompareImage = ({ leftContent, rightContent, aspectRatio = "16/9" }: any) => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ('touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX) - rect.left;
    setSliderPos(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  };

  return (
    <div 
      className="relative w-full overflow-hidden rounded-2xl border border-neutral-alpha-weak cursor-col-resize"
      style={{ aspectRatio }}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${rightContent.src})` }} />
      <motion.div 
        className="absolute inset-0 bg-cover bg-center border-r-2 border-brand-solid-strong"
        style={{ backgroundImage: `url(${leftContent.src})`, width: `${sliderPos}%` }}
      />
      <div className="absolute top-1/2 -translate-y-1/2 left-[calc(var(--pos)-10px)]" style={{ '--pos': `${sliderPos}%` } as any}>
         {/* Custom Handle UI could go here */}
      </div>
    </div>
  );
};