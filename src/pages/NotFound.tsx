import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--page-bg)" }}>
      <div className="text-center px-6">
        <h1 className="text-8xl font-bold mb-4" style={{ color: "var(--accent-color)" }}>404</h1>
        <p className="text-xl mb-8" style={{ color: "var(--text-secondary)" }}>
          Oops! This page doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-colors"
          style={{ background: "var(--accent-color)", color: "#fff" }}
        >
          <ArrowLeft size={18} />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
