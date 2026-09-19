import { Link } from 'react-router';
import { facebook, instagram, logo } from '../assets';
import { services } from '../constants/services';
import { formattedAddress, site, isPlaceholder } from '../constants/site';
import { Section } from './ui';

// Same suppression rule as the utility bar in Navbar.jsx: confirmed real
// values render, unconfirmed TODO-* placeholders (licence, ABN) render
// nothing rather than printing "TODO-LICENCE" on a live page.

const formatHour = (value) => {
  const [hourStr, minute] = value.split(':');
  const hour = Number(hourStr);
  const period = hour >= 12 ? 'pm' : 'am';
  const hour12 = ((hour + 11) % 12) + 1;
  return minute === '00' ? `${hour12}${period}` : `${hour12}:${minute}${period}`;
};

const hoursLine = `${site.hours.days[0]}–${site.hours.days[site.hours.days.length - 1]}, ${formatHour(
  site.hours.opens
)}–${formatHour(site.hours.closes)}`;

// Real routes only — see routes.js (landing alongside this change).
const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
  { label: 'Get a Free Quote', to: '/quote' },
];

// Real profile links only — constants/index.js's `socialMedia` includes a
// generic linkedin.com homepage link that isn't a real Xpatios profile, so
// it's dropped here in favour of `site.social`, which is the NAP source
// of truth shared with the utility bar and LocalBusiness schema.
const SOCIAL_LINKS = [
  { name: 'Facebook', href: site.social.facebook, icon: facebook },
  { name: 'Instagram', href: site.social.instagram, icon: instagram },
];

const FOOTER_LINK_CLASSES =
  'text-small text-paper/80 underline-offset-4 transition-colors hover:text-paper hover:underline';

// Near-black footer. Note: text-body is a combined size+colour token tuned
// for body copy on paper backgrounds, so it is deliberately avoided here —
// every text node below pairs a size-only token (text-small/text-label)
// with an explicit text-paper/* colour instead.
const Footer = () => (
  <Section as="footer" spacing="loose" hairline className="bg-ink text-paper">
    <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
      {/* Brand + NAP */}
      <div className="flex flex-col gap-4 lg:max-w-xs">
        {/* logo.jpg ships with a baked-in white background (not
            transparent), framed as a small plate so it reads as a
            deliberate mark rather than a stray white box on black. */}
        <div className="w-fit rounded-sm border border-paper/15 bg-paper p-2">
          <img src={logo} alt="Xpatios" className="h-10 w-auto object-contain" />
        </div>
        <p className="text-small text-paper/70">Creating dreams with beams.</p>

        <address className="not-italic text-small text-paper/70">
          {site.legalName}
          <br />
          {formattedAddress}
        </address>

        <ul className="flex flex-col gap-1.5 text-small text-paper/70">
          {!isPlaceholder(site.phone) && !isPlaceholder(site.phoneHref) && (
            <li>
              <a href={site.phoneHref} className="transition-colors hover:text-paper">
                {site.phone}
              </a>
            </li>
          )}
          <li>
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-paper">
              {site.email}
            </a>
          </li>
          {!isPlaceholder(site.licence) && <li>Lic. {site.licence}</li>}
          {!isPlaceholder(site.abn) && <li>ABN {site.abn}</li>}
        </ul>
      </div>

      <div className="flex flex-col gap-10 divide-y divide-paper/10 sm:flex-row sm:gap-16 sm:divide-y-0 sm:divide-x">
        {/* Services, more internal links to the money pages. */}
        <div className="flex flex-col gap-4 pt-10 first:pt-0 sm:pt-0 sm:pl-16 sm:first:pl-0">
          <h4 className="text-label font-mono uppercase tracking-[0.08em] text-paper/70">Services</h4>
          <ul className="flex flex-col gap-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`} className={FOOTER_LINK_CLASSES}>
                  {service.navLabel}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/services"
                className="text-small font-medium text-paper underline decoration-transparent underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                View all services &rarr;
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 pt-10 first:pt-0 sm:pt-0 sm:pl-16 sm:first:pl-0">
          <h4 className="text-label font-mono uppercase tracking-[0.08em] text-paper/70">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={FOOTER_LINK_CLASSES}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 pt-10 first:pt-0 sm:pt-0 sm:pl-16 sm:first:pl-0">
          <h4 className="text-label font-mono uppercase tracking-[0.08em] text-paper/70">Hours</h4>
          <p className="text-small text-paper/80">{hoursLine}</p>
          <p className="text-small text-paper/60">Servicing {site.serviceArea}</p>
        </div>
      </div>
    </div>

    <div className="mt-16 flex flex-col items-center gap-6 border-t border-paper/15 pt-8 sm:flex-row sm:justify-between">
      <p className="text-small text-paper/60">
        Copyright &copy; {new Date().getFullYear()} {site.legalName}. All Rights Reserved.
      </p>

      <div className="flex flex-row items-center">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Xpatios on ${social.name}`}
            className="flex min-h-11 min-w-11 items-center justify-center opacity-80 transition-opacity hover:opacity-100"
          >
            {/* The source SVGs are fill="white", correct as-is against
                this near-black footer, so no invert filter is applied
                (it was only needed on the previous light background). */}
            <img src={social.icon} alt="" className="h-[21px] w-[21px] object-contain" />
          </a>
        ))}
      </div>
    </div>
  </Section>
);

export default Footer;
