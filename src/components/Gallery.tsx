"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Expand } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { galleryImages } from "@/lib/data";

export function Gallery() {
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const previewImages = galleryImages.slice(0, 10);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activeIndex === null) return;

      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev! + 1) % galleryImages.length);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev! === 0 ? galleryImages.length - 1 : prev! - 1
        );
      } else if (e.key === "Escape") {
        setActiveIndex(null);
      }
    },
    [activeIndex]
  );

  useEffect(() => {
    if (activeIndex !== null) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [activeIndex, handleKeyDown]);

  useEffect(() => {
    if (activeIndex !== null) {
      const img = new window.Image();
      img.src = galleryImages[(activeIndex + 1) % galleryImages.length].image;
    }
  }, [activeIndex]);

  return (
    <>
      <Section
        id="gallery"
        title="Gallery"
        subtitle="Moments from the training ground"
        bgPattern
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {previewImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setGalleryModalOpen(true)}
            >
              <Image
                src={item.image}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                  <Expand size={24} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button onClick={() => setGalleryModalOpen(true)} size="lg">
            View Full Gallery
          </Button>
        </motion.div>
      </Section>

      <Modal
        isOpen={galleryModalOpen}
        onClose={() => setGalleryModalOpen(false)}
        title="Gallery"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
              onClick={() => {
                setGalleryModalOpen(false);
                setTimeout(() => {
                  setActiveIndex(index);
                }, 150);
              }}
            >
              <Image
                src={item.image}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </Modal>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center"
            onClick={() => setActiveIndex(null)}
          >
            <button
              className="absolute top-4 right-4 p-3 text-white/70 hover:text-white transition-colors z-10"
              onClick={() => setActiveIndex(null)}
            >
              <X size={28} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => {
                const touchStartX = e.touches[0].clientX;
                const handleTouchEnd = (e: TouchEvent) => {
                  const touchEndX = e.changedTouches[0].clientX;
                  const diff = touchStartX - touchEndX;
                  if (Math.abs(diff) > 50) {
                    if (diff > 0) {
                      setActiveIndex((prev) => (prev! + 1) % galleryImages.length);
                    } else {
                      setActiveIndex((prev) =>
                        prev! === 0 ? galleryImages.length - 1 : prev! - 1
                      );
                    }
                  }
                  document.removeEventListener("touchend", handleTouchEnd);
                };
                document.addEventListener("touchend", handleTouchEnd);
              }}
            >
              <Image
                src={galleryImages[activeIndex].image}
                alt={`Gallery image ${activeIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain transition-transform duration-500"
                priority
              />
            </motion.div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {activeIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}