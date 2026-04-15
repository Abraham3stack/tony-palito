"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Globe, Users } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { achievementsData } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Tournament: Trophy,
  International: Globe,
  Players: Users,
};

export function Achievements() {
  return (
    <Section
      id="achievements"
      title="Coaching Impact"
      subtitle="Proven results across international coaching environments"
      bgPattern
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievementsData.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="text-center py-10 hover:scale-[1.02] transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 border border-accent/20 mb-4 shadow-lg">
                {React.createElement(iconMap[item.label.split(" ")[0]] || Trophy, { size: 32, className: "text-accent" })}
              </div>
              <p className="text-4xl md:text-5xl font-bold text-text-primary mb-2 font-outfit">
                {item.value}
              </p>
              <p className="text-text-secondary">{item.label}</p>
              <p className="text-sm text-gray-400 mt-2">
                {item.label.includes("Tournament") && "Consistent winning performance in competitive environments"}
                {item.label.includes("International") && "Coaching experience across multiple countries"}
                {item.label.includes("Players") && "Developed players progressing to higher levels"}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}