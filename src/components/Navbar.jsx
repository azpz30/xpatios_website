import { useEffect, useId, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { logoMark } from '../assets';
import { services } from '../constants/services';
import { Button, Container, Label } from './ui';

// About/Services/Projects/Contact now have real routes — see routes.js
// (owned by another workstream, landing alongside this change).
const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

// Routes whose first element is a full-bleed DARK hero, so the header can
// sit transparent over it with white text. Everywhere else the page
// background is paper-white — a transparent header there would render white
// text on white and the logo would vanish. Add a route here if it gains a hero.
const ROUTES_WITH_DARK_HERO = new Set(['/']);

const NAV_LINK_BASE =
  'font-sans text-small underline decoration-transparent underline-offset-[6px] transition-colors duration-200 hover:decoration-accent';

// Over the hero the header is transparent, so ink-on-photograph is
// unreadable. Flip to white until the solid background kicks in.
const navLinkClasses = (solid) =>
  `${NAV_LINK_BASE} ${solid ? 'text-ink' : 'text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]'}`;

const HOVER_INTENT_MS = 150;

/**
 * Services megamenu.
 *
 * The panel is ALWAYS rendered in the DOM (visibility toggled with CSS),
 * never conditionally mounted — otherwise the 7 service links would be
 * absent from the prerendered HTML, which is the entire point of putting
 * them here (hub-and-spoke internal linking, see docs/08-SEO-STRATEGY.md).
 */
const ServicesMenu = ({ scrolled }) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const panelRef = useRef(null);
  const openTimer = useRef(null);
  const closeTimer = useRef(null);
  const menuId = useId();
  const { pathname } = useLocation();

  // Solid whenever we're scrolled OR the page has no dark hero to sit over.
  const overDarkHero = ROUTES_WITH_DARK_HERO.has(pathname);
  const solid = scrolled || !overDarkHero;
  const [previousPath, setPreviousPath] = useState(pathname);

  const clearTimers = () => {
    clearTimeout(openTimer.current);
    clearTimeout(closeTimer.current);
  };

  useEffect(() => clearTimers, []);

  // Close on route change. Adjusting state during render (rather than in
  // an effect) when a value derived from props changes is the pattern
  // React itself recommends for this — see "Adjusting state when a prop
  // changes" in the docs — and it sidesteps the extra cascading render an
  // effect-based setState would cause. Refs can't be read during render
  // under this project's stricter (compiler-oriented) lint rules, so the
  // "previous value" is tracked in state rather than a ref.
  if (previousPath !== pathname) {
    setPreviousPath(pathname);
    if (open) setOpen(false);
  }

  // Close on outside click.
  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (event) => {
      if (buttonRef.current?.contains(event.target) || panelRef.current?.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]);

  const scheduleOpen = () => {
    clearTimers();
    // ~150ms intent delay — a fast pass-through of the pointer never
    // reaches this, since leaving cancels the pending timer below.
    openTimer.current = setTimeout(() => setOpen(true), HOVER_INTENT_MS);
  };

  const scheduleClose = () => {
    clearTimers();
    closeTimer.current = setTimeout(() => setOpen(false), HOVER_INTENT_MS);
  };

  const toggleOpen = () => {
    clearTimers();
    setOpen((value) => !value);
  };

  const closeAndRefocus = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  const focusFirstItem = () => {
    panelRef.current?.querySelector('a')?.focus();
  };

  const onBlur = (event) => {
    const next = event.relatedTarget;
    if (next && event.currentTarget.contains(next)) return;
    setOpen(false);
  };

  const onKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeAndRefocus();
      return;
    }

    const arrowKeys = ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Home', 'End'];
    if (!arrowKeys.includes(event.key)) return;

    if (!open) {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        clearTimers();
        setOpen(true);
        requestAnimationFrame(focusFirstItem);
      }
      return;
    }

    const items = panelRef.current ? Array.from(panelRef.current.querySelectorAll('a')) : [];
    if (!items.length) return;
    const currentIndex = items.indexOf(document.activeElement);
    const focusAt = (index) => items[(index + items.length) % items.length]?.focus();

    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        focusAt(currentIndex === -1 ? 0 : currentIndex + 1);
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        focusAt(currentIndex === -1 ? items.length - 1 : currentIndex - 1);
        break;
      case 'Home':
        event.preventDefault();
        focusAt(0);
        break;
      case 'End':
        event.preventDefault();
        focusAt(items.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    // Deliberately NOT `relative`. The panel below is `absolute inset-x-0`,
    // so its containing block must be the fixed <header> (full viewport
    // width). Making this wrapper relative scoped the panel to the ~100px
    // trigger and collapsed the megamenu into an overlapping strip.
    <div
      onMouseEnter={scheduleOpen}
      onMouseLeave={scheduleClose}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={toggleOpen}
        className={`inline-flex items-center gap-1.5 ${navLinkClasses(solid)}`}
      >
        Services
        <svg
          aria-hidden="true"
          viewBox="0 0 12 8"
          className={`h-[6px] w-[9px] fill-none stroke-current transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        >
          <path d="M1 1l5 5 5-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        id={menuId}
        ref={panelRef}
        aria-hidden={!open}
        className={`hairline-t absolute inset-x-0 top-full z-10 bg-paper transition-[opacity,visibility] duration-150 ${
          open ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
        }`}
      >
        <Container className="grid grid-cols-2 gap-x-10 gap-y-8 py-10 md:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              tabIndex={open ? 0 : -1}
              className="group block"
            >
              <span className="text-label font-mono tabular-nums text-muted">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="mt-2 block font-display text-lede text-ink transition-colors duration-200 group-hover:text-accent">
                {service.navLabel}
              </span>
              <Label className="mt-1 block text-muted/80">{service.tagline}</Label>
              <p className="mt-2 max-w-[32ch] text-small text-muted">{service.summary}</p>
            </Link>
          ))}
        </Container>

      {/* Reading-progress line. Purely decorative, so it is hidden from
          assistive tech; it degrades to nothing where scroll timelines
          aren't supported. */}
      <div
        aria-hidden="true"
        className="scroll-progress absolute inset-x-0 bottom-0 h-[2px] bg-accent"
      />

        <div className="hairline-t">
          <Container className="py-6">
            <Link
              to="/services"
              tabIndex={open ? 0 : -1}
              className="inline-flex items-center gap-2 font-sans text-small font-medium text-ink underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
            >
              View all services
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </Container>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const wasOpenRef = useRef(false);
  const menuId = useId();
  const { pathname } = useLocation();

  // Solid whenever we're scrolled OR the page has no dark hero to sit over.
  const overDarkHero = ROUTES_WITH_DARK_HERO.has(pathname);
  const solid = scrolled || !overDarkHero;

  // Solid header once we're past the hero. Passive listener — this never
  // calls preventDefault, so it must not block scrolling.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll and wire Escape while the takeover is open.
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  // Restore focus to the toggle once the takeover has actually closed and
  // its button has re-mounted — doing this inside the Escape/close-button
  // handlers directly is too early, since `toggleRef` only points at a
  // live node while the menu is closed and state updates haven't
  // committed yet at that point.
  useEffect(() => {
    if (!open && wasOpenRef.current) {
      toggleRef.current?.focus();
    }
    wasOpenRef.current = open;
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 z-50 overflow-hidden transition-[top,background-color] duration-300 ${
        solid ? 'top-0 hairline-b bg-paper' : 'top-0 bg-transparent'
      }`}
    >
      <Container className="flex items-center justify-between py-4 md:py-5">
        <Link to="/" className="shrink-0" aria-label="Xpatios home">
          {/* Lockup: mark + wordmark.
              - logo-mark.png is the transparent original recovered from git
                history (logo.jpg has a baked-in opaque white background and
                renders as a white box over the hero photograph).
              - The mark is red-on-transparent, so it vanishes against the
                dark hero. `brightness-0 invert` renders it solid white while
                the header is transparent, and lets its real colours show
                once the solid background is in.
              - The wordmark carries legibility: the mark alone is
                unreadable at 40px. */}
          <span className="flex items-center gap-2.5">
            <img
              src={logoMark}
              alt=""
              aria-hidden="true"
              width={690}
              height={700}
              className={`h-9 w-auto transition-[filter] duration-300 md:h-10 ${
                solid ? '' : 'brightness-0 invert'
              }`}
            />
            <span
              className={`font-display text-h3 leading-none transition-colors duration-300 ${
                solid ? 'text-ink' : 'text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]'
              }`}
            >
              Xpatios
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 sm:flex md:gap-10">
          {NAV_LINKS.map((item) =>
            item.label === 'Services' ? (
              <li key={item.label}>
                <ServicesMenu scrolled={solid} />
              </li>
            ) : (
              <li key={item.label}>
                <Link to={item.to} className={navLinkClasses(solid)}>
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="hidden sm:block">
          <Button as={Link} to="/quote">
            Get a Free Quote
          </Button>
        </div>

        {!open && (
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 sm:hidden"
          >
            <span aria-hidden="true" className={`block h-px w-6 ${solid ? 'bg-ink' : 'bg-white'}`} />
            <span aria-hidden="true" className={`block h-px w-6 ${solid ? 'bg-ink' : 'bg-white'}`} />
          </button>
        )}
      </Container>

      {open && (
        <div
          id={menuId}
          className="fixed inset-0 z-50 flex flex-col bg-ink"
          style={{ minHeight: '100lvh' }}
        >
          <Container className="flex items-center justify-between py-4">
            <span className="font-display text-h3 text-paper">Xpatios</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="relative flex h-11 w-11 items-center justify-center"
            >
              <span aria-hidden="true" className="absolute h-px w-6 rotate-45 bg-paper" />
              <span aria-hidden="true" className="absolute h-px w-6 -rotate-45 bg-paper" />
            </button>
          </Container>

          <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center px-5 sm:px-8 md:px-12">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={closeMenu}
                className="border-t border-white/10 py-4 font-display text-h2 text-paper first:border-t-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="px-5 pb-10 sm:px-8 md:px-12">
            <Button as={Link} to="/quote" onClick={closeMenu} className="w-full">
              Get a Free Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
