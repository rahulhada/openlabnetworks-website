import React, { useState } from "react";
import { Cpu, Handshake, CheckCircle2, Shield, Zap, Globe, ExternalLink } from "lucide-react";
import PartnerModal from "./PartnerModal";

const CYAN = "#00e5cc";

const iwaveSolutions = [
  {
    abbr: "iWave",
    company: "iWave Global",
    type: "FPGA SmartNIC & SOM",
    title: "Corundum & P4 Hardware Acceleration",
    desc: "High-performance FPGA-based SmartNIC platforms and System-On-Module (SOM) solutions by iWave Global, integrated with OpenLab P4 data-plane toolchain.",
    tags: ["iWave SOM", "FPGA SmartNIC", "PCIe Gen5", "P4 Target", "100G/400G"],
    specs: "Zynq UltraScale+ MPSoC / Versal Adaptive SoC",
  },
  {
    abbr: "iWave",
    company: "iWave Global",
    type: "AI & Embedded Computing",
    title: "AI Workload Offload & Telemetry",
    desc: "Offload AI cluster transport pipelines, RoCEv2 fabric acceleration, and in-band network telemetry directly onto iWave FPGA SmartNIC hardware.",
    tags: ["AI Offload", "RoCEv2", "In-Band INT", "Low Latency"],
    specs: "Multi-Port 100G/400G Ethernet / Hardware Crypto",
  },
  {
    abbr: "iWave",
    company: "iWave Global",
    type: "Custom Hardware Engineering",
    title: "Cloud-Native Network Solutions",
    desc: "Turnkey hardware design and P4-programmable data plane acceleration tailored for cloud providers, edge compute, and high-speed network functions.",
    tags: ["Custom Hardware", "P4Runtime", "Edge AI", "OpenLab Validated"],
    specs: "Industrial Grade / High Density SOM",
  },
];

export const PartnershipSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 sm:px-6 border-t border-zinc-900 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="status-pill">Strategic Hardware Partner</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            SmartNIC <span className="text-[#00e5cc]">Partner Integration</span>
          </h2>
          <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
            OpenLabNetwork partners with <strong className="text-white">iWave Global</strong> to deliver P4-programmable FPGA SmartNIC acceleration and high-density System-On-Module (SOM) solutions.
          </p>
        </div>

        {/* Featured iWave Partner Banner */}
        <div className="bg-zinc-950 border border-zinc-800/90 rounded-3xl p-6 sm:p-10 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-zinc-900">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                  iWave Global
                </h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#00e5cc]/10 border border-[#00e5cc]/30 text-[#00e5cc] text-[11px] font-mono font-semibold tracking-wide shrink-0">
                  Primary Hardware Partner
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-mono">
                Embedded SOM &amp; FPGA SmartNIC Engineering
              </p>
            </div>

            <a
              href="https://iwave-global.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-[#00e5cc] transition-colors shrink-0"
            >
              Visit iWave Global <ExternalLink size={13} className="text-[#00e5cc]" />
            </a>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {iwaveSolutions.map((item, idx) => (
              <div
                key={idx}
                className="bg-black/60 border border-zinc-800/80 hover:border-[#00e5cc]/40 rounded-2xl p-5 flex flex-col justify-between space-y-4 transition-colors group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      {item.type}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#00e5cc]" />
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#00e5cc] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="text-[11px] font-mono text-zinc-500 border-t border-zinc-900 pt-2">
                    <strong className="text-zinc-400">Arch:</strong> {item.specs}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="pt-4 text-center space-y-4">
          <p className="text-xs font-mono text-zinc-500">
            Interested in building with OpenLab &amp; iWave Global hardware?
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#00e5cc] text-black font-semibold text-xs hover:bg-[#00cbb5] transition-colors shadow-lg shadow-[#00e5cc]/10"
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
