import PageLayout from "@/components/PageLayout";
import { siteConfig } from "@/config/site";

const RulesPage = () => {
  const { title, emoji, items } = siteConfig.pages.rules;

  return (
    <PageLayout>
      <div className="p-4">
        <h1 className="font-retro text-2xl text-primary font-bold mb-4">{emoji} {title}</h1>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm font-mono-body">
              <span className="text-primary mt-0.5">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
};

export default RulesPage;
