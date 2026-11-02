import { PageHero } from "@/components/site/PageHero";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function TermsConditions() {
  usePageMeta({ title: "Terms & Conditions | Himalaya Salt" });
  return (
    <main>
      <PageHero title="Terms & Conditions" />
    </main>
  );
}
