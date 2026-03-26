import { siteConfig } from "@/config/site";
import RetroWindow from "@/components/RetroWindow";
import NavBar from "@/components/NavBar";
import BioSection from "@/components/BioSection";
import SocialLinks from "@/components/SocialLinks";
import pawBg from "@/assets/paw-bg.png";

const Index = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundImage: `url(${pawBg})`, backgroundRepeat: "repeat", backgroundSize: "200px" }}
    >
      <RetroWindow title={siteConfig.windowTitle}>
        <NavBar />
        <BioSection />
        <SocialLinks />
      </RetroWindow>
    </div>
  );
};

export default Index;
