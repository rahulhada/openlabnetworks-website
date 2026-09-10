import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Terminal, Cpu, GitBranch, Play } from "lucide-react";
import { Link } from "react-router-dom";

const envs = [
  { icon: Cpu, label: "NVIDIA BlueField-3", status: "Available", desc: "Full DOCA SDK stack with FPGA pipeline support. Pre-provisioned for AI cluster workloads.", tags: ["DOCA SDK", "FPGA", "RoCEv2"] },
  { icon: Terminal, label: "AMD Pensando Elba", status: "Available", desc: "FPGA compiler environment on Elba SoC. Includes flow-tracking and telemetry pipelines.", tags: ["FPGA", "Flow Tracking", "Telemetry"] },
  { icon: GitBranch, label: "Intel Mount Evans IPU", status: "Beta", desc: "Virtual Mount Evans environment for cloud multi-tenant isolation and NVMe-oF testing.", tags: ["NVMe-oF", "OVS Offload", "Multi-tenant"] },
  { icon: Play, label: "Software FPGA Switch", status: "Free", desc: "Software-based FPGA switch for rapid prototyping. Instant browser access, no hardware required.", tags: ["Corundum", "FPGA Runtime", "Instant"] },
];

const FPGASandbox: React.FC = () => (
  <div className="min-h-screen font-sans" style={{ background: "var(--page-bg)", color: "var(--page-fg)" }}>
    <Navbar />

    <main className="pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10">

        <div className="space-y-3 max-w-xl">
          <span className="status-pill">FPGA Sandbox</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
            Launch your <span style={{ color: "var(--accent-color)" }}>sandbox</span>
          </h1>
          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Browser-based FPGA development environments backed by real SmartNIC hardware. No setup. Spin up in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {envs.map((e, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 flex flex-col justify-between space-y-4 transition-colors group"
              style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform"
                    style={{
                      background: "var(--accent-subtle-bg)",
                      border: "1px solid var(--accent-subtle-border)",
                      color: "var(--accent-color)",
                    }}
                  >
                    <e.icon size={20} />
                  </div>
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-mono"
                    style={{
                      background: "var(--accent-subtle-bg)",
                      border: "1px solid var(--accent-subtle-border)",
                      color: "var(--accent-subtle-text)",
                    }}
                  >
                    {e.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold mb-1" style={{ color: "var(--text-primary)" }}>{e.label}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{e.desc}</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {e.tags.map((t) => (
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

                <button
                  className="w-full py-2.5 rounded-full font-mono text-xs transition-colors"
                  style={{
                    border: "1px solid var(--card-border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  Launch Environment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Callout */}
        <div
          className="rounded-3xl p-6 sm:p-10 text-center space-y-3"
          style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
        >
          <span className="status-pill">Enterprise</span>
          <h2 className="text-xl sm:text-2xl font-bold" style={{ color: "var(--text-primary)" }}>Need a dedicated environment?</h2>
          <p className="text-xs sm:text-sm max-w-lg mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Private sandboxes with dedicated SmartNIC hardware for your team or research group.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-semibold text-xs transition-colors"
              style={{ background: "var(--accent-color)", color: "#fff" }}
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </main>

    <Footer />
  </div>
);

export default FPGASandbox;
