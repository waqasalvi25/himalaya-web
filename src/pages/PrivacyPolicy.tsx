import { PageHero } from "@/components/site/PageHero";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function PrivacyPolicy() {
  usePageMeta({ title: "Privacy Policy | Himalaya Salt" });
  return (
    <main>
      <PageHero title="Privacy Policy" />
    </main>
  );
}
