"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ShineFxProps {
  children: ReactNode;
  variant?: string;
}

export const ShineFx = ({ children }: ShineFxProps) => {
  return (
    <div className="relative inline-flex">
      <motion.h1
        initial={{ backgroundPosition: "-200% 0" }}
        animate={{ backgroundPosition: "200% 0" }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        style={{
          backgroundImage: "linear-gradient(90deg, #ffffff 0%, #a3a3a3 25%, #ffffff 50%, #a3a3a3 75%, #ffffff 100%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="text-5xl md:text-7xl font-bold tracking-tighter"
      >
        {children}
      </motion.h1>
    </div>
  );
};