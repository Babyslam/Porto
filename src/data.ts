import {
  Code2,
  Cpu,
  GraduationCap,
  Layers,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export interface ProjectMetric {
  value: string;
  label: string;
}

export type ProjectVisual =
  | "analytics"
  | "workflow"
  | "dashboard"
  | "classifier"
  | "portal"
  | "tourism"
  | "cashbook";

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  index: string;
  layout: string;
  accent: string;
  visual: ProjectVisual;
  category: string;
  context: string;
  role: string;
  title: string;
  fullTitle: string;
  tagline: string;
  summary: string;
  description: string;
  overview: string;
  metrics: ProjectMetric[];
  stack: string[];
  build: string[];
  highlights: string[];
  links?: ProjectLink[];
  images?: ProjectImage[];
}

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
  role: string;
  company: string;
  location: string;
  type: string;
  summary: string;
  tracks?: ExperienceTrack[];
}

export const profile = {
  name: "Rezaldy Rafi",
  role: "Low-code Analyst & Full-stack Developer",
  location: "Malang, Indonesia",
  summary:
    "Low-code ITSM analyst and full-stack developer turning complex enterprise rules into secure, human systems across ServiceNow, Pegasystems, and OutSystems.",
  email: "rezaldyrafi@gmail.com",
  linkedin: "https://www.linkedin.com/in/rezaldy-rafi-861950233/",
  linkedinDisplay: "linkedin.com/in/rezaldy-rafi",
  phone: "+628123456789",
  phoneDisplay: "+62 812-3456-789",
};

export const stats = [
  { value: "3+", label: "Years experience" },
  { value: "3", label: "Enterprise platforms" },
  { value: "100%", label: "Delivery focus" },
];

export const marqueeItems = [
  "ServiceNow ITSM",
  "Pegasystems PCSA",
  "OutSystems",
  "React & TypeScript",
  "Laravel & PHP",
  "Machine Learning & NLP",
  "Data Engineering",
];

export const capabilities = [
  {
    title: "Enterprise Low-Code",
    description:
      "Designing end-to-end case workflows, ITSM incident response, and custom modules across Pega, ServiceNow, and OutSystems.",
    accent: "emerald",
    icon: Workflow,
  },
  {
    title: "Full-Stack Web Development",
    description:
      "Building responsive frontend interfaces and backend APIs using React, TypeScript, Tailwind CSS, Laravel, and MySQL.",
    accent: "cyan",
    icon: Code2,
  },
  {
    title: "Data Engineering & ML",
    description:
      "Implementing NLP text preprocessing, Decision Tree classification models, and automated data pipelines.",
    accent: "violet",
    icon: Cpu,
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Analyze & Scope",
    text: "Deconstruct business requirements and architecture edge cases before writing code.",
  },
  {
    number: "02",
    title: "Configure & Build",
    text: "Implement clean workflows, robust APIs, and user-centric interfaces.",
  },
  {
    number: "03",
    title: "Test & Validate",
    text: "Execute strict testing across Dev, QAT, and UAT environments.",
  },
  {
    number: "04",
    title: "Deploy & Support",
    text: "Manage seamless production releases and post-deployment optimization.",
  },
];

export const projects: Project[] = [
  {
    id: "news-classification",
    index: "01",
    layout: "wide",
    accent: "#10b981",
    visual: "classifier",
    category: "Machine Learning & NLP",
    context: "Academic Research / Full-Stack",
    role: "Lead Developer & ML Researcher",
    title: "News Article Topic Classifier",
    fullTitle:
      "Klasifikasi Artikel Berita Berdasarkan Jenis Topiknya Menggunakan Decision Tree",
    tagline:
      "Web-based text classification system powered by Decision Tree ML algorithms and NLP preprocessing.",
    summary:
      "Built a machine learning classification engine that processes news text through case folding, tokenization, filtering, stemming, and TF weighting using Python, PHP, and Laravel.",
    description:
      "Built a machine learning classification engine that processes news text through case folding, tokenization, filtering, stemming, and TF weighting using Python, PHP, and Laravel.",
    overview:
      "Engineered an NLP system that preprocesses Indonesian news text (case folding, tokenization, stopword filtering, stemming) and applies Term Frequency calculation alongside Decision Tree models.",
    metrics: [
      { value: "78%", label: "Classification Accuracy" },
      { value: "4", label: "Text Preprocessing Stages" },
    ],
    stack: ["Python", "PHP", "Laravel", "Decision Tree", "NLP", "MySQL"],
    build: [
      "Implemented TF (Term Frequency) weight calculation for feature extraction.",
      "Applied Decision Tree algorithm for precise multi-class news categorization.",
      "Built interactive web dashboard for real-time text analysis and evaluation metrics (Accuracy, Precision, Recall, F1-Score).",
    ],
    highlights: [
      "Implemented TF (Term Frequency) weight calculation for feature extraction.",
      "Applied Decision Tree algorithm for precise multi-class news categorization.",
      "Built interactive web dashboard for real-time text analysis and evaluation metrics (Accuracy, Precision, Recall, F1-Score).",
    ],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/Babyslam/Porto",
      },
    ],
    images: [],
  },
  {
    id: "enterprise-itsm",
    index: "02",
    layout: "split",
    accent: "#3b82f6",
    visual: "portal",
    category: "Enterprise Systems",
    context: "Accenture Delivery",
    role: "ServiceNow ITSM Developer",
    title: "ServiceNow ITSM & Fix Scripts",
    fullTitle: "ServiceNow Enterprise Data Migration & Change Management",
    tagline:
      "Data patching and automated incident workflows for enterprise clients.",
    summary:
      "Developed custom JavaScript Fix Scripts to patch platform data, managed end-to-end Change Request tickets, and participated in user data migration.",
    description:
      "Developed custom JavaScript Fix Scripts to patch platform data, managed end-to-end Change Request tickets, and participated in user data migration.",
    overview:
      "Managed production-level data reconciliation and automated ITSM incident workflows for enterprise ServiceNow environments.",
    metrics: [
      { value: "100%", label: "Data Patch Accuracy" },
      { value: "Zero", label: "Critical Outages" },
    ],
    stack: ["ServiceNow", "JavaScript", "ITSM", "Change Management"],
    build: [
      "Wrote and executed server-side Fix Scripts for platform data reconciliation.",
      "Managed Change Requests (CR) ensuring compliance with enterprise governance standards.",
    ],
    highlights: [
      "Wrote and executed server-side Fix Scripts for platform data reconciliation.",
      "Managed Change Requests (CR) ensuring compliance with enterprise governance standards.",
    ],
    links: [],
    images: [],
  },
  {
    id: "pega-case-management",
    index: "03",
    layout: "split",
    accent: "#8b5cf6",
    visual: "tourism",
    category: "Low-Code Architecture",
    context: "Certified Pega Delivery",
    role: "Pega System Architect",
    title: "Pega System Case Automation",
    fullTitle: "Pega Certified System Architect Workflow Solution",
    tagline: "Automated decision tables and multi-step case life cycles.",
    summary:
      "Configured Pega rulesets, UI harnesses, data transforms, and REST integration connectors for enterprise workflow automation.",
    description:
      "Configured Pega rulesets, UI harnesses, data transforms, and REST integration connectors for enterprise workflow automation.",
    overview:
      "Architected multi-stage case life cycles with automated SLA routing and REST integration endpoints.",
    metrics: [
      { value: "PCSA", label: "Certified Architect" },
      { value: "REST", label: "API Integrations" },
    ],
    stack: ["Pegasystems", "Pega Infinity", "REST API", "UI Harness"],
    build: [
      "Structured complex Case Life Cycles with stage-based routing and SLA rules.",
      "Designed integration connectors to exchange payloads with external REST services.",
    ],
    highlights: [
      "Structured complex Case Life Cycles with stage-based routing and SLA rules.",
      "Designed integration connectors to exchange payloads with external REST services.",
    ],
    links: [],
    images: [],
  },
];

export const experience: ExperienceItem[] = [
  {
    id: "accenture",
    period: "2024 — Present",
    role: "Low-code Analyst",
    company: "Accenture",
    location: "Indonesia",
    type: "Full-time",
    summary:
      "Delivering enterprise-scale low-code applications and workflow automation across ServiceNow, Pegasystems, and OutSystems platforms.",
    tracks: [
      {
        id: "servicenow",
        label: "ServiceNow",
        role: "ServiceNow ITSM Developer",
        summary:
          "Developed JavaScript Fix Scripts for data patching, managed Change Request tickets, and executed user data migrations.",
        points: [
          "Executed custom JavaScript Fix Scripts for high-priority platform data updates.",
          "Managed end-to-end Change Requests (CR) adhering to enterprise ITIL standards.",
          "Participated in large-scale user data migration to ServiceNow platform.",
        ],
        tags: [
          "ServiceNow",
          "JavaScript",
          "ITSM",
          "Fix Scripts",
          "Data Migration",
        ],
      },
      {
        id: "pega",
        label: "Pegasystems",
        role: "Pega System Architect",
        summary:
          "Configured case workflows, rulesets, UI views, and API integration points.",
        points: [
          "Designed automated Case Life Cycles, Data Transforms, and Decision Rules.",
          "Configured REST Integration Services for secure cross-platform data exchange.",
        ],
        tags: ["Pega", "PCSA", "Case Management", "REST Integration"],
      },
      {
        id: "outsystems",
        label: "OutSystems",
        role: "OutSystems Developer",
        summary:
          "Built features, SQL queries, and interactive platform demonstrations.",
        points: [
          "Developed custom web features and database queries in OutSystems Service Studio.",
          "Prepared proof-of-concept demos for enterprise stakeholders.",
        ],
        tags: ["OutSystems", "SQL", "Web Apps", "Low-code"],
      },
    ],
  },
];

export const skillGroups = [
  {
    id: "low-code",
    title: "Low-Code & Enterprise",
    description: "Core enterprise automation platforms and ITSM tools.",
    accent: "emerald",
    icon: Layers,
    items: [
      { name: "ServiceNow (ITSM, Fix Scripts)", level: "Advanced" },
      { name: "Pegasystems (PCSA Certified)", level: "Certified" },
      { name: "OutSystems", level: "Proficient" },
    ],
  },
  {
    id: "development",
    title: "Frontend & Backend",
    description: "Modern web technology stack for custom applications.",
    accent: "cyan",
    icon: Code2,
    items: [
      { name: "React & TypeScript", level: "Advanced" },
      { name: "PHP & Laravel", level: "Proficient" },
      { name: "Tailwind CSS & HTML/JS", level: "Advanced" },
      { name: "MySQL & Database Design", level: "Proficient" },
    ],
  },
  {
    id: "ai-data",
    title: "AI & Data Engineering",
    description: "Machine learning, NLP processing, and data tools.",
    accent: "violet",
    icon: Cpu,
    items: [
      { name: "Python & Machine Learning", level: "Intermediate" },
      { name: "NLP & Decision Trees", level: "Practitioner" },
      { name: "Enterprise AI Automation", level: "Learning" },
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Science (S.Kom)",
  school: "Computer Science University",
  period: "2019 — 2023",
  gpa: "3.75 / 4.00",
  icon: GraduationCap,
};

export const certifications = [
  {
    title: "Certified Pega System Architect (PCSA)",
    issuer: "Pegasystems",
    year: "2023",
    description:
      "Demonstrated core capability in building Pega application workflows, data models, UI, and security configurations.",
    featured: true,
    icon: ShieldCheck,
  },
];