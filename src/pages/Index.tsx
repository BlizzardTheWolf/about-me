import PageLayout from "@/components/PageLayout";
import BioSection from "@/components/BioSection";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <PageLayout showPaws={false}>
      <BioSection />
      <SocialLinks />
    </PageLayout>
  );
};

export default Index;
