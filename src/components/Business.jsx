import { features } from '../constants';
import { Section, Heading, Prose, Label, Button } from './ui';

// Not links — there's nothing to navigate to, so this mirrors ServiceRow's
// numbered-hairline-row visual language on a non-anchor element rather than
// reusing ServiceRow itself (which renders an <a> with hover-to-accent
// affordances that would be misleading here).
const FeatureRow = ({ icon, title, content, index }) => (
  <div className={`flex items-start gap-5 py-8 md:gap-8 md:py-10 ${index === 0 ? '' : 'hairline-t'}`}>
    <span className="flex shrink-0 items-center gap-4">
      <span className="text-label font-mono text-muted tabular-nums">
        {String(index + 1).padStart(2, '0')}
      </span>
      {/* The source SVGs are white-filled, so they need inverting to read
          against the paper background. */}
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface">
        <img src={icon} alt="" aria-hidden="true" className="h-5 w-5 invert" />
      </span>
    </span>
    <span className="flex-1">
      <Heading as="h3" size="h3">
        {title}
      </Heading>
      <span className="mt-2 block text-body text-muted">{content}</span>
    </span>
  </div>
);

const Business = () => (
  <Section hairline className="reveal">
    <div className="grid gap-12 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-4">
        <Label>What We Do</Label>
        <Heading as="h2" size="h2" className="mt-4">
          Build Your Dreams, We'll Handle the Construction.
        </Heading>
        <Prose size="lede" className="mt-6">
          With the right design and a skilled team, you can transform an
          ordinary space into an outdoor oasis, crafting pergolas and patios
          that bring comfort and elegance to your home, one project at a
          time.
        </Prose>
        <Button as="a" href="/#quote" className="mt-10">
          Get a Free Quote
        </Button>
      </div>
      <div className="reveal-stagger md:col-span-7 md:col-start-6">
        {features.map((feature, index) => (
          <FeatureRow key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </div>
  </Section>
);

export default Business;
