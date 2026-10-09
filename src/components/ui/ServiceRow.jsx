import Heading from './Heading';

// Numbered hairline rows, not cards. Scales to 7 services without
// looking like a SaaS feature grid, and the rule does all the
// separating work — no boxes, no shadows.
const ServiceRow = ({ index, title, description, href = '#' }) => (
  <a
    href={href}
    className="group hairline-t flex items-baseline gap-5 py-8 transition-colors duration-200 md:gap-10 md:py-10"
  >
    <span className="text-label font-mono text-muted tabular-nums">
      {String(index).padStart(2, '0')}
    </span>

    <span className="flex-1">
      <Heading as="h3" size="h3" className="transition-colors group-hover:text-accent">
        {title}
      </Heading>
      {description && (
        <span className="mt-2 block text-body text-muted">{description}</span>
      )}
    </span>

    <span
      aria-hidden="true"
      className="text-ink transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
    >
      &rarr;
    </span>
  </a>
);

export default ServiceRow;
