import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  gsap,
  git,
  figma,
  nextjs,
  webdeveloper,
  learning,
  weather,
  allopower,
  resturant,
  snake,
  theauthenticapproach,
  calendar,
  multiStep,
  khateelm
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "GSAP",
    icon: gsap,
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

const projects = [
  {
    name: "Khateelm",
    description: "Khateelm is a fast, responsive e-commerce platform built with Next.js, MUI, and Django.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: khateelm,
    source_code_link: "https://github.com/binaludweb/khateelm-front/tree/develop",
    web_link:'https://khateelm.com/landing',
  },
  {
    name: "The Authentic Approach",
    description: "Web application for a Company. A safe & supportive space to share your authentic self.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Emailjs",
        color: "pink-text-gradient",
      },
    ],
    image: theauthenticapproach,
    source_code_link: "https://github.com/AmirFamili/the-authentic-approach",
    web_link:'https://theauthenticapproach.com/',
  },
  {
    name: "The Calendar",
    description: "Web application for show calendar for save events.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "day.js",
        color: "pink-text-gradient",
      },
    ],
    image: calendar,
    source_code_link: "https://github.com/AmirFamili/calendar-app",
    web_link:'https://amirfamili.github.io/calendar-app/',
  },
  {
    name: "Order Website",
    description: "Web application platform that allows users to order website.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: webdeveloper,
    source_code_link: "https://github.com/AmirFamili/webDeveloper",
     web_link:'https://amirfamili.github.io/webDeveloper/',
  },
  {
    name: "Multi-Step",
    description: "Web application for multi step form registration.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: multiStep,
    source_code_link: "https://github.com/AmirFamili/multi-step-form",
  },

  {
    name: "Learn Frontend",
    description:
      "Web-based that enables users to register for class to learn HTML, CSS and JavaScript.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: learning,
    source_code_link: "https://github.com/AmirFamili/web-site-learning",
  },
  {
    name: "Car battery",
    description:
      "A website for buy battery.This website has cart for order battery and pay it.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: allopower,
    source_code_link: "https://github.com/AmirFamili/shopping-web-site",
  },
  {
    name: "The weather",
    description:
      "A website for show the weather. This website uses API for get weather.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/AmirFamili/TheWeather",
  },

  {
    name: "Resturant",
    description: "A website for order online food from the resturant.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: resturant,
    source_code_link: "https://github.com/AmirFamili/Resturant",
  },
  // {
  //   name: "Snake",
  //   description:
  //     "Web application platform that allows users to play Snak game.",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: snake,
  //   source_code_link: "https://github.com/AmirFamili/Snake",
  // },
];

export { technologies, projects };
