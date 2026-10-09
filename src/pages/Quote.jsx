import { Section, Heading, Prose, Label } from '../components/ui';
import { CTA, Footer } from '../components';
import { site } from '../constants/site';
import { feedback, GOOGLE_RATING, GOOGLE_REVIEWS_URL } from '../constants';
import { pageMeta } from './pageMeta';

const TITLE = 'Get a Free Quote | Xpatios Sydney Patios, Carports & Roofing';
const DESCRIPTION =
  'Request a free, no-obligation quote from Xpatios for patios, carports, decking, fencing or Colorbond roofing anywhere across Greater Sydney.';

export const meta = () => pageMeta({ title: TITLE, description: DESCRIPTION, path: '/quote' });

const linkClasses =
  'text-ink underline decoration-hairline underline-offset-[6px] hover:decoration-accent';

// Pinned by id, not index — reordering the constants file shouldn't silently
// swap the review shown here. This one speaks to price fairness, which is the
// doubt someone has while filling in a quote form.
const TESTIMONIAL = feedback.find((item) => item.id === 'feedback-6');

// Every claim below is sourced from existing site content: the Stratco
// partnership from MegaPartner.jsx, the own-crew line from About.jsx, the
// site-visit step from the pricing FAQs in constants/services.js. Deliberately
// absent: years in business and the licence number, both still TODO
// placeholders in site.js / constants/index.js. Unverified trust claims on a
// trades site are an ACL exposure, so they stay off until confirmed.
const STEPS = [
  `We review your details and come back to you ${site.responseTime}.`,
  'Most jobs need a quick site visit, we book a time that suits you.',
  'You get a clear, no-obligation quote. No pressure to proceed.',
];

// The left column of the CTA grid. On the homepage that column holds the
// section heading; here the page <h1> already says it, so the space earns its
// keep by answering "what am I signing up for, and who are these people?"
// instead — this is the one page that asks for a home address.
const QuoteAside = () => (
  <div className="md:sticky md:top-28">
    <Label>What happens next</Label>
    <ol className="mt-5 flex flex-col gap-4">
      {STEPS.map((step, index) => (
        <li key={step} className="flex gap-4">
          <span
            aria-hidden="true"
            className="pt-1 font-mono text-label tabular-nums text-muted"
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="max-w-[46ch] text-body text-ink">{step}</span>
        </li>
      ))}
    </ol>

    <div className="hairline-t mt-10 pt-8">
      <Label>Why Xpatios</Label>
      <ul className="mt-5 flex flex-col gap-3 text-body text-ink">
        <li>Official Stratco supplier partner</li>
        <li>Every job built by our own crew, never subcontracted</li>
        <li>
          Rated {GOOGLE_RATING.average.toFixed(1)} on{' '}
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            Google
          </a>
        </li>
      </ul>
    </div>

    {TESTIMONIAL && (
      <figure className="hairline-t mt-10 pt-8">
        <blockquote className="max-w-[46ch] text-body text-ink">
          &ldquo;{TESTIMONIAL.content}&rdquo;
        </blockquote>
        <figcaption className="mt-4">
          <Label as="span">
            {TESTIMONIAL.name} &middot; {TESTIMONIAL.source}
          </Label>
        </figcaption>
      </figure>
    )}
  </div>
);

// This reuses the existing single-step `CTA` form (EmailJS-backed) as-is —
// see src/components/CTA.jsx. It is NOT reimplemented here. The 3-step
// form described in docs/06-INFORMATION-ARCHITECTURE.md §7 (service ›
// project details › contact info, with a Turnstile check and a dedicated
// backend endpoint) is a later phase; this page is the placeholder that
// gives the quote flow its own indexable URL in the meantime.
const Quote = () => (
  <>
    <Section spacing="tight" as="div">
      <Label>Free quote</Label>
      <Heading as="h1" size="h1" className="mt-4 max-w-[22ch]">
        Request your free quote
      </Heading>
      <Prose size="lede" className="mt-6">
        Tell us about your project and we&rsquo;ll come back with a clear,
        no-obligation quote.
      </Prose>
    </Section>
    <CTA aside={<QuoteAside />} />
    {/* The phone number sits AFTER the form, deliberately. Anyone who lands
        on /quote has already chosen the form; offering a call above it hands
        them an exit before they reach the thing they came for. Down here it
        catches the people who stalled on the form instead of diverting the
        ones who were going to fill it in. */}
    <Section spacing="tight" as="div" hairline>
      <Prose>
        Would rather talk it through? Call{' '}
        <a href={site.phoneHref} className={linkClasses}>
          {site.phone}
        </a>{' '}
        and we&rsquo;ll go through it with you over the phone.
      </Prose>
    </Section>
    <Footer />
  </>
);

export default Quote;
