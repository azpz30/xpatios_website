import { Link } from 'react-router';
import { Section, Heading, Prose, Label, Button } from '../components/ui';
import { Footer } from '../components';
import { features } from '../constants';
import { site, formattedAddress, isPlaceholder } from '../constants/site';
import { pageMeta } from './pageMeta';

const TITLE = 'About Xpatios | Civil-Engineer-Led Patio & Roofing Builders Sydney';
const DESCRIPTION =
  'Xpatios is a small, civil-engineer-led team building patios, carports, decking and Colorbond roofing across Greater Sydney, every job built by our own crew.';

export const meta = () => pageMeta({ title: TITLE, description: DESCRIPTION, path: '/about' });

const About = () => (
  <>
    <Section spacing="tight" as="div">
      <Label>About Xpatios</Label>
      <Heading as="h1" size="h1" className="mt-4 max-w-[22ch]">
        Creating dreams with beams, engineered properly
      </Heading>
      <Prose size="lede" className="mt-6">
        Xpatios and Metal Roofing builds patios, pergolas, carports, decking,
        fencing and Colorbond roofing across {site.serviceArea}. We&rsquo;re
        small on purpose, a dedicated team led by a civil engineer, not a
        sales floor that hands your job to whoever&rsquo;s free.
      </Prose>
    </Section>

    {/* The genuine differentiator: engineer-led, small dedicated team. */}
    <Section hairline>
      <Label>What actually makes us different</Label>
      <Heading as="h2" size="h2" className="mt-4">
        Civil-engineer-led, not sales-led
      </Heading>
      <Prose className="mt-6">
        Most outdoor building companies in Sydney are run by salespeople who
        subcontract the actual construction out, you meet one face for the
        quote and a different crew for the build. Xpatios is the opposite:
        every project is scoped and overseen by a civil engineer, and built
        by the same small team from first measure to final inspection.
      </Prose>
      <div>
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className="hairline-t flex items-baseline gap-5 py-8 md:gap-10 md:py-10"
          >
            <span className="text-label font-mono text-muted tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="flex-1">
              <Heading as="h3" size="h3">
                {feature.title}
              </Heading>
              <span className="mt-2 block text-body text-muted">{feature.content}</span>
            </span>
          </div>
        ))}
      </div>
    </Section>

    {/* NAP / trust strip */}
    <Section hairline>
      <Label>The details</Label>
      <Heading as="h2" size="h2" className="mt-4">
        Licensed, local, and easy to reach
      </Heading>
      <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <dt className="text-label font-mono uppercase tracking-[0.08em] text-muted">Phone</dt>
          <dd className="mt-2 text-body text-ink">
            <a href={site.phoneHref} className="hover:text-accent">
              {site.phone}
            </a>
          </dd>
        </div>
        {!isPlaceholder(site.licence) && (
          <div>
            <dt className="text-label font-mono uppercase tracking-[0.08em] text-muted">Licence</dt>
            <dd className="mt-2 text-body text-ink">{site.licence}</dd>
          </div>
        )}
        <div>
          <dt className="text-label font-mono uppercase tracking-[0.08em] text-muted">Servicing</dt>
          <dd className="mt-2 text-body text-ink">{site.serviceArea}</dd>
        </div>
        <div>
          <dt className="text-label font-mono uppercase tracking-[0.08em] text-muted">Based at</dt>
          <dd className="mt-2 text-body text-ink">{formattedAddress}</dd>
        </div>
      </dl>
    </Section>

    <Section hairline spacing="loose" className="bg-ink text-paper">
      <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Heading as="h2" size="h2" className="text-paper">
            Ready to talk about your project?
          </Heading>
          <p className="mt-4 max-w-[50ch] text-body text-paper/70">
            Get a free, no-obligation quote from the team that actually
            builds your job.
          </p>
        </div>
        <Button as={Link} to="/quote" size="lg" className="shrink-0">
          Get a free quote
        </Button>
      </div>
    </Section>

    <Footer />
  </>
);

export default About;
