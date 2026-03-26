import { siteConfig } from "@/config/site";

const NavBar = () => {
  return (
    <nav className="flex flex-wrap gap-1 px-3 py-1.5 border-b border-border bg-card text-sm">
      {siteConfig.navLinks.map((link, i) => (
        <span key={link.label}>
          <a href={link.href} className="text-foreground hover:text-primary underline font-mono-body">
            {link.label}
          </a>
          {i < siteConfig.navLinks.length - 1 && <span className="text-muted-foreground mx-1">|</span>}
        </span>
      ))}
    </nav>
  );
};

export default NavBar;
