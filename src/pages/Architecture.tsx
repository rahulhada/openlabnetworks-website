import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Layers, GitBranch, Cpu, Network } from "lucide-react";

const layers = [
  { icon: Network, lbl: "01 — Network Fabric", title: "Cloud-Native Underlay", body: "High-throughput VXLAN/EVPN fabric with eBPF-accelerated forwarding. Supports 400G leaf-spine topologies with sub-microsecond latency.", tags: ["VXLAN", "EVPN", "eBPF", "ECMP"] },
  { icon: Cpu, lbl: "02 — Data Plane", title: "FPGA-Programmable Pipeline", body: "Custom FPGA accelerators compiled to SmartNIC targets via a unified toolchain. Runtime control through gRPC API and hardware-level telemetry.", tags: ["FPGA", "Corundum", "ASIC", "SmartNIC"] },
  { icon: GitBranch, lbl: "03 — Control Plane", title: "Distributed SDN Controller", body: "Multi-cluster SDN control using gRPC-based southbound interfaces. Supports OpenConfig telemetry streaming and intent-based policy.", tags: ["gRPC", "OpenConfig", "SDN", "Intent-Based"] },
  { icon: Layers, lbl: "04 — AI Orchestration", title: "AI Workload Integration", body: "Native integration with NVIDIA DOCA, ROCm, and OneAPI. Network-aware scheduling for GPU clusters with RDMA over Converged Ethernet.", tags: ["DOCA", "ROCm", "RoCEv2", "RDMA"] },
];

const Architecture: React.FC = () => (
  <div className="min-h-screen font-sans" style={{ background: "var(--page-bg)", color: "var(--page-fg)" }}>
    <Navbar />

    <main className="pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-10">

        <div className="space-y-3 max-w-xl">
          <span className="status-pill">Architecture</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
            System <span style={{ color: "var(--accent-color)" }}>Architecture</span>
          </h1>
          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            A layered, disaggregated architecture built for programmability at every level — from silicon to orchestration.
          </p>
        </div>

        <div className="space-y-4">
          {layers.map((l, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 space-y-3 transition-colors group"
              style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
                  style={{
                    background: "var(--accent-subtle-bg)",
                    border: "1px solid var(--accent-subtle-border)",
                    color: "var(--accent-color)",
                  }}
                >
                  <l.icon size={20} />
                </div>
                <div className="space-y-2 flex-1">
                  <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>{l.lbl}</p>
                  <h3 className="text-base font-bold mb-1" style={{ color: "var(--text-primary)" }}>{l.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{l.body}</p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {l.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono"
                        style={{
                          background: "var(--accent-subtle-bg)",
                          border: "1px solid var(--accent-subtle-border)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>

    <Footer />
  </div>
);

export default Architecture;
