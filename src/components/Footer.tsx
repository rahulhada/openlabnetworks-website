import { Link } from "react-router-dom";
import Logo from "/openlabnetworks-favicon-white.png"

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded  flex items-center justify-center">
               <img src={Logo} className="h-8" alt="Open Lab Networks Logo" />
            </div>
            <span className="font-semibold text-foreground">OpenLab Networks</span>
          </div>

          <div className="flex items-center gap-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Home
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Contact Us
            </Link>
          </div>

          <p className="text-muted-foreground text-sm">
            © 2026 OpenLab Networks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
