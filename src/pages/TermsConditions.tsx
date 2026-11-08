import { LegalPageSection } from "@/components/sections/LegalPageSection";
import { usePageMeta } from "@/hooks/usePageMeta";

const sections = [
  {
    title: "About this website",
    text: "This website introduces the Himalayan salt products and services of Himalaya Salt Company (Pvt.) Limited. Its content is provided as a starting point for product selection and business enquiries, rather than as an individual offer or order confirmation.",
  },
  {
    title: "Product information & natural variation",
    text: "Himalayan salt is a natural material. Colour, crystal formation, texture, and shape may vary. Images illustrate the range and should not be treated as an exact representation of every piece. Confirm the relevant product specification and acceptance criteria before ordering.",
  },
  {
    title: "Enquiries & quotations",
    text: "Submitting a form or requesting a quotation does not create a confirmed order. Product availability, specifications, minimum quantities, pricing, packing, payment, and shipping terms must be confirmed separately with our team in the applicable commercial documents.",
  },
  {
    title: "Private labelling & supplied artwork",
    text: "You are responsible for ensuring you have permission to share and use any logos, artwork, and documents supplied for a project. Product information, packaging details, and destination-market labelling requirements should be reviewed and agreed before production is authorised.",
  },
  {
    title: "Suitability, installation & care",
    text: "Select products for their intended application and follow the relevant care and safety instructions. Confirm food-use requirements, electrical compatibility, or installation conditions as applicable. Architectural features should be assessed and installed by appropriately qualified professionals.",
  },
  {
    title: "Website content & external links",
    text: "We do not reproduce or use website content in a way that misrepresents the company or its products. External websites and social channels are subject to their own terms. Their content and availability are not part of an individual product or supply agreement.",
  },
  {
    title: "Privacy & communications",
    text: "Please read the Privacy Policy before submitting personal information. Use website forms for relevant business enquiries and avoid sending payment credentials, sensitive personal information, or confidential material without prior agreement.",
  },
  {
    title: "Questions & order-specific terms",
    text: "Contact our team if any website information is unclear. For an order, refer to the quotation, agreed specification, and commercial documents applicable to that transaction. Resolve questions about requirements before proceeding.",
  },
];

export default function TermsConditions() {
  usePageMeta({ title: "Terms & Conditions | Himalaya Salt" });
  return (
    <main>
      <LegalPageSection
        crumb="Terms & Conditions"
        title="Terms &"
        accent="Conditions"
        lead="Please read this information when browsing our website, making a product enquiry, or discussing a business requirement."
        kicker="Website information"
        asideBefore="Clarity at"
        asideAccent="every step."
        asideText="Product and supply arrangements are confirmed separately for each business requirement."
        sections={sections}
        noteTitle="Ready to discuss your requirements?"
        noteText="Share your product, quantity, packaging, and destination for a tailored enquiry."
        noteTo="/request-a-quote"
        noteLabel="Request a Quote"
      />
    </main>
  );
}
