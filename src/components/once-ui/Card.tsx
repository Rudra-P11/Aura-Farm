"use client";
import React, { ReactNode } from 'react';
import { Column } from './Flex';

interface CardProps {
  children: ReactNode;
  radius?: string;
  direction?: "column" | "row";
  border?: string;
  maxWidth?: number;
  padding?: string;
  href?: string;
}

export const Card = ({ children, radius = "l", direction = "column", maxWidth, padding = "0", href }: CardProps) => {
  const Component = href ? 'a' : 'div';
  return (
    <Component 
      href={href}
      className={`flex ${direction === 'column' ? 'flex-col' : 'flex-row'} border border-neutral-alpha-medium bg-neutral-alpha-weak overflow-hidden transition-all hover:border-brand-alpha-medium`}
      style={{ 
        borderRadius: `var(--radius-${radius})`,
        maxWidth: maxWidth ? `${maxWidth}rem` : '100%',
        padding: `${padding}px`
      }}
    >
      {children}
    </Component>
  );
};

export const Hover = ({ trigger, overlay }: { trigger: ReactNode; overlay: ReactNode }) => {
  return (
    <div className="relative group w-full">
      {trigger}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {overlay}
      </div>
    </div>
  );
};