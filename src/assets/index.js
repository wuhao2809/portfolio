// Hero
import LinkedinBoxFillIcon from 'remixicon-react/LinkedinBoxFillIcon'

import GithubLineIcon from 'remixicon-react/GithubLineIcon'
import GameIcon from 'remixicon-react/GameFillIcon'
import Image from 'next/image'

/* eslint-disable react/jsx-key */
export const heroIcons = [
  {
    link: 'https://www.linkedin.com/in/haowuhw/',
    img: <LinkedinBoxFillIcon size={48}/>,
  },
  {
    link: 'https://github.com/wuhao2809',
    img: <GithubLineIcon size={48}/>,
  }
]

// About Me
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import Projector2LineIcon from 'remixicon-react/Projector2LineIcon'
import GroupLineIcon from 'remixicon-react/GroupLineIcon'
import AwardFillIcon from 'remixicon-react/AwardFillIcon'

export const aboutData = [
  {
    title: 'Github Repos',
    amount: 20,
    icon: <GithubFillIcon />,
  },
  {
    title: 'Leetcode Problems',
    amount: 260,
    icon: <Image src={'/leetcode.png'} alt='leetcode' width={24} height={24}/>,
  },
  {
    title: 'Hours of GamePlay',
    amount: 10000,
    icon: <GameIcon />,
  },
]

import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'

export const downloadIcon = <DownloadLineIcon />
export const arrowLeftIcon = <ArrowLeftSFillIcon />

export const aboutText =
  " Hi, I'm Hao, a Master of Computer Science student at Northeastern University and a backend-focused full-stack software engineer with a passion for building reliable, scalable, and efficient systems. I combine hands-on experience in cloud infrastructure (AWS, GCP), API integrations, and distributed systems with a solid foundation in computer science. My expertise spans Python, Java, Go, C++, Node.js, and React... I'm always eager to take on new challenges, and I genuinely love coding—whether it's optimizing a distributed system or crafting a seamless user experience."
// End of About Me

// Experience
export const experienceData = [
  {
    year: '2013',
    title: 'Mechanical Engineering',
    education:
      'High School Diploma: Focus on computer science, mathematics, and art/design courses.',
    experience: [
      'Basic HTML/CSS: Learn through online tutorials and courses.',
      'Personal Projects: Create simple personal websites or blogs.',
    ],
  },
  {
    year: 2,
    title: 'Advanced Learning and Early Experience',
    education:
      'Associate’s Degree in Web Development or Design: Enroll in a 2-year program covering web development and design principles.',
    experience: [
      'Freelance Work: Take on small freelance projects to build a portfolio.',
      'Online Courses and Certifications: Learn JavaScript, responsive design, and UX/UI design.',
    ],
  },
  {
    year: 3,
    title: 'Specialized Education and Real-World Application',
    education:
      'Online Courses and Bootcamps: Focus on specialized areas like front-end frameworks (React, Angular) and back-end technologies (Node.js).',
    experience: [
      'Internships: Secure internships with tech companies or design agencies.',
      'Contribute to Open Source: Collaborate on open-source projects.',
    ],
  },
  {
    year: 4,
    title: 'Building Expertise and Expanding Skills',
    education: 'Certifications: Obtain certifications in advanced web technologies.',
    experience: [
      'Full-Time Position: Work as a junior web developer or designer.',
      'Portfolio Development: Continuously update your portfolio with professional and personal projects.',
    ],
  },
  {
    year: 5,
    title: 'Mastery and Leadership',
    education: 'Workshops and Conferences: Attend industry events to stay updated.',
    experience: [
      'Senior Position: Aim for a senior web developer or lead designer role, mentoring junior colleagues.',
      'Freelance and Consulting: Consider starting a freelance business or consulting practice.',
    ],
  },
]

// Skills
export const skillsData = [
  {
    name: 'Figma',
    icon: '/skills/figma.png',
  },
  {
    name: 'Photoshop',
    icon: '/skills/photoshop.png',
  },
  {
    name: 'Blender',
    icon: '/skills/blender.png',
  },
  {
    name: 'VS Code',
    icon: '/skills/vscode.png',
  },
  {
    name: 'HTML',
    icon: '/skills/html.png',
  },
  {
    name: 'CSS',
    icon: '/skills/css.png',
  },
  {
    name: 'JavaScript',
    icon: '/skills/js.png',
  },
  {
    name: 'TailwindCSS',
    icon: '/skills/tailwind.png',
  },
  {
    name: 'Vite',
    icon: '/skills/vite.png',
  },
  {
    name: 'ReactJS',
    icon: '/skills/react.png',
  },
  {
    name: 'TypeScript',
    icon: '/skills/ts.png',
  },
  {
    name: 'AI',
    icon: '/skills/ai.png',
  },
  {
    name: 'Framer Motion',
    icon: '/skills/framer.png',
  },
  {
    name: 'ThreeJS',
    icon: '/skills/threejs.png',
  },
  {
    name: 'NextJS',
    icon: '/skills/nextjs.png',
  },
  {
    name: 'NodeJS',
    icon: '/skills/nodejs.png',
  },
  {
    name: 'MongoDB',
    icon: '/skills/mongodb.png',
  },
  {
    name: 'Github',
    icon: '/skills/github.png',
  },
]

// Reviews
import StarFillIcon from 'remixicon-react/StarFillIcon'
import StarHalfLineIcon from 'remixicon-react/StarHalfLineIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'

/* eslint-disable react/jsx-key */
export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />]
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />]

// Projects
export const projectsData = [
  {
    name: 'SparkleGrove.com',
    desc: 'A lifestyle blog featuring DIY crafts, home decor ideas, and inspiration for creating a cozy and stylish living space.',
    url: '/projects/image-1.jpg',
    tech: ['Figma', 'Photoshop', 'HTML'],
  },
  {
    name: 'TechTrekker.net',
    desc: 'A technology news and review site covering the latest gadgets, software updates, and trends in the tech industry.',
    url: '/projects/image-2.jpg',
    tech: ['Figma', 'Photoshop'],
  },
  {
    name: 'CozyNestHomes.org',
    desc: 'A resource for homeowners and renters alike, offering tips on interior design, home improvement projects, and sustainable living practices.',
    url: '/projects/image-3.jpg',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'WanderLuxeTravels.co',
    desc: 'A travel website that provides luxury travel guides, destination reviews, and tips for planning unforgettable vacations.',
    url: '/projects/image-4.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS'],
  },
  {
    name: 'ByteBoosters.io',
    desc: 'A tech startup specializing in software development, offering innovative solutions and services for businesses looking to enhance their digital presence.',
    url: '/projects/image-5.jpg',
    tech: ['Figma', 'ReactJS', 'TailwindCSS', 'CSS'],
  },
  {
    name: 'GreenLeafGardens.biz',
    desc: 'An online store and community hub for gardening enthusiasts, featuring a wide range of plants, gardening tools, and expert advice.',
    url: '/projects/image-6.jpg',
    tech: ['ReactJS', 'TailwindCSS', , 'CSS', 'FramerMotion'],
  },
  {
    name: 'PixelPerfectDesigns.info',
    desc: 'A graphic design portfolio showcasing the work of a freelance designer, including branding, web design, and illustration projects.',
    url: '/projects/image-7.jpg',
    tech: ['NextJS', 'FramerMotion'],
  },
  {
    name: 'HarmonyHealthHub.com',
    desc: ' A wellness website focused on holistic health, offering articles on nutrition, fitness, mental health, and alternative therapies.',
    url: '/projects/image-8.jpg',
    tech: ['NextJS', 'ReactJS', 'FramerMotion'],
  },
  {
    name: 'StellarSkiesAstronomy.org',
    desc: 'An educational site dedicated to astronomy, providing resources for amateur astronomers, star maps, and information on celestial events.',
    url: '/projects/image-9.jpg',
    tech: ['ReactJS', 'JavaScript', 'ThreeJS'],
  },
  {
    name: 'UrbanEatsDelights.com',
    desc: 'An educational site dedicated to astronomy, providing resources for amateur astronomers, star maps, and information on celestial events.',
    url: '/projects/image-10.jpg',
    tech: ['NextJS', 'ThreeJS'],
  },
]

export const projectsButton = [
  'All',
  'Figma',
  'Photoshop',
  'HTML',
  'CSS',
  'JavaScript',
  'ReactJS',
  'TailwindCSS',
  'NextJS',
  'FramerMotion',
  'ThreeJS',
]


import CheckLineIcon from 'remixicon-react/CheckLineIcon'

export const checkIcon = <CheckLineIcon />

import ArrowDropDownLineIcon from 'remixicon-react/ArrowDropDownLineIcon'
export const questionArrow = <ArrowDropDownLineIcon />

// Navbar
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon'

export const copyRightIcon = <CopyrightLineIcon />

import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon'
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon'
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon'


export const navbarData = [
  {
    id: 'home',
    name: 'Home',
    icon: <Home5LineIcon />,
  },
  {
    id: 'about',
    name: 'About',
    icon: <UserLineIcon />,
  },
  {
    id: 'experience',
    name: 'MyRoad',
    icon: <HistoryLineIcon />,
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: <BriefcaseLineIcon />,
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <ProjectorLineIcon />,
  },
  {
    id: 'contact',
    name: 'Contact',
    icon: <ContactsBook2LineIcon />,
  },
]

// Toggle
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'

export const sunIcon = <SunFoggyFillIcon />
export const moonIcon = <MoonFoggyFillIcon />
