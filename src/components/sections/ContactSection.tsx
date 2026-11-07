import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useRise } from "@/components/motion/Reveal";

const subjects = ["Product enquiry", "Private labelling", "Bulk & export", "General question"];

const help = [
  {
    title: "Product enquiries",
    text: "Discuss formats, intended applications, and the information you need to choose a product.",
  },
  {
    title: "Private labelling",
    text: "Tell us about your brand and the range you would like to create.",
  },
  {
    title: "Bulk & export",
    text: "Share quantity, destination, and packing requirements for your supply enquiry.",
  },
];

type ContactForm = {
  name: string;
  email: string;
  company: string;
  country: string;
  subject: string;
  message: string;
  agree: boolean;
};

const empty: ContactForm = {
  name: "",
  email: "",
  company: "",
  country: "",
  subject: "",
  message: "",
  agree: false,
};

export function ContactSection() {
  const intro = useRise<HTMLDivElement>(true);
  const conversation = useRise<HTMLDivElement>(true);
  const guides = useRise<HTMLDivElement>(true);
  const [values, setValues] = useState<ContactForm>(empty);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function update<K extends keyof ContactForm>(key: K, value: ContactForm[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!values.name.trim() || !values.email.trim() || !values.subject || !values.message.trim()) {
      setError("Please complete the required fields.");
      setSent(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError("Enter a valid email address.");
      setSent(false);
      return;
    }
    if (!values.agree) {
      setError("Please agree to be contacted about your enquiry.");
      setSent(false);
      return;
    }
    setError("");
    setSent(true);
    setValues(empty);
  }

  return (
    <section className="him-contact">
      <div className="him-container">
        <nav className="him-about-crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>Contact Us</span>
        </nav>
        <div ref={intro.ref} className={`him-contact-intro ${intro.className}`}>
          <h1>
            Let’s work <em className="normal-em">together.</em>
          </h1>
          <p className="him-contact-lead">
            Speak with our team about Himalayan salt products, private labelling, or supply
            requirements. Tell us what you have in mind and we can help you take the next step.
          </p>
        </div>
      </div>

      <div className="him-about-band contact-box">
        <div className="him-container">
          <div ref={conversation.ref} className={`him-contact-split ${conversation.className}`}>
            <div className="him-contact-copy">
              <p className="him-about-kicker">Himalaya Salt Company</p>
              <h2>
                A conversation starts
                <br />
                <em className="normal-em">something good.</em>
              </h2>
              <p>
                For a product question, a new brand, or an upcoming project, share a few details
                with our team.
              </p>
              <hr className="him-soft-rule" />
              <p className="him-about-kicker">Location</p>
              <p className="him-contact-place">Pakistan</p>
              <p className="him-contact-ask">Planning an order?</p>
              <p>
                For a tailored quotation, include the product, quantity, packaging, and destination
                in your message.
              </p>
              <Link to="/request-a-quote" className="him-btn him-btn-accent">
                Request a Quote
              </Link>
            </div>

            <form className="him-form-card" onSubmit={onSubmit} noValidate>
              <h2>Send us a message</h2>
              {sent ? (
                <p className="him-page-success" role="status">
                  Thank you. Your message is with our team, and we will reply shortly.
                </p>
              ) : (
                <>
                  <div className="him-form-grid">
                    <label className="him-field">
                      <span>
                        Full name <span className="him-req">*</span>
                      </span>
                      <input
                        name="name"
                        autoComplete="name"
                        placeholder="Full name *"
                        value={values.name}
                        onChange={(event) => update("name", event.target.value)}
                      />
                    </label>
                    <label className="him-field">
                      <span>
                        Email address <span className="him-req">*</span>
                      </span>
                      <input
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Email address *"
                        value={values.email}
                        onChange={(event) => update("email", event.target.value)}
                      />
                    </label>
                    <label className="him-field">
                      <span>Company</span>
                      <input
                        name="organization"
                        autoComplete="organization"
                        placeholder="Company"
                        value={values.company}
                        onChange={(event) => update("company", event.target.value)}
                      />
                    </label>
                    <label className="him-field">
                      <span>Country</span>
                      <input
                        name="country"
                        autoComplete="country-name"
                        placeholder="Country"
                        value={values.country}
                        onChange={(event) => update("country", event.target.value)}
                      />
                    </label>
                    <label className="him-field him-field-wide">
                      <span>
                        Enquiry subject <span className="him-req">*</span>
                      </span>
                      <select
                        name="subject"
                        className={values.subject ? "" : "is-placeholder"}
                        value={values.subject}
                        onChange={(event) => update("subject", event.target.value)}
                      >
                        <option value="">Select an enquiry type</option>
                        {subjects.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="him-field him-field-wide">
                      <span>
                        Your message <span className="him-req">*</span>
                      </span>
                      <textarea
                        name="message"
                        placeholder="Your message *"
                        value={values.message}
                        onChange={(event) => update("message", event.target.value)}
                      />
                    </label>
                  </div>
                  <label className="him-check">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={values.agree}
                      onChange={(event) => update("agree", event.target.checked)}
                    />
                    <span>
                      I have read the <Link to="/privacy-policy">Privacy Policy</Link> and agree to
                      be contacted about my enquiry.
                    </span>
                  </label>
                  {error ? (
                    <p className="him-page-error" role="alert">
                      {error}
                    </p>
                  ) : null}
                  <button type="submit" className="him-btn him-btn-accent">
                    Send Message
                  </button>
                  <p className="him-form-note">* Required fields</p>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="him-container">
        <div ref={guides.ref} className={`him-contact-help ${guides.className}`}>
          <h2>
            How can we <em className="normal-em">help?</em>
          </h2>
          <div className="him-contact-cards">
            {help.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
