import { WhyHimalayaSection } from "@/components/sections/WhyHimalayaSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function WhyHimalaya() {
  usePageMeta({ title: "Why Himalaya | Himalaya Salt" });
  return (
    <main>
      <WhyHimalayaSection />
    </main>
  );
}
