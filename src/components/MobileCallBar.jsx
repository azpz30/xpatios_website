import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { site } from '../constants/site';
import { Button } from './ui';

const isFormField = (node) =>
  node instanceof HTMLElement &&
  ['INPUT', 'TEXTAREA', 'SELECT'].includes(node.tagName) &&
  Boolean(node.closest('form'));

/**
 * Fixed bottom call/quote bar, mobile only.
 *
 * WCAG 2.2 "Focus Not Obscured": the quote form's last field sits at the
 * bottom of the page, right where this bar lives. Rather than fade it or
 * rely on z-index tricks, it unmounts outright whenever a form field has
 * focus, so there is nothing left to obscure and nothing left in the tab
 * order either.
 *
 * Mounting: this is a fixed, viewport-level element (like the header), so
 * it belongs in `src/root.jsx` as a sibling of `<Navbar />`/`<main>`,
 * rendered unconditionally (it hides itself on desktop via CSS and hides
 * itself on focus via the logic below). Root.jsx is owned by another
 * workstream — not edited here.
 */
const MobileCallBar = () => {
  const [hiddenForFocus, setHiddenForFocus] = useState(false);

  useEffect(() => {
    const onFocusIn = (event) => {
      if (isFormField(event.target)) setHiddenForFocus(true);
    };
    const onFocusOut = (event) => {
      const next = event.relatedTarget;
      if (!next || !isFormField(next)) setHiddenForFocus(false);
    };

    document.addEventListener('focusin', onFocusIn);
    document.addEventListener('focusout', onFocusOut);
    return () => {
      document.removeEventListener('focusin', onFocusIn);
      document.removeEventListener('focusout', onFocusOut);
    };
  }, []);

  return (
    <>
      {/* Reserves space at the bottom of every page on mobile so this bar
          never covers the footer's final content. `root.jsx`/`index.css`
          are out of scope here, so the reservation lives in this
          component as a scoped, always-present style tag (present in the
          prerendered HTML, not injected by an effect). Kept mounted even
          while the bar itself is temporarily hidden for a focused field,
          so the page doesn't reflow every time focus enters/leaves a
          field. 767px matches --breakpoint-sm (768px) in src/index.css , 
          the same mobile/desktop boundary Navbar.jsx uses via
          `sm:hidden`; duplicated as a literal since index.css is out of
          scope here too. */}
      <style>{`
        @media (max-width: 767px) {
          body { padding-bottom: calc(56px + env(safe-area-inset-bottom, 0px) + 8px); }
        }
      `}</style>

      {!hiddenForFocus && (
        <div
          className="hairline-t fixed inset-x-0 bottom-0 z-40 flex bg-paper sm:hidden"
          style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        >
          <Button
            as="a"
            href={site.phoneHref}
            variant="outline"
            className="min-h-[56px] flex-1 justify-center border-y-0 border-l-0"
          >
            Call Now
          </Button>
          <Button as={Link} to="/quote" variant="primary" className="min-h-[56px] flex-1 justify-center">
            Get a Free Quote
          </Button>
        </div>
      )}
    </>
  );
};

export default MobileCallBar;
