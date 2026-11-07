import { RequestQuoteSection } from "@/components/sections/RequestQuoteSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function RequestQuote() {
  usePageMeta({ title: "Request a Quote | Himalaya Salt" });
  return (
    <main>
      <RequestQuoteSection />
    </main>
  );
}
