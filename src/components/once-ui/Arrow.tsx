"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface ArrowProps {
  trigger: string;
  color?: "onBackground" | "onSolid";
  scale?: number;
}

export const Arrow = ({ trigger, color = "onBackground", scale = 1 }: ArrowProps) => {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ scale }}
      className={color === "onBackground" ? "text-neutral-strong" : "text-page-background"}
      initial={{ x: 0 }}
      whileHover={{ x: 5 }}
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </motion.svg>
  );
};