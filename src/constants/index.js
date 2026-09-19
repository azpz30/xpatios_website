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
      "We are a small, dedicated team of 3-5 professionals, providing personalized attention to meet your construction needs.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Quality Construction",
    content:
      "We go the extra mile, investing in top-tier materials and craftsmanship to create structures that are not only strong but also aesthetically pleasing and durable.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Very efficient and professional! Job well done. Highly recommended",
    name: "Richard Zeaiter",
    title: "Customer",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "I am extremely pleased with the team at Xpatios as they were incredibly hardworking and completed the my outdoor insulated patio to a very high standard. From start to finish I was amazed at how experienced and professional they were and the pricing was very reasonable. I would recommend them if your wishing to do your Patios!",
    name: "Aster Araya",
    title: "Customer",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "The team of Xpatios were very professional, and conducted themselves in a very timely manner. They completed the job the way they promised. Their price is very fare and affordable. I highly recommend them. Thanks to Mr Tanvir and his team.",
    name: "Me'o Ekhlass",
    title: "Customer",
    img: people03,
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
