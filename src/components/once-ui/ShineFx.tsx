"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const ShineFx = ({ children, variant = "heading-default-xl" }: { children: ReactNode, variant?: string }) => {
  return (
    <div className="relative inline-flex overflow-hidden">
      <motion.span
        initial={{ backgroundPosition: "-200% 0" }}
        animate={{ backgroundPosition: "200% 0" }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        style={{
          backgroundImage: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
          backgroundSize: "50% 100%",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 z-10 pointer-events-none"
      />
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text">
        {children}
      </h1>
    </div>
  );
};