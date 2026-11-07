import { DownloadCatalogSection } from "@/components/sections/DownloadCatalogSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function DownloadCatalog() {
  usePageMeta({ title: "Download Catalog | Himalaya Salt" });
  return (
    <main>
      <DownloadCatalogSection />
    </main>
  );
}
