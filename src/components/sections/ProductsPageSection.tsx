import { PageHero } from "@/components/site/PageHero";

export function ProductsPageSection({ title = "Products" }: { title?: string }) {
  return <PageHero title={title} />;
}
