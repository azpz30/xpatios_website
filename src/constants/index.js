import { people01, people02, people03, facebook, instagram, linkedin, send, shield, star } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  // {
  //   id: "features",
  //   title: "Features",
  // },
  {
    id: "gallery",
    title: "Gallery",
  },
  // {
  //   id: "clients",
  //   title: "Clients",
  // },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Expert Civil Engineering",
    content:
      "Led by a seasoned civil engineer, our team brings expertise to every project, ensuring precision and excellence.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Dedicated Team",
    content:
      "A dedicated team of professionals, providing personalised attention to meet your construction needs.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Quality Construction",
    content:
      "We go the extra mile, investing in top-tier materials and craftsmanship to create structures that are not only strong but also aesthetically pleasing and durable.",
  },
];

// These are real Google reviews for Xpatios (5.0 average). They are hardcoded
// rather than fetched: pulling live reviews needs the Google Places API
// (billable, requires a server-side key) or a third-party widget. See
// docs/08-SEO-STRATEGY.md §8 — the stars in search results come from the
// Business Profile, never from markup on this site.
export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/search/?api=1&query=Xpatios+Bankstown+NSW';
export const GOOGLE_RATING = { average: 5.0 };

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Very efficient and professional! Job well done. Highly recommended",
    name: "Richard Zeaiter",
    source: "Google",
    rating: 5,
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "I am extremely pleased with the team at Xpatios as they were incredibly hardworking and completed the my outdoor insulated patio to a very high standard. From start to finish I was amazed at how experienced and professional they were and the pricing was very reasonable. I would recommend them if your wishing to do your Patios!",
    name: "Aster Araya",
    source: "Google",
    rating: 5,
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "The team of Xpatios were very professional, and conducted themselves in a very timely manner. They completed the job the way they promised. Their price is very fare and affordable. I highly recommend them. Thanks to Mr Tanvir and his team.",
    name: "Me'o Ekhlass",
    source: "Google",
    rating: 5,
    img: people03,
  },
  {
    id: "feedback-4",
    content:
      "I couldn't be happier with the pergola Hasan from Xpatios built for us. From start to finish, he showed exceptional professionalism and genuine attention to detail. Hasan listened carefully to all of my requirements and delivered exactly what I had envisioned. The quality of workmanship is outstanding, and it's clear he takes great pride in his work. The end result is a beautiful, well-finished pergola that has completely transformed our space. Highly recommended for anyone looking for reliability and excellent service.",
    name: "Maz R",
    source: "Google",
    rating: 5,
  },
  {
    id: "feedback-5",
    content:
      "They finished everything in just 3 days which was impressive. They even cleaned up my old pergola properly, which they didn't have to do. Also had an issue because my electrician messed something up, but they came back later with their own electrician and fixed it without charging me anything extra. Really solid service. I'll definitely be calling them again.",
    name: "M Tamal",
    source: "Google",
    rating: 5,
  },
  {
    id: "feedback-6",
    content:
      "The boys came in and built an awesome 25m squared pergola in less than 2 days. I am beyond happy with the outcome and the price was very fair.",
    name: "Andy Taleb",
    source: "Google",
    rating: 5,
  },
  {
    id: "feedback-7",
    content:
      "Xpatios did a great job with the design and build of our new Carport. Hasan and the team did a great job and I would definitely recommend their services.",
    name: "Wayne",
    source: "Google",
    rating: 5,
  },
  {
    id: "feedback-8",
    content:
      "My neighbour spent around $10k on theirs, and honestly these guys did an even better job for just $7k. Price was very fair and the quality of work speaks for itself.",
    name: "atwell court",
    source: "Google",
    rating: 5,
  },
  {
    id: "feedback-9",
    content:
      "Best in the business. Thoroughly professional and the quality of work is amazing.",
    name: "Raonaq Saroz",
    source: "Google",
    rating: 5,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Happy Clients",
    value: 150,
    suffix: "+",
  },
  {
    id: "stats-2",
    title: "Projects Completed",
    value: 200,
    suffix: "+",
  },
  {
    // TODO(xpatios): placeholder — replace with the real figure before launch.
    // Sydney competitors advertise 10–35 years; publishing an unverified
    // number is a Consumer Law risk, not just a copy problem.
    id: "stats-3",
    title: "Years Experience",
    value: 10,
    suffix: "+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.facebook.com/profile.php?id=100083071642027&sk=photos",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Partners",
        link: "https://www.stratco.com.au/",
      },
      {
        name: "Blog",
        link: "https://www.facebook.com/profile.php?id=100083071642027",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/xpatios_pty_ltd/",
  },
  {
    id: "social-media-2",
    name: "Facebook",
    icon: facebook,
    link: "https://www.facebook.com/profile.php?id=100083071642027",
  },
  {
    id: "social-media-4",
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];
