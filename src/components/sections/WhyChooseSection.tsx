import { useRise } from "@/components/motion/Reveal";

const reasons = [
  {
    num: "01",
    title: "Authentic Origin",
    text: "Directly sourced from the Himalayan Salt Range of Pakistan — the world's most renowned and ancient salt deposit, untouched by modern pollution.",
  },
  {
    num: "02",
    title: "Quality Certified",
    text: "All products are processed under strict quality controls and meet international food safety and export standards, ensuring purity in every batch.",
  },
  {
    num: "03",
    title: "Global Reach",
    text: "We supply to over 30 countries across Europe, North America, Asia, and the Middle East, with reliable logistics and timely delivery.",
  },
  {
    num: "04",
    title: "End-to-End Support",
    text: "From private labelling and custom packaging to bulk shipments and dedicated account management, we partner with you at every stage.",
  },
];

export function WhyChooseSection() {
  const head = useRise<HTMLDivElement>();
  const cards = useRise<HTMLDivElement>();

  return (
    <section className="him-section him-why">
      <div className="him-container">
        <div ref={head.ref} className={`him-why-head ${head.className}`}>
          <h2 className="him-display him-display-inline">
            Why Choose <em>Himalaya Salt</em>
          </h2>
          <p>
            Trusted by importers, distributors, and retailers across the globe for our
            uncompromising standards and consistent supply.
          </p>
        </div>

        <div ref={cards.ref} className={`him-why-grid ${cards.className}`}>
          {reasons.map((reason) => (
            <article key={reason.num} className="him-why-card">
              <span>{reason.num}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
