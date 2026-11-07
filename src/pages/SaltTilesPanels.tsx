import { SaltTilesSection } from "@/components/sections/SaltTilesSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function SaltTilesPanels() {
  usePageMeta({ title: "Salt Tiles & Panels | Himalaya Salt" });
  return (
    <main>
      <SaltTilesSection />
    </main>
  );
}
