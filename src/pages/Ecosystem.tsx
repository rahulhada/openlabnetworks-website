import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnershipSection from "@/components/PartnershipSection";
import { Handshake, Cpu, ShieldCheck, Zap } from "lucide-react";
import PartnerModal from "@/components/PartnerModal";

const stats = [
  { v: "iWave", l: "Hardware Partner", desc: "FPGA SmartNIC & SOM" },
  { v: "100G+", l: "Line Rate", desc: "Corundum & P4 pipelines" },
  { v: "PCIe", l: "Gen5 Acceleration", desc: "High-density FPGA MPSoC" },
  { v: "P4", l: "Data Plane", desc: "OpenLab hardware toolchain" },
];

const Ecosystem: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />
      
      <main className="pt-24 pb-12">
        {/* Page Hero Header */}
        <div className="max-w-6xl mx-auto px-6 pt-8 pb-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-zinc-900">
            <div className="space-y-2 max-w-xl">
              <span className="status-pill">Hardware Partnership</span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                SmartNIC <span className="text-[#00e5cc]">Ecosystem</span>
              </h1>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                Co-innovating with <strong className="text-white">iWave Global</strong> to build high-performance FPGA SmartNICs, SOM platforms, and P4-accelerated data planes.
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 rounded-full bg-[#00e5cc] text-black font-semibold text-xs hover:bg-[#00cbb5] transition-colors flex items-center gap-2 self-start md:self-auto shadow-lg shadow-[#00e5cc]/10"
            >
              <Handshake size={15} /> Partner With Us
            </button>
          </div>

          {/* iWave Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.l}
                className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-4 space-y-1 hover:border-[#00e5cc]/40 transition-colors"
              >
                <p className="text-2xl font-extrabold text-[#00e5cc] font-mono tracking-tight">{s.v}</p>
                <p className="text-xs font-bold text-white">{s.l}</p>
                <p className="text-[11px] font-mono text-zinc-500">{s.desc}</p>
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
