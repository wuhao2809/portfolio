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
    name: "SparkleGrove.com",
    desc: "A lifestyle blog featuring DIY crafts, home decor ideas, and inspiration for creating a cozy and stylish living space.",
    url: "/projects/image-1.jpg",
    tech: ["Figma", "Photoshop", "HTML"],
  },
  {
    name: "TechTrekker.net",
    desc: "A technology news and review site covering the latest gadgets, software updates, and trends in the tech industry.",
    url: "/projects/image-2.jpg",
    tech: ["Figma", "Photoshop"],
  },
  {
    name: "CozyNestHomes.org",
    desc: "A resource for homeowners and renters alike, offering tips on interior design, home improvement projects, and sustainable living practices.",
    url: "/projects/image-3.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "WanderLuxeTravels.co",
    desc: "A travel website that provides luxury travel guides, destination reviews, and tips for planning unforgettable vacations.",
    url: "/projects/image-4.jpg",
    tech: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
  },
  {
    name: "ByteBoosters.io",
    desc: "A tech startup specializing in software development, offering innovative solutions and services for businesses looking to enhance their digital presence.",
    url: "/projects/image-5.jpg",
    tech: ["Figma", "ReactJS", "TailwindCSS", "CSS"],
  },
  {
    name: "GreenLeafGardens.biz",
    desc: "An online store and community hub for gardening enthusiasts, featuring a wide range of plants, gardening tools, and expert advice.",
    url: "/projects/image-6.jpg",
    tech: ["ReactJS", "TailwindCSS", , "CSS", "FramerMotion"],
  },
  {
    name: "PixelPerfectDesigns.info",
    desc: "A graphic design portfolio showcasing the work of a freelance designer, including branding, web design, and illustration projects.",
    url: "/projects/image-7.jpg",
    tech: ["NextJS", "FramerMotion"],
  },
  {
    name: "HarmonyHealthHub.com",
    desc: " A wellness website focused on holistic health, offering articles on nutrition, fitness, mental health, and alternative therapies.",
    url: "/projects/image-8.jpg",
    tech: ["NextJS", "ReactJS", "FramerMotion"],
  },
  {
    name: "StellarSkiesAstronomy.org",
    desc: "An educational site dedicated to astronomy, providing resources for amateur astronomers, star maps, and information on celestial events.",
    url: "/projects/image-9.jpg",
    tech: ["ReactJS", "JavaScript", "ThreeJS"],
  },
  {
    name: "UrbanEatsDelights.com",
    desc: "An educational site dedicated to astronomy, providing resources for amateur astronomers, star maps, and information on celestial events.",
    url: "/projects/image-10.jpg",
    tech: ["NextJS", "ThreeJS"],
  },
];

export const projectsButton = [
  "All",
  "Figma",
  "Photoshop",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "TailwindCSS",
  "NextJS",
  "FramerMotion",
  "ThreeJS",
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
