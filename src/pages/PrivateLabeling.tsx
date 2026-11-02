import { PageHero } from "@/components/site/PageHero";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function PrivateLabeling() {
  usePageMeta({ title: "Private Labeling | Himalaya Salt" });
  return (
    <main>
      <PageHero title="Private Labeling" />
    </main>
  );
}
