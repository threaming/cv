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
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Andreas Ming",
  initials: "AM",
  location: "Sachseln, Switzerland - currently Christchurch, New Zealand",
  locationLink: "https://www.google.com/maps/place/Christchurch",
  about:
    "Swiss Kiwi Electrical Engineer in training focused on the seamless integration of hard-, firm- and software",
  summary:
    "As a skilled electronics technician transitioning to electrical engineering, I excel in collaborating across multiple disciplines to deliver successful projects. My expertise includes leading effective teams, creating productive environments, and utilizing tools such as Altium Designer to create and test circuit boards. With strong foundational knowledge and eagerness to learn, I am eager to bring my passion for cross-functional collaboration to new challenges.",
  avatarUrl: "https://avatars.githubusercontent.com/u/111476247?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "andreasming@outlook.com",
    tel: "+642902257092",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/threaming",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/andreas-ming-9147211a0/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "BBZ business, computer science and technology Emmen",
      degree: "Electronics Technician, Federal Diploma of Vocational Education and Training",
      start: "2015",
      end: "2019",
    },
    {
      school: "Lucerne University of Applied Sciences and Arts",
      degree: "Bachelor's Degree in Electrical Engineering and Information Technology",
      start: "2021",
      end: "2025",
    },
    {
      school: "University of Canterbury",
      degree: "Two exchange semesters with lectures on Vision, Machine Learning, Nano Engineering & Embeeded Systems",
      start: "2024",
      end: "2024",
    },
  ],
  work: [
    {
      company: "cropled AG",
      link: "https://www.linkedin.com/company/cropled/",
      badges: ["Part-time"],
      title: "Electrical Engineer",
      logo: ParabolLogo,
      start: "2022",
      end: "2023",
      description:
        "Directed electronics architecture, led the team, and engineered digital and analog power circuits for LED lighting, analyzing circuit feasibility, implementing DfM, building hardware layouts in Altium, administering component databases and conducting prototype measurements and validation.",
    },
    {
      company: "Axetris AG",
      link: "https://www.axetris.com/",
      badges: [],
      title: "Electronics Technician",
      logo: ClevertechLogo,
      start: "2020",
      end: "2021",
      description:
        "Introduced Altium 20 with integrated Jira, Git, and Bitbucket for version control, supported Altium databases, developed PCB layouts for feasibility assessment, performed analog/digital circuitry measurements, and executed embedded software engineering for feasibility studies, enhancing overall productivity and effectiveness in the engineering process.",
    },
    {
      company: "Leister AG",
      link: "https://www.leister.com",
      badges: [],
      title: "Electronics Technician Apprentice",
      logo: JojoMobileLogo,
      start: "2015",
      end: "2019",
      description:
        "Gained electronics know-how at Leister and Axetris, working alongside enthusiastic professionals: grasped fundamentals of analog/digital electronics development, simulation through TINA and Altium, explored embedded software coding on AVR and STM32 platforms within Eclipse, mastered circuit debugging tactics, familiarized myself with design for manufacturing and electromagnetic compatibility norms, contributed to electronic device production in industrial and cleanroom surroundings, and gained insights into design and fabrication of cable harnesses and peripheral wiring. Balanced theoretical learning with practical application to develop well-rounded electronics expertise.",
    },
  ],
  skills: [
    "Altium Designer",
    "Python",
    "TINA",
    "C",
    "FreeRTOS",
    "VHDL",
    "Matlab",
  ],
  projects: [
    {
      title: "Summaries BSc EEIT",
      techStack: [
        "Side Project",
        "Digital Signal Processing",
        "Electronics",
        "Embeeded Programming",
        "Skripting",
        "Math & Physics",
      ],
      description: "Summaries of several papers at HSLU. In collaboration with colleagues.",
      logo: ConsultlyLogo,
      link: {
        label: "Github repo",
        href: "https://github.com/threaming/BSc_EEIT",
      },
    },
    {
      title: "Boulder Game",
      techStack: [
        "C",
        "FreeRTOS",
        "Embeeded Systems",
        "Eclipse",
        "Segger Tools",
      ],
      description: "Boudler Game on Microcontroller for module Advanced Embeeded Systems",
      logo: ConsultlyLogo,
      link: {
        label: "Github repo",
        href: "https://github.com/threaming/AEMBS_TinyK22_Boulder",
      },
    },
  ],
} as const;
