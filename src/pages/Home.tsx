import { CatalogueSection } from "@/components/sections/CatalogueSection";
import { GalleryPreviewSection } from "@/components/sections/GalleryPreviewSection";
import { HeritageSection } from "@/components/sections/HeritageSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InquirySection } from "@/components/sections/InquirySection";
import { ProductRangeSection } from "@/components/sections/ProductRangeSection";
import { RootedSection } from "@/components/sections/RootedSection";
import { WhiteLabelSection } from "@/components/sections/WhiteLabelSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Home() {
  usePageMeta({
    title: "Himalaya Salt",
    description:
      "Premium Himalayan pink salt for kitchens, wellness spaces, and private-label brands.",
  });

  return (
    <main>
      <HeroSection />
      <HeritageSection />
      <RootedSection />
      <ProductRangeSection />
      <WhiteLabelSection />
      <WhyChooseSection />
      <CatalogueSection />
      <GalleryPreviewSection />
      <InquirySection />
    </main>
  );
}
