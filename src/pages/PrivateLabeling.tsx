import { PrivateLabelSection } from "@/components/sections/PrivateLabelSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function PrivateLabeling() {
  usePageMeta({ title: "Private Labeling | Himalaya Salt" });
  return (
    <main>
      <PrivateLabelSection />
    </main>
  );
}
