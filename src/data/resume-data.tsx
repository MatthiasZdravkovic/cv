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
    "Apprenti Ingénieur Logiciel au CNRS - ENSISA",
  summary:
      "Je suis un étudiant passionné d'informatique, avec un intérêt pour presque tout. Je travaille actuellement à côté de mes cours en tant qu'apprenti ingénieur logiciel au CNRS. J'aime apprendre de nouvelles choses et résoudre des problèmes.",
  avatarUrl: "https://i.imgur.com/XbLMNE9.jpeg",
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
      degree: "Ingénieur en Informatique et Réseaux",
      start: "2022",
      end: "2025",
    },
    {
      school: "ENSISA",
      degree: "Classes préparatoires intégrées pour les Grandes Ecoles",
      start: "2000",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Institut Pluridisciplinaire Hubert Curien (IPHC, CNRS)",
      link: "https://iphc.cnrs.fr/",
      badges: ["Apprentissage"],
      title: "Apprenti Ingénieur Logiciel",
      logo: ParabolLogo,
      start: "2023",
      end: "2025",
      description:
        "Application Web 3D de suivi en temps réel pour la surveillance d'un drone marin en Australie, et maintenance d'applications pour animaux (écureuils, mésanges). Technologies utilisées : Symfony, Doctrine ORM, Three.js, git, GitLab.",
    },
    {
      company: "LEGOLAND® New York Resort",
      link: "https://www.legoland.com/new-york/",
      badges: ["Expérience internationale"],
      title: "Opérateur d'attraction",
      logo: ParabolLogo,
      start: "Juin 2023",
      end: "Août 2023",
      description:
        "Gestion des attractions, gestion des files d'attente et des invités. J'assurais la sécurité, l'hospitalité et une expérience mémorable pour les invités du parc."
    }
  ],
  skills: [
    "Maths Data Sciences",
    "Apprentissage par renforcement",
    "Apprentissage automatique",
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
    "Mappage objet-relationnel (ORM)",
    "Git/Gitlab",
    "Réseaux"
  ],
  languages: [
    "Anglais C1, TOEIC: 950",
    "Français Natif",
    "Serbe B2-C1",
    "Allemand B1"
  ],
  projects: [
    {
      title: "Apex",
      techStack: [
        "Application Web 3D",
        "Symfony",
        "Moteur de template Twig",
        "Three.js",
        "Git",
      ],
      description: "Une application Web 3D de suivi en temps réel pour la surveillance d'un drone marin en Australie.",
      logo: ConsultlyLogo,
      link: {
        label: "/",
        href: "/",
      },
    },
    {
      title: "Écureuils",
      techStack: [ "Symfony", "Twig","Git"],
      description:
        "Application de surveillance des écureuils. L'application est utilisée pour gérer les écureuils dans les prairies.",
      logo: MonitoLogo,
      link: {
        label: "/",
        href: "/",
      },
    },
    {
      title: "Connect 4 AI",
      techStack: ["Élagage Alpha-Beta", "Minimax", "Fonction d'évaluation"],
      description:
        "IA pour le jeu Connect 4 utilisant l'élagage Alpha-Beta et l'algorithme Minimax avec une fonction d'évaluation.",
      logo: MonitoLogo,
      link: {
        label: "/",
        href: "/",
      },
    },
  ],
} as const;