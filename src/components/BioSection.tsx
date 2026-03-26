import { useState } from "react";
import { siteConfig } from "@/config/site";
import pawPrints from "@/assets/paw-prints.png";

const BioSection = () => {
  const [picIndex, setPicIndex] = useState(0);

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Paw decoration */}
        <div className="flex-shrink-0 w-32 h-32 flex items-center justify-center">
          <img src={pawPrints} alt="decorative paws" width={128} height={128} className="opacity-80" />
        </div>

        {/* Bio content */}
        <div className="flex-1 text-center sm:text-right">
          <h1 className="font-retro text-3xl text-primary font-bold mb-1">{siteConfig.username}</h1>
          <div className="flex justify-center sm:justify-end gap-1 mb-2">
            <span className="bg-primary/30 px-3 py-0.5 text-xs font-retro">━━━━</span>
            <span className="font-retro text-muted-foreground">(ᐢ_ᐢ) !?</span>
          </div>
          <p className="text-xs text-muted-foreground mb-1">{siteConfig.websiteUrl}</p>
          <p
            className="text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: siteConfig.bio }}
          />

          {/* Mini profile pics */}
          <div className="flex justify-center sm:justify-end gap-2 mt-3 items-center">
            {siteConfig.profilePics.map((pic, i) => (
              <img
                key={i}
                src={pic}
                alt={`profile ${i + 1}`}
                className={`w-12 h-12 object-cover border-2 ${i === picIndex ? 'border-primary' : 'border-border'} cursor-pointer`}
                onClick={() => setPicIndex(i)}
                loading="lazy"
                width={48}
                height={48}
              />
            ))}
          </div>
          <div className="flex justify-center sm:justify-end gap-3 mt-2">
            <button onClick={() => setPicIndex(Math.max(0, picIndex - 1))} className="text-foreground hover:text-primary">‹</button>
            <span className="text-primary">★</span>
            <button onClick={() => setPicIndex(Math.min(siteConfig.profilePics.length - 1, picIndex + 1))} className="text-foreground hover:text-primary">›</button>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="mt-4 border-t border-border pt-3">
        <p className="text-sm text-foreground italic">{siteConfig.statusMessage}</p>
      </div>
    </div>
  );
};

export default BioSection;
