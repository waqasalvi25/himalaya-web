import { BulkSection } from "@/components/sections/BulkSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function IndustrialBulkSalt() {
  usePageMeta({ title: "Industrial & Bulk Salt | Himalaya Salt" });
  return (
    <main>
      <BulkSection />
    </main>
  );
}
