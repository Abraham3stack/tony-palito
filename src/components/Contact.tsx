"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { contactData } from "@/lib/data";

export function Contact() {
  return (
    <Section 
      id="contact" 
      title="Start Your Development Journey" 
      subtitle="Train with purpose. Improve with structure. Reach your full potential." 
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-text-secondary text-lg mb-8">
          Take the next step in your football journey. Get in touch to begin structured, high-level coaching designed to elevate your performance.
        </p>
        <p className="text-sm text-accent mb-6 font-medium">
          Limited slots available per training cycle.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a href={`${contactData.whatsapp}?text=Hi%20Coach%2C%20I%20want%20to%20join%20your%20program`} target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              <MessageCircle size={20} className="mr-2" />
              Message on WhatsApp
            </Button>
          </a>
          <a href={`mailto:${contactData.email}`}>
            <Button size="lg" variant="secondary">
              <Mail size={20} className="mr-2" />
              Email Me
            </Button>
          </a>
        </div>
        <p className="text-xs text-text-secondary mt-6">
          Trusted by players across multiple academies
        </p>

        <div className="flex justify-center mt-3 gap-4">
          <a
            href={contactData.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full text-text-secondary hover:text-accent hover:bg-accent/10 transition-all hover:scale-110"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href={contactData.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full text-text-secondary hover:text-accent hover:bg-accent/10 transition-all hover:scale-110"
          >
            <FaYoutube size={22} />
          </a>
          <a
            href={contactData.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full text-text-secondary hover:text-accent hover:bg-accent/10 transition-all hover:scale-110"
          >
            <FaFacebook size={22} />
          </a>
        </div>
      </motion.div>
    </Section>
  );
}