import { useState } from "react";
import emailjs from "emailjs-com";
import { Section, Heading, Prose, Label, Button } from "./ui";
import { services } from "../constants/services";
import { site } from "../constants/site";

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

// Driven off services.js so a new service line appears here automatically
// rather than being duplicated.
const SELECTS = [
  {
    name: "service",
    label: "Service required",
    placeholder: "Select a service",
    options: services.map((service) => service.name),
  },
  {
    name: "budget",
    label: "Budget",
    placeholder: "Select a budget range",
    options: [
      "$3,000 – $5,000",
      "$5,000 – $10,000",
      "$10,000 – $15,000",
      "$15,000 – $20,000",
      "$20,000 – $30,000",
      "$30,000 – $50,000",
    ],
  },
];

const inputClasses =
  "w-full border border-hairline bg-paper px-4 py-3 text-body text-ink outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30";

// Same box as inputClasses, minus the text colour — that is set per-select so
// the unchosen placeholder reads as muted. The native chevron is kept (no
// `appearance-none`) so the control still looks tappable on iOS.
const selectClasses =
  "w-full border border-hairline bg-paper px-4 py-3 text-body outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30";

/**
 * `aside` replaces the left-hand column. On the homepage this section is one
 * of many and needs its own heading, so the default stands. On /quote the
 * page already carries an <h1> saying the same thing, so that page passes its
 * own trust panel instead of repeating the heading.
 */
const CTA = ({ aside }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    service: "",
    budget: "",
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

    // The EmailJS template (template_w12v8t7) lives in the EmailJS dashboard,
    // not in this repo, and only renders the placeholders it already has. So
    // service and budget ride along at the top of `user_description` — which
    // the template does render — instead of needing {{user_service}} and
    // {{user_budget}} added over there. They are also still sent as their own
    // params below; if those placeholders are ever added to the template,
    // drop this prefix or the email will show both.
    const descriptionWithDetails = [
      `Service required: ${formData.service}`,
      `Budget: ${formData.budget}`,
      "",
      formData.description,
    ].join("\n");

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
          user_service: formData.service,
          user_budget: formData.budget,
          user_description: descriptionWithDetails,
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
          service: "",
          budget: "",
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
          {aside ?? (
            <>
              <Heading as="h2" size="h2">
                Get a free quote
              </Heading>
              <Prose className="mt-5">
                Your dream project begins with a simple, free quote request.
                Tell us a little about the job and we&rsquo;ll be in touch.
              </Prose>
            </>
          )}
        </div>

        {/* No `noValidate` — every field is required, so the browser's own
            validation is what enforces it on submit. */}
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
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

          {SELECTS.map((field) => (
            <div key={field.name} className="flex flex-col gap-2">
              <Label as="label" htmlFor={`quote-${field.name}`}>
                {field.label}
              </Label>
              <select
                id={`quote-${field.name}`}
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                required
                className={`${selectClasses} ${
                  formData[field.name] ? "text-ink" : "text-muted"
                }`}
              >
                <option value="" disabled>
                  {field.placeholder}
                </option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
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
              `Thanks, we’ve received your request and will be in touch ${site.responseTime}.`}
            {status === "error" && (
              <>
                Something went wrong sending your request. Please try again,
                or call us on{" "}
                <a
                  href={site.phoneHref}
                  className="text-ink underline decoration-hairline underline-offset-[6px] hover:decoration-accent"
                >
                  {site.phone}
                </a>
                .
              </>
            )}
          </p>
        </form>
      </div>
    </Section>
  );
};

export default CTA;
