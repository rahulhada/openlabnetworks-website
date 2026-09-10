import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnershipSection from "@/components/PartnershipSection";
import { Handshake } from "lucide-react";
import PartnerModal from "@/components/PartnerModal";

const stats = [
  { v: "iWave", l: "Hardware Partner", desc: "FPGA SmartNIC & SOM" },
  { v: "100G+", l: "Line Rate", desc: "Corundum & FPGA pipelines" },
  { v: "PCIe", l: "Gen5 Acceleration", desc: "High-density FPGA MPSoC" },
  { v: "FPGA", l: "Data Plane", desc: "OpenLab hardware toolchain" },
];

const Ecosystem: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans" style={{ background: "var(--page-bg)", color: "var(--page-fg)" }}>
      <Navbar />
      
      <main className="pt-24 pb-12">
        {/* Page Hero Header */}
        <div className="max-w-6xl mx-auto px-6 pt-8 pb-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6" style={{ borderBottom: "1px solid var(--section-border)" }}>
            <div className="space-y-2 max-w-xl">
              <span className="status-pill">Hardware Partnership</span>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
                SmartNIC <span style={{ color: "var(--accent-color)" }}>Ecosystem</span>
              </h1>
              <p className="text-xs md:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Co-innovating with <strong style={{ color: "var(--text-primary)" }}>iWave Global</strong> to build high-performance FPGA SmartNICs, SOM platforms, and FPGA-accelerated data planes.
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 rounded-full font-semibold text-xs transition-colors flex items-center gap-2 self-start md:self-auto"
              style={{ background: "var(--accent-color)", color: "#fff" }}
            >
              <Handshake size={15} /> Partner With Us
            </button>
          </div>

          {/* iWave Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.l}
                className="rounded-xl p-4 space-y-1 transition-colors"
                style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
              >
                <p className="text-2xl font-extrabold font-mono tracking-tight" style={{ color: "var(--accent-color)" }}>{s.v}</p>
                <p className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>{s.l}</p>
                <p className="text-[11px] font-mono" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Showcase Section */}
        <PartnershipSection />
      </main>

      <Footer />
      <PartnerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Ecosystem;
