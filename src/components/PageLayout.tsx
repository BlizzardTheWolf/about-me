import { ReactNode } from "react";
import { siteConfig } from "@/config/site";
import RetroWindow from "@/components/RetroWindow";
import NavBar from "@/components/NavBar";
import pawBg from "@/assets/paw-bg.png";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center p-4"
      style={{ backgroundImage: `url(${pawBg})`, backgroundRepeat: "repeat", backgroundSize: "200px" }}
    >
      {/* 🐾 De GIF aan de linkerkant van het venster */}
      <img 
        src="/paws.gif" 
        alt="walking paws" 
        className="absolute left-4 md:left-10 lg:left-20 top-1/2 -translate-y-1/2 w-32 md:w-48 opacity-40 pointer-events-none hidden md:block" 
      />

      {/* 🐾 Optioneel: De GIF ook aan de rechterkant (gespiegeld) */}
      <img 
        src="/paws.gif" 
        alt="walking paws" 
        className="absolute right-4 md:right-10 lg:right-20 top-1/2 -translate-y-1/2 w-32 md:w-48 opacity-40 pointer-events-none hidden md:block scale-x-[-1]" 
      />

      <RetroWindow title={siteConfig.windowTitle}>
        <NavBar />
        {children}
      </RetroWindow>
    </div>
  );
};

export default PageLayout;
