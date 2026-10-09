import { Link } from 'react-router';
import { Section, Heading, Prose, Label, Button } from '../components/ui';
import { Footer } from '../components';
import { site } from '../constants/site';
import { pageMeta } from './pageMeta';

const TITLE = 'Thanks for Your Enquiry | Xpatios';
const DESCRIPTION = 'Your quote request has been received, Xpatios will be in touch shortly.';

// Post-submit confirmation. noindex — this page has no reason to rank and
// shouldn't be a crawlable entry point.
export const meta = () => pageMeta({ title: TITLE, description: DESCRIPTION, path: '/thank-you', noindex: true });

// NOTE: the quote form on /quote (src/components/CTA.jsx) currently shows
// an inline success message rather than navigating here — this route
// exists for the sitemap/IA now, but isn't yet wired as a redirect target.
// That wiring belongs with whichever phase replaces the EmailJS call with
// a real backend endpoint (see the comment at the top of CTA.jsx).
const ThankYou = () => (
  <>
    <Section spacing="loose" as="div">
      <Label>Request received</Label>
      <Heading as="h1" size="h1" className="mt-4 max-w-[20ch]">
        Thanks, we&rsquo;ve got your request
      </Heading>
      <Prose size="lede" className="mt-6">
        A member of the Xpatios team will be in touch shortly to talk
        through your project. If it&rsquo;s urgent, call us directly on{' '}
        <a href={site.phoneHref} className="text-ink underline decoration-hairline underline-offset-[6px] hover:decoration-accent">
          {site.phone}
        </a>
        .
      </Prose>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button as={Link} to="/">
          Back to home
        </Button>
        <Button as={Link} to="/gallery" variant="outline">
          See our work
        </Button>
      </div>
    </Section>
    <Footer />
  </>
);

export default ThankYou;
