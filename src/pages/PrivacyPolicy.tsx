import { LegalPageSection } from "@/components/sections/LegalPageSection";
import { usePageMeta } from "@/hooks/usePageMeta";

const sections = [
  {
    title: "Information you provide",
    text: "When you contact us or request a quotation, you may provide your name, business email, company, phone number, country, and details of your requirements. Include only the information needed to help us understand and respond to your enquiry. Do not submit sensitive personal information through an enquiry form.",
  },
  {
    title: "How enquiry information is used",
    text: "Information submitted through the website is intended to support your enquiry, clarify product and packaging requirements, and enable follow-up about the products or services you have requested. A quotation request may also include specifications, artwork, and destination details supplied by your business.",
  },
  {
    title: "Business documents & artwork",
    text: "Only send documents you are authorised to share. Remove unrelated personal or confidential information before submitting files. If your project requires a separate confidentiality arrangement, discuss this with our team before sharing commercially sensitive materials.",
  },
  {
    title: "Sharing & service support",
    text: "An enquiry may require coordination with people supporting product selection, account management, or supply arrangements. Contact us if you need clarification about how information relating to your specific request will be handled before sending it.",
  },
  {
    title: "Retention & security",
    text: "Please ask our team about retention and security arrangements relevant to your enquiry. Avoid sending payment credentials or other sensitive information through general website forms. No internet communication should be treated as a guaranteed secure channel.",
  },
  {
    title: "Your information & preferences",
    text: "You can contact us to ask about information you have provided, request a correction, or tell us you no longer wish to receive follow-up about an enquiry. Please identify the original request so the team can understand what you are referring to.",
  },
  {
    title: "External websites & updates",
    text: "Links to social platforms or other external websites are subject to the policies of those services. Review their privacy information separately. This page may be updated to reflect changes to website enquiry handling or published information.",
  },
];

export default function PrivacyPolicy() {
  usePageMeta({ title: "Privacy Policy | Himalaya Salt" });
  return (
    <main>
      <LegalPageSection
        crumb="Privacy Policy"
        title="Privacy"
        accent="Policy"
        lead="Information about contacting Himalaya Salt Company (Pvt.) Limited through this website and sharing details of your business enquiry."
        kicker="Website enquiries"
        asideBefore="Your information."
        asideAccent="A considered approach."
        asideText="Before sending personal information or project documents, please read the information on this page."
        sections={sections}
        noteTitle="Questions about privacy?"
        noteText="Use the Contact Us page to ask about the handling of your information. Please do not include sensitive information in your initial message."
        noteTo="/contact"
        noteLabel="Contact Us"
      />
    </main>
  );
}
