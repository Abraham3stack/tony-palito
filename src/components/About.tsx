"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { aboutData } from "@/lib/data";
import Image from "next/image";

export function About() {
  return (
    <Section id="about" title="About Me" subtitle="The journey behind the game">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group">
            <Image
              src="https://res.cloudinary.com/dwbfks5og/image/upload/q_auto/f_auto/v1776164938/att.6SsRjv2k_0dpZcoSW1bTtpcVQ-rlMUFrF2zEixpS_go_vcyjg4.jpg"
              alt="Coach Tony Portrait"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <p className="text-text-secondary text-lg leading-relaxed tracking-wide">
            {aboutData.bio}
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-white backdrop-blur">
            <span>Certified Coach</span>
            <span className="text-gray-400">•</span>
            <span>FIFA</span>
            <span className="text-gray-400">•</span>
            <span>FA England</span>
          </div>

          <div>
            <h3 className="text-xl font-bold text-text-primary mb-4 font-outfit">
              Coaching Philosophy
            </h3>
            <ul className="space-y-3">
              {aboutData.philosophy.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-text-secondary"
                >
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <Card hover={false} className="flex items-center gap-3">
              <Globe size={24} className="text-accent" />
              <div>
                <p className="text-text-primary font-bold text-xl font-outfit">3+</p>
                <p className="text-text-muted text-sm">International Experience</p>
              </div>
            </Card>
            <Card hover={false} className="flex items-center gap-3">
              <MapPin size={24} className="text-accent" />
              <div>
                <p className="text-text-primary font-bold text-xl font-outfit">5</p>
                <p className="text-text-muted text-sm">Tournament Wins</p>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}