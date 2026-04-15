"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      className={`glass rounded-xl p-6 ${hover ? "transition-all duration-300 hover:shadow-lg hover:shadow-accent/10" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}