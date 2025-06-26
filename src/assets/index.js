// Hero
import LinkedinBoxFillIcon from "remixicon-react/LinkedinBoxFillIcon";

import GithubLineIcon from "remixicon-react/GithubLineIcon";
import GameIcon from "remixicon-react/GameFillIcon";
import Image from "next/image";

/* eslint-disable react/jsx-key */
export const heroIcons = [
  {
    link: "https://www.linkedin.com/in/haowuhw/",
    img: <LinkedinBoxFillIcon size={48} />,
  },
  {
    link: "https://github.com/wuhao2809",
    img: <GithubLineIcon size={48} />,
  },
];

// About Me
import GithubFillIcon from "remixicon-react/GithubFillIcon";

export const aboutData = [
  {
    title: "Github Repos",
    amount: 20,
    icon: <GithubFillIcon />,
  },
  {
    title: "Leetcode Problems",
    amount: 260,
    icon: <Image src={"/leetcode.png"} alt="leetcode" width={24} height={24} />,
  },
  {
    title: "Hours of GamePlay",
    amount: 10000,
    icon: <GameIcon />,
  },
];

import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftSFillIcon />;

export const aboutText =
  " Hi, I'm Hao, a Master of Computer Science student at Northeastern University and a backend-focused full-stack software engineer with a passion for building reliable, scalable, and efficient systems. I combine hands-on experience in cloud infrastructure (AWS, GCP), API integrations, and distributed systems with a solid foundation in computer science. My expertise spans Python, Java, Go, C++, Node.js, and React... I'm always eager to take on new challenges, and I genuinely love coding—whether it's optimizing a distributed system or crafting a seamless user experience.";
// End of About Me

// Experience
export const experienceData = [
  {
    year: "2024 - 2025",
    title: "Software Developer Co-op @ Teck Resources Limited",

    experience: [
      "•	Built an automated sync system for ATS using APIs, OOP, Python, Power Platform, and VMs, cutting manual work and boosting reliability.",
      "•	Led system testing with cross-functional teams to ensure performance, quickly spotting and fixing issues.",
      "•	Created a ticketing system with Power Automate, SharePoint, Power BI, Teams, and Azure DevOps to streamline collaboration, track tickets, and generate reports.",
      "•	Streamlined talent workflows for a global mining firm by integrating 18+ enterprise apps.",
    ],
  },
  {
    year: "2023",
    title: "Master of Science in Computer Science @ Northeastern University",
    education:
      "Pursuing a Master of Science in Computer Science with core courses in Computer Systems, Distributed Systems, Web Development, Database Management, Game Engine Architecture, and Algorithms, etc.",
    experience: [
      "• Completed team-based and individual projects in areas such as backend systems, cloud architecture, and full-stack web development.",
      "• Built foundational and advanced skills in data structures, system design, and scalable software engineering practices."
    ]
  },
  {
    year: "2022",
    title: "Investment Banking Senior Associate @ CITICS",
    experience: [
      "• Executed IPO and M&A deals for leading manufacturing and energy companies in China, managing due diligence, drafting prospectuses, and coordinating with legal and auditing teams.",
"• Prepared clients for public listing by developing financial strategies that aligned with regulatory requirements and ensured smooth approval from the China Securities Regulatory Commission.",
"• Conducted industry research and data analysis to support investment narratives and successfully attracted cornerstone investors to strengthen deal structure and valuation.",
    ],
  },
  {
    year: "2019 - 2021",
    title: "Master of Engineering @ University of Tokyo",
    education:
      "Earned a Master of Engineering with a focus on Mechanical and Materials Engineering. Conducted research on Carbon Fiber Reinforced Thermoplastics (CFRTP).",
    experience: [
      "• Utilized image recognition to analyze fiber alignment patterns in CFRTP samples and predict mechanical modulus of individual slices.",
      "• Applied principles of mechanical design and materials characterization to support research in lightweight and high-strength composites."
    ]
  }

];

// Skills
export const skillsData = [
  {
    name: "Python",
    icon: "/skills/python.png",
  },
  {
    name: "Java",
    icon: "/skills/java.png",
  },
  {
    name: "C/CPP",
    icon: "/skills/cpp.png",
  },
  {
    name: "Go",
    icon: "/skills/go.png",
  },
  {
    name: "Rust",
    icon: "/skills/rust.png",
  },
  {
    name: "HTML",
    icon: "/skills/html.png",
  },
  {
    name: "CSS",
    icon: "/skills/css.png",
  },
  {
    name: "JavaScript",
    icon: "/skills/js.png",
  },

  {
    name: "NodeJS",
    icon: "/skills/nodejs.png",
  },
  {
    name: "ReactJS",
    icon: "/skills/react.png",
  },
  {
    name: "Postgresql",
    icon: "/skills/postgresql.png",
  },
  {
    name: "MongoDB",
    icon: "/skills/mongodb.png",
  },
  {
    name: "Redis",
    icon: "/skills/redis.png",
  },
  {
    name: "Express",
    icon: "/skills/express.png",
  },
  {
    name: "Spring Boot",
    icon: "/skills/springboot.png",
  },
  {
    name: "Docker",
    icon: "/skills/docker.png",
  },
  {
    name: "Kubernetes",
    icon: "/skills/kubernetes.png",
  },
  {
    name: "aws",
    icon: "/skills/aws.png",
  },
  {
    name: "Kafka",
    icon: "/skills/kafka.png",
  },
  {
    name: "Rabbitmq",
    icon: "/skills/rabbitmq.png",
  },
  {
    name: "Github",
    icon: "/skills/github.png",
  },
  {
    name: "TailwindCSS",
    icon: "/skills/tailwind.png",
  },
  {
    name: "Framer Motion",
    icon: "/skills/framer.png",
  },
  {
    name: "NextJS",
    icon: "/skills/nextjs.png",
  },
];

// Reviews
import StarFillIcon from "remixicon-react/StarFillIcon";
import StarHalfLineIcon from "remixicon-react/StarHalfLineIcon";
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

/* eslint-disable react/jsx-key */
export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />];
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />];

// Projects
export const projectsData = [
  {
    name: "Little Shark Crypto Trading Bot",
    desc: "An automated cryptocurrency trading system for Binance that uses cointegration-based strategies and dynamic hedge-ratio backtesting to trade.",
    url: "/projects/littleshark.png",
    tech: ["Quant", "Backend", "Python"],
    link:"https://github.com/wuhao2809/little_shark_arbitrage_bot_binance",
  },
  {
    name: "Fault-Tolerant Key-Value Store (private)",
    desc: "Built a fault-tolerant, replicated key-value store using the Raft consensus algorithm as part of MIT's 6.5840 Distributed Systems course. The system ensures consistency, leader election, log replication, and handles server crashes and network partitions.",
    url: "/projects/raft-mit.png",
    tech: ["Backend", "Computer Systems", "Go",],
    link: "https://pdos.csail.mit.edu/6.824/labs/lab-shard1.html"
  },
  {
    name: "Random Talk",
    desc: "A peer-to-peer prototype application that enables decentralized, real-time message broadcasting and peer discovery using the libp2p networking stack in Go.",
    url: "/projects/randomtalk.png",
    tech: ["Go", "Backend", "Computer Systems", "Web"],
    link: "https://github.com/wuhao2809/Random_talk_CS6650"
  },
  {
    name: "Auto Coding Machine - AI Powered Web Project",
    desc: "A Rust tool that uses AI agents to automate the planning and generation of web projects. It interprets user input, coordinates specialized agents like Project Manager and Developer, and scaffolds backend code with minimal manual effort using asynchronous execution and modular architecture.",
    url: "/projects/autocodingmachine.png",
    tech: ["Rust", "Web", "AI"],
    link: "https://github.com/wuhao2809/Auto_Coding_Machine"
  },
  {
    name: "Tarot Card Reader - AI-Powered Full-Stack Web App",
    desc: "A full-stack web application that lets users draw tarot cards and receive GPT-powered interpretations. Built with React, Node.js, and PostgreSQL, the app offers a responsive and accessible user experience across devices.",
    url: "/projects/tarotreader.png",
    tech: ["Web", "ReactJS"],
    link: "https://github.com/wuhao2809/Tarot_Reader",
  },
  
  {
    name: "GuideSense — sensing obstacles, speaking solutions",
    desc: "🏆 1st Place at Qualcomm x Microsoft x Northeastern University On-Device AI Builders Hackathon. a wheelchair navigation assistant that uses computer vision and voice control to provide real-time guidance and feedback. ",
    url: "/projects/guidesense.png",
    tech: ["AI", "Backend", "Python"],
    link: "https://github.com/Hackathon-Team-404/GuideSense",
  },
  {
    name: "Prosperity-2 - Algorithmic Strategy Research",
    desc: " Prosperity-2 is a modular trading bot and research platform built for the Prosperity-2 hackathon, where it ranked in the top 1% globally.",
    url: "/projects/prosperity.png",
    tech: ["Python", "Quant"],
    link:"https://github.com/wuhao2809/Prosperity-2",
  },
  {
    name: "2D Duck Hunt - C++ Shooting Game with ECS Architecture",
    desc: "A fast-paced 2D shooting game built in C++ using SDL3 and an Entity Component System (ECS) architecture. Players must shoot ducks while avoiding collisions, with real-time scoring, 8-directional movement, and a 60-second time limit. Features include boss targets, hit accuracy tracking, and dynamic target spawning for added challenge.",
    url: "/projects/shootinggame.png",
    tech: ["CPP", "Game Engine", "Backend"],
    link: "https://github.com/wuhao2809/2D-Shooting-Game",
  },
  {
    name: "🖥️ Personal Portfolio Website",
    desc: "A portfolio site built with React, Next.js, Tailwind CSS, and Framer Motion — featuring animated sections, a contact form with auto-reply via EmailJS.",
    url: "/projects/portfolio.png",
    tech: ["Next.js", "Web"],
    link: "https://hao-wu-portfolio.vercel.app/",
  },

];

export const projectsButton = [
  "All",
  "Go",
  "Rust",
  "CPP",
  "Python",
  "Next.js",
  "Quant",
  "Backend",
  "Web",
  "AI",
  "Computer Systems",
  "Game Engine",
];

import CheckLineIcon from "remixicon-react/CheckLineIcon";

export const checkIcon = <CheckLineIcon />;

import ArrowDropDownLineIcon from "remixicon-react/ArrowDropDownLineIcon";
export const questionArrow = <ArrowDropDownLineIcon />;

// Navbar
import CopyrightLineIcon from "remixicon-react/CopyrightLineIcon";

export const copyRightIcon = <CopyrightLineIcon />;

import Home5LineIcon from "remixicon-react/Home5LineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import HistoryLineIcon from "remixicon-react/HistoryLineIcon";
import BriefcaseLineIcon from "remixicon-react/BriefcaseLineIcon";
import ProjectorLineIcon from "remixicon-react/ProjectorLineIcon";
import ContactsBook2LineIcon from "remixicon-react/ContactsBook2LineIcon";

export const navbarData = [
  {
    id: "home",
    name: "Home",
    icon: <Home5LineIcon />,
  },
  {
    id: "about",
    name: "About",
    icon: <UserLineIcon />,
  },
  {
    id: "experience",
    name: "MyRoad",
    icon: <HistoryLineIcon />,
  },
  {
    id: "skills",
    name: "Skills",
    icon: <BriefcaseLineIcon />,
  },
  {
    id: "projects",
    name: "Projects",
    icon: <ProjectorLineIcon />,
  },
  {
    id: "contact",
    name: "Contact",
    icon: <ContactsBook2LineIcon />,
  },
];

// Toggle
import MoonFoggyFillIcon from "remixicon-react/MoonFoggyFillIcon";
import SunFoggyFillIcon from "remixicon-react/SunFoggyFillIcon";

export const sunIcon = <SunFoggyFillIcon />;
export const moonIcon = <MoonFoggyFillIcon />;
