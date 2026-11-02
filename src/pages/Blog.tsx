import { PageHero } from "@/components/site/PageHero";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Blog() {
  usePageMeta({ title: "Blog | Himalaya Salt" });
  return (
    <main>
      <PageHero title="Blog" />
    </main>
  );
}
