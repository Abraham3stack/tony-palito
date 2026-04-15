"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  bgPattern?: boolean;
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  bgPattern = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-24 px-6 md:px-12 ${bgPattern ? "bg-grid bg-radial" : ""} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 font-outfit">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}