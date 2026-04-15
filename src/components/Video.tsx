"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Section } from "@/components/ui/Section";

export function Video() {
  const videoUrl = "https://res.cloudinary.com/dwbfks5og/video/upload/q_auto/f_auto/v1776247760/copy_3E8BA441-6DF8-4716-B4F0-DEAB6DC123A9_u85kqi.mov";
  
  const thumbnail = "https://res.cloudinary.com/dwbfks5og/image/upload/q_auto/f_auto/v1776248112/photo-output_3_z9bfdu.jpg";

  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <Section id="video" title="Video Content" subtitle="Training tips and tutorials">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div
          className="relative aspect-video rounded-2xl overflow-hidden bg-bg-secondary group cursor-pointer bg-cover bg-center"
          style={!isPlaying && thumbnail ? { backgroundImage: `url(${thumbnail})` } : {}}
        >
          {videoUrl && isPlaying ? (
            <>
              <video
                src={videoUrl}
                controls
                autoPlay
                onLoadedData={() => setIsLoading(false)}
                onCanPlay={() => setIsLoading(false)}
                className="w-full h-full object-cover"
              />
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                  <div className="w-12 h-12 border-4 border-accent/30 border-t-accent rounded-full animate-spin shadow-lg" />
                </div>
              )}
            </>
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
              onClick={() => {
                if (videoUrl) {
                  setIsLoading(true);
                  setIsPlaying(true);
                }
              }}
            >
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                  <Play size={40} className="text-accent ml-1" />
                </div>
                <p className="text-text-secondary">
                  {videoUrl ? "Click to play introduction video" : "Video coming soon"}
                </p>
                <p className="text-text-muted text-sm mt-2">
                  {videoUrl ? "Watch coaching highlights" : "Awaiting upload"}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 text-center">
          <h3 className="text-xl font-bold text-text-primary mb-2 font-outfit">
            Developing Elite Youth Players
          </h3>
          <p className="text-text-secondary">
            Get an inside look at my training methodology and philosophy
          </p>
        </div>
      </motion.div>
    </Section>
  );
}