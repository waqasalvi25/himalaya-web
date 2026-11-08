import { FaqSection } from "@/components/sections/FaqSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Faq() {
  usePageMeta({ title: "FAQs | Himalaya Salt" });
  return (
    <main>
      <FaqSection />
    </main>
  );
}
