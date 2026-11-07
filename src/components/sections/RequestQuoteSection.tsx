import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";

const ranges = [
  "Himalayan Pink Salt",
  "Kitchen and Seasoning",
  "Salt Tiles & Panels",
  "Home Decor Salt Lamp",
  "Industrial & Bulk Salt",
];

const labellingOptions = ["Yes", "No", "I would like to discuss it"];

type QuoteForm = {
  name: string;
  email: string;
  company: string;
  country: string;
  phone: string;
  range: string;
  quantity: string;
  packaging: string;
  labelling: string;
  destination: string;
  details: string;
  agree: boolean;
};

const empty: QuoteForm = {
  name: "",
  email: "",
  company: "",
  country: "",
  phone: "",
  range: "",
  quantity: "",
  packaging: "",
  labelling: "",
  destination: "",
  details: "",
  agree: false,
};

export function RequestQuoteSection() {
  const intro = useRise<HTMLDivElement>(true);
  const body = useRise<HTMLDivElement>(true);
  const [values, setValues] = useState<QuoteForm>(empty);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function update<K extends keyof QuoteForm>(key: K, value: QuoteForm[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function onFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      setFileName("");
      return;
    }
    const allowed = ["application/pdf", "image/jpeg", "image/png"].includes(file.type);
    if (!allowed) {
      setFileName("");
      setError("Please attach a PDF, JPG, or PNG file.");
      event.target.value = "";
      return;
    }
    setError("");
    setFileName(file.name);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (
      !values.name.trim() ||
      !values.email.trim() ||
      !values.company.trim() ||
      !values.country.trim() ||
      !values.range ||
      !values.quantity.trim() ||
      !values.destination.trim()
    ) {
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
      setError("Please agree to the Privacy Policy before sending your request.");
      setSent(false);
      return;
    }
    setError("");
    setSent(true);
    setValues(empty);
    setFileName("");
  }

  return (
    <section className="him-quote">
      <div className="him-container">
        <nav className="him-about-crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>Request a quote</span>
        </nav>
        <div ref={intro.ref} className={`him-quote-intro ${intro.className}`}>
          <h1>
            Tell us what <em className="normal-em">you need.</em>
          </h1>
          <p className="him-quote-lead">
            Help us understand your product, packaging, and delivery requirements so our team can
            prepare a relevant response.
          </p>
        </div>
      </div>

      <div className="him-about-band">
        <div className="him-container">
          <div ref={body.ref} className={`him-quote-split ${body.className}`}>
            <form className="him-form-card" onSubmit={onSubmit} noValidate>
              {sent ? (
                <p className="him-page-success" role="status">
                  Thank you. We have your requirements and will reply with the next details.
                </p>
              ) : (
                <>
                  <div className="him-form-grid">
                    <p className="him-about-kicker him-field-wide">Your details</p>
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
                        Business email <span className="him-req">*</span>
                      </span>
                      <input
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Business email *"
                        value={values.email}
                        onChange={(event) => update("email", event.target.value)}
                      />
                    </label>
                    <label className="him-field">
                      <span>
                        Company name <span className="him-req">*</span>
                      </span>
                      <input
                        name="organization"
                        autoComplete="organization"
                        placeholder="Company name *"
                        value={values.company}
                        onChange={(event) => update("company", event.target.value)}
                      />
                    </label>
                    <label className="him-field">
                      <span>
                        Country <span className="him-req">*</span>
                      </span>
                      <input
                        name="country"
                        autoComplete="country-name"
                        placeholder="Country *"
                        value={values.country}
                        onChange={(event) => update("country", event.target.value)}
                      />
                    </label>
                    <label className="him-field him-field-wide">
                      <span>Phone number</span>
                      <input
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="Phone number"
                        value={values.phone}
                        onChange={(event) => update("phone", event.target.value)}
                      />
                    </label>

                    <p className="him-about-kicker him-field-wide">Your requirements</p>
                    <label className="him-field him-field-wide">
                      <span>
                        Product range <span className="him-req">*</span>
                      </span>
                      <select
                        name="range"
                        className={values.range ? "" : "is-placeholder"}
                        value={values.range}
                        onChange={(event) => update("range", event.target.value)}
                      >
                        <option value="">Choose a product range</option>
                        {ranges.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="him-field">
                      <span>
                        Estimated quantity <span className="him-req">*</span>
                      </span>
                      <input
                        name="quantity"
                        placeholder="Estimated quantity *"
                        value={values.quantity}
                        onChange={(event) => update("quantity", event.target.value)}
                      />
                    </label>
                    <label className="him-field">
                      <span>Preferred packaging</span>
                      <input
                        name="packaging"
                        placeholder="Preferred packaging"
                        value={values.packaging}
                        onChange={(event) => update("packaging", event.target.value)}
                      />
                    </label>
                    <label className="him-field">
                      <span>Private labelling</span>
                      <select
                        name="labelling"
                        className={values.labelling ? "" : "is-placeholder"}
                        value={values.labelling}
                        onChange={(event) => update("labelling", event.target.value)}
                      >
                        <option value="">Select an option</option>
                        {labellingOptions.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="him-field">
                      <span>
                        Destination / delivery <span className="him-req">*</span>
                      </span>
                      <input
                        name="destination"
                        placeholder="Destination / delivery location *"
                        value={values.destination}
                        onChange={(event) => update("destination", event.target.value)}
                      />
                    </label>
                    <label className="him-field him-field-wide">
                      <span>Product specifications & additional details</span>
                      <textarea
                        name="details"
                        placeholder="Product specifications & additional details"
                        value={values.details}
                        onChange={(event) => update("details", event.target.value)}
                      />
                    </label>
                    <label className="him-upload him-field-wide">
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
                        onChange={onFile}
                      />
                      <span>{fileName || "+ Add a specification or artwork"}</span>
                      <small>PDF, JPG or PNG</small>
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
                      I agree to the <Link to="/privacy-policy">Privacy Policy</Link> and to being
                      contacted about this request.
                    </span>
                  </label>
                  {error ? (
                    <p className="him-page-error" role="alert">
                      {error}
                    </p>
                  ) : null}
                  <button type="submit" className="him-btn him-btn-accent">
                    Submit Quote Request
                  </button>
                  <p className="him-form-note">* Required fields</p>
                </>
              )}
            </form>

            <aside className="him-quote-aside">
              <div className="him-quote-frame">
                <img
                  src={images.galleryPage.pack}
                  alt="Himalayan salt pouches and a tube on a white shelf"
                />
              </div>
              <h2>
                A little detail makes <em className="normal-em">all the difference.</em>
              </h2>
              <p>
                Include the grain size or product format, expected quantity, and any market-specific
                requirements. If you are still exploring, tell us about the application.
              </p>
              <p className="him-about-kicker">What happens next</p>
              <p>
                Our team reviews your requirements and contacts you to clarify specifications,
                packaging, and commercial details. A submitted enquiry is not an order confirmation.
              </p>
              <hr className="him-soft-rule" />
              <h3>Not sure where to start?</h3>
              <p>Browse the product range or send us a general enquiry.</p>
              <Link to="/contact" className="him-btn him-btn-accent">
                Contact Us
              </Link>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
