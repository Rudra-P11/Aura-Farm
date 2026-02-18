"use client";
import React from 'react';
import { Media } from './Media';

interface CarouselItem {
  slide: string;
  alt?: string;
}

export const Carousel = ({ items }: { items: CarouselItem[] }) => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x">
      {items.map((item, index) => (
        <div key={index} className="min-w-[80%] md:min-w-[60%] snap-center">
          <Media src={item.slide} alt={item.alt} radius="l" />
        </div>
      ))}
    </div>
  );
};