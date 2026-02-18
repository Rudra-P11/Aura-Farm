"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ShineFxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export const ShineFx = ({ children, speed = 3, className }: ShineFxProps) => {
  return (
    <div className={`relative inline-flex ${className}`}>
      <motion.span
        initial={{ backgroundPosition: "-200% 0" }}
        animate={{ backgroundPosition: "200% 0" }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
        style={{
          backgroundImage: "linear-gradient(90deg, #ffffff 0%, #a3a3a3 25%, #ffffff 50%, #a3a3a3 75%, #ffffff 100%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="font-bold"
      >
        {children}
      </motion.span>
    </div>
  );
};