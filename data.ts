import { IoSchoolSharp } from "react-icons/io5";
import { createElement } from "react";
import { AiFillChrome, AiFillMobile } from "react-icons/ai";

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
  { name: "Git", logo: "git-icon" },
  { name: "GitHub", logo: "github-icon" },
  { name: "Gitlab", logo: "gitlab" },
] as const;

export const projects = [
  {
    name: "TMDB Mobile",
    description:
      "A mobile app for browsing popular movies that users can add to their favorites and store locally on their devices.",
    images: {},
    tags: ["React Native", "TypeScript", "Redux", "Axios HTTP", "Rest API"],
  },
  {
    name: "Marvel Comics",
    description: "A mobile app for browsing Marvel Comics",
    images: {},
    tags: ["React Native", "TypeScript", "Redux", "Axios HTTP", "Rest API"],
  },
  {
    name: "To-modoro",
    description:
      "A mobile app for managing tasks using the Pomodoro technique and Todo list to stay up to date with your taks",
    images: {},
    tags: ["Expo", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Agricultic",
    description:
      "Agricultic is a digital platform that provides farmers and consumers with the necessary tools to automate all-in-one management processes.",
    images: {},
    tags: [
      "React",
      "Nextjs",
      "TypeScript",
      "Tailwind CSS",
      "Headless UI",
      "GraphQL",
      "Apollo",
      "Styled Components",
    ],
  },
  {
    name: "Personal Portfolio",
    description:
      "A personal portfolio website to showcase my projects and skills",
    images: {},
    tags: ["React", "Nextjs", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];

export const experience = [
  {
    name: "Kodigo",
    position: "Computer Science Fundamentals",
    description:
      "Finished a 3 month bootcamp where I learned the fundamentals of computer science and programming, as well as the basics of design patterns.",
    period: "2021",
    location: "San Salvador, El Salvador / Remote",
    icon: createElement(IoSchoolSharp),
  },
  {
    name: "Applaudo Studios",
    position: "Frontend Developer",
    description:
      " Built and implemented user interfaces using React and React Native frameworks. This involved writing clean, efficient, and maintainable code to create interactive components and screens and collaborated with designers and product teams to transform design mockups and wireframes into fully functional UI components and mobile app screens.",
    period: "2022 - 2023",
    location: "San Salvador, El Salvador / Remote",
    icon: createElement(AiFillMobile),
  },
  {
    name: "Agricultic",
    position: "Frontend Developer",
    description:
      "Designing and implementing the visual elements of the web app, including layout, typography, color schemes, and overall user experience and transforming design mockups into actual interactive components using Javascript, React/ Next, and Tailwind.",
    period: "2023 - Present",
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
