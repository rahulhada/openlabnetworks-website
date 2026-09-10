import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Cpu, Network, Zap, ArrowRight, Clock, Users, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";

const tracks = [
  {
    icon: Cpu,
    tag: "Track 01",
    title: "SmartNIC Fundamentals",
    subtitle: "From silicon to pipeline",
    level: "Beginner → Intermediate",
    hours: "12 hrs",
    modules: [
      "SmartNIC vs Traditional NIC Architecture",
      "DPU, IPU & FPGA-based SmartNIC Comparison",
      "DOCA SDK Setup on BlueField-3",
      "Data-plane Programming Basics",
      "Offloading OVS to SmartNIC",
    ],
  },
  {
    icon: Network,
    tag: "Track 02",
    title: "FPGA Programmable Data Planes",
    subtitle: "Write, compile, deploy",
    level: "Intermediate",
    hours: "18 hrs",
    modules: [
      "FPGA Language Fundamentals & Architecture",
      "Compiling FPGA Pipelines to SmartNIC Targets",
      "Targeting AMD Pensando Elba SoC",
      "FPGA Runtime gRPC Control Plane APIs",
      "In-band Network Telemetry (INT) with FPGA",
    ],
  },
  {
    icon: Zap,
    tag: "Track 03",
    title: "AI Infrastructure Networking",
    subtitle: "GPU clusters & RoCE",
    level: "Advanced",
    hours: "14 hrs",
    modules: [
      "RoCEv2 & RDMA Fundamentals",
      "GPUDirect & NVLink Network Topologies",
      "In-network AllReduce for Distributed Training",
      "Zero-copy I/O Offload with DOCA",
      "Benchmarking AI Cluster Network Throughput",
    ],
  },
  {
    icon: BookOpen,
    tag: "Track 04",
    title: "Cloud-Native Network Functions",
    subtitle: "FPGA-based vNF development",
    level: "Intermediate → Advanced",
    hours: "10 hrs",
    modules: [
      "vRouter on SmartNIC with FPGA",
      "vFirewall: Stateful Packet Inspection",
      "Service Mesh Sidecar Offload",
      "Multi-tenant Isolation with NVMe-oF",
      "Kubernetes CNI Integration",
    ],
  },
];

const labs = [
  { title: "BlueField-3 Sandbox", desc: "Full DOCA SDK environment, live on real hardware.", tag: "Live Hardware" },
  { title: "FPGA Software Switch Lab", desc: "Software-based FPGA switch for instant prototyping.", tag: "Instant" },
  { title: "AI Cluster Simulation", desc: "Simulated 8-GPU node with RoCEv2 fabric.", tag: "Simulation" },
  { title: "AMD Pensando Elba Lab", desc: "FPGA compiler + flow-tracking pipeline.", tag: "Live Hardware" },
];

const stats = [
  { v: "4", l: "Curated tracks" },
  { v: "54+", l: "Hands-on modules" },
  { v: "1:1", l: "Live mentoring" },
  { v: "400G", l: "Line-rate labs" },
];

const Training: React.FC = () => (
  <div className="min-h-screen font-sans" style={{ background: "var(--page-bg)", color: "var(--page-fg)" }}>
    <Navbar />

    {/* Hero */}
    <section className="pt-24 pb-12 px-4 sm:px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <span className="status-pill">Training Programs</span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight" style={{ color: "var(--text-primary)" }}>
          Master the infrastructure that <span style={{ color: "var(--accent-color)" }}>powers AI at scale</span>
        </h1>
        <p className="text-xs sm:text-base max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Hands-on training programs covering SmartNIC programming, FPGA data planes, RoCEv2 fabric, and cloud-native network functions — all run on real silicon.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="#tracks"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-xs sm:text-sm transition-colors"
            style={{ background: "var(--accent-color)", color: "#fff" }}
          >
            Browse Tracks <ArrowRight size={14} />
          </a>
          <Link
            to="/fpga-sandbox"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full font-mono text-xs sm:text-sm transition-colors"
            style={{ border: "1px solid var(--card-border)", color: "var(--text-secondary)" }}
          >
            Open FPGA Sandbox
          </Link>
        </div>
      </div>
    </section>

    {/* Stats bar */}
    <section className="py-6 px-4 sm:px-6" style={{ borderTop: "1px solid var(--section-border)", borderBottom: "1px solid var(--section-border)" }}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {stats.map((s, i) => (
          <div key={i} className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight" style={{ color: "var(--accent-color)" }}>{s.v}</p>
            <p className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>{s.l}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Learning tracks */}
    <section id="tracks" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-3 max-w-xl">
          <span className="status-pill">Learning Tracks</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
            Four specialized tracks
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Each track is built around real production scenarios — not slides. Every module includes a browser-accessible lab.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracks.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col justify-between space-y-5 transition-colors group"
              style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: "var(--accent-subtle-bg)",
                      border: "1px solid var(--accent-subtle-border)",
                      color: "var(--accent-color)",
                    }}
                  >
                    <t.icon size={20} />
                  </div>
                  <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>{t.tag}</span>
                </div>

                <div>
                  <h3 className="text-base font-bold mb-0.5" style={{ color: "var(--text-primary)" }}>{t.title}</h3>
                  <p className="text-xs font-semibold" style={{ color: "var(--accent-color)" }}>{t.subtitle}</p>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {t.hours}</span>
                  <span className="flex items-center gap-1.5"><BarChart2 size={12} /> {t.level}</span>
                </div>

                <div className="space-y-2 pt-2" style={{ borderTop: "1px solid var(--section-border)" }}>
                  {t.modules.map((m, j) => (
                    <div key={j} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                      <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: "var(--accent-color)" }} />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-2 text-xs font-semibold cursor-pointer" style={{ borderTop: "1px solid var(--section-border)", color: "var(--accent-color)" }}>
                Start Track <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Labs */}
    <section className="py-12 px-4 sm:px-6" style={{ borderTop: "1px solid var(--section-border)" }}>
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <span className="status-pill">Lab Environments</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
            Real hardware. Browser access.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {labs.map((l, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 space-y-2"
              style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
            >
              <span
                className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono"
                style={{
                  background: "var(--accent-subtle-bg)",
                  border: "1px solid var(--accent-subtle-border)",
                  color: "var(--accent-subtle-text)",
                }}
              >
                {l.tag}
              </span>
              <h3 className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>{l.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Mentoring CTA */}
    <section className="py-12 px-4 sm:px-6">
      <div
        className="max-w-6xl mx-auto rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
      >
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider" style={{ color: "var(--accent-color)" }}>
            <Users size={16} /> Live Mentoring
          </div>
          <h3 className="text-xl sm:text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            One-on-one sessions with SmartNIC engineers
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Book 1:1 sessions with engineers who work on BlueField, Pensando, and FPGA pipelines in production.
          </p>
        </div>

        <Link
          to="/contact"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-colors shrink-0"
          style={{ background: "var(--accent-color)", color: "#fff" }}
        >
          Book a Session <ArrowRight size={14} />
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default Training;
