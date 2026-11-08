import { BlogArticleSection } from "@/components/sections/BlogArticleSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function BlogArticle() {
  usePageMeta({ title: "Himalayan Pink Salt: From Origin to Application | Himalaya Salt" });
  return (
    <main>
      <BlogArticleSection />
    </main>
  );
}
