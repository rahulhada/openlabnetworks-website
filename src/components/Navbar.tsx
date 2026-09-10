import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Home",        to: "/" },
  { label: "About Us",    to: "/about" },
  // { label: "Academy",     to: "/training" },  // Hidden for now
  { label: "Blog",        to: "/blog" },
  { label: "Partnership", to: "/ecosystem" },
  { label: "Contact",     to: "/contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY.current && y > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 pt-5 px-6 pointer-events-none"
      style={{
        transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease",
        transform: visible ? "translateY(0)" : "translateY(-110%)",
        opacity: visible ? 1 : 0,
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative pointer-events-auto">

        {/* ── Brand Logo ── */}
        <Link to="/" className="flex items-center group">
          <img
            src={theme === "dark" ? "/dark-logo.png" : "/light-logo.png"}
            alt="OpenLabNetworks Logo"
            className="h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* ── Center Floating Pill ── */}
        <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
          <nav
            className="backdrop-blur-xl px-6 py-2.5 rounded-full flex items-center gap-6 text-xs font-medium shadow-lg"
            style={{
              background: "var(--navbar-bg)",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "var(--navbar-border)",
              color: "var(--text-secondary)",
            }}
          >
            {navLinks.map((link) => {
              const active = pathname === link.to;
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className="transition-colors whitespace-nowrap"
                  style={{
                    color: active ? "var(--text-primary)" : undefined,
                    fontWeight: active ? 600 : undefined,
                  }}
                  onMouseEnter={(e) => {
                    if (!active) (e.target as HTMLElement).style.color = "var(--accent-color)";
                  }}
                  onMouseLeave={(e) => {
                    if (!active) (e.target as HTMLElement).style.color = "";
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* ── Right Action Buttons ── */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="text-xs font-mono transition-colors flex items-center gap-1"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            Docs
            <ArrowUpRight className="h-3.5 w-3.5" style={{ color: "var(--accent-color)" }} />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors"
            style={{
              background: "var(--accent-subtle-bg)",
              border: "1px solid var(--accent-subtle-border)",
              color: "var(--accent-color)",
            }}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <Link
            to="/fpga-sandbox"
            className="px-5 py-2 rounded-full font-semibold text-xs transition-colors shadow-sm"
            style={{
              background: "var(--accent-color)",
              color: theme === "dark" ? "#000" : "#fff",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-color-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent-color)")}
          >
            Launch Sandbox
          </Link>
        </div>

        {/* ── Mobile Menu Button ── */}
        <button
          className="lg:hidden p-2.5 rounded-xl pointer-events-auto"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            color: "var(--text-primary)",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ── Mobile Nav Dropdown ── */}
      {isOpen && (
        <div
          className="lg:hidden mt-3 p-5 rounded-2xl backdrop-blur-xl space-y-1 pointer-events-auto shadow-2xl"
          style={{
            background: "var(--navbar-bg)",
            border: "1px solid var(--card-border)",
          }}
        >
          {navLinks.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.label}
                to={link.to}
                className="block text-sm font-medium py-2 px-3 rounded-lg transition-colors"
                style={{
                  color: active ? "var(--accent-color)" : "var(--text-secondary)",
                  background: active ? "var(--accent-subtle-bg)" : undefined,
                }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Mobile theme toggle */}
          <div className="pt-2 flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="flex-1 py-2.5 rounded-full text-xs font-medium flex items-center justify-center gap-2 transition-colors"
              style={{
                border: "1px solid var(--card-border)",
                color: "var(--text-secondary)",
              }}
            >
              {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
            <Link
              to="/fpga-sandbox"
              className="flex-1 py-2.5 rounded-full font-semibold text-xs text-center transition-colors"
              style={{
                background: "var(--accent-color)",
                color: theme === "dark" ? "#000" : "#fff",
              }}
              onClick={() => setIsOpen(false)}
            >
              Launch Sandbox
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
