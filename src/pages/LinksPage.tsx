import PageLayout from "@/components/PageLayout";
import SocialLinks from "@/components/SocialLinks";

const LinksPage = () => {
  return (
    <PageLayout showPaws={false}>
      <div className="p-4">
        <h1 className="font-retro text-2xl text-primary font-bold mb-4">🔗 Links</h1>
      </div>
      <SocialLinks />
    </PageLayout>
  );
};

export default LinksPage;
