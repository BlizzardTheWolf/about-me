import { siteConfig } from "@/config/site";

const SocialLinks = () => {
  return (
    <div className="border-t-2 border-border p-4">
      {/* Tags row */}
      <div className="flex gap-4 mb-3 text-xs font-retro">
        {siteConfig.socialLinks.map((link) => (
          <span key={link.label} className="text-muted-foreground">
            <span className="text-primary">{link.tag}</span> • {link.views} views
          </span>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-2">
        {siteConfig.socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="aspect-[3/2] overflow-hidden border-2 border-border">
              <img
                src={link.image}
                alt={link.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                loading="lazy"
                width={300}
                height={200}
              />
            </div>
            <p className="text-center text-xs mt-1 font-retro text-foreground group-hover:text-primary">
              {link.label}
            </p>
          </a>
        ))}
      </div>

      {/* Footer */}
      <p className="text-center text-xs text-muted-foreground mt-4 font-retro">
        ( Made with 💛 )
      </p>
    </div>
  );
};

export default SocialLinks;
