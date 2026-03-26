import { siteConfig } from "@/config/site";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="flex flex-wrap gap-1 px-3 py-1.5 border-b border-border bg-card text-sm">
      {siteConfig.navLinks.map((link, i) => {
        const isActive = location.pathname === link.href;
        return (
          <span key={link.label}>
            <Link
              to={link.href}
              className={`font-mono-body underline ${isActive ? "text-primary font-bold" : "text-foreground hover:text-primary"}`}
            >
              {link.label}
            </Link>
            {i < siteConfig.navLinks.length - 1 && <span className="text-muted-foreground mx-1">|</span>}
          </span>
        );
      })}
    </nav>
  );
};

export default NavBar;
