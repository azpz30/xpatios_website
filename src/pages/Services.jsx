import { Link } from 'react-router';
import { Section, Heading, Prose, Label, Button, ServiceRow } from '../components/ui';
import { Footer } from '../components';
import { services } from '../constants/services';
import { pageMeta } from './pageMeta';

const TITLE = 'Patio, Roofing & Outdoor Building Services Sydney | Xpatios';
const DESCRIPTION =
  'Metal roofing, guttering, patios & pergolas, carports, decking, fencing and sunrooms, engineer-led outdoor building across Greater Sydney. Free quotes.';

export const meta = () => pageMeta({ title: TITLE, description: DESCRIPTION, path: '/services' });

// The internal-linking hub: every service gets a row here, and every
// service page links back through the breadcrumb and its own related-
// services module. This is the only place all seven are listed in one
// view — driven entirely by src/constants/services.js.
const Services = () => (
  <>
    <Section spacing="tight" as="div">
      <Label>What we build</Label>
      <Heading as="h1" size="h1" className="mt-4 max-w-[24ch]">
        Outdoor building & roofing services across Sydney
      </Heading>
      <Prose size="lede" className="mt-6">
        Seven service lines, one civil-engineer-led team. Every job, from a
        single Colorbond re-roof to a full enclosed sunroom, is measured,
        quoted and built by the same small crew, not handed off to
        subcontractors.
      </Prose>
    </Section>

    <Section hairline>
      <div>
        {services.map((service, index) => (
          <ServiceRow
            key={service.slug}
            index={index + 1}
            title={service.name}
            description={service.summary}
            href={`/services/${service.slug}`}
          />
        ))}
      </div>
    </Section>

    <Section hairline spacing="loose" className="bg-ink text-paper">
      <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Heading as="h2" size="h2" className="text-paper">
            Not sure which service you need?
          </Heading>
          <p className="mt-4 max-w-[50ch] text-body text-paper/70">
            Tell us what you&rsquo;re trying to achieve and we&rsquo;ll
            recommend the right approach, no obligation.
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

export default Services;
