import { BlogPageSection } from "@/components/sections/BlogPageSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Blog() {
  usePageMeta({ title: "Blogs | Himalaya Salt" });
  return (
    <main>
      <BlogPageSection />
    </main>
  );
}
