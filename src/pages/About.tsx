import { AboutIntroSection } from "@/components/sections/AboutIntroSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function About() {
  usePageMeta({ title: "About Us | Himalaya Salt" });
  return (
    <main>
      <AboutIntroSection />
    </main>
  );
}
