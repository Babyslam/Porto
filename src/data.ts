import {
  Award,
  BarChart3,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  Layers,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProjectVisual = "classifier" | "portal" | "tourism";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  fullTitle: string;
  category: string;
  context: string;
  role: string;
  summary: string;
  tagline: string;
  overview: string;
  build: string[];
  highlights: string[];
  metrics: ProjectMetric[];
  stack: string[];
  links?: { label: string; url: string }[];
  images?: ProjectImage[];
  visual: ProjectVisual;
  accent: string;
  layout: "wide" | "narrow" | "horizon";
}

export const profile = {
  name: "Rezaldy Rafi",
  shortName: "Rezaldy",
  role: "Low-Code Analyst & Web Developer",
  location: "Malang, East Java, Indonesia",
  email: "rezaldy.rafi2@gmail.com",
  phone: "+6281945794475",
  phoneDisplay: "+62 819-457-94475",
  linkedin:
    "https://www.linkedin.com/in/rezaldy-rafi-861950233/",
  linkedinDisplay: "linkedin.com/in/rezaldy-rafi",
  summary:
    "I translate complex business rules into resilient low-code architectures and secure web applications — then stay close to the work through testing, release, and production support.",
};

export const stats = [
  { value: "3", label: "enterprise platforms in active delivery" },
  { value: "78%", label: "ML model accuracy across 10,962 samples" },
  { value: "3.43", label: "cumulative GPA / 4.00" },
  { value: "2024", label: "Certified Pega System Architect '23" },
];

export const capabilities = [
  {
    title: "Low-code delivery",
    description:
      "Configuring enterprise workflows across ServiceNow ITSM, Pega 23, and OutSystems environments.",
    icon: Layers,
    accent: "lime",
  },
  {
    title: "Full-stack engineering",
    description:
      "Building custom web products with Laravel, PHP, JavaScript, Python, and MySQL.",
    icon: Code2,
    accent: "mint",
  },
  {
    title: "APIs & integration",
    description:
      "Mapping Swagger definitions, testing REST endpoints, and keeping data flows predictable.",
    icon: Network,
    accent: "sky",
  },
  {
    title: "Quality & release",
    description:
      "Promoting across Dev, QAT, and UAT with black-box testing, code reviews, and unit checks.",
    icon: ShieldCheck,
    accent: "peach",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Understand",
    text: "Clarify the business rule, the edge cases, and who carries the risk.",
  },
  {
    number: "02",
    title: "Shape",
    text: "Map the workflow and data model before configuring the happy path.",
  },
  {
    number: "03",
    title: "Build",
    text: "Configure, integrate, and document in small, reviewable increments.",
  },
  {
    number: "04",
    title: "Prove",
    text: "Test across environments, then support the release after it ships.",
  },
];

export const projects: Project[] = [
  {
    id: "wbs",
    index: "01",
    title: "Whistle Blowing System",
    fullTitle: "Enterprise Whistle Blowing System",
    category: "Enterprise web",
    context: "Ministry of Communication & IT",
    role: "Full-stack developer · Team of 3",
    summary:
      "A role-controlled case-management portal that takes a complaint from verified intake through review, investigation, and delegation.",
    tagline:
      "A staged workflow for sensitive reports — evidence uploads, role-based review, and a traceable case history.",
    overview:
      "Built as a Laravel 9 team project during my internship at Kominfo Malang. The portal separates public and employee intake from a role-based admin workflow, so each complaint follows a clear sequence of review stages instead of disappearing into an inbox.",
    build: [
      "Built public and employee registration with identity verification, complaint intake, and supporting evidence uploads for DOC, PDF, and image files.",
      "Modeled the case lifecycle from Pengaduan → Tercatat → Penelahaan → Audit Investigasi → Pelimpahan → Selesai, with rejection and cancellation paths.",
      "Created role-based admin views for every stage, including agenda numbers, review notes, status decisions, and Laravel middleware for access control.",
      "Added complaint tracking for reporters, password reset, profile management, and evidence storage.",
      "Worked in a three-person team and tested the core user and admin flows before handover.",
    ],
    highlights: [
      "Seven-stage complaint lifecycle",
      "Separate public, employee, and admin flows",
      "Evidence uploads with role-based review",
    ],
    metrics: [
      { value: "7", label: "case stages from intake to closure" },
      { value: "RBAC", label: "user, employee & admin access" },
      { value: "3-person", label: "Laravel delivery team" },
    ],
    stack: ["Laravel 9", "PHP", "MySQL", "Blade", "RBAC", "Bootstrap 5"],
    links: [
      {
        label: "wbs-system-main on GitHub",
        url: "https://github.com/Babyslam/wbs-system-main",
      },
    ],
    images: [
      {
        src: "/projects/wbs-1.jpg",
        alt: "Whistle Blowing System project screenshot 1",
        caption: "Whistle Blowing System — view 1",
      },
      {
        src: "/projects/wbs-2.jpg",
        alt: "Whistle Blowing System project screenshot 2",
        caption: "Whistle Blowing System — view 2",
      },
      {
        src: "/projects/wbs-3.jpg",
        alt: "Whistle Blowing System project screenshot 3",
        caption: "Whistle Blowing System — view 3",
      },
      {
        src: "/projects/wbs-4.jpg",
        alt: "Whistle Blowing System project screenshot 4",
        caption: "Whistle Blowing System — view 4",
      },
      {
        src: "/projects/wbs-5.jpg",
        alt: "Whistle Blowing System project screenshot 5",
        caption: "Whistle Blowing System — view 5",
      },
    ],
    visual: "portal",
    accent: "#b7e6c7",
    layout: "wide",
  },
  {
    id: "classifier",
    index: "02",
    title: "News Topic Classifier",
    fullTitle: "News Article Topic Classification System",
    category: "Machine learning",
    context: "NLP & web integration",
    role: "ML pipeline & web integration",
    summary:
      "An end-to-end NLP application that sorts unstructured news into seven topics, from data collection to a Laravel dashboard.",
    tagline:
      "A decision-tree pipeline wrapped in a Flask API and a dashboard people can actually use.",
    overview:
      "This project connected a full machine-learning pipeline to a working web interface. I handled the crawling, preprocessing, model training, API layer, and the dashboard used to submit and classify articles.",
    build: [
      "Collected and parsed article data with Python, BeautifulSoup, and CSV export tooling.",
      "Built the NLP preprocessing pipeline: case folding, tokenizing, filtering, and stemming.",
      "Trained and evaluated a TF-IDF + Scikit-Learn Decision Tree model across seven topic classes.",
      "Served the saved model through a Flask REST endpoint and connected it to a Laravel dashboard.",
    ],
    highlights: [
      "78% accuracy and weighted F1-score across 10,962 test samples",
      "Seven-class NLP pipeline with repeatable preprocessing",
      "Flask API integrated with a Laravel web dashboard",
    ],
    metrics: [
      { value: "78%", label: "weighted accuracy / F1" },
      { value: "10,962", label: "evaluation samples" },
      { value: "7", label: "topic categories" },
    ],
    stack: ["Python", "Decision Tree", "NLP", "TF-IDF", "Flask", "Laravel"],
    links: [
      {
        label: "Laravel dashboard and Python notebook on GitHub",
        url: "https://github.com/Babyslam/news-classification",
      },
    ],
    images: [
      {
        src: "/projects/news-1.jpg",
        alt: "News Topic Classifier project screenshot 1",
        caption: "News Topic Classifier — view 1",
      },
      {
        src: "/projects/news-2.jpg",
        alt: "News Topic Classifier project screenshot 2",
        caption: "News Topic Classifier — view 2",
      },
      {
        src: "/projects/news-3.jpg",
        alt: "News Topic Classifier project screenshot 3",
        caption: "News Topic Classifier — view 3",
      },
      {
        src: "/projects/news-4.jpg",
        alt: "News Topic Classifier project screenshot 4",
        caption: "News Topic Classifier — view 4",
      },
      {
        src: "/projects/news-5.jpg",
        alt: "News Topic Classifier project screenshot 5",
        caption: "News Topic Classifier — view 5",
      },
      {
        src: "/projects/news-6.jpg",
        alt: "News Topic Classifier project screenshot 6",
        caption: "News Topic Classifier — view 6",
      },
    ],
    visual: "classifier",
    accent: "#a9e7d2",
    layout: "narrow",
  },
  {
    id: "tourism",
    index: "03",
    title: "East Java Tourism Portal",
    fullTitle: "East Java Tourism Information System",
    category: "Web portal",
    context: "Regional travel platform",
    role: "Full-stack developer · Team of 2",
    summary:
      "A regional tourism and booking system connecting destinations, hotels, customers, and admin-managed reservations across East Java.",
    tagline:
      "Destination discovery, hotel listings, and printable bookings in one Laravel application.",
    overview:
      "Built with a two-person team, the system gives administrators one place to manage regions, destination types, hotels, customers, and bookings, while visitors browse destination and hotel listings before making a reservation.",
    build: [
      "Modeled East Java regions, districts, destination types, destinations, hotels, customers, and bookings with relational Eloquent models.",
      "Built admin CRUD for destinations, hotels, regions, and categories, plus customer and booking management.",
      "Added a booking flow with destination and hotel selection, price, date, and downloadable PDF receipts.",
      "Created visitor-facing destination and hotel pages with image galleries and region-based browsing.",
      "Worked across both the visitor experience and the admin information system in a two-person team.",
    ],
    highlights: [
      "Seven-table relational data model",
      "Booking flow with PDF receipts",
      "Visitor and admin interfaces",
    ],
    metrics: [
      { value: "7", label: "linked destination & booking entities" },
      { value: "PDF", label: "printable booking receipts" },
      { value: "2-person", label: "full-stack delivery team" },
    ],
    stack: ["Laravel 8", "PHP", "MySQL", "Blade", "Bootstrap", "DomPDF"],
    links: [
      {
        label: "proyek-akhir-pwl-beban-united on GitHub",
        url: "https://github.com/Babyslam/proyek-akhir-pwl-beban-united",
      },
    ],
    images: [
      {
        src: "/projects/tourism-1.jpg",
        alt: "East Java Tourism Information System project screenshot 1",
        caption: "East Java Tourism — view 1",
      },
      {
        src: "/projects/tourism-2.jpg",
        alt: "East Java Tourism Information System project screenshot 2",
        caption: "East Java Tourism — view 2",
      },
      {
        src: "/projects/tourism-3.jpg",
        alt: "East Java Tourism Information System project screenshot 3",
        caption: "East Java Tourism — view 3",
      },
    ],
    visual: "tourism",
    accent: "#f2d3c0",
    layout: "horizon",
  },
];

export interface ExperienceTrack {
  id: string;
  label: string;
  role: string;
  summary: string;
  points: string[];
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  role: string;
  type: string;
  location: string;
  summary: string;
  points: string[];
  tags: string[];
  tracks?: ExperienceTrack[];
}

export const experience: ExperienceItem[] = [
  {
    id: "accenture",
    period: "Jan 2024 — Present",
    company: "Accenture",
    role: "Low-Code Development Analyst",
    type: "Full-time",
    location: "Enterprise projects · Indonesia",
    summary:
      "Delivering enhancements, integrations, and production fixes across three enterprise low-code platforms for public and health-services clients.",
    points: [],
    tags: ["ServiceNow", "Pega", "OutSystems", "Enterprise delivery"],
    tracks: [
      {
        id: "servicenow",
        label: "ServiceNow",
        role: "ServiceNow Developer",
        summary:
          "Delivering ServiceNow ITSM enhancements, story execution, and production bug resolutions.",
        points: [
          "Delivered technical user stories and custom enhancement requests aligned with client specifications.",
          "Investigated, debugged, and resolved production incident tickets to maintain strict SLA targets.",
          "Managed code promotion and release pipelines from Development (Dev) to UAT environments.",
          "Worked directly with clients and business analysts to clarify technical scope and ticket priorities.",
        ],
        tags: ["ITSM", "Incident Management", "Release Management", "Agile"],
      },
      {
        id: "pega",
        label: "Pega",
        role: "Pegasystems Developer",
        summary:
          "Building case workflows, UI forms, and REST integrations on Pega Platform 23.",
        points: [
          "Read JSON definitions from Swagger specifications and tested APIs in Postman for data mapping.",
          "Configured user interfaces, section rules, and field mappings across complex case pages.",
          "Ran comprehensive testing in QAT environments and built reusable email correspondence templates.",
        ],
        tags: ["Pega Platform 23", "REST API", "Swagger", "Postman", "Case Management"],
      },
      {
        id: "outsystems",
        label: "OutSystems",
        role: "OutSystems Developer",
        summary:
          "Developing application features, database patches, and live solution demonstrations.",
        points: [
          "Configured new features, fixed platform defects, and executed SQL data patching for remediation.",
          "Ran unit testing protocols and presented live solution demos to business analysts.",
          "Took part in peer code reviews, branch merging, and deployments to higher environments.",
        ],
        tags: ["OutSystems", "SQL Patching", "Unit Testing", "Code Reviews", "Demos"],
      },
    ],
  },
  {
    id: "kominfo",
    period: "Jul 2022 — Jan 2023",
    company: "Ministry of Communication and IT RI",
    role: "Web Developer Intern",
    type: "Internship",
    location: "Malang City Branch",
    summary:
      "Contributed to the ministry's Whistle Blowing System as part of a three-person Laravel team.",
    points: [
      "Built complaint intake, evidence uploads, and role-based case workflows with Laravel, PHP, and MySQL.",
      "Worked inside an Agile team to meet distribution schedules and sprint goals.",
      "Ran black-box testing across system modules to protect data security and functional integrity.",
    ],
    tags: ["Laravel", "PHP", "MySQL", "Black Box Testing"],
  },
  {
    id: "ub",
    period: "Dec 2017 — Jun 2018",
    company: "Faculty of Administrative Sciences, UB",
    role: "Data Entry & IT Support",
    type: "Internship",
    location: "Brawijaya University",
    summary:
      "Maintained academic records and provisioned the hardware and network setup for exams.",
    points: [
      "Processed and consolidated student academic data, event logs, scholarships, and certifications.",
      "Configured computer hardware, operating-system images, and localized network setups for exams.",
    ],
    tags: ["Data Entry", "IT Support", "Hardware Setup", "Networking"],
  },
];

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  items: { name: string; level?: string }[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "platforms",
    title: "Enterprise platforms",
    description: "Where business rules become shipped workflows.",
    icon: Layers,
    accent: "lime",
    items: [
      { name: "ServiceNow ITSM", level: "Advanced" },
      { name: "Pegasystems · Pega 23", level: "Certified Architect" },
      { name: "OutSystems", level: "Proficient" },
    ],
  },
  {
    id: "engineering",
    title: "Web engineering",
    description: "Custom products when configuration is not enough.",
    icon: Code2,
    accent: "mint",
    items: [
      { name: "Laravel" },
      { name: "PHP" },
      { name: "JavaScript ES6+" },
      { name: "Python / Flask" },
      { name: "HTML5 / CSS3" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "data",
    title: "Data & integration",
    description: "The glue that keeps systems honest.",
    icon: Database,
    accent: "sky",
    items: [
      { name: "REST APIs & JSON" },
      { name: "Swagger / Postman" },
      { name: "MySQL" },
      { name: "SQL data patching" },
      { name: "TF-IDF / Scikit-Learn" },
    ],
  },
  {
    id: "delivery",
    title: "Delivery & quality",
    description: "Getting it live, then keeping it healthy.",
    icon: Workflow,
    accent: "peach",
    items: [
      { name: "Agile / Scrum" },
      { name: "Black-box testing" },
      { name: "Release management" },
      { name: "Code reviews" },
      { name: "Environment promotion" },
    ],
  },
];

export const education = {
  school: "State Polytechnic of Malang",
  degree: "Bachelor of Applied Computer in Informatics Engineering",
  period: "2019 — 2023",
  gpa: "3.43 / 4.00",
  icon: GraduationCap,
};

export const certifications = [
  {
    title: "Certified Pega System Architect '23",
    issuer: "Pegasystems",
    year: "2024",
    description:
      "Case management design, workflow rulesets, UI configuration, and enterprise data models.",
    icon: Award,
    featured: true,
  },
  {
    title: "IT Support Google Specialization",
    issuer: "Google · Coursera",
    year: "2023",
    description: "Systems, networking, and support fundamentals.",
    icon: ShieldCheck,
    featured: false,
  },
  {
    title: "Networking Devices & Initial Configuration",
    issuer: "Cisco",
    year: "2023",
    description: "Device setup and core network configuration.",
    icon: Cpu,
    featured: false,
  },
  {
    title: "Data Visualization Best Practices",
    issuer: "Google Sheets Specialization",
    year: "2023",
    description: "Clear, decision-ready data presentation.",
    icon: BarChart3,
    featured: false,
  },
];

export const marqueeItems = [
  "ServiceNow",
  "Pegasystems",
  "OutSystems",
  "Laravel",
  "Python",
  "REST APIs",
  "MySQL",
  "Agile Delivery",
  "Flask",
  "JavaScript",
  "Enterprise Systems",
];

