"use client";
import React from 'react';

interface FadeProps {
  fillWidth?: boolean;
  position?: "absolute" | "relative";
  top?: string;
  bottom?: string;
  to: "top" | "bottom";
  height: number;
  topRadius?: string;
  bottomRadius?: string;
  pattern?: { display: boolean; size: string };
}

export const Fade = ({ height, to, pattern, position, top, bottom, fillWidth }: FadeProps) => {
  const gradient = to === "bottom" 
    ? "linear-gradient(to bottom, var(--color-page-background), transparent)" 
    : "linear-gradient(to top, var(--color-page-background), transparent)";

  return (
    <div 
      className={`${position === 'absolute' ? 'absolute' : ''} ${fillWidth ? 'w-full' : ''} z-10 pointer-events-none`}
      style={{ 
        height: `${height}rem`, 
        top: top, 
        bottom: bottom,
        background: gradient,
      }}
    >
      {pattern?.display && (
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: `${pattern.size}px ${pattern.size}px`
          }}
        />
      )}
    </div>
  );
};