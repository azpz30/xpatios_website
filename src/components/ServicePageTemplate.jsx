import { Link } from 'react-router';
import { Section, Container, Heading, Prose, Label, Button, ServiceRow } from './ui';
import { services } from '../constants/services';

// Fixed five-stage build process. Not part of services.js because it's the
// same pipeline for every service line — putting it there would mean
// repeating identical copy seven times for no benefit.
const PROCESS_STEPS = [
  {
    title: 'Consult',
    description: 'A free on-site visit to understand the brief, the block and what council will expect.',
  },
  {
    title: 'Quote',
    description: 'A clear, itemised quote, no vague allowances, no surprise variations later.',
  },
  {
    title: 'Council',
    description: 'We handle exempt development, CDC or DA paperwork so the build is fully compliant.',
  },
  {
    title: 'Build',
    description: 'Our own dedicated crew builds the job, not a rotating cast of subcontractors.',
  },
  {
    title: 'Inspect',
    description: 'A final walkthrough against the quote before we call the job done.',
  },
];

/**
 * Renders any one of the seven services in `src/constants/services.js`.
 * Section order follows docs/06-INFORMATION-ARCHITECTURE.md §3: breadcrumb,
 * H1, intro, types, benefits, council approval, process, FAQ, related, CTA.
 * `types`, `faqs` and `compliance` all come straight off the service
 * record — nothing here is per-slug content, so an 8th service needs zero
 * changes to this file.
 *
 * Deliberately omits: pricing (service.priceFrom is null sitewide — see
 * the TODO in services.js), hero photography and testimonials (no
 * service-tagged image or review data exists yet), and any FAQPage /
 * AggregateRating schema (owned by a separate workstream; see IA doc §8).
 */
const ServicePageTemplate = ({ service }) => {
  const currentIndex = services.findIndex((s) => s.slug === service.slug);
  const related = Array.from(
    { length: Math.min(3, services.length - 1) },
    (_, i) => services[(currentIndex + i + 1) % services.length]
  );
  const faqs = service.faqs ?? [];

  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="pt-8 md:pt-10">
        <Container>
          <ol className="flex flex-wrap items-center gap-2 text-small text-muted">
            <li>
              <Link to="/" className="hover:text-ink hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to="/services" className="hover:text-ink hover:underline">
                Services
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink">
              {service.name}
            </li>
          </ol>
        </Container>
      </nav>

      {/* H1 + intro */}
      <Section spacing="tight" as="div">
        <Label>{service.tagline}</Label>
        <Heading as="h1" size="h1" className="mt-4 max-w-[20ch]">
          {service.h1}
        </Heading>
        <Prose size="lede" className="mt-6">
          {service.intro ?? service.summary}
        </Prose>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button as="a" href="/quote">
            Get a free quote
          </Button>
          <Button as="a" href="/contact" variant="outline">
            Talk to us
          </Button>
        </div>
      </Section>

      {/* Types */}
      <Section hairline>
        <Label>Options</Label>
        <Heading as="h2" size="h2" className="mt-4">
          Types of {service.name}
        </Heading>
        <div className="mt-10 grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {service.types.map((type) => (
            <div key={type.name} className="bg-paper p-6 md:p-8">
              <Heading as="h3" size="h3">
                {type.name}
              </Heading>
              <p className="mt-2 text-body text-muted">{type.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section hairline>
        <Label>Why it&rsquo;s worth doing</Label>
        <Heading as="h2" size="h2" className="mt-4">
          Why choose {service.name.toLowerCase()}
        </Heading>
        <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {service.benefits.map((benefit) => (
            <li key={benefit} className="flex gap-3">
              <span aria-hidden="true" className="mt-1 text-accent">
                &#10003;
              </span>
              <span className="text-body text-ink/80">{benefit}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Council approval in NSW */}
      {service.compliance && (
        <Section hairline>
          <Label>Regulatory</Label>
          <Heading as="h2" size="h2" className="mt-4">
            Council approval in NSW
          </Heading>
          <Prose className="mt-6 text-ink/80">{service.compliance}</Prose>
          <p className="mt-6 max-w-[65ch] text-small text-muted">
            General guidance only, requirements vary by council and by
            property. We confirm what applies to your address before
            quoting.
          </p>
        </Section>
      )}

      {/* Process */}
      <Section hairline>
        <Label>How it works</Label>
        <Heading as="h2" size="h2" className="mt-4">
          Our process
        </Heading>
        <ol className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS_STEPS.map((step, i) => (
            <li key={step.title}>
              <span className="text-label font-mono text-muted tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <Heading as="h3" size="h3" className="mt-3">
                {step.title}
              </Heading>
              <span className="mt-2 block text-body text-muted">{step.description}</span>
            </li>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      <Section hairline>
        <Label>Questions</Label>
        <Heading as="h2" size="h2" className="mt-4">
          {service.name} FAQs
        </Heading>
        <div className="hairline-t mt-10 divide-y divide-hairline">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-sans text-body font-medium text-ink marker:content-none">
                {faq.q}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-h3 leading-none text-muted transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <Prose className="mt-4 text-ink/80">{faq.a}</Prose>
            </details>
          ))}
        </div>
      </Section>

      {/* Related services */}
      <Section hairline>
        <Label>Keep exploring</Label>
        <Heading as="h2" size="h2" className="mt-4">
          Related services
        </Heading>
        <div className="mt-4">
          {related.map((relatedService, i) => (
            <ServiceRow
              key={relatedService.slug}
              index={i + 1}
              title={relatedService.name}
              description={relatedService.tagline}
              href={`/services/${relatedService.slug}`}
            />
          ))}
        </div>
      </Section>

      {/* Closing CTA */}
      <Section hairline spacing="loose" className="bg-ink text-paper">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Heading as="h2" size="h2" className="text-paper">
              Ready to start your {service.name.toLowerCase()} project?
            </Heading>
            <p className="mt-4 max-w-[50ch] text-body text-paper/70">
              Tell us about your project and we&rsquo;ll come back with a free,
              no-obligation quote.
            </p>
          </div>
          <Button as="a" href="/quote" size="lg" className="shrink-0">
            Get a free quote
          </Button>
        </div>
      </Section>
    </>
  );
};

export default ServicePageTemplate;
