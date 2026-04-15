"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Trophy } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { heroData } from "@/lib/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#achievements", label: "Achievements" },
  { href: "#certifications", label: "Certifications" },
  { href: "#gallery", label: "Gallery" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="p-2 bg-accent rounded-lg">
            <Trophy size={24} className="text-white" />
          </div>
          <span className="text-xl font-bold text-text-primary font-outfit">
            {heroData.name.split(" ")[0]}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const id = link.href.replace("#", "");
                scrollToSection(id);
              }}
              className="text-text-secondary hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" onClick={() => scrollToSection("contact")}>Book Session</Button>
        </div>

        <button
          className="md:hidden p-2 text-text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    const target = e.currentTarget.getAttribute("href");
                    setIsMobileMenuOpen(false);

                    // Delay scroll to allow menu to close first
                    setTimeout(() => {
                      if (target) {
                        const el = document.querySelector(target);
                        if (el) {
                          const yOffset = -80;
                          const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
                          window.scrollTo({ top: y, behavior: "smooth" });
                        }
                      }
                    }, 150);
                  }}
                  className="text-text-secondary hover:text-accent transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button 
                size="lg" 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => scrollToSection("contact"), 150);
                }}
                className="w-full"
              >
                Book Session
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}