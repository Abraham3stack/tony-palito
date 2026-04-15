"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { heroData } from "@/lib/data";
import Image from "next/image";

export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroData.image || "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&h=1080&fit=crop"}
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-accent font-semibold tracking-widest uppercase mb-4 text-sm">
            Professional Football Coach
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-outfit leading-tight">
            {heroData.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4 font-outfit">
            {heroData.title}
          </p>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            {heroData.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-white hover:opacity-90"
              onClick={() => scrollToSection("about")}
            >
              {heroData.ctaPrimary}
            </Button>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="secondary"
                className="border border-white/20 backdrop-blur"
              >
                {heroData.ctaSecondary || "View Full Profile"}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
          className="flex flex-col items-center text-text-muted hover:text-accent transition-colors"
        >
          <span className="text-xs tracking-wider uppercase mb-2">Scroll</span>
          <ChevronDown size={24} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}