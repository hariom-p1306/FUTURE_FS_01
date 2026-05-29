// Skills Section Logos
import htmlLogo from '../assets/tech_logo/html.png';
import cssLogo from '../assets/tech_logo/css.png';

import javascriptLogo from '../assets/tech_logo/javascript.png';
import reactjsLogo from '../assets/tech_logo/reactjs.png';

import tailwindcssLogo from '../assets/tech_logo/tailwindcss.png';

import bootstrapLogo from '../assets/tech_logo/bootstrap.png';

import nodejsLogo from '../assets/tech_logo/nodejs.png';
import expressjsLogo from '../assets/tech_logo/express.png';
import mysqlLogo from '../assets/tech_logo/mysql.png';
import mongodbLogo from '../assets/tech_logo/mongodb.png';

import cLogo from '../assets/tech_logo/c.png';
import  muiLogo from '../assets/tech_logo/materialUI.png';
import  websocketLogo from '../assets/tech_logo/socketIO.png';

import javaLogo from '../assets/tech_logo/java.png';
import pythonLogo from '../assets/tech_logo/python.png';

import gitLogo from '../assets/tech_logo/git.png';
import githubLogo from '../assets/tech_logo/github.png';
import vscodeLogo from '../assets/tech_logo/vscode.png';
import postmanLogo from '../assets/tech_logo/postman.png';

import vercelLogo from '../assets/tech_logo/vercel.png';
import placementprep from '../assets/work_logo/placementprep.png';



// Project Section Logos
import meetsync from  '../assets/work_logo/webRTC.png';
import airbnblogo from '../assets/work_logo/airbnb.png';
// import myportfolio from '../assets/work_logo/myportfolio.png';


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React.js", logo: reactjsLogo },
      { name: "Next.js", logo: reactjsLogo }, // temporary
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: muiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: nodejsLogo },
      { name: "Express.js", logo: expressjsLogo },
      { name: "REST APIs", logo: postmanLogo },
      { name: "WebSockets", logo: websocketLogo },
      { name: "Socket.io", logo: websocketLogo },
      { name: "JWT Auth", logo: nodejsLogo },
      { name: "WebRTC", logo: websocketLogo },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "PostgreSQL", logo: mysqlLogo }, // temporary
      { name: "Database Design", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: javascriptLogo }, // temporary
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C", logo: cLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Docker", logo: vscodeLogo }, // temporary
      { name: "Postman", logo: postmanLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Render", logo: vercelLogo }, // temporary
    ],
  },
  {
    title: "Core CS",
    skills: [
      { name: "DSA", logo: javaLogo },
      { name: "OOP", logo: javaLogo },
      { name: "DBMS", logo: mysqlLogo },
      { name: "OS", logo: vscodeLogo },
      { name: "CN", logo: websocketLogo },
      { name: "System Design Basics", logo: nodejsLogo },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "Avijo",
    duration: "Jan 2026 – Present",
    location: "Remote",
    description: [
      "Developed and maintained admin panel modules for certificate issuance and facility management using React.js, Node.js, Express.js, and MongoDB.",
      "Integrated frontend components with RESTful APIs and implemented optimized CRUD operations to improve data handling and performance.",
      "Debugged authentication, API integration, and network-related issues to improve application stability and user experience.",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    id: 2,
    role: "Full Stack Developer Intern",
    company: "Future Interns",
    duration: "2026",
    location: "Remote",
    description: [
      "Worked on production-level website features and backend optimization tasks.",
      "Improved API integration, fixed bugs, and contributed to code through GitHub pull requests.",
      "Collaborated with the team to improve real-world application performance and maintainability.",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "GitHub"],
  },
];



export const projects = [
  {
    id: 1,
    title: "PlacementPrep AI – AI-Powered Interview Preparation Platform",
    description:
      "Built and deployed an AI-powered interview preparation platform with DSA, HR, and Technical Interview practice modes, AI-based answer feedback, reusable UI components, and responsive layouts.",
    image: placementprep, // replace with placementprep later
    tags: [
      "Next.js",
      "TypeScript",
      "LLM API",
      "Tailwind CSS",
      "JavaScript",
      "AI Integration",
    ],
    github: "https://github.com/hariom-p1306/PlacementPrepAI",
    webapp: "https://placement-prep-ai-ft14-5yhmhwyuj.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "MeetSync – Real-Time Video Conferencing Platform",
    description:
      "Built a real-time video conferencing platform supporting video calls, screen sharing, chat, secure meeting rooms, WebRTC signaling, and room-based communication using MERN Stack and Socket.io.",
    image: meetsync,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "WebRTC",
      "Socket.io",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com/hariom-p1306/MeetSync-Secure-WebRTC-Video-Conferencing",
    webapp: "https://meetsync-secure-webrtc-video.onrender.com/",
    featured: true,
  },
  {
    id: 3,
    title: "StayEase – Full-Stack Property Booking Platform",
    description:
      "Developed a full-stack property booking platform with authentication, listings, reviews, filters, Cloudinary uploads, map-based search, and host/guest workflows.",
    image: airbnblogo,
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Bootstrap",
      "Authentication",
      "REST API",
      "Cloudinary",
    ],
    github: "https://github.com/hariom-p1306/AirBnb-Full-Stack-Project-.git",
    webapp: "https://airbnb-full-stack-project-e7eq.onrender.com/listings",
    featured: true,
  },
];

export const achievements = [
  {
    id: 1,
    title: "300+ LeetCode Problems Solved",
    description:
      "Solved 300+ coding problems, demonstrating strong fundamentals in Data Structures, Algorithms, and problem solving.",
  },
  {
    id: 2,
    title: "Ranked #8 in IIT BHU Testathon",
    description:
      "Secured rank #8 out of 1000+ participants in IIT BHU Testathon.",
  },
  {
    id: 3,
    title: "Final Round at Vihaan 9.0 Hackathon",
    description:
      "Reached the final round at Vihaan 9.0 Hackathon organized by DTU with VideoSense AI.",
  },
  {
    id: 4,
    title: "Devcation Delhi 2026",
    description:
      "Participated in Devcation Delhi 2026 organized by GDG IIT Delhi and IGDTUW.",
  },
];