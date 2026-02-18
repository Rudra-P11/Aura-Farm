"use client";
import React, { useState } from 'react';
import { Media } from './Media';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselItem {
  slide: string;
  alt?: string;
}

export const Carousel = ({ items }: { items: CarouselItem[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-neutral-alpha-weak group/carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <Media src={items[activeIndex].slide} alt={items[activeIndex].alt} radius="l" fillWidth />
        </motion.div>
      </AnimatePresence>

      {items.length > 1 && (
        <>
          <button 
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 transition-opacity"
          >
            ←
          </button>
          <button 
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 transition-opacity"
          >
            →
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
            {items.map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === activeIndex ? 'bg-white' : 'bg-white/30'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};