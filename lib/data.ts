import { createElement } from "react";
import { IoSchoolSharp } from "react-icons/io5";
import { AiFillChrome, AiFillMobile } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

export const navigation = [
  { name: "Home", path: "/#home" },
  { name: "About", path: "/#about" },
  { name: "Projects", path: "/#projects" },
  { name: "Skills", path: "/#skills" },
  { name: "Experience", path: "/#experience" },
  { name: "Contact", path: "/#contact" },
] as const;

export const socials = [
  { name: "Github", link: "", icon: "github" },
  { name: "LinkedIn", link: "", icon: "linkedin" },
] as const;

export const skills = [
  { name: "HTML", logo: "html" },
  { name: "CSS", logo: "css-3" },
  { name: "JavaScript", logo: "javascript" },
  { name: "TypeScript", logo: "typescript" },
  { name: "React", logo: "react-2" },
  { name: "Nextjs", logo: "next-js" },
  { name: "React Native", logo: "react-native" },
  { name: "Redux", logo: "redux" },
  { name: "Expo", logo: "expo" },
  { name: "MongoDB", logo: "mongodb-icon" },
  { name: "Axios HTTP", logo: "axios" },
  { name: "GraphQL", logo: "graphql" },
  { name: "Apollo", logo: "apollo-graphql-compact" },
  { name: "Tailwind CSS", logo: "tailwind-css" },
  { name: "Styled Components", logo: "styled-components" },
  { name: "Framer Motion", logo: "framer-motion" },
  { name: "Git", logo: "git-icon" },
  { name: "GitHub", logo: "github" },
] as const;

export const projects = [
  {
    name: "TMDB Mobile",
    description:
      "A mobile version of the reputed website The Movies Database that aims to provide a better user experience while browsing movies and series on their mobile device.",
    images: "/images/tmdb.png",
    tags: [
      "React Native",
      "Expo",
      "Expo Router V2",
      "TypeScript",
      "Redux",
      "Axios HTTP",
      "Rest API",
    ],
    href: "https://github.com/SorraimiRivas/tmdb-mobile-unofficial",
  },
  {
    name: "Marvel Comics",
    description:
      "A mobile app for browsing Marvel Comics and their many characters that we love.",
    images: "/images/marvel.png",
    tags: ["React Native", "TypeScript", "Redux", "Axios HTTP", "Rest API"],
    href: "https://github.com/SorraimiRivas/marvel-comics",
  },
  {
    name: "Agricultic",
    description:
      "Agricultic is a digital platform that provides farmers and consumers with the necessary tools to automate all-in-one management processes.",
    images: "/images/agricultic.png",
    tags: [
      "React",
      "Nextjs",
      "TypeScript",
      "Tailwind CSS",
      "Headless UI",
      "GraphQL",
      "Apollo",
    ],
    href: "https://agricultic.com.do/",
  },
];

export const experience = [
  {
    name: "Kodigo",
    position: "Computer Science Fundamentals",
    description:
      "Finished a 3 month bootcamp where I learned the fundamentals of computer science and programming, as well as the basics of design patterns.",
    period: "October, 2021 - January, 2022",
    location: "San Salvador, El Salvador / Remote",
    icon: createElement(IoSchoolSharp),
  },
  {
    name: "Applaudo Studios",
    position: "React Native Trainee Program",
    description:
      "Intensive 3 month training program where I learned the fundamentals of React Native and how to build mobile apps using React Native. Learned about Typescript, Redux, Axios, and how to consume Rest APIs as well as React Navigation and how to build complex navigations using Drawer, Bottom Tabs, Top Tabs Navigation and much more.",
    period: "January, 2022 - March, 2022",
    location: "San Salvador, El Salvador / Remote",
    icon: createElement(AiFillMobile),
  },
  {
    name: "Applaudo Studios",
    position: "React/React Native Front-End Developer",
    description:
      " Built and implemented user interfaces using React and React Native frameworks. This involved writing clean, efficient, and maintainable code to create interactive components and screens and collaborated with designers and product teams to transform design mockups and wireframes into fully functional UI components and mobile app screens.",
    period: "March, 2022 - March, 2023",
    location: "San Salvador, El Salvador / Remote",
    icon: createElement(FaReact),
  },
  {
    name: "Undisclosed Outsourcing Provider",
    position: "React Native Consultant",
    description:
      "I played a pivotal role in enhancing the app's performance, resulting in an impressive 80% reduction in screen navigation load times, from 6-9 seconds down to 1-2 seconds. This significantly improved the user experience. My responsibilities included refactoring code to eliminate redundancy and bad practices, ensuring more predictable and maintainable code with consistent naming conventions. Additionally, I led the redesign of data flow for select screens, simplifying the codebase and enhancing scalability for future development.",
    period: "July, 2023 - August, 2023",
    location: "Santo Domingo, Rep. Dom",
    icon: createElement(BsPersonLinesFill),
  },
  {
    name: "Agricultic",
    position: "Frontend Developer",
    description:
      "Designing and implementing the visual elements of the web app, including layout, typography, color schemes, and overall user experience and transforming design mockups into actual interactive components using Javascript, React/ Nextjs, Tailwind, and Headless UI.",
    period: "March, 2023 - Present",
    location: "La Vega, Rep. Dom. / Remote",
    icon: createElement(AiFillChrome),
  },
];
export const dreamCompanies = [
  { name: "Vercel", logo: "/svgs/vercel.svg" },
  { name: "Expo", logo: "/svgs/expo.svg" },
  { name: "Blizzard Ent.", logo: "/svgs/blizzard-entertainment.svg" },
  { name: "Epic Games", logo: "/svgs/epic.svg" },
] as const;
