"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { certificationsData } from "@/lib/data";

interface Cert {
  id: number;
  title: string;
  issuer: string;
  year: string;
  image: string;
  pdf?: string;
}

function CertificateCard({
  cert,
  onClick,
}: {
  cert: Cert;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div onClick={onClick}>
        <Card className="group cursor-pointer" hover={true}>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-bg-tertiary flex items-center justify-center">
            {cert.image ? (
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-contain bg-white p-2"
              />
            ) : (
              <Award size={40} className="text-accent/50" />
            )}
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Award size={20} className="text-accent" />
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-1">
                {cert.title}
              </h4>
              <p className="text-text-muted text-sm">
                {cert.issuer} • {cert.year}
              </p>
            </div>
          </div>
          <p className="text-xs text-accent mt-2 opacity-0 group-hover:opacity-100 transition">
            Click to view certificate
          </p>
        </Card>
      </div>
    </motion.div>
  );
}

export function Certifications() {
  const [showAllModal, setShowAllModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null);

  const visibleCerts = certificationsData.slice(0, 4);

  return (
    <>
      <Section
        id="certifications"
        title="Certifications"
        subtitle="Professional qualifications and credentials"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleCerts.map((cert) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              onClick={() => setSelectedCert(cert)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button
            onClick={() => setShowAllModal(true)}
            variant="secondary"
            size="lg"
          >
            View All Certifications
          </Button>
        </motion.div>
      </Section>

      <Modal
        isOpen={showAllModal}
        onClose={() => setShowAllModal(false)}
        title="All Certifications"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              onClick={() => {
                setSelectedCert(cert);
                setShowAllModal(false);
              }}
            />
          ))}
        </div>
      </Modal>

      <Modal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title || "Certificate"}
      >
        {selectedCert?.pdf ? (
          <iframe
            src={selectedCert.pdf}
            className="w-full h-[80vh] rounded-lg"
          />
        ) : (
          <div className="flex items-center justify-center h-64 text-text-muted">
            No preview available
          </div>
        )}
      </Modal>
    </>
  );
}