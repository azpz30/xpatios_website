import { useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { feedback, GOOGLE_RATING, GOOGLE_REVIEWS_URL } from '../constants';
import { Section, Heading, Prose, Label } from './ui';
import FeedbackCard from './FeedBackCard';

const Testimonials = () => {
  const trackRef = useRef(null);

  // Scroll by one card. The track is a native scroll-snap container, so
  // keyboard, trackpad and touch already work without JS; swipe handlers and
  // the arrow buttons are additive rather than load-bearing.
  const scrollBy = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('figure');
    track.scrollBy({ left: (card?.offsetWidth ?? 400) * dir + 24 * dir, behavior: 'smooth' });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => scrollBy(1),
    onSwipedRight: () => scrollBy(-1),
    preventScrollOnSwipe: false,
    trackMouse: false,
  });

  return (
    <Section hairline className="reveal" id="reviews">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Label>Reviews</Label>
          <Heading as="h2" size="h2" className="mt-4">
            What Sydney homeowners say
          </Heading>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-small text-muted underline decoration-hairline underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            {GOOGLE_RATING.average.toFixed(1)} on Google
          </a>

          {/* Arrows are a convenience: the track scrolls natively without them. */}
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous reviews"
              className="flex h-11 w-11 items-center justify-center border border-hairline text-ink transition-colors hover:border-accent hover:text-accent"
            >
              &#8592;
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next reviews"
              className="flex h-11 w-11 items-center justify-center border border-hairline text-ink transition-colors hover:border-accent hover:text-accent"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>

      <Prose className="mt-5">
        Every review below is a real Google review left by an Xpatios customer.
      </Prose>

      <div
        {...handlers}
        ref={trackRef}
        // tabIndex makes the overflow region keyboard-scrollable, which a
        // scroll container is not by default.
        tabIndex={0}
        role="group"
        aria-label="Customer reviews, scrollable"
        className="reveal-stagger mt-10 flex snap-x snap-mandatory items-start gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
