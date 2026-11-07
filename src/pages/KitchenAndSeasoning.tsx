import { KitchenSection } from "@/components/sections/KitchenSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function KitchenAndSeasoning() {
  usePageMeta({ title: "Kitchen and Seasoning | Himalaya Salt" });
  return (
    <main>
      <KitchenSection />
    </main>
  );
}
