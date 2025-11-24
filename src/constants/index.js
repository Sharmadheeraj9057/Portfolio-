import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  github,
  figma,
  skillbit,
  starbucks,
  Farmer,
  portfolio,
  flutter,
  Whatsapp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "UI/UX Developer",
    company_name: "WAAVEX",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2025 - Jun 2025",
    points: [
      "Offered the role of Graphic Design Intern at Waavex, focusing on gaining hands-on experience in the field of graphic design.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Skillbit Technologies",
    icon: skillbit,
    iconBg: "#383E56",
    date: "August 2025 - September 2025",
    points: [
      "The company was impressed with your qualifications and passion for Front-End Development, anticipating a valuable contribution to their team.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Farmer Sakha",
    description:
      "Farmer Sakha is an innovative mobile application designed to digitize and streamline Contract Farming within the agriculture sector. The app's core objective is to establish a direct and transparent connection between Farmers and Buyers, effectively eliminating intermediaries.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "FireBase",
        color: "green-text-gradient",
      },
      {
        name: "Dart",
        color: "pink-text-gradient",
      },
    ],
    image: Farmer,
    //source_code_link: "https://github.com/",
  },
  {
    name: "What's App Clone",
    description:
      "WhatsApp Clone is a detailed UI/UX design exercise meticulously executed on Figma. The project's core objective was to replicate and master the platform's key features, demonstrating proficiency in mobile design architecture and component creation.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
    ],
    image: Whatsapp,
    //source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio Website",
    description:
      "This website is my personal Developer Portfolio, designed to be an immersive and interactive experience.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "R3f",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    //source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
