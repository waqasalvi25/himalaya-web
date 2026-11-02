import { GalleryPageSection } from "@/components/sections/GalleryPageSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Gallery() {
  usePageMeta({ title: "Gallery | Himalaya Salt" });
  return (
    <main>
      <GalleryPageSection />
    </main>
  );
}
