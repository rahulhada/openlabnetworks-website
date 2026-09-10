import { useTheme } from "./ThemeProvider";
import HeroBackground from "./HeroBackground";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section
      className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "var(--page-bg)" }}
    >
      {/* ── Animated canvas background ── */}
      <HeroBackground />

      {/* ── Content ── */}
      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">

        {/* Headline */}
        <h1 className="animate-in-1 font-extrabold tracking-tight leading-[1.1]">
          <span
            className="block text-[clamp(24px,5.2vw,60px)] sm:whitespace-nowrap"
            style={{ color: "var(--text-primary)" }}
          >
            Cloud-Native Network
          </span>
          <span
            className="block text-[clamp(24px,5.2vw,60px)] sm:whitespace-nowrap"
            style={{ color: "var(--text-primary)" }}
          >
            Infrastructure{" "}
            <span style={{ color: "var(--accent-color)" }}>Intelligently</span>
          </span>
          <span
            className="block text-[clamp(24px,5.2vw,60px)] sm:whitespace-nowrap"
            style={{ color: "var(--accent-color)" }}
          >
            Accelerated. AI-Ready.
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="animate-in-2 text-sm sm:text-base max-w-lg mx-auto leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Empower network accelerators to foster a ready-to-plug-in cloud-native
          platform for driving AI workload innovation.
        </p>

        {/* Coming Soon */}
        <div className="animate-in-3 flex justify-center pt-2">
          <span
            className="px-8 py-3 rounded-full text-xs sm:text-sm font-mono font-semibold tracking-widest uppercase"
            style={{
              background: "var(--accent-subtle-bg)",
              border: "1px solid var(--accent-subtle-border)",
              color: "var(--accent-subtle-text)",
            }}
          >
            Coming Soon
          </span>
        </div>

      </div>
    </section>
  );
};

export default Hero;
