"use client";
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  radius?: string;
  className?: string;
}

export const Card = ({ children, radius = "xl", className }: CardProps) => {
  return (
    <div 
      className={`
        relative flex flex-col
        bg-white/5 backdrop-blur-sm
        border border-white/10
        transition-all duration-300 ease-in-out
        hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl
        group overflow-hidden
        ${className}
      `}
      style={{ 
        borderRadius: `var(--radius-${radius})`,
      }}
    >
      {children}
    </div>
  );
};