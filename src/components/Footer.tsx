"use client";

import React from "react";
import { Trophy } from "lucide-react";
import { heroData } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
          <div className="p-2 bg-accent/20 rounded-lg">
            <Trophy size={20} className="text-accent" />
          </div>
          <div className="flex flex-col text-center md:text-left">
            <span className="text-text-primary font-semibold font-outfit">
              {heroData.name}
            </span>
            <span className="text-xs text-text-muted">
              Elite Youth Football Coach
            </span>
          </div>
        </div>

        {/* Center Copyright */}
        <div className="text-text-muted text-sm">
          © {currentYear} {heroData.name}. All rights reserved.
        </div>

        {/* Right Builder Credit */}
        <div className="text-sm">
          <a
            href="https://portfolio-2-azure-delta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline font-medium"
          >
            Built by Abraham
          </a>
        </div>
      </div>
    </footer>
  );
}