const Stars = ({ rating = 5 }) => (
  <span className="flex gap-0.5" aria-hidden="true">
    {Array.from({ length: 5 }, (_, i) => (
      <svg key={i} viewBox="0 0 20 20" className={`h-4 w-4 ${i < rating ? 'fill-accent' : 'fill-hairline'}`}>
        <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
      </svg>
    ))}
  </span>
);

const FeedbackCard = ({ content, name, rating = 5, source }) => (
  <figure className="flex w-[86vw] shrink-0 snap-start flex-col justify-between gap-8 border border-hairline bg-paper p-8 sm:w-[30rem] md:p-10">
    <div>
      <Stars rating={rating} />
      <blockquote className="mt-6 font-display text-lede text-ink">
        <p className="line-clamp-[10]">{content}</p>
      </blockquote>
    </div>
    <figcaption className="mt-8 flex items-baseline justify-between gap-4">
      <span className="text-small font-medium text-ink">{name}</span>
      {source && (
        <span className="text-label font-mono uppercase tracking-[0.08em] text-muted">
          via {source}
        </span>
      )}
    </figcaption>
  </figure>
);

export default FeedbackCard;
