import { stratcoPartner } from '../assets';
import { Section, Heading, Prose, Label, Figure } from './ui';

// Asymmetric editorial pair, mirrored from RedesignPatio above: image on
// the left this time, ~60/40 split.
const MegaPartner = () => (
  <Section hairline className="reveal">
    <div className="grid items-center gap-10 md:grid-cols-12 md:gap-x-16">
      <div className="md:order-1 md:col-span-5">
        <Figure
          className="reveal-media"
          src={stratcoPartner}
          alt="Stratco building materials, Xpatios' official supplier"
          ratio="3/4"
          fit="cover"
          treatment="none"
        />
      </div>
      <div className="md:order-2 md:col-span-6 md:col-start-7">
        <Label>Our Supplier</Label>
        <Heading as="h2" size="h2" className="mt-4">
          Xpatios Welcomes{' '}
          <span className="text-accent underline decoration-accent decoration-2 underline-offset-[6px]">
            Stratco
          </span>{' '}
          as Our Official Supplier
        </Heading>
        <Prose size="lede" className="mt-6">
          Exciting news! Xpatios proudly partners with Stratco, a powerhouse
          with 70 years of excellence in building and home improvement.
          Together, we fuse innovation and quality, redefining outdoor
          living. From Adelaide roots to global prominence, Stratco's journey
          aligns seamlessly with ours. This collaboration marks a union of
          expertise, offering premium pergolas and home solutions. Welcome to
          the future of outdoor sophistication: Xpatios and Stratco,
          elevating your living experience.
        </Prose>
      </div>
    </div>
  </Section>
);

export default MegaPartner;
