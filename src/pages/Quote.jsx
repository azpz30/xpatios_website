import { Section, Heading, Prose, Label } from '../components/ui';
import { CTA, Footer } from '../components';
import { site } from '../constants/site';
import { pageMeta } from './pageMeta';

const TITLE = 'Get a Free Quote | Xpatios Sydney Patios, Carports & Roofing';
const DESCRIPTION =
  'Request a free, no-obligation quote from Xpatios for patios, carports, decking, fencing or Colorbond roofing anywhere across Greater Sydney.';

export const meta = () => pageMeta({ title: TITLE, description: DESCRIPTION, path: '/quote' });

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
        no-obligation quote. Prefer to talk it through first? Call{' '}
        <a href={site.phoneHref} className="text-ink underline decoration-hairline underline-offset-[6px] hover:decoration-accent">
          {site.phone}
        </a>{' '}
        directly.
      </Prose>
    </Section>
    <CTA />
    <Footer />
  </>
);

export default Quote;
