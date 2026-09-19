import { useState } from 'react';
import { Button } from './ui';

// Preload images
const imageModules = import.meta.glob('../assets/xpGallery/xp*.jpeg', { eager: true });
// Sort numerically (xp2 before xp10) so the carousel order is stable and
// the slide count follows the directory rather than a hardcoded range.
const slides = Object.keys(imageModules)
  .sort((a, b) => {
    const n = (s) => Number(s.match(/xp(\d+)\.jpeg$/)?.[1] ?? 0);
    return n(a) - n(b);
  })
  .map((key) => imageModules[key].default);

const Hero = () => {
  const [currentIndex, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((i) => (i + 1) % slides.length);
  };

  return (
    // Pattern A (design doc §5): full-bleed photo, headline overlaid
    // bottom-left. `full-bleed` breaks this out of root's unconstrained
    // flow to true viewport width regardless of any ancestor container.
    // `lvh`, not `vh` — dodges the mobile URL-bar resize jump.
    <div className="full-bleed relative h-[90lvh] overflow-hidden bg-ink">
      {slides.map((src, index) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden={index !== currentIndex}
          // Only the first slide is the LCP candidate — it's the one
          // painted at first load.
          fetchPriority={index === 0 ? 'high' : undefined}
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding={index === 0 ? 'sync' : 'async'}
          className={`photo-grade parallax-hero absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Scrim on the bottom third for text legibility over the photo. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
      />
      {/* Second wash left-to-right: the headline sits bottom-left and the
          photography there is often light (brick, render, sky). */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 px-5 pb-16 sm:px-8 md:px-12 md:pb-20">
        <div className="mx-auto w-full max-w-[1600px]">
          <h1 className="max-w-3xl font-display text-display text-white">
            Sydney&rsquo;s outdoor living specialists
          </h1>
          <p className="mt-6 max-w-md text-lede text-white/85">
            Patios, carports, decking and Colorbond metal roofing, engineer-led
            and built to last, across Sydney.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="primary" size="lg">
              Get a Free Quote
            </Button>
            <Button variant="onDark" size="lg">
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={prevSlide}
        className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white sm:left-5"
      >
        <span aria-hidden="true" className="text-2xl leading-none">
          &#8249;
        </span>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={nextSlide}
        className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white sm:right-5"
      >
        <span aria-hidden="true" className="text-2xl leading-none">
          &#8250;
        </span>
      </button>

      {/* Scroll cue, a thin rule and a rotated label, never a bouncing
          chevron. */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 right-5 hidden items-center gap-3 text-white/70 sm:flex md:right-12"
      >
        <span className="text-label font-mono uppercase tracking-[0.08em] [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="h-10 w-px bg-white/50" />
      </div>
    </div>
  );
};

export default Hero;
