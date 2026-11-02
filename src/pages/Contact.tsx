import { ContactSection } from "@/components/sections/ContactSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Contact() {
  usePageMeta({ title: "Contact | Himalaya Salt" });
  return (
    <main>
      <ContactSection />
    </main>
  );
}
