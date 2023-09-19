import { IoLogoVercel } from "react-icons/io5";

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
  { name: "HTML", logo: "html5" },
  { name: "CSS", logo: "css3" },
  { name: "JavaScript", logo: "javascript" },
  { name: "TypeScript", logo: "typescript" },
  { name: "React", logo: "react" },
  { name: "React Native", logo: "react" },
  { name: "Expo", logo: "expo" },
  { name: "MongoDB", logo: "mongodb" },
  { name: "Axios HTTP", logo: "" },
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

export const dreamCompanies = [
  { name: "Vercel", logo: "/svgs/vercel.svg" },
  { name: "Expo", logo: "/svgs/expo.svg" },
  { name: "Blizzard Ent.", logo: "/svgs/blizzard-entertainment.svg" },
  { name: "Epic Games", logo: "/svgs/epic.svg" },
] as const;
