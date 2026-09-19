import { useEffect, useRef, useState } from 'react';

/**
 * Counts from 0 up to `target` the first time the element scrolls into view.
 *
 * Two constraints shape this:
 *  - The page is pre-rendered, so the initial state must be the FINAL value.
 *    If it started at 0, that 0 would be baked into the static HTML and both
 *    crawlers and no-JS visitors would read "0 Happy Clients".
 *  - `prefers-reduced-motion` must skip the animation entirely, not just
 *    shorten it.
 */
export function useCountUp(target, { duration = 1600, decimals = 0 } = {}) {
  const [display, setDisplay] = useState(target);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasRun.current) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return;
        hasRun.current = true;
        observer.disconnect();

        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
          setDisplay(Number((target * eased).toFixed(decimals)));
          if (t < 1) frame = requestAnimationFrame(tick);
        };

        setDisplay(0);
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [target, duration, decimals]);

  return [ref, display];
}
