import React from "react";
import { BookOpen, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TrainingSection: React.FC = () => (
  <section
    className="py-16 md:py-24 px-4 sm:px-6 font-sans"
    style={{
      background: "var(--page-bg)",
      borderTop: "1px solid var(--section-border)",
    }}
  >
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="space-y-3 max-w-xl">
        <span className="status-pill">Academy</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
          Hands-on SmartNIC Training
        </h2>
        <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Learn FPGA, DPU programming, and AI cluster networking — on real hardware, through your browser.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          { icon: Cpu, title: "SmartNIC Fundamentals", desc: "From silicon architecture to DOCA SDK setup on BlueField-3.", tag: "Beginner" },
          { icon: BookOpen, title: "FPGA Data Plane Programming", desc: "Write, compile, and deploy FPGA pipelines to real SmartNIC targets.", tag: "Intermediate" },
        ].map((t, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 space-y-4 transition-colors group"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
            }}
          >
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
              <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>{t.tag}</span>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-1" style={{ color: "var(--text-primary)" }}>{t.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{t.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/training"
          className="inline-flex items-center gap-2 text-xs font-semibold transition-colors"
          style={{ color: "var(--accent-color)" }}
        >
          View All Training Tracks <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  </section>
);

export default TrainingSection;
