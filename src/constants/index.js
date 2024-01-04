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
    snake
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
    }
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
      name: "Order Website",
      description:
        "Web application platform that allows users to order website.",
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
      image:allopower,
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
      image:weather,
      source_code_link: "https://github.com/AmirFamili/TheWeather",
    },
   
    {
      name: "Resturant",
      description:
        "A website for order online food from the resturant.",
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
      image:resturant,
      source_code_link: "https://github.com/AmirFamili/Resturant",
    },
    {
      name: "Snake",
      description:
        "Web application platform that allows users to play Snak game.",
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
      image:snake,
      source_code_link: "https://github.com/AmirFamili/Snake",
    }
  ];
  
  export { technologies, testimonials, projects };