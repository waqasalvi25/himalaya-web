import { HimalayanPinkSaltSection } from "@/components/sections/HimalayanPinkSaltSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function HimalayanPinkSalt() {
  usePageMeta({ title: "Himalayan Pink Salt | Himalaya Salt" });
  return (
    <main>
      <HimalayanPinkSaltSection />
    </main>
  );
}
