import { ProductsPageSection } from "@/components/sections/ProductsPageSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Products({ title = "Products" }: { title?: string }) {
  usePageMeta({ title: `${title} | Himalaya Salt` });
  return (
    <main>
      <ProductsPageSection title={title} />
    </main>
  );
}
