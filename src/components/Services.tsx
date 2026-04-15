"use client";

import React from "react";
import { motion } from "framer-motion";
import { Baby, TrendingUp, User, Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { servicesData } from "@/lib/data";

const iconMap: React.ElementType[] = [Baby, TrendingUp, User];

export function Services() {
  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (!el) return;
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <Section
      id="services"
      title="Coaching Programs"
      subtitle="Structured pathways designed to develop elite youth footballers."
      bgPattern
    >
      <div className="grid md:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              className={`h-full flex flex-col transition-transform duration-300 hover:-translate-y-2 ${
                index === 1
                  ? "border border-accent/40 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                  : ""
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  {React.createElement(iconMap[index] || User, { size: 28, className: "text-accent" })}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary font-outfit">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="mb-6 flex-grow space-y-4">
                <p className="text-text-secondary">
                  {service.description}
                </p>

                {service.for && (
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-accent">
                      Who this is for
                    </p>
                    <ul className="space-y-1">
                      {service.for.map((item: string, i: number) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                          <Check size={16} className="text-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <Button
                variant="secondary"
                className="w-full"
                onClick={handleScrollToContact}
              >
                Apply Now
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}