import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Github, Twitter, Send } from "lucide-react";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Message sent! We'll be in touch soon.");
  };

  return (
    <div className="min-h-screen font-sans" style={{ background: "var(--page-bg)", color: "var(--page-fg)" }}>
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-10">

          <div className="space-y-3 max-w-xl">
            <span className="status-pill">Contact</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
              Get in <span style={{ color: "var(--accent-color)" }}>touch</span>
            </h1>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Questions about partnerships, sandbox access, or SmartNIC integrations? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-6 space-y-4"
              style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
            >
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider mb-1.5" style={{ color: "var(--text-secondary)" }}>
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg px-3.5 py-2.5 text-xs focus:outline-none transition-colors theme-input"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider mb-1.5" style={{ color: "var(--text-secondary)" }}>
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="w-full rounded-lg px-3.5 py-2.5 text-xs focus:outline-none transition-colors theme-input"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider mb-1.5" style={{ color: "var(--text-secondary)" }}>
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your SmartNIC or AI infra requirements..."
                  required
                  className="w-full rounded-lg px-3.5 py-2.5 text-xs focus:outline-none transition-colors resize-none theme-input"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                style={{ background: "var(--accent-color)", color: "#fff" }}
              >
                <Send size={14} /> {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>

            {/* Direct Channels */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email us", val: "hello@openlabnetworks.io", href: "mailto:hello@openlabnetworks.io" },
                { icon: Github, label: "Open Source", val: "github.com/openlabnetworks", href: "https://github.com" },
                { icon: Twitter, label: "Follow us", val: "@openlabnetworks", href: "https://twitter.com" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl p-5 flex items-center gap-4 transition-colors group block"
                  style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shrink-0"
                    style={{
                      background: "var(--accent-subtle-bg)",
                      border: "1px solid var(--accent-subtle-border)",
                      color: "var(--accent-color)",
                    }}
                  >
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>{item.label}</p>
                    <p className="text-xs font-semibold transition-colors" style={{ color: "var(--text-primary)" }}>{item.val}</p>
                  </div>
                </a>
              ))}
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
