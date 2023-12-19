import React from "react";
import { FaRobot } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { IoLogoAngular } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import indexProject from "@/public/indexProject.png";
import greenProject from "@/public/greenProject.png";
import kooksProject from "@/public/kooksProject.png";
import twoProject from "@/public/twoProject.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Algorithmic Trading",
    location: "Freelance - Cordoba, ARG",
    description:
      "Design and development of trading systems algorithms and indicators using MQL4 for MetaTrader 4, Pine Script for TradingView, C# for Ninja Trader 7 and 8 and strategy building in Ninja Trader 7 and 8 platform.",
    icon: React.createElement(FaRobot),
    date: "Jan 2018 - Jul 2022",
  },
  {
    title: "The developer carreer starts",
    location: "",
    description:
      "Having spent years developing software, I realized that web development was my calling. So, I began my self-taught studies and enrolled in the CoderHouse educational platform to train as a software engineer, learning the technologies demanded by the market.",
    icon: React.createElement(IoIosRocket),
    date: "Jul 2022",
  },
  {
    title: "SaaS Solution",
    location: "",
    description:
      'Pioneered the creation, design, and development of a distinctive B2C and B2B solution in LATAM. Automated processes through a WhatsApp-based "chatbot" with commands to a Python backend. Leveraged Selenium for web scraping and interfaced with +6 platforms, enhancing efficiency. Ask for more info.',
    icon: React.createElement(FaPython),
    date: "Aug 2022 - Jul 2023",
  },
  {
    title: "Angular Frontend Developer",
    location: "Bitlogic - Cordoba, ARG",
    description:
      "Starting my job in Junuary, I worked as a frontend developer Angular (sometimes fullstack) for 7 months in a project with Angular and .NET stack.",
    icon: React.createElement(IoLogoAngular),
    date: "Jun 2023 - Jul 2023",
  },
  {
    title: "React Frontend Developer",
    location: "Bitlogic - Cordoba, ARG",
    description:
      "I am now a React frontend developer working on a project with the React and Java Spring Boot stack. My core stack and job tasks are in React, but if the team needs help on the backend or with other technologies, I learn and work on that as well.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: ".index's",
    description:
      "All my projects in one place, this includes large projects and other small ones that were created to practice new technologies like Next.js, React Redux, Angular and more!",
    tags: ["Next.js", "React", "Redux", "And more"],
    imageUrl: indexProject,
    urlProject: "https://indexoneplace.netlify.app/"
  },
  {
    title: "Two Click",
    description:
      "E-commerce with pure javascript of Apple products including home page with category filter, price calculation based on external API consumption and email sending at checkout.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    imageUrl: twoProject,
    urlProject: "https://github.com/joaquinmetayer/twoclickstore"
  },
  {
    title: "Kooks Store",
    description:
      "E-commerce based on an NTF artist where it has a home page, product details and checkout, storing all this data in the Firebase database.",
    tags: ["React", "API Context", "Firebase", "HTML", "CSS"],
    imageUrl: kooksProject,
    urlProject: "https://github.com/joaquinmetayer/kooks-metayer"
  },
  {
    title: "GREEN Golf",
    description:
      "Responsive landing page about a gold school with pricing and contact section. Applying all the knowledge about html and css to create sites that adapt to any device.",
    tags: ["HTML", "CSS", "SASS"],
    imageUrl: greenProject,
    urlProject: "https://github.com/joaquinmetayer/greengolf"
  },
] as const;

export const coreSkillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "MaterialUI",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Axios",
  "Redux",
  "Git",
] as const;

export const workedWithData = [
  "Angular",
  "TestBed",
  "Angular Material",
  "React Testing Library",
  "Authentication",
  "Jest",
  "AWS",
  "C#",
  "ASP.NET",
  "Entity",
  "xUnit",
  "Python",
  "Selenium",
  "Java",
  "Spring Boot",
  "XAMPP",
  "Oracle",
  "SQL",
  "MySQL",
  "Firebase",
  "Postman",
  "Docker",
  "SASS",
  "Test Drive Development",
  "Netlify",
  "Vercel",
  "SonarQube",
  "SonarCloud",
  "And more 😅"
] as const
