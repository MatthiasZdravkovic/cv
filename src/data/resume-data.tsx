import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon} from "@/components/icons";

export const RESUME_DATA = {
  name: "Matthias Zdravkovic",
  initials: "MZ",
  location: "Strasbourg, Mulhouse, France",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Apprentice Software Engineer at CNRS - ENSISA",
  summary:
      "I'm a passionate computer science student, with a strong interest for nearly everything. I'm currently working also next to my classes as a Software engineer apprentice at the CNRS. Learning new things, and solving problems is what I love to do.",
  avatarUrl: "https://i.imgur.com/XbLMNE9.jpeg",
  //personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "matthias.zdravkovic@uha.fr",
    tel: "+33769046966",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/MatthiasZdravkovic",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/matthias-zdravkovic-196a62236/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "ENSISA",
      degree: "Computer Science and Networks Engineer",
      start: "2022",
      end: "2025",
    },
    {
      school: "ENSISA",
      degree: "Preparatory classes integrated for the Grandes Ecoles",
      start: "2000",
      end: "2022",
    },

  ],
  work: [
    {
      company: "Institut Pluridisciplinaire Hubert Curien (IPHC, CNRS)",
      link: "https://iphc.cnrs.fr/",
      badges: ["Apprenticeship"],
      title: "Software Engineer Apprentice",
      logo: ParabolLogo,
      start: "2023",
      end: "2025",
      description:
        "Real-time tracking 3D Web application for monitoring a marine drone in Australia, and maintenance of applications for animals (squirrels, tits). Technologies used: Symfony, Doctrine ORM, Three.js, git, GitLab.",
    },
    {
      company: "LEGOLAND® New York Resort",
      link: "https://www.legoland.com/new-york/",
      badges: ["International experience"],
      title: "Attraction Operator",
      logo: ParabolLogo,
      start: "June 2023",
      end: "August 2023",
      description:
        "Management of attractions, management of queues and guests. I was ensuring the safety, hospitality, and memorable experience of guests at the resort."

    }
  ],
  skills: [
    "Maths for Datascience",
    "Reinforcement learning",
    "Machine learning",
    "Business Intelligence",
    "Python",
    "Pandas",
    "Scikit-Learn",
    "C",
    "C++",
    "Java",
    "F#",
    "UML",
    "Framework Symfony",
    "MySQL",
    "Object-Relational Mapping (ORM)",
    "Git/Gitlab",
    "Networks"
  ],
  languages: [
    "English C1, TOEIC: 950",
    "French Native",
    "Serbian B2-C1",
    "German B1"
  ],
  projects: [
    {
      title: "Apex",
      techStack: [
        "3D Web Application",
        "Symfony",
        "Template Engine Twig",
        "Doctrine ORM",
        "Three.js",
        "Git",
        "GitLab",
        "Webpack Encore",
      ],
      description: "A real-time tracking 3D Web application for monitoring a marine drone in Australia.",
      logo: ConsultlyLogo,
      link: {
        label: "/",
        href: "/",
      },
    },
    {
      title: "Spermophilius",
      techStack: ["Side Project", "Symfony", "Doctrine ORM", "Twig", "Three.js", "Git", "GitLab"],
      description:
        "Squirrel monitoring application. The application is used to manage the squirrels in the meadows.",
      logo: MonitoLogo,
      link: {
        label: "/",
        href: "/",
      },
    },
    {
      title: "Connect 4 AI",
      techStack: ["School Project", "Python", "Alpha-Beta Pruning", "Minimax", "Evaluation Function"],
      description:
        "Connect 4 AI using Alpha-Beta Pruning and Minimax algorithm with an evaluation function.",
      logo: MonitoLogo,
      link: {
        label: "/",
        href: "/",
      },
    },
    {
      title: "Self-Driving Taxi",
      techStack: ["School Project", "Python", "Reinforcement Learning", "Q-Learning"],
      description:
        "The agent learns to pick up the passenger and drop them into the desired location.",
      logo: CDGOLogo,
      link: {
        label: "/",
        href: "/",
      },
    },
    {
      title: "GridWorld",
      techStack: ["School Project", "Python", "Reinforcement Learning", "Markov Decision Process (MDP)"],
      description:
        "The agent learns to navigate the grid using Reinforcement Learning.",
      logo: CDGOLogo,
      link: {
        label: "/",
        href: "/",
      },
    },
    {
      title: "Bidimensional Normal Law",
      techStack: ["School Project", "Python", "Matplotlib", "Numpy"],
      description:
        "Isodensity ellipse, probability that a point belongs to a certain area.",
      logo: CDGOLogo,
      link: {
        label: "/",
        href: "/",
      },
    },
  ],
} as const;
