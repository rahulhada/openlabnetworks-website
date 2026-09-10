import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const solutions = [
  { tag: "AI Infrastructure", title: "AI Cluster Networking", desc: "End-to-end SmartNIC acceleration for GPU cluster interconnects. Reduce AI training time with in-network collective operations and RDMA offload.", features: ["RoCEv2 RDMA", "In-network AllReduce", "GPUDirect Support", "Zero-copy I/O"] },
  { tag: "Cloud Native", title: "Cloud-Native Network Functions", desc: "Virtualized network functions running on OpenLab's FPGA-programmable substrate. Replace legacy hardware with software-defined equivalents.", features: ["vRouter", "vFirewall", "vLoad Balancer", "Service Mesh Integration"] },
  { tag: "Security", title: "Zero-Trust Network Security", desc: "Cryptographic identity and micro-segmentation enforced in the data plane. IPSec and mTLS offloaded to SmartNIC at line rate.", features: ["IPSec Offload", "mTLS at Scale", "Microsegmentation", "Identity-Based Policy"] },
  { tag: "Telemetry", title: "In-Network Telemetry", desc: "INT (In-band Network Telemetry) at 400G line rate with per-flow visibility. Export to Prometheus, OpenTelemetry, or custom sinks.", features: ["INT Metadata", "Per-Flow Stats", "OpenTelemetry", "Sub-ms Latency"] },
];

const Solutions: React.FC = () => (
  <div className="min-h-screen font-sans" style={{ background: "var(--page-bg)", color: "var(--page-fg)" }}>
    <Navbar />

    <main className="pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10">

        <div className="space-y-3 max-w-xl">
          <span className="status-pill">Solutions</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
            What we <span style={{ color: "var(--accent-color)" }}>solve</span>
          </h1>
          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Purpose-built solutions for AI infrastructure, cloud-native network functions, and programmable data planes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col justify-between space-y-5 transition-colors group"
              style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
            >
              <div className="space-y-3">
                <span
                  className="inline-block px-3 py-1 rounded-full text-[10px] font-mono"
                  style={{
                    background: "var(--accent-subtle-bg)",
                    border: "1px solid var(--accent-subtle-border)",
                    color: "var(--accent-subtle-text)",
                  }}
                >
                  {s.tag}
                </span>
                <h3 className="text-base font-bold mb-1" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.desc}</p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="space-y-1.5 pt-3" style={{ borderTop: "1px solid var(--section-border)" }}>
                  {s.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent-color)" }} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex items-center gap-1.5 text-xs font-semibold cursor-pointer" style={{ borderTop: "1px solid var(--section-border)", color: "var(--accent-color)" }}>
                  Learn more <ArrowRight size={13} />
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

export default Solutions;
