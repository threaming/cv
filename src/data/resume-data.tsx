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
  avatarUrl: "https://media.licdn.com/dms/image/C4D03AQGhT-cx4gTmYQ/profile-displayphoto-shrink_800_800/0/1633539430032?e=1712188800&v=beta&t=qphd03QDGOUcLuM-q2EQ4e4k_QumTO8FpdS84Q17NwA",
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
      company: "cropled",
      link: "https://www.linkedin.com/company/cropled/",
      badges: ["Part time"],
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
        "Acquired foundational electronics knowledge whilst gaining exposure across various departments in subsidiaries Leister and Axetris, learning from seasoned professionals passionate about electronics. Mastered analog/digital electronics development, simulation, and design using TINA and Altium, embarked on embedded software programming with AVR and STM32 platforms in Eclipse, honed circuit debugging capabilities, understood design for manufacturing, embraced EMF compliance, engaged in producing electronic devices in industrial and cleanroom contexts, and delved into cable harness and device cabling design and fabrication. Overall, acquired diverse competencies in electronics design, development, and manufacturing.",
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
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
