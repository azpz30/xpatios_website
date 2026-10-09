import { useState } from "react";
import emailjs from "emailjs-com";
import { Section, Heading, Prose, Label, Button } from "./ui";

// The one quote form on the site — always visible, never gated behind a
// click. A Worker endpoint replaces the EmailJS call in a later phase;
// the send logic below is otherwise unchanged.
const FIELDS = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  {
    name: "phoneNumber",
    label: "Phone number",
    type: "tel",
    autoComplete: "tel",
  },
  {
    name: "address",
    label: "Project address",
    type: "text",
    autoComplete: "street-address",
  },
];

const inputClasses =
  "w-full border border-hairline bg-paper px-4 py-3 text-body text-ink outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    description: "",
  });
  // idle | submitting | success | error
  const [status, setStatus] = useState("idle");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");

    emailjs
      .send(
        "service_fgb2d2k", // EmailJS service ID
        "template_w12v8t7", // EmailJS template ID
        {
          to_name: "Tanvir HN",
          from_name: formData.name,
          user_email: formData.email,
          phone_number: formData.phoneNumber,
          user_address: formData.address,
          user_description: formData.description,
        },
        "Rl35Y5E3j58NqP-5d" // EmailJS public key
      )
      .then(() => {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          address: "",
          description: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatus("error");
      });
  };

  return (
    <Section as="section" id="quote" hairline>
      <div className="grid gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <Heading as="h2" size="h2">
            Get a free quote
          </Heading>
          <Prose className="mt-5">
            Your dream project begins with a simple, free quote request.
            Tell us a little about the job and we&rsquo;ll be in touch.
          </Prose>
        </div>

        <form
          onSubmit={handleFormSubmit}
          noValidate
          className="flex flex-col gap-6"
        >
          {FIELDS.map((field) => (
            <div key={field.name} className="flex flex-col gap-2">
              <Label as="label" htmlFor={`quote-${field.name}`}>
                {field.label}
              </Label>
              <input
                id={`quote-${field.name}`}
                type={field.type}
                name={field.name}
                autoComplete={field.autoComplete}
                value={formData[field.name]}
                onChange={handleInputChange}
                required
                className={inputClasses}
              />
            </div>
          ))}

          <div className="flex flex-col gap-2">
            <Label as="label" htmlFor="quote-description">
              Project details
            </Label>
            <textarea
              id="quote-description"
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleInputChange}
              required
              className={inputClasses}
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            disabled={status === "submitting"}
            className="mt-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Send quote request"}
          </Button>

          <p aria-live="polite" className="text-small text-muted">
            {status === "success" &&
              "Thanks, we’ve received your request and will be in touch shortly."}
            {status === "error" &&
              "Something went wrong sending your request. Please try again or call us directly."}
          </p>
        </form>
      </div>
    </Section>
  );
};

export default CTA;
