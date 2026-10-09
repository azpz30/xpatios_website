import { Link } from 'react-router';
import { Section, Heading, Prose, Label, Button } from '../components/ui';
import { Footer } from '../components';
import { site, formattedAddress, isPlaceholder } from '../constants/site';
import { pageMeta } from './pageMeta';

const TITLE = 'Contact Xpatios | Sydney Patio, Carport & Roofing Builders';
const DESCRIPTION =
  'Call or email Xpatios for a free quote on patios, carports, decking, fencing or Colorbond roofing anywhere across Greater Sydney.';

export const meta = () => pageMeta({ title: TITLE, description: DESCRIPTION, path: '/contact' });

const dayRange = (days) => {
  if (!days || days.length === 0) return null;
  return days.length > 1 ? `${days[0]}–${days[days.length - 1]}` : days[0];
};

const formatHour = (time) => {
  const [hourStr, minuteStr] = time.split(':');
  const hour = Number(hourStr);
  const period = hour >= 12 ? 'pm' : 'am';
  const displayHour = ((hour + 11) % 12) + 1;
  return minuteStr === '00' ? `${displayHour}${period}` : `${displayHour}:${minuteStr}${period}`;
};

const Contact = () => (
  <>
    <Section spacing="tight" as="div">
      <Label>Get in touch</Label>
      <Heading as="h1" size="h1" className="mt-4 max-w-[20ch]">
        Contact Xpatios
      </Heading>
      <Prose size="lede" className="mt-6">
        Call, email or send through a free quote request, we cover{' '}
        {site.serviceArea} and get back to every enquiry personally.
      </Prose>
    </Section>

    <Section hairline>
      <div className="grid gap-12 md:grid-cols-2 md:gap-20">
        <div className="flex flex-col gap-10">
          <div>
            <Label>Call us</Label>
            <p className="mt-3">
              <a href={site.phoneHref} className="text-h3 font-display text-ink hover:text-accent">
                {site.phone}
              </a>
            </p>
          </div>

          <div>
            <Label>Email</Label>
            <p className="mt-3">
              <a href={`mailto:${site.email}`} className="text-body text-ink hover:text-accent">
                {site.email}
              </a>
            </p>
          </div>

          <div>
            <Label>Address</Label>
            <p className="mt-3 text-body text-ink">{formattedAddress}</p>
          </div>

          <div>
            <Label>Service area</Label>
            <p className="mt-3 text-body text-ink">{site.serviceArea}</p>
          </div>

          <div>
            <Label>Hours</Label>
            <p className="mt-3 text-body text-ink">
              {dayRange(site.hours.days)}, {formatHour(site.hours.opens)}–
              {formatHour(site.hours.closes)}
            </p>
          </div>

          {!isPlaceholder(site.licence) && (
            <div>
              <Label>Licence</Label>
              <p className="mt-3 text-body text-ink">{site.licence}</p>
            </div>
          )}
        </div>

        <div>
          <Prose className="mb-6">
            Want a firm quote rather than a general enquiry? The full quote
            form takes about a minute and gets you a faster response.
          </Prose>
          <Button as={Link} to="/quote" size="lg">
            Get a free quote
          </Button>
        </div>
      </div>
    </Section>

    <Footer />
  </>
);

export default Contact;
