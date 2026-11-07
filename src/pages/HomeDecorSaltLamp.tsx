import { LampSection } from "@/components/sections/LampSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function HomeDecorSaltLamp() {
  usePageMeta({ title: "Home Decor Salt Lamp | Himalaya Salt" });
  return (
    <main>
      <LampSection />
    </main>
  );
}
