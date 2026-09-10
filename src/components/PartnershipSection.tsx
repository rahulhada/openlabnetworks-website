import React, { useState } from "react";
import { Handshake, ExternalLink } from "lucide-react";
import PartnerModal from "./PartnerModal";

export const PartnershipSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 font-sans"
      style={{
        background: "var(--page-bg)",
        borderTop: "1px solid var(--section-border)",
      }}
    >
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="status-pill">Strategic Hardware Partner</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
            SmartNIC <span style={{ color: "var(--accent-color)" }}>Partner Integration</span>
          </h2>
        </div>

        {/* Featured iWave Partner Banner */}
        <div
          className="rounded-3xl p-6 sm:p-10 space-y-6 relative overflow-hidden"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
          }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
                  iWave Global
                </h3>
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wide shrink-0"
                  style={{
                    background: "var(--accent-subtle-bg)",
                    border: "1px solid var(--accent-subtle-border)",
                    color: "var(--accent-subtle-text)",
                  }}
                >
                  Primary Hardware Partner
                </span>
              </div>
              <p className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
                Embedded SOM &amp; FPGA SmartNIC Engineering
              </p>
            </div>

            <a
              href="https://iwave-global.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono transition-colors shrink-0"
              style={{
                border: "1px solid var(--card-border)",
                color: "var(--text-secondary)",
              }}
            >
              Visit iWave Global <ExternalLink size={13} style={{ color: "var(--accent-color)" }} />
            </a>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="pt-4 text-center space-y-4">
          <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            Interested in building with OpenLab &amp; iWave Global hardware?
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-xs transition-colors"
            style={{
              background: "var(--accent-color)",
              color: "#fff",
            }}
          >
            <Handshake size={15} /> Partner With Us
          </button>
        </div>

      </div>

      <PartnerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default PartnershipSection;
