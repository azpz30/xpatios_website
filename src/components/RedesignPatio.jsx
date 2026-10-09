import { patioDesigns } from '../assets';
import { Section, Heading, Prose, Label, Figure } from './ui';

// Asymmetric editorial pair: text 4 cols, image 7, column 5 left empty
// as a gutter. Alternates with
// MegaPartner below, which puts the image on the left instead.
const RedesignPatio = () => (
  <Section hairline className="reveal">
    <div className="grid items-center gap-10 md:grid-cols-12 md:gap-x-16">
      <div className="md:order-1 md:col-span-4">
        <Label>Our Range</Label>
        <Heading as="h2" size="h2" className="mt-4">
          Pergola Styles for Every Sydney Home
        </Heading>
        <Prose size="lede" className="mt-6">
          Flat, gable, dome and insulated-panel roofs, attached or
          freestanding. Each suits a different roofline, budget and amount of
          shade, and we'll talk you through which fits your place before you
          commit to anything.
        </Prose>
      </div>
      <div className="md:order-2 md:col-span-7 md:col-start-6">
        <Figure
          className="reveal-media"
          src={patioDesigns}
          alt="A selection of Xpatios pergola and patio roofing designs"
          ratio="3/2"
          fit="contain"
          treatment="none"
          blend
        />
      </div>
    </div>
  </Section>
);

export default RedesignPatio;
