// Single source of truth for NAP + trust signals. These appear in the
// utility bar, footer, contact page and LocalBusiness schema — they must
// agree exactly everywhere, because NAP consistency is a real local-SEO
// signal (see docs/08-SEO-STRATEGY.md §10).
export const site = {
  name: 'Xpatios',
  legalName: 'Xpatios Pty Ltd',
  // The business trades under this on Google — matches the GBP listing.
  tradingName: 'Xpatios and Metal Roofing',

  // TODO(xpatios): CONFIRM BEFORE LAUNCH -------------------------------
  // Placeholders. Publishing an unverified licence number or ABN on a
  // trades site is a NSW Fair Trading / ACL exposure, not just a typo.
  // 0433 911 689. Display form is spaced for legibility; the href uses the
  // E.164 international form (drop the leading 0, prefix +61) so it dials
  // correctly from overseas and from saved contacts.
  phone: '0433 911 689',
  phoneHref: 'tel:+61433911689',
  licence: 'TODO-LICENCE',
  abn: 'TODO-ABN',
  yearsExperience: 10,
  // --------------------------------------------------------------------

  email: 'info@xpatios.com.au',
  address: {
    street: '166 Chapel Rd',
    suburb: 'Bankstown',
    state: 'NSW',
    postcode: '2200',
    country: 'AU',
  },
  serviceArea: 'Greater Sydney',
  url: 'https://xpatios.com.au',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100083071642027',
    instagram: 'https://www.instagram.com/xpatios_pty_ltd/',
  },
  hours: { days: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '22:00' },
};

export const formattedAddress = `${site.address.street}, ${site.address.suburb} ${site.address.state} ${site.address.postcode}`;

/**
 * Any `site` value still carrying a TODO marker must never render. Publishing
 * an unverified licence number or ABN on a trades site is a NSW Fair Trading
 * and ACL exposure, not a cosmetic bug.
 *
 * Lives here rather than in a component so every consumer shares one guard.
 */
export const isPlaceholder = (value) =>
  typeof value === 'string' && value.trim().toUpperCase().startsWith('TODO');

/** Returns the value, or `fallback` if it's still a placeholder. */
export const orNothing = (value, fallback = null) =>
  isPlaceholder(value) ? fallback : value;
