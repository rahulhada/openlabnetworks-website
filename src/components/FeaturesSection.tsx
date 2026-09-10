import React from "react";
import { Terminal, Lightbulb, Network } from "lucide-react";

const features = [
  { icon: Terminal, title: "Browser-Based Labs", desc: "No setup required. Spin up complex environments in seconds directly from your browser." },
  { icon: Lightbulb, title: "Project-Based Learning", desc: "Don't just watch tutorials. Build real infrastructure and solve production incidents." },
  { icon: Network, title: "AI-Ready Networks", desc: "Learn to design and deploy networks optimized for AI workloads and next-gen architectures." },
];

const FeaturesSection: React.FC = () => (
  <section
    className="py-16 md:py-24 px-4 sm:px-6 font-sans"
    style={{
      background: "var(--page-bg)",
      borderTop: "1px solid var(--section-border)",
    }}
  >
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="space-y-3 max-w-xl">
        <span className="status-pill">Why Choose Us</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
          Built for the future of networking
        </h2>
        <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          We don't teach syntax; we teach you how to think and build like a Senior Network Systems Engineer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 space-y-4 transition-colors group"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform"
              style={{
                background: "var(--accent-subtle-bg)",
                border: "1px solid var(--accent-subtle-border)",
                color: "var(--accent-color)",
              }}
            >
              <f.icon size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold mb-1.5" style={{ color: "var(--text-primary)" }}>{f.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
