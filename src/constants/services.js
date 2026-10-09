/**
 * The seven service lines. This drives the nav megamenu, the /services hub,
 * each service page, the sitemap and the Service schema — so it is the one
 * place a service is defined.
 *
 * Content is condensed from docs/04-SERVICE-CONTENT.md.
 *
 * ⚠️ TODO(xpatios): every `priceFrom` is INDICATIVE, sourced from research
 * where figures varied 2–3× between sources and some were SEO-spam. Replace
 * with real supplier/trade pricing before these pages go live, or remove the
 * field. Publishing unverified prices is an ACL exposure.
 */
export const services = [
  {
    slug: 'metal-roofing-sydney',
    name: 'Metal Roofing',
    navLabel: 'Metal Roofing',
    tagline: 'Re-roofing & Colorbond',
    summary:
      'Colorbond and Zincalume re-roofing, tile-to-metal conversions, and new metal roof installation across Sydney.',
    title: 'Metal Roofing & Re-Roofing Sydney | COLORBOND® Roof Installers',
    metaDescription:
      'Licensed Sydney metal roofing specialists. COLORBOND® re-roofing, Trimdek, Klip-Lok & corrugated roofs. Free quotes, BlueScope warranty. Call today.',
    h1: 'Metal Roofing & Re-Roofing Specialists in Sydney',
    intro:
      "Metal roofing uses long, factory pre-painted steel sheets, most commonly COLORBOND® steel from BlueScope, fixed over a timber or steel frame. Re-roofing means stripping an old tile roof back to the frame and replacing it entirely, rather than patching it. It's the most common major roof upgrade on Sydney homes built before the 1990s.",
    types: [
      { name: "Corrugated (Custom Orb)", description: "The classic wavy profile. Can be curved or bullnosed for verandahs, which makes it the usual choice on Federation and heritage homes." },
      { name: "Trimdek", description: "Bold trapezoidal rib. Popular on modern homes, carports and patio kits, strong spanning ability and good value." },
      { name: "Klip-Lok", description: "Concealed fixings, so no visible screws. Works at the lowest pitch of any profile (around 1–2°). Premium look, premium price." },
      { name: "Standing seam", description: "Architectural profile with fully concealed fixings. Used on high-end contemporary builds." },
      { name: "Zincalume®", description: "Unpainted aluminium/zinc-coated steel. Cheaper than painted Colorbond, mostly sheds and rural work." },
      { name: "Tile-to-Colorbond conversion", description: "A full re-roof replacing tile with steel, usually with new sarking, insulation and battens." },
    ],
    faqs: [
      { q: "How much does it cost to re-roof a house in Sydney?", a: "Cost depends on roof size, pitch, access and whether the old tiles need removing and disposing of. We quote after a site inspection rather than over the phone, because a steep two-storey roof and a single-storey skillion of the same area are very different jobs." },
      { q: "Is Colorbond better than tile?", a: "For most Sydney homes, yes, mainly because it's roughly a fifth of the weight, sheds water faster, and doesn't need ridge caps re-bedded every 15–20 years. Tile still has advantages: more thermal mass, and it's quieter in heavy rain unless the metal roof is insulated." },
      { q: "Do I need council approval to replace my roof?", a: "A like-for-like re-roof on a single dwelling is usually exempt development or CDC-eligible. You'll generally need a DA if you're changing the roof pitch, increasing height, or the property is heritage-listed. We'll tell you which applies before you commit." },
      { q: "How long does a Colorbond roof last?", a: "Published figures vary widely because it depends heavily on distance from the coast. Inland Sydney suburbs sit at the long end of the range; homes close to breaking surf are materially shorter. We'll advise on whether your site needs COLORBOND® Ultra for the additional corrosion protection." },
      { q: "Can you lay Colorbond over existing tiles?", a: "It's occasionally done but we don't recommend it. You keep the weight of the old roof, you can't inspect or repair the battens and frame underneath, and it usually voids the sheet warranty." },
      { q: "Is a metal roof noisy in the rain?", a: "Uninsulated, yes, noticeably. With proper sarking and insulation (anticon blanket or an insulated panel system) the difference against tile is small. This is worth specifying up front rather than discovering later." },
    ],
    compliance:
      "A like-for-like re-roof on a single dwelling is typically exempt development or CDC-eligible in NSW. Changing pitch, increasing height, or working on a heritage item usually triggers a DA. Residential building work over $5,000 must be carried out by a licensed contractor under NSW Fair Trading, and work over $20,000 requires Home Building Compensation Fund insurance in place before any deposit is taken. Roof and fixing specification must satisfy AS/NZS 1170.2 wind actions for your site, Sydney is non-cyclonic (N1–N4).",
    benefits: [
      'Far lighter than tile, reducing load on ageing roof frames',
      'Sheds heat and rain fast, less risk of leaks, moss and cracked tiles',
      'No re-bedding or re-pointing ridge caps every 15–20 years',
      'One of the strongest manufacturer warranties in Australian residential construction',
      'Wide colour range to suit heritage overlays and modern streetscapes',
    ],
    priceFrom: null,
  },
  {
    slug: 'guttering-sydney',
    name: 'Guttering',
    navLabel: 'Guttering',
    tagline: 'Quad, half-round & box',
    summary:
      'Colorbond guttering, downpipes, fascia and leaf guard, sized to cope with Sydney storm downpours.',
    title: 'Guttering Sydney | Colorbond Gutter Installation & Replacement',
    metaDescription:
      'Sydney guttering specialists, quad, half-round & box gutter installation, gutter replacement and leaf guard. Licensed, insured, free quotes.',
    h1: 'Guttering Installation & Replacement in Sydney',
    intro:
      "Guttering is the channel along your roofline that collects rainwater and directs it through downpipes into stormwater. It's the cheapest part of a roof to replace and the most expensive to ignore, overflowing gutters damage fascia, walls and foundations long before anyone notices the gutter itself has failed.",
    types: [
      { name: "Quad gutter", description: "The standard residential profile. Good capacity for most Sydney roofs and the most economical option." },
      { name: "Half-round", description: "Rounded profile, traditionally used on heritage and period homes where a square profile would look wrong." },
      { name: "Box gutter", description: "Square profile with higher capacity. Used on larger roofs, valleys and commercial-style buildings." },
      { name: "Fascia gutter", description: "Combined fascia and gutter in one system. Sleek, no separate fascia board, common on contemporary builds." },
      { name: "Leaf guard & mesh", description: "Retro-fitted over any profile. Cuts cleaning frequency significantly and reduces ember entry in bushfire-prone areas." },
    ],
    faqs: [
      { q: "How often should gutters be replaced?", a: "Colorbond guttering lasts decades if it's kept clear. Most replacements we do are driven by rust at the joints and behind the fascia rather than the gutter face itself failing." },
      { q: "How do I know if my gutters need replacing?", a: "Common signs: water sheeting over the front edge in heavy rain, sagging between brackets, rust staining down the fascia, or plants growing in the gutter. If the fascia timber behind it is soft, the gutter has been failing for a while." },
      { q: "Can you replace gutters without replacing the roof?", a: "Yes, and it's very common. The gutter comes off independently of the roof sheets. If you're planning a re-roof within a few years, though, doing both together saves a second set-up cost." },
      { q: "Gutter guard or regular cleaning, which is better value?", a: "If you have overhanging trees, guard usually pays for itself within a few years of avoided cleaning. With no trees nearby, regular cleaning is the cheaper option." },
      { q: "Quad or half-round?", a: "Mostly aesthetic. Quad suits most modern homes and has slightly more capacity for its size; half-round suits period homes. We'll show you both against your fascia." },
      { q: "Can you match my existing roof colour?", a: "Yes, Colorbond guttering comes in the full colour range, so it can match or deliberately contrast with your roof and fascia." },
    ],
    compliance:
      "Gutter replacement on its own is generally exempt development unless it forms part of a larger roofing job or the property is a heritage item. Note that connecting new downpipes into stormwater generally requires a licensed plumber in NSW, and the discharge must comply with your council's stormwater requirements. Licensing and insurance thresholds are the same as other building work: $5,000 for a licensed contractor, $20,000 for HBCF insurance.",
    benefits: [
      'Protects fascia, walls and foundations from water damage',
      'Reduces ceiling leaks and mould caused by overflow',
      'Colour-matched to your roof and fascia',
      'Leaf guard cuts cleaning frequency and ember risk',
      'Correctly sized to handle Sydney summer downpours',
    ],
    priceFrom: null,
  },
  {
    slug: 'patios-pergolas-sydney',
    name: 'Patios & Pergolas',
    navLabel: 'Patios & Pergolas',
    tagline: 'Flat, gable & insulated',
    summary:
      'Flat, gable, dome and insulated-panel patios and pergolas, attached or freestanding, engineered for Sydney conditions.',
    title: 'Patios & Pergolas Sydney | Custom Outdoor Living Builders',
    metaDescription:
      "Sydney's patio & pergola specialists, flat, gable, insulated & Stratco Outback designs. Council-approved builds, free measure & quote.",
    h1: 'Custom Patios & Pergolas Built for Sydney Homes',
    intro:
      "A patio is a roofed outdoor living area attached to or near the house, built for year-round shade and weather protection. A pergola is traditionally open or lattice-roofed, prioritising filtered light and airflow. In practice Australians use the two words interchangeably, what actually matters is the roof: solid and weatherproof, or open and adjustable.",
    types: [
      { name: "Flat / skillion roof", description: "Single-slope roof. The most economical option and the cleanest match for a modern home." },
      { name: "Gable roof", description: "Pitched roof with an open, vaulted feel underneath. Suits larger spans and traditional homes." },
      { name: "Dome / curved", description: "Rounded profile, softer than a gable, often used to echo an existing bullnose verandah." },
      { name: "Insulated panel (Cooldek)", description: "Polystyrene-core steel sandwich panel. Noticeably cooler underneath in summer and doubles as a finished ceiling, so there's nothing to line later." },
      { name: "Motorised louvre", description: "Adjustable louvre blades, open for winter sun, closed for rain. The premium option, and the most flexible." },
      { name: "Freestanding", description: "Not attached to the house. Useful where the existing roofline or eave height makes an attached structure awkward." },
    ],
    faqs: [
      { q: "What's the difference between a patio and a pergola?", a: "A patio has a solid, weatherproof roof, you can use it in the rain. A pergola is open or louvred, giving filtered light and airflow rather than full protection. The words get used loosely, so we always confirm which you actually want before quoting." },
      { q: "Do I need council approval for a patio in NSW?", a: "Often not. Exempt development generally covers structures up to 25m², no more than 3m high, at least 900mm from the boundary, not forward of the building line, and not above the existing gutter line if attached. Beyond any of those, you'll need a CDC or a DA." },
      { q: "What's the largest patio I can build without a DA?", a: "25m² is the usual exempt development ceiling, but the other criteria matter just as much as area, height, setback and position relative to the building line. And heritage items and conservation areas are excluded from exempt development regardless of size." },
      { q: "Is an insulated roof worth the extra cost?", a: "If you'll use the space through summer, generally yes. The temperature difference underneath is significant, and because the panel is a finished ceiling you're not paying to line it separately later." },
      { q: "Flat, gable or skillion, which suits my home?", a: "Flat and skillion suit contemporary homes and lower eave heights. Gable gives more headroom and a more open feel, and usually suits larger areas and traditional facades." },
      { q: "Can a pergola be enclosed later?", a: "Yes, and it's a common second stage. Worth telling us up front though, we'd size the footings and frame for the future glazing load rather than retrofitting." },
    ],
    compliance:
      "Exempt development in NSW generally applies to structures up to 25m², up to 3m high, at least 900mm from the boundary, not forward of the main building line, and not extending above the existing roof gutter line if attached. Larger or non-compliant structures need a Complying Development Certificate via a private certifier, or a full DA through council. Heritage items and conservation areas are excluded from exempt development regardless of size. A BASIX certificate is required once CDC or DA applies. Licensed contractor over $5,000; HBCF insurance over $20,000. Council setback and site-coverage rules are often stricter than the state code.",
    benefits: [
      'Extends usable living space without a full extension',
      'Insulated roofs stay cooler and double as a finished ceiling',
      'Adds resale value and street appeal',
      'Protects existing paving from sun and rain',
      'Styles to suit Federation through contemporary homes',
    ],
    priceFrom: null,
  },
  {
    slug: 'carports-sydney',
    name: 'Carports',
    navLabel: 'Carports',
    tagline: 'Single, double & custom',
    summary:
      'Attached and freestanding Colorbond carports, vehicle protection at a fraction of a garage.',
    title: 'Carports Sydney | Colorbond Carport Installation & Design',
    metaDescription:
      'Custom single & double carports across Sydney. Colorbond steel, attached or freestanding, council-compliant designs. Get a free quote today.',
    h1: 'Colorbond Carports Built for Sydney Homes',
    intro:
      "A carport is a roofed, usually open-sided structure that shelters a vehicle from sun, hail and rain without the enclosure, or the cost, of a full garage. For most Sydney homes it's the difference between a few thousand dollars and a few tens of thousands.",
    types: [
      { name: "Attached / lean-to", description: "Fixed to an existing wall or eave. Generally the cheaper option, though the engineering needed to tie into the house can offset some of that." },
      { name: "Freestanding", description: "Independent posts on all sides. Needed where there's no suitable wall, or for wider double and triple spans." },
      { name: "Gable roof", description: "Pitched roof that matches a gable patio or verandah elsewhere on the property." },
      { name: "Flat / skillion", description: "The most economical profile and the most common." },
      { name: "Single, double & triple bay", description: "Sized to the vehicles and the driveway. Worth allowing for door-opening clearance, not just vehicle width." },
    ],
    faqs: [
      { q: "Do I need council approval for a carport in Sydney?", a: "Carports can qualify as exempt development within size, height and setback limits, but those thresholds differ from patios, and they vary between councils. We check this against your specific address and council before quoting, rather than assuming." },
      { q: "Is an attached or freestanding carport cheaper?", a: "Attached is usually cheaper because it uses the house for partial support. Where the wall can't take the load, the engineering to make it work can close the gap with a freestanding structure." },
      { q: "How close to the boundary can a carport be built?", a: "Setback minimums apply and vary by council and by whether the structure is exempt, CDC or DA. Corner blocks and properties backing onto reserves often have stricter rules." },
      { q: "Can I convert a carport into a garage later?", a: "Sometimes, but enclosing it changes its classification and almost always requires fresh approval. If a garage is the eventual goal, tell us now so the slab and frame are specified for it." },
      { q: "Does a carport need a concrete slab?", a: "Not always. Posts can be footed into existing driveways or independent pad footings. A slab is about the surface you want, not structural necessity." },
      { q: "What size carport do I need for two cars?", a: "Wider than most people expect once you allow for opening doors on both sides. We measure against your actual vehicles and driveway rather than a standard figure." },
    ],
    compliance:
      "⚠️ Carport exempt-development thresholds in NSW differ from those for patios, and our research could not verify current figures to the same level of confidence. Do not rely on a generic 25m² rule for carports, the applicable size, height and setback limits should be confirmed against the current NSW Planning Portal fact sheet and your local council for your specific address. Licensed contractor over $5,000; HBCF insurance over $20,000. AS/NZS 1170.2 wind actions govern post spacing and footing design, particularly for freestanding structures on exposed sites. A new or widened driveway crossover requires separate council approval.",
    benefits: [
      'Protects vehicles from UV, hail and bird droppings',
      'Faster and cheaper to build than an enclosed garage',
      'Doubles as outdoor entertaining or storage space',
      'Colorbond finish matches your existing roof and fascia',
      'Usually no major structural change to the house',
    ],
    priceFrom: null,
  },
  {
    slug: 'decking-sydney',
    name: 'Decking',
    navLabel: 'Decking',
    tagline: 'Timber & composite',
    summary:
      'Merbau, Spotted Gum and composite decking, including elevated decks, pool surrounds and BAL-rated builds.',
    title: 'Decking Sydney | Timber & Composite Deck Builders',
    metaDescription:
      'Sydney decking specialists, Merbau, Spotted Gum & composite decking (ModWood, Ekodeck, NewTechWood). BAL-compliant builds. Free quote.',
    h1: 'Timber & Composite Decking Builders in Sydney',
    intro:
      "Decking is an elevated timber or composite platform that creates usable outdoor living space over ground you otherwise couldn't use, a slope, uneven fall, or tired existing paving. The main decision is timber versus composite, and it's mostly a maintenance decision rather than a looks decision.",
    types: [
      { name: "Merbau", description: "The most common hardwood in Australian decking. Red-brown, affordable, durable. Needs oiling to hold its colour, and will leach tannins early on." },
      { name: "Spotted Gum", description: "Premium Australian hardwood with strong grain and silver-grey tones as it weathers. More expensive than Merbau and worth it where the deck is a feature." },
      { name: "Blackbutt", description: "Pale, even-toned hardwood. Often chosen where a lighter deck is wanted, and it carries good bushfire-rated credentials." },
      { name: "Composite (ModWood, Ekodeck)", description: "Wood-plastic composite. No sanding, oiling or staining, with 20–25 year manufacturer warranties. Capped versions resist fade and stains better than uncapped." },
      { name: "Elevated decks", description: "Anything with a meaningful drop underneath. Needs engineering and, past a 1m fall, a compliant balustrade." },
      { name: "Pool surrounds", description: "Material choice matters more here, heat underfoot and slip resistance become the deciding factors." },
    ],
    faqs: [
      { q: "Timber or composite, which should I choose?", a: "If you'll actually oil a deck every year or two, hardwood looks better and costs less up front. If you won't, composite is the honest choice, an unmaintained hardwood deck looks worse after three years than a composite one ever will." },
      { q: "What's the best decking timber for Sydney's climate?", a: "Merbau and Spotted Gum both handle it well. Spotted Gum holds up slightly better in full sun and looks better as it silvers; Merbau is the value option." },
      { q: "Do I need council approval for a deck?", a: "Low decks close to the ground are often exempt development. Once there's a meaningful drop underneath, particularly over 1m, you're generally into CDC or DA territory, plus structural engineering." },
      { q: "How high can a deck be before it needs a balustrade?", a: "Under the NCC, a barrier is required wherever a fall of 1 metre or more is possible. Minimum height is 1000mm and gaps must not pass a 125mm sphere. Above about 4m there are additional restrictions on climbable horizontal elements." },
      { q: "Does composite decking get hot or slippery?", a: "It does get hot in direct summer sun, noticeably more than timber in some colours. Lighter colours help. Slip resistance varies by product and by whether it's capped; around pools this is worth specifying deliberately." },
      { q: "What decking is suitable for a bushfire-prone area?", a: "It depends on your BAL rating under AS 3959. BAL-12.5 and 19 allow a reasonable range; BAL-29 and above narrows it to non-combustible or specified bushfire-resisting timbers, and BAL-FZ requires non-combustible construction throughout." },
    ],
    compliance:
      "Decks fall under the same exempt / CDC / DA framework as patios. Elevated decks, particularly those with a fall over 1m, typically require DA or CDC plus structural engineering. The NCC requires a barrier wherever a fall of 1 metre or more is possible: minimum 1000mm high, gaps that will not pass a 125mm sphere, and for decks over roughly 4m no climbable horizontal elements between 150mm and 760mm. In bushfire-prone areas of Sydney, decking material, framing and gap sizing must match the site's BAL rating under AS 3959. A deck forming part of a pool barrier must also satisfy AS 1926.1.",
    benefits: [
      'Makes sloped or uneven blocks genuinely usable',
      'Composite needs no sanding, oiling or staining',
      'Hardwood offers a premium natural look that ages well',
      'Composite warranties typically run 20–25 years',
      'Can be built to BAL-compliant spec for bushfire-exposed sites',
    ],
    priceFrom: null,
  },
  {
    slug: 'fencing-gates-sydney',
    name: 'Fencing & Gates',
    navLabel: 'Fencing & Gates',
    tagline: 'Colorbond, timber & pool',
    summary:
      'Boundary, privacy and AS 1926.1-compliant pool fencing, plus manual and automated gates.',
    title: 'Fencing & Gates Sydney | Colorbond, Timber & Pool Fencing',
    metaDescription:
      'Sydney fencing contractors, Colorbond, timber, aluminium & AS1926.1-compliant pool fencing and gates. Licensed & insured. Free quotes.',
    h1: 'Fencing & Gate Installation Across Sydney',
    intro:
      "Fencing does three different jobs and they have almost nothing in common: marking a boundary, giving privacy, and, for pools, meeting a legal child-safety standard. Pool fencing in particular is compliance work with a certification deadline, not a landscaping choice.",
    types: [
      { name: "Colorbond steel", description: "The default in Sydney. Standard 1.8m panels, full colour range, effectively no maintenance." },
      { name: "Timber paling", description: "Cheaper up front, warmer looking, but needs staining or painting periodically and won't last as long in coastal air." },
      { name: "Aluminium slat", description: "Contemporary horizontal slat look with adjustable spacing for privacy versus airflow. Handles coastal salt better than steel or timber." },
      { name: "Frameless glass pool fencing", description: "Preserves sightlines to the pool while meeting AS 1926.1. The premium option." },
      { name: "Automated driveway gates", description: "Sliding or swing, with motor, remote and safety sensors. Usually specified alongside boundary fencing." },
    ],
    faqs: [
      { q: "Do I need council approval for a fence?", a: "Front and street-facing boundary fences are generally capped around 1.2m without approval; side and rear fences can often go to 1.8m. Rules vary by council, and corner blocks, heritage areas and fences backing onto public reserves are frequently stricter." },
      { q: "What are the pool fencing laws in NSW?", a: "AS 1926.1 requires a minimum 1.2m fence height, gaps no greater than 100mm at ground level and between vertical members, a 900mm non-climbable zone outside the fence, and gates that are self-closing, self-latching and swing outward only. NSW councils run compliance inspections on existing pools." },
      { q: "Who pays for a boundary fence in NSW?", a: "Under the Dividing Fences Act 1991 adjoining owners generally share the cost of a sufficient dividing fence equally. Disputes go to NCAT. If one owner wants something better than 'sufficient', they usually carry the difference." },
      { q: "Can my neighbour refuse to pay for a fence?", a: "They can disagree on the fence or the cost, which is what the Dividing Fences Act process exists to resolve. It's worth serving a proper Fencing Notice rather than starting work and invoicing afterwards." },
      { q: "Colorbond or timber?", a: "Colorbond for low maintenance and longevity, timber for warmth and lower up-front cost. In coastal suburbs Colorbond or aluminium is the more sensible long-term choice." },
      { q: "Can I install my own pool fence?", a: "Compliance is what matters, not who installs it, and a non-compliant pool barrier is a serious liability. We build to AS 1926.1 and can coordinate certification." },
    ],
    compliance:
      "Front and street-facing boundary fences are generally limited to around 1.2m without approval; side and rear fences may be exempt up to 1.8m non-masonry. These limits vary by council. Pool fencing is governed by AS 1926.1 (updated 2024): minimum 1.2m height, maximum 100mm gaps at ground level and between vertical members, a 900mm non-climbable zone outside the barrier, and self-closing, self-latching, outward-swinging gates. Cost-sharing for dividing fences between neighbours is governed separately by the Dividing Fences Act 1991, with disputes heard at NCAT. Licensed contractor over $5,000; HBCF insurance over $20,000.",
    benefits: [
      'Lasting privacy and security with virtually no maintenance',
      'Pool fencing that meets the law while preserving sightlines',
      'Automated gates add convenience and security',
      'Clearly defined boundaries reduce neighbour disputes',
      'Colorbond and aluminium resist coastal salt far better than untreated timber',
    ],
    priceFrom: null,
  },
  {
    slug: 'sunrooms-sydney',
    name: 'Sunrooms',
    navLabel: 'Sunrooms',
    tagline: 'Enclosed outdoor rooms',
    summary:
      'Enclosed patios, glass rooms and four-season sunrooms, turning an outdoor area into year-round living space.',
    title: 'Sunrooms Sydney | Enclosed Patios & Glass Room Builders',
    metaDescription:
      'Turn your patio into a year-round sunroom. Sydney enclosed patio & glass room specialists, DA/CDC handled, BASIX-compliant. Free quote.',
    h1: 'Sunrooms & Enclosed Outdoor Rooms in Sydney',
    intro:
      "A sunroom is a patio or verandah enclosed with glass, sliding doors or fixed glazing, turning it into a weatherproof room you can use year-round. It's the step between an outdoor area and a full home extension, and, importantly, it's usually treated as an extension for approval purposes.",
    types: [
      { name: "Enclosed patio (three-season)", description: "Existing patio enclosed with fixed or sliding glass and screens. Weatherproof and bug-proof, but not climate controlled." },
      { name: "Glass solarium", description: "Fully glazed walls and sometimes roof. The most light-filled option and the most expensive." },
      { name: "Four-season sunroom", description: "Insulated roof and walls plus heating and cooling, so it performs as genuine habitable space all year." },
      { name: "Pool enclosure", description: "Glazed structure over a pool or spa for weather protection and extended swimming season." },
      { name: "Café blinds", description: "The budget alternative to full glazing, not a sunroom, but worth considering if the goal is wind and rain protection rather than a sealed room." },
    ],
    faqs: [
      { q: "Do I need council approval to enclose my patio?", a: "Almost always, yes. Because you're adding walls and glazing to create enclosed space, a sunroom is generally treated as a home extension rather than exempt development, so expect a DA or CDC even if the original patio was exempt. We'd rather set that expectation now than after you've committed." },
      { q: "What's the difference between a sunroom and an enclosed patio?", a: "Mostly degree. An enclosed patio is weatherproofed outdoor space; a four-season sunroom is insulated, climate-controlled and performs as an indoor room. The approval path and the cost differ accordingly." },
      { q: "Can I use a sunroom all year round?", a: "A three-season room is comfortable most of the Sydney year but hot in peak summer and cool on winter mornings. Insulation, glazing specification and a split system are what make it genuinely four-season." },
      { q: "Does a sunroom add value to a house?", a: "It adds usable floor area, which is generally the thing that moves valuations. Whether it counts as habitable area depends on how it's built and approved." },
      { q: "Can my existing pergola or patio be converted?", a: "Often, yes, but the original footings and frame were sized for a roof, not for glazing loads and wall framing. We assess the existing structure before quoting rather than assuming it'll carry it." },
      { q: "How long does council approval take?", a: "Longer than most people expect. A CDC through a private certifier is usually the faster path; a DA through council can run to several months. Factor it into your timeline from the start." },
    ],
    compliance:
      "Because a sunroom encloses and roofs a space and adds walls and glazing, it is generally treated as a home extension rather than exempt development, expect to need a DA or CDC even where the original patio was exempt. A BASIX certificate is required once DA or CDC applies, and glazing type and area directly affect whether the thermal performance target is met, which can drive a requirement for double glazing or low-E glass. NCC habitable-room requirements for ventilation, glazing and possibly fire separation near a boundary apply once the space is enclosed living area. Licensed contractor over $5,000; HBCF insurance over $20,000, sunroom projects almost always exceed the HBCF threshold.",
    benefits: [
      'Converts an existing patio into genuine year-round space',
      'Floods the room with natural light, still part of the garden',
      'Adds usable floor area without a brick-and-tile extension',
      'Close up in winter, open up in summer',
      'Can be paired with heating and cooling for true four-season use',
    ],
    priceFrom: null,
  },
];

export const serviceBySlug = (slug) => services.find((s) => s.slug === slug);
