import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Lightbulb, Cpu, Network, Zap } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "We push the boundaries of what's possible with FPGA-based SmartNIC technology, constantly innovating to deliver faster, smarter network infrastructure.",
  },
  {
    icon: Cpu,
    title: "Hardware Excellence",
    desc: "Partnering with world-class silicon providers to deliver production-ready FPGA SmartNIC platforms built for reliability and performance.",
  },
  {
    icon: Network,
    title: "Open Ecosystem",
    desc: "We believe in open standards and interoperability. Our platform is designed to integrate seamlessly with existing cloud-native infrastructure.",
  },
  {
    icon: Zap,
    title: "Performance at Scale",
    desc: "Every solution we build is engineered for line-rate processing, from 10G to 400G, ensuring zero-compromise performance at any scale.",
  },
];

const About: React.FC = () => (
  <div className="min-h-screen font-sans" style={{ background: "var(--page-bg)", color: "var(--page-fg)" }}>
    <Navbar />

    <main className="pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Header */}
        <div className="space-y-3 max-w-2xl">
          <span className="status-pill">About Us</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
            The <span style={{ color: "var(--accent-color)" }}>OpenLabNetworks</span>
          </h1>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            We help organizations accelerate their network infrastructure with intelligent,
            FPGA-powered SmartNIC solutions — making high-performance networking accessible to everyone.
          </p>
        </div>

        {/* Vision & Mission — Napatech style side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision */}
          <div
            className="rounded-2xl p-8 space-y-4 relative overflow-hidden"
            style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: "var(--accent-subtle-bg)",
                border: "1px solid var(--accent-subtle-border)",
                color: "var(--accent-color)",
              }}
            >
              <Eye size={24} />
            </div>
            <h2 className="text-xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
              Our Vision
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              To be the global leader in reconfigurable, cloud-native SmartNIC platforms — leveraging 
              our deep expertise in FPGA technology to help companies of all sizes accelerate 
              application performance, secure their networks, and power the next generation of 
              AI infrastructure.
            </p>
          </div>

          {/* Mission */}
          <div
            className="rounded-2xl p-8 space-y-4 relative overflow-hidden"
            style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: "var(--accent-subtle-bg)",
                border: "1px solid var(--accent-subtle-border)",
                color: "var(--accent-color)",
              }}
            >
              <Target size={24} />
            </div>
            <h2 className="text-xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
              Our Mission
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              To enhance open and standard server platforms by delivering market-leading 
              FPGA SmartNIC solutions that boost compute performance, offload critical workloads, 
              and release valuable resources — enabling engineers and platform teams to build, 
              test, and deploy intelligent network functions without hardware procurement overhead.
            </p>
          </div>
        </div>

        {/* Opportunities & Solutions — Napatech style */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
            Opportunities &amp; Solutions
          </h2>
          <div
            className="rounded-2xl p-8 space-y-4"
            style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              We don't just accelerate speed and capacity — we help you shorten in-house development 
              and time-to-market. Our FPGA SmartNIC platform provides a shared, browser-accessible 
              environment where engineers, researchers, and platform teams can build, test, and deploy 
              programmable data planes on real silicon — without configuration overhead.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              From the port to the application, we allow you to control what data is delivered, 
              where and how. Reduce risk with integrated and pretested solutions using 
              cutting-edge FPGA technology from our hardware partners.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="space-y-6">
          <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 space-y-3"
                style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "var(--accent-subtle-bg)",
                    border: "1px solid var(--accent-subtle-border)",
                    color: "var(--accent-color)",
                  }}
                >
                  <v.icon size={20} />
                </div>
                <h3 className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{v.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Serve */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>Who We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { t: "Network Engineers", d: "Test SmartNIC architectures before silicon arrives. Validate FPGA pipelines in real sandbox environments." },
              { t: "AI/ML Researchers", d: "Benchmark GPU cluster network performance. Explore RoCEv2 tuning and in-network operators." },
              { t: "Platform Teams", d: "Simulate cloud-native network functions, CNI offload strategies, and zero-trust SmartNIC policies." },
            ].map((item) => (
              <div
                key={item.t}
                className="rounded-2xl p-5 space-y-2"
                style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
              >
                <h3 className="text-xs font-bold" style={{ color: "var(--accent-color)" }}>{item.t}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>

    <Footer />
  </div>
);

export default About;
