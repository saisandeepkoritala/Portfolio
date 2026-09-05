import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText,FiExternalLink } from 'react-icons/fi';

import Work0 from "./assets/Web-Llm.png";
import Work1 from './assets/Memory1.png';
import Work2 from './assets/Youtube1.png';
import Work3 from './assets/Reciepe1.png';
import Work4 from './assets/Movie1.png';
import Work5 from './assets/Hotel1.png';
import Work6 from './assets/Food1.png';
import Work7 from './assets/Airlines-1.png';
import Work8 from './assets/NextJs-Project1.png';
import Work9 from './assets/Booking.png';
import Work10 from './assets/Dashboard.png';
import Work11 from './assets/Blog.png';
import Work12 from './assets/Cryto.png';
import Work13 from './assets/Wellness.png';
import Work14 from './assets/Ben.png';
import Work15 from './assets/Dream11_Team.png';
import Work16 from './assets/Casino.png';
import Work17 from './assets/CrickInfo.png';
import Work18 from './assets/TripPlanner1.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

import Pic1 from './assets/SAI-1.jpg';
import Pic2 from './assets/SAI-2.jpg';
import Pic3 from './assets/SAI-3.jpg';
import Pic4 from './assets/SAI-4.jpg';
import Pic5 from './assets/SAI-5.jpg';
import Pic6 from './assets/SAI-6.jpg';
import Pic7 from './assets/SAI-7.jpg';
import Pic8 from './assets/SAI-8.jpg';
import Pic10 from './assets/SAI-10.jpg';
import Pic11 from './assets/SAI-11.jpg';
import Pic12 from './assets/SAI-12.jpg';
import Pic13 from './assets/SAI-13.jpg';

import HTML from './assets/HTML.svg';
import CSS from './assets/CSS.svg';
import JS from './assets/JS.svg';
import MONGODB from './assets/MONGODB.svg';
import EXPRESS from './assets/EXPRESS.svg';
import MYSQL from './assets/MYSQL.svg';
import REACT from './assets/REACT.svg';
import NODE from './assets/NODE.svg';
import FIREBASE from './assets/FIREBASE.svg';
import PYTHON from './assets/PYTHON.svg';
import SPRINGBOOT from './assets/SPRINGBOOT.svg';
import NEXT from './assets/NEXT.svg';
import CLogo from './assets/C.svg';
import CPlus from './assets/C++.svg';
import JAVA from './assets/JAVA.svg';
import TAILWIND from './assets/TAILWIND.svg';
import BOOTSTRAP from './assets/BOOTSTRAP.svg';
import POSTGRESQL from './assets/postgresql.webp';
import POSTMAN from './assets/postman.webp';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },

];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Sai Sandeep',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Koritala',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '26 Years',
  },

  {
    id: 6,
    title: 'Location : ',
    description: 'Hyderabad, India',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91 90144 17290',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'saisandeepkoritala1999@gmail.com',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'English, Hindi, Telugu',
  },
];

export const stats = [
  {
    id: 1,
    no: "Recent",
    title: "Master's Degree in Computer Science",
  },

  {
    id: 2,
    no: "Passionate",
    title: "About Learning and <br /> Applying New Technologies",
  },

  {
    id: 3,
    no: "Adaptable",
    title: "Quick Learner and <br /> Adaptable to Change",
  },

  {
    id: 4,
    no: "Enthusiast",
    title: "Keen Interest in <br /> Innovative Technologies",
  },
];

export const resume = [
  // {
  //   id:5,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year:'2024 - Present',
  //   title:'Full Stack Developer',
  //   desc:'Currently working as a Full Stack Developer at Deutsche Bank, focusing on developing and maintaining web applications using Node.js and React.js. Collaborating with cross-functional teams to deliver high-quality software solutions.'
  // },
  // {
  //   id:6,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year:'2020 - 2022',
  //   title:'Junior Software Developer',
  //   desc:'Worked as a Junior Software Developer at Yana Software Private Limited focusing on developing and maintaining web applications using Java and Spring Boot. Collaborated with cross-functional teams to deliver high-quality software solutions.'
  // },
  // {
  //   id:7,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year:'2017',
  //   title:'Senior Java Full Stack Developer at Caterpillar',
  //   desc:'Worked as a Senior Full Stack Java Developer at Caterpillar, focusing on developing and maintaining web applications using Java, Spring Boot, and React. Collaborated with cross-functional teams to deliver high-quality software solutions.'
  // },
  // {
  //   id:8,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year:'2015',
  //   title:'Java Full Stack Developer at Atos Global',
  //   desc:'Worked as a Full Stack Java Developer at Atos Global, focusing on developing and maintaining web applications using Java, Spring Boot, and React. Collaborated with cross-functional teams to deliver high-quality software solutions.'
  // },
  {
    id:5,
    category: 'education',
    icon: <FaEnvelopeOpen />,
    year:'2020',
    title:'Node.js, Express, MongoDB & More: The Complete Bootcamp',
    desc:'Certified By Jonas schmedtmann'
  },
  {
    id:6,
    category: 'education',
    icon: <FaEnvelopeOpen />,
    year:'2020',
    title:'Modern React with Redux: A Complete Guide',
    desc:'Certified By Stephen Grider'
  },
  {
    id:7,
    category: 'education',
    icon: <FaEnvelopeOpen />,
    year:'2023',
    title:'Java Spring Framework 6 with Spring Boot 3',
    desc:'Certified By Navin Reddy'
  },
  {
    id:8,
    category: 'education',
    icon: <FaEnvelopeOpen />,
    year:'2024',
    title:'Next.js 14 & React - The Complete Guide',
    desc:'Certified By Maximilian Schwarzmüller'
  }



];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '100',
    image:HTML
  },

  {
    id: 2,
    title: 'Css',
    percentage: '100',
    image:CSS
  },
  {
    id: 3,
    title: 'Javascript',
    percentage: '100',
    image:JS
  },

  {
    id: 4,
    title: 'ReactJs',
    percentage: '100',
    image:REACT
  },

  {
    id: 5,
    title: 'NodeJs',
    percentage: '100',
    image:NODE
  },
  {
    id: 6,
    title: 'ExpressJs',
    percentage: '100',
    image:EXPRESS
  },
  {
    id: 7,
    title: 'MongoDb',
    percentage: '100',
    image:MONGODB
  },
  {
    id: 8,
    title: 'MySql',
    percentage: '100',
    image:MYSQL
  },

  {
    id: 9,
    title: 'Python',
    percentage: '100',
    image:PYTHON
  },
  {
    id:10,
    title:'SpringBoot',
    percentage:'100',
    image:SPRINGBOOT
  },
  {
    id:11,
    title:'NextJs',
    percentage:'100',
    image:NEXT
  },
  {
    id:12,
    title:'Firebase',
    percentage:'100',
    image:FIREBASE
  },
  {
    id:13,
    title:'C',
    percentage:'100',
    image:CLogo
  },
  {
    id:14,
    title:'C++',
    percentage:'100',
    image:CPlus
  },
  {
    id:15,
    title:'Java',
    percentage:'100',
    image:JAVA
  },
  {
    id:16,
    title:'Tailwind',
    percentage:'100',
    image:TAILWIND
  },
  {
    id:17,
    title:'Bootstrap',
    percentage:'100',
    image:BOOTSTRAP
  },
  {
    id:18,
    title:'PostGreSQL',
    percentage:'100',
    image:POSTGRESQL
  },
  {
    id:19,
    title:'Postman',
    percentage:'100',
    image:POSTMAN
  },

];

export const portfolio = [
    {
    id: 18,
    img: Work18,
    title: 'Trip Planner',
    link:"https://saisandeep-tripplanner.netlify.app/",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Trip Planner',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'MERN',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'click on image',
      },
    ],
  },
  {
    id: 0,
    img: Work0,
    title: 'Web-Llm',
    link:"https://saisandeep-koritala-web-llm.netlify.app",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web-Llm Site',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'MERN',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'click on image',
      },
    ],
  },
  {
    id: 11,
    img: Work11,
    title: 'Blogging Site',
    link:"https://saisandeep-blog.netlify.app/",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Blogging Site',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'MERN',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'click on image',
      },
    ],
  },
  {
    id: 17,
    img: Work17,
    title: 'CrickInfo clone',
    link:"https://saisandeep-koritala-crickinfo.netlify.app/",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'CrickInfo clone',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'MERN',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'click on image',
      },
    ],
  },
  {
    id: 13,
    img: Work13,
    title: 'Wellness Site',
    link:"https://saisandeepkoritala-wellness.netlify.app/",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Wellness Site',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'MERN',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'click on image',
      },
    ],
  },
  {
    id: 10,
    img: Work10,
    title: 'Admin Dashboard',
    link:"https://saisandeep-dashboard.netlify.app/",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Admin Dashboard',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'click on image',
      },
    ],
  },
  {
    id: 16,
    img: Work16,
    title: 'Casino Site',
    link:"https://saisandeepkoritala-casino.netlify.app/",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Casino Site',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'MERN',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'click on image',
      },
    ],
  },
  {
    id: 12,
    img: Work12,
    title: 'Crypto Site',
    link:"https://saisandeep-crypto.netlify.app/",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Crypto Clone',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'MERN',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'click on image',
      },
    ],
  },
  {
    id: 15,
    img: Work15,
    title: 'Dream11 clone',
    link:"https://saisandeep-koritala-dream11.netlify.app/",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Dream11 clone',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'MERN',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'click on image',
      },
    ],
  },
  {
    id: 7,
    img: Work7,
    title: 'Flights Tracker',
    link:"https://saisandeepkoritala-airplane.netlify.app/",
    details: [
      {
        title: 'Project : ',
        desc: 'Flights Tracker',
      },
      {
        title: 'Technology used :',
        desc: 'MERN',
      },
      {
        title: 'Preview : ',
        desc: 'click on image',
      },
    ],
  },
  {
    id: 9,
    img: Work9,
    title: 'Booking.com Clone',
    link:"https://next-booking-saisandeepkoritala.vercel.app/",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Booking.com Clone',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'NextJs',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'click on image',
      },
    ],
  },
  {
    id: 1,
    img: Work1,
    title: 'Memories App',
    link:"https://saisandeep-memory.netlify.app/",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Memories',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'MERN',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'click on image',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Reciepe App',
    link:"https://saisandeep-reciepe-app.netlify.app/",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Search for reciepes',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'click on image',
      },
    ],
  },
  {
    id: 4,
    img: Work4,
    title: 'Movies',
    link:"https://saisandeep-movies-app.netlify.app/",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Movies App',
      },
      {
        icon: <FaCode />,
        title: 'Technology used : ',
        desc: 'MERN',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'click on image',
      },
    ],
  },
  {
    id: 14,
    img: Work14,
    title: 'Cricket Umpire ',
    link:"https://leg-before-wicket.netlify.app/",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Cricket Umpire Site',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'click on image',
      },
    ],
  },
  {
    id: 8,
    img: Work8,
    title: 'Pizza Stop',
    link:"https://saisandeepkoritala-pizza.vercel.app/",
    details: [
      {
        title: 'Project : ',
        desc: 'Pizza Stop',
      },
      {
        title: 'Technology used :',
        desc: 'NEXT JS',
      },
      {
        title: 'Preview : ',
        desc: 'click on image',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Hotels',
    link:"https://saisandeepkoritala-hotelsapp.netlify.app/",
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Hotels',
      },
      {
        icon: <FaCode />,
        title: 'Technology used :',
        desc: 'MERN',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'click on image',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Food App',
    link:"https://saisandeepkoritala-foodapp.netlify.app/",
    details: [
      {
        title: 'Project : ',
        desc: 'Food App',
      },
      {
        title: 'Technology used :',
        desc: 'MERN',
      },
      {
        title: 'Preview : ',
        desc: 'click on image',
      },
    ],
  },

  
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },
  
  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];

export const images=[
  {
    original: Pic13,
    thumbnail: Pic13,
  },
  {
    original: Pic6,
    thumbnail: Pic6,
  },
  {
    original: Pic12,
    thumbnail: Pic12,
  },
  {
    original: Pic10,
    thumbnail: Pic10,
  },
];