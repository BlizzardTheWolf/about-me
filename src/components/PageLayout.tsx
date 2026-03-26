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
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundImage: `url(${pawBg})`, backgroundRepeat: "repeat", backgroundSize: "200px" }}
    >
      <RetroWindow title={siteConfig.windowTitle}>
        <NavBar />
        {children}
      </RetroWindow>
    </div>
  );
};

export default PageLayout;
