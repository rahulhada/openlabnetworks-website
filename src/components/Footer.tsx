import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";

const links = [
  { to: "/",          label: "Home" },
  { to: "/about",     label: "About Us" },
  // { to: "/training",  label: "Academy" },  // Hidden for now
  { to: "/blog",      label: "Blog" },
  { to: "/ecosystem", label: "Partnership" },
  { to: "/contact",   label: "Contact" },
];

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer
      className="py-8 px-4 sm:px-6 font-sans"
      style={{
        background: "var(--page-bg)",
        borderTop: "1px solid var(--section-border)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Brand logo */}
        <Link to="/" className="flex items-center group">
          <img
            src={theme === "dark" ? "/dark-logo.png" : "/light-logo.png"}
            alt="OpenLabNetworks Logo"
            className="h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

      {/* Navigation links */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
        {links.map((l) => (
          <Link
            key={l.label}
            to={l.to}
            className="transition-colors"
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-color)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-[11px] font-mono" style={{ color: "var(--text-muted)" }}>
        © 2026 OpenLabNetworks
      </p>

      </div>
    </footer>
  );
};

export default Footer;
