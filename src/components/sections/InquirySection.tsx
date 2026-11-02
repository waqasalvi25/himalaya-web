import { FormEvent, useState } from "react";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";

type FormState = {
  name: string;
  email: string;
  phone: string;
};

const empty: FormState = { name: "", email: "", phone: "" };

export function InquirySection() {
  const panel = useRise<HTMLDivElement>(true);
  const [values, setValues] = useState<FormState>(empty);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!values.name.trim() || !values.email.trim() || !values.phone.trim()) {
      setError("Please complete every field.");
      setSent(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError("Enter a valid email address.");
      setSent(false);
      return;
    }
    setError("");
    setSent(true);
    setValues(empty);
  }

  return (
    <section className="him-inquiry-wrap" id="quote">
      <div className="him-container2">
        <div ref={panel.ref} className={`him-inquiry ${panel.className}`}>
          <img src={images.mountains} alt="" className="him-inquiry-bg" />
          <div className="him-inquiry-shade" />
          <div className="him-inquiry-copy">
            <p className="him-kicker him-kicker-light">Work with us</p>
            <h2 className="him-display">Ready to Source Premium Himalayan Salt Products?</h2>
            {sent ? (
              <p className="him-inquiry-success" role="status">
                Thank you. We will reply with grades, pack options, and a quote.
              </p>
            ) : (
              <form className="him-inquiry-form" onSubmit={onSubmit} noValidate>
                <label>
                  <span className="sr-only">Your name</span>
                  <input
                    name="name"
                    placeholder="Your Name"
                    autoComplete="name"
                    value={values.name}
                    onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
                  />
                </label>
                <label>
                  <span className="sr-only">Email address</span>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    autoComplete="email"
                    value={values.email}
                    onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
                  />
                </label>
                <label>
                  <span className="sr-only">Phone number</span>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={(event) => setValues((current) => ({ ...current, phone: event.target.value }))}
                  />
                </label>
                <button type="submit" className="him-btn him-btn-accent">
                  Get a Quote
                </button>
                {error ? <p className="him-form-error">{error}</p> : null}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
