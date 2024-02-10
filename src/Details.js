// Enter all your detials in this file

import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import vercel from "./assets/techstack/vercel.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import node from "./assets/techstack/node.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";


export const personalDetails = {
  name: "Shruti Gossain",
  tagline: "I build things for web",
  img: profile,
  about: "A dedicated computer science student currently pursuing my B.Tech degree. My journey in technology has been diverse, ultimately guiding me towards specializing in web development. I possess a strong passion for problem-solving. In addition to my adept coding skills, I actively contribute to the open-source community, advocating for collaborative knowledge sharing. Furthermore, I bring a creative flair to my work, excelling in the role of a UX/UI designer, utilizing the powerful Figma software to craft compelling user experiences."};

export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/shrutigossain/",
  github: "https://github.com/ShrutiGossain",
  twitter: "https://twitter.com/SGossain5152",
  insta: "https://www.instagram.com/shrutix_07/"
};

export const workDetails = [
  {
    Position: "Alpha MLSA",
    Company: `Microsoft Learn Student Ambassador`,
    Location: 'Online',
    Type: "Full Time",
    Duration: "Oct 2023 - Present",
  },
  {
    Position: "Cloud Virtual Intern",
    Company: `AICTE NEAT`,
    Location: 'Online',
    Type: "Internship",
    Duration: "Sep 2023 - Nov 2023",
  },
  {
    Position: "Contributor",
    Company: `GSSoC (GirlScript Summer of Code)`,
    Location: 'Online',
    Type: "Open Source Contribution",
    Duration: "May 2023 - Aug 2023",
  },
];

export const eduDetails = [
  {
    Position: "Bachelor in Computer Science and Engineering",
    Company: `G.L.Bajaj Institute of Technology and Management`,
    Location: "Greater Noida",
    Type: "Full Time",
    Duration: "Nov 2021 - Jun 2025",
  },
  {
    Position: "High Shool",
    Company: `Holy Child School`,
    Location: "Ghaziabad",
    Duration: "2021",
  },
  {
    Position: "Frontend Development",
    Company: "Meta, Coursera",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jun 2023 - Present",
  }
];

export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  node: node,
  vercel: vercel,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

export const projectDetails = [
  {
    title: "MediCare",
    image: projectImage1,
    description: `MediCare focused on managing patient records by ensuring data security and a smart contract-based consent management system, the technology plays a vital role in securing sensitive healthcare information and enhancing patient privacy. The system serves as a comprehensive repository for patient records, offering healthcare providers and authorized personnel quick and secure access to critical medical data.`,
    techstack: "HTML/CSS, React.js, Ether.js, Solidity, TailWind CSS, Bootstrap",
    // previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Relief Connect",
    image: projectImage2,
    description: `This is a disaster relief and rescue aid. It aims to reduce the issue of fragmented response by various organizations during the times of floods. This solution is a web based app.During natural calamities, people face a myriad of challenges, including a fragmented response, lack of information sharing, inefficient resource allocation, communication gaps, and difficulties in volunteer coordination. Relief Connect addresses these challenges and thus contributing to a more compassionate and effective relief effort during times of crisis.`,
    techstack: "HTML/CSS, React.js, Bootstrap, Google APIs, Mapbox, Tailwind CSS",
    // previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Text-Analyzer",
    image: projectImage3,
    description: `
    Text Analyzer is a versatile utility website designed to manipulate text content according to user preferences. It offers several functions to modify text, including converting text to uppercase or lowercase, copying text, removing extra spaces, and clearing text.Additionally, It offers a text summary feature along with a preview, providing users with a comprehensive overview of their text content and how it will appear after applying various modifications. This combination of features makes it a valuable tool for efficiently managing and manipulating text content according to user preferences.`,
    techstack: "HTML/CSS, React.js Bootstrap",
    // previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "ShopEase",
    image: projectImage4,
    description: `The Shopease project aims to streamline and simplify the online shopping experience for users browsing websites. It focuses on implementing various features and optimizations to enhance user convenience and satisfaction during the shopping process. `,
    techstack: "HTML/CSS, React.js, Node.js, Express.js, MongoDB",
    // previewLink: "https://google.com",
    githubLink: "https://github.com",
  }
];

export const contactDetails = {
  email: "shrutigossain335@gmail.com",
  phone: "+91 12345 67890",
};