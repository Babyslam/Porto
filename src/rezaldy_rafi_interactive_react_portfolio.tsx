import React, { useState } from "react";
import {
  User,
  Briefcase,
  Code,
  Cpu,
  GraduationCap,
  Award,
  Send,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Terminal,
  Globe,
  Database,
  Layers,
  Workflow,
  ShieldCheck,
  BrainCircuit,
  Map,
  BookOpen,
  CheckCircle2,
  Sun,
  Moon,
  Menu,
  X,
  Sparkles,
  LucideIcon,
} from "lucide-react";

// Custom SVG Component for LinkedIn (Fixes lucide-react missing export issue)
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.49 1.49 0 1 0 0 2.97 1.49 1.49 0 0 0 0-2.97Z" />
  </svg>
);

// Type Definitions
interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  icon: LucideIcon;
  color: string;
  description: string;
  details: string;
  tags: string[];
  highlights: string[];
  images?: string[];
}

interface Skill {
  name: string;
  category: string;
  level: string;
  icon: LucideIcon;
}

interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  period: string;
  category: string;
  location: string;
  description: string;
  points: string[];
  tags: string[];
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Toggle Dark/Light Mode Class on standard wrapper
  const themeClasses = darkMode
    ? "bg-slate-950 text-slate-300"
    : "bg-slate-50 text-slate-700";

  const cardBgClasses = darkMode
    ? "bg-slate-900/70 border-slate-800/80 hover:border-cyan-500/40 text-slate-300"
    : "bg-white/80 border-slate-200/90 hover:border-cyan-500/40 text-slate-700 shadow-sm";

  const headerBgClasses = darkMode
    ? "bg-slate-950/80 border-slate-800/80 backdrop-blur-md"
    : "bg-white/80 border-slate-200/80 backdrop-blur-md";

  const textPrimaryClasses = darkMode ? "text-slate-100" : "text-slate-900";
  const textMutedClasses = darkMode ? "text-slate-400" : "text-slate-500";

  // Experience Data with filter tags
  const experiences: Experience[] = [
    {
      id: "accenture-sn",
      company: "Accenture",
      role: "ServiceNow Developer",
      type: "Full-time",
      period: "Jan 2024 – Present",
      category: "servicenow",
      location: "Enterprise Projects",
      description:
        "Delivering ServiceNow ITSM enhancements, story execution, and production bug resolutions.",
      points: [
        "Delivered technical user stories and custom enhancement requests aligned with client specifications.",
        "Investigated, debugged, and resolved production incident tickets to maintain strict SLA targets.",
        "Managed code promotion and release pipelines from Development (Dev) to UAT environments.",
        "Engaged directly with clients and business analysts to clarify technical scope and ticket priorities.",
      ],
      tags: ["ServiceNow", "ITSM", "Incident Mgmt", "Release Mgmt", "Agile"],
    },
    {
      id: "accenture-pega",
      company: "Accenture",
      role: "Pegasystems Developer",
      type: "Full-time",
      period: "Jan 2024 – Present",
      category: "pega",
      location: "Public & Health Services Project",
      description:
        "Built case workflows, UI forms, and integrated REST APIs using Pega Platform 23.",
      points: [
        "Read JSON definitions via Swagger specs and executed API testing using Postman for data mapping.",
        "Configured user interfaces, section rules, and field mappings across complex case pages.",
        "Performed comprehensive testing in QAT environments and created reusable email correspondence templates.",
      ],
      tags: ["Pega Platform 23", "REST API", "Swagger", "Postman", "Case Mgmt"],
    },
    {
      id: "accenture-outsystems",
      company: "Accenture",
      role: "OutSystems Developer",
      type: "Full-time",
      period: "Jan 2024 – Present",
      category: "outsystems",
      location: "Public & Health Services Project",
      description:
        "Developed application features, database patching scripts, and conducted live client demos.",
      points: [
        "Configured new features, fixed platform defects, and executed SQL data patching for remediation.",
        "Executed unit testing protocols and presented live solution demonstrations to Business Analysts.",
        "Participated in peer code reviews, branch code merging, and higher environment deployments.",
      ],
      tags: [
        "OutSystems",
        "SQL Patching",
        "Unit Testing",
        "Code Reviews",
        "Demos",
      ],
    },
    {
      id: "kominfo",
      company: "Ministry of Communication and IT RI",
      role: "Web Developer Intern",
      type: "Internship",
      period: "Jul 2022 – Jan 2023",
      category: "webdev",
      location: "Malang City Branch",
      description:
        "Designed and engineered an enterprise Whistle Blowing System from scratch.",
      points: [
        "Designed and constructed the official Whistle Blowing System (WBS) website using Laravel, PHP, and MySQL.",
        "Collaborated within an Agile team structure to meet distribution schedules and sprint goals.",
        "Conducted black box testing across system modules to ensure data security and functional integrity.",
      ],
      tags: [
        "Laravel",
        "PHP",
        "MySQL",
        "Black Box Testing",
        "Web Architecture",
      ],
    },
    {
      id: "ub",
      company: "Faculty of Administrative Sciences, UB",
      role: "Data Entry & IT Support",
      type: "Internship",
      period: "Dec 2017 – Jun 2018",
      category: "support",
      location: "Brawijaya University",
      description:
        "Managed academic database records and provisioned computer network infrastructures.",
      points: [
        "Processed and consolidated student academic data, event logs, scholarships, and certifications.",
        "Configured computer hardware, operating system images, and localized network setups for exams.",
      ],
      tags: ["Data Entry", "IT Support", "Hardware Setup", "Networking"],
    },
  ];

  // Skills Data with category mapping
  const skillCategories = [
    { id: "all", label: "All Tech" },
    { id: "lowcode", label: "Low-Code Platforms" },
    { id: "web", label: "Web & Software" },
    { id: "data", label: "Databases & APIs" },
    { id: "qa", label: "QA & Methodologies" },
  ];

  const skillsList: Skill[] = [
    {
      name: "ServiceNow ITSM",
      category: "lowcode",
      level: "Advanced",
      icon: Layers,
    },
    {
      name: "Pegasystems (Pega 23)",
      category: "lowcode",
      level: "Certified Architect",
      icon: Cpu,
    },
    {
      name: "OutSystems Platform",
      category: "lowcode",
      level: "Proficient",
      icon: Workflow,
    },
    {
      name: "Laravel Framework",
      category: "web",
      level: "Advanced",
      icon: Code,
    },
    { name: "PHP", category: "web", level: "Advanced", icon: Code },
    {
      name: "Python (ML / Data)",
      category: "web",
      level: "Intermediate",
      icon: BrainCircuit,
    },
    {
      name: "JavaScript ES6+",
      category: "web",
      level: "Proficient",
      icon: Terminal,
    },
    { name: "HTML5 / CSS3", category: "web", level: "Advanced", icon: Globe },
    {
      name: "MySQL Database",
      category: "data",
      level: "Advanced",
      icon: Database,
    },
    {
      name: "RESTful APIs & JSON",
      category: "data",
      level: "Advanced",
      icon: ExternalLink,
    },
    {
      name: "Postman & Swagger",
      category: "data",
      level: "Advanced",
      icon: ShieldCheck,
    },
    {
      name: "SQL Data Patching",
      category: "data",
      level: "Proficient",
      icon: Database,
    },
    {
      name: "Agile / Scrum",
      category: "qa",
      level: "Advanced",
      icon: Workflow,
    },
    {
      name: "Black Box Testing",
      category: "qa",
      level: "Advanced",
      icon: ShieldCheck,
    },
    {
      name: "Release Management",
      category: "qa",
      level: "Proficient",
      icon: Layers,
    },
  ];

  // Featured Projects Data
  const projects: Project[] = [
    {
      id: "wbs",
      title: "Enterprise Whistle Blowing System (WBS)",
      subtitle: "Ministry of Communication & Information Technology",
      category: "Enterprise Web",
      icon: ShieldCheck,
      color: "from-cyan-500 to-blue-600",
      description:
        "A secure, anonymous reporting portal created for civil service employees to report misconduct and regulatory violations.",
      details:
        "Built complete role-based access control (RBAC), multi-level approval workflows, database encryption for reporter anonymity, and security-tested admin dashboards.",
      tags: ["Laravel", "PHP", "MySQL", "Black Box Testing", "RBAC"],
      highlights: [
        "100% Anonymity protection",
        "Role-based encryption",
        "Black Box Tested",
      ],
    },
      {
      id: 'news-classification-ml',
      title: 'News Article Topic Classification System',
      subtitle: 'Machine Learning & NLP Web Integration',
      category: 'AI / Machine Learning',
      icon: BrainCircuit,
      color: 'from-emerald-500 to-teal-600',
      description: 'An intelligent NLP web application that automatically classifies unstructured news text into 7 distinct topic categories using a Decision Tree model.',
      details: 'Built a full end-to-end Machine Learning pipeline in Python featuring NLP preprocessing (Case Folding, Tokenizing, Filtering, Stemming) and TF-IDF feature extraction. The trained Decision Tree model achieves ~78% accuracy across 10,000+ test samples and is served via a Flask REST API endpoint connected to an interactive Laravel dashboard UI.',
      tags: ['Python', 'Decision Tree', 'NLP', 'TF-IDF', 'Laravel', 'Flask', 'PHP', 'MySQL'],
      highlights: [
        'NLP Preprocessing Pipeline (Case Folding, Tokenizing, Filtering, Stemming)',
        'TF-IDF Feature Weighting & Scikit-Learn Decision Tree Model',
        '78% Accuracy & Weighted F1-Score on 10,962 test samples',
        'Flask API Endpoint integration with Laravel Web Dashboard'
      ],
      images: [
        '/projects/1.jpg',
        '/projects/2.jpg',
        '/projects/3.jpg',
        '/projects/4.jpg',
        '/projects/5.jpg',
        '/projects/6.jpg'
      ]
    },
    {
      id: "tourism",
      title: "East Java Tourism Information System",
      subtitle: "Regional Travel & Facilities Portal",
      category: "Web Portal",
      icon: Map,
      color: "from-cyan-400 to-teal-500",
      description:
        "A centralized tourism web platform highlighting destinations, local accommodations, and cultural guides across East Java.",
      details:
        "Features detailed spatial data organization, user review submissions, dynamic facility mapping, and an intuitive admin content management system.",
      tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
      highlights: ["Centralized CMS", "Spatial Data Showcase", "Responsive UI"],
    },
  ];

  const filteredExperiences =
    activeTab === "all"
      ? experiences
      : experiences.filter((e) => e.category === activeTab);

  const filteredSkills =
    activeSkillCategory === "all"
      ? skillsList
      : skillsList.filter((s) => s.category === activeSkillCategory);

// Make sure both submitStatus and setSubmitStatus are declared together:
const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
const [, setIsSubmitting] = useState(false);

const handleFormSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "cf274ddc-7fe3-409b-8ae7-aca31d147f7c", // Ganti dengan Access Key dari Web3Forms
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
  } catch {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${themeClasses} font-sans selection:bg-cyan-500 selection:text-slate-950`}
    >
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 border-b ${headerBgClasses} transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 flex items-center justify-center text-slate-950 font-extrabold text-xl shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              RR
            </div>
            <div>
              <span
                className={`text-lg font-bold ${textPrimaryClasses} group-hover:text-cyan-400 transition-colors block leading-tight`}
              >
                Rezaldy Rafi
              </span>
              <span className="text-xs text-cyan-400 font-semibold tracking-wide">
                Low-Code Analyst &amp; Web Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a
              href="#experience"
              className="hover:text-cyan-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#education"
              className="hover:text-cyan-400 transition-colors"
            >
              Education
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl border transition-all duration-300 ${
                darkMode
                  ? "bg-slate-900 border-slate-800 text-yellow-400 hover:bg-slate-800"
                  : "bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200"
              }`}
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all duration-300 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30"
            >
              Contact Me
            </a>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border ${darkMode ? "bg-slate-900 border-slate-800 text-yellow-400" : "bg-slate-100 border-slate-300 text-slate-700"}`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-cyan-400 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden px-6 py-6 border-b space-y-4 ${darkMode ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200"}`}
          >
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-medium py-1"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-medium py-1"
            >
              Skills
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-medium py-1"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-medium py-1"
            >
              Projects
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-medium py-1"
            >
              Education
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold"
            >
              Contact Me
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative pt-36 pb-20 md:pt-44 md:pb-32 overflow-hidden flex items-center min-h-[90vh]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              Low-Code &amp; Enterprise Solutions Specialist
            </div>

            {/* Title */}
            <h1
              className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold ${textPrimaryClasses} tracking-tight mb-6 leading-tight`}
            >
              Building high-impact digital solutions for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                Enterprise Platforms
              </span>
              .
            </h1>

            {/* Description */}
            <p
              className={`text-lg sm:text-xl ${textMutedClasses} mb-8 leading-relaxed max-w-2xl`}
            >
              I'm <strong className={textPrimaryClasses}>Rezaldy Rafi</strong>,
              a Low-Code Development Analyst at Accenture with expertise across{" "}
              <span className="text-cyan-400 font-semibold">ServiceNow</span>,{" "}
              <span className="text-cyan-400 font-semibold">Pegasystems</span>,
              and{" "}
              <span className="text-cyan-400 font-semibold">OutSystems</span>,
              combined with custom Laravel &amp; Python development.
            </p>

            {/* Key Quick Badges */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm mb-10">
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Malang City, East Java, Indonesia</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Award className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">
                  Certified Pega System Architect '23
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Initiate Contact</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/rezaldy-rafi-861950233/"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-4 rounded-xl border font-semibold transition-all duration-300 flex items-center gap-2 ${darkMode ? "bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-200" : "bg-white border-slate-200 hover:bg-slate-100 text-slate-800"}`}
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute right-0 top-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className={`py-20 border-y ${darkMode ? "bg-slate-900/40 border-slate-900" : "bg-slate-100/60 border-slate-200"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                <User className="w-4 h-4" />
                Professional Summary
              </div>
              <h2
                className={`text-3xl sm:text-4xl font-bold ${textPrimaryClasses} mb-6 leading-tight`}
              >
                Enterprise Low-Code &amp; Full-Stack Capability
              </h2>
              <p className={`${textMutedClasses} leading-relaxed mb-6`}>
                Experienced in full-lifecycle software delivery across
                multi-national client environments. I translate complex business
                functional requirements into resilient low-code architectures
                and secure web applications.
              </p>

              <div
                className={`p-4 rounded-2xl border flex items-start gap-3.5 ${darkMode ? "bg-slate-900/90 border-slate-800" : "bg-white border-slate-200"}`}
              >
                <Sparkles className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <p className={`text-xs ${textMutedClasses} leading-normal`}>
                  Specialized in ServiceNow incident &amp; enhancement
                  resolution, Pega case workflows, OutSystems application
                  extensions, RESTful API mapping, and Agile team execution.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div
                className={`p-6 rounded-2xl border transition-all duration-300 ${cardBgClasses}`}
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className={`text-lg font-bold ${textPrimaryClasses} mb-2`}>
                  Low-Code Analyst
                </h3>
                <p className={`text-xs ${textMutedClasses} leading-relaxed`}>
                  Configuring enterprise workflows across ServiceNow ITSM, Pega
                  23, and OutSystems environments.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border transition-all duration-300 ${cardBgClasses}`}
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className={`text-lg font-bold ${textPrimaryClasses} mb-2`}>
                  Web Developer
                </h3>
                <p className={`text-xs ${textMutedClasses} leading-relaxed`}>
                  Full-stack custom software development using Laravel, PHP,
                  Python machine learning, and MySQL databases.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border transition-all duration-300 ${cardBgClasses}`}
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <h3 className={`text-lg font-bold ${textPrimaryClasses} mb-2`}>
                  API &amp; Integrations
                </h3>
                <p className={`text-xs ${textMutedClasses} leading-relaxed`}>
                  Swagger JSON definition mapping, REST endpoint testing with
                  Postman, and structured data handling.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border transition-all duration-300 ${cardBgClasses}`}
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                  <Workflow className="w-6 h-6" />
                </div>
                <h3 className={`text-lg font-bold ${textPrimaryClasses} mb-2`}>
                  Agile &amp; QA Protocols
                </h3>
                <p className={`text-xs ${textMutedClasses} leading-relaxed`}>
                  Environment promotion (Dev/UAT/QAT), Black Box testing, unit
                  test cases, and code reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Cpu className="w-4 h-4" />
              Technical Stack
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-bold ${textPrimaryClasses} mb-4`}
            >
              Skills &amp; Technologies
            </h2>
            <p className={`text-sm sm:text-base ${textMutedClasses}`}>
              Filter through my core technical competencies, low-code platforms,
              and development tools.
            </p>
          </div>

          {/* Interactive Skill Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveSkillCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  activeSkillCategory === cat.id
                    ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20"
                    : darkMode
                      ? "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill, idx) => {
              const IconComp = skill.icon;
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border flex items-center gap-4 transition-all duration-200 ${cardBgClasses}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold ${textPrimaryClasses}`}>
                      {skill.name}
                    </h4>
                    <span className="text-xs text-cyan-400 font-medium">
                      {skill.level}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section
        id="experience"
        className={`py-20 border-y ${darkMode ? "bg-slate-900/40 border-slate-900" : "bg-slate-100/60 border-slate-200"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Briefcase className="w-4 h-4" />
              Career Journey
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-bold ${textPrimaryClasses} mb-4`}
            >
              Professional Experience
            </h2>
            <p className={`text-sm sm:text-base ${textMutedClasses}`}>
              Filter experience history by platform or development focus.
            </p>
          </div>

          {/* Experience Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: "all", label: "All Roles" },
              { id: "servicenow", label: "ServiceNow" },
              { id: "pega", label: "Pegasystems" },
              { id: "outsystems", label: "OutSystems" },
              { id: "webdev", label: "Web Dev" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 border-cyan-400 shadow-md"
                    : darkMode
                      ? "bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Timeline Stack */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {filteredExperiences.map((exp) => (
              <div
                key={exp.id}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${cardBgClasses}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-700/40">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold mb-2">
                      {exp.type} • {exp.location}
                    </span>
                    <h3 className={`text-xl font-bold ${textPrimaryClasses}`}>
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-cyan-400">
                      {exp.company}
                    </div>
                  </div>
                  <div
                    className={`text-xs font-semibold px-3 py-1.5 rounded-lg border self-start sm:self-center ${darkMode ? "bg-slate-950 border-slate-800 text-slate-400" : "bg-slate-100 border-slate-200 text-slate-600"}`}
                  >
                    {exp.period}
                  </div>
                </div>

                <p
                  className={`text-xs sm:text-sm ${textMutedClasses} mb-4 leading-relaxed font-medium`}
                >
                  {exp.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {exp.points.map((pt, i) => (
                    <li
                      key={i}
                      className={`text-xs sm:text-sm ${textMutedClasses} flex items-start gap-2.5 leading-relaxed`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${darkMode ? "bg-slate-950 border-slate-800 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Code className="w-4 h-4" />
              Portfolio Spotlight
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-bold ${textPrimaryClasses} mb-4`}
            >
              Featured Software Projects
            </h2>
            <p className={`text-sm sm:text-base ${textMutedClasses}`}>
              Click any project card to inspect technical architecture details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj) => {
              const IconComp = proj.icon;
              return (
                <div
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className={`rounded-2xl border overflow-hidden flex flex-col cursor-pointer group transition-all duration-300 hover:-translate-y-1 ${cardBgClasses}`}
                >
                  <div
                    className={`h-40 bg-gradient-to-r ${proj.color} p-6 flex flex-col justify-between relative`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-950/40 text-white backdrop-blur-md flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-950/50 text-white inline-block mb-1">
                        {proj.category}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:underline leading-tight">
                        {proj.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <p
                      className={`text-xs sm:text-sm ${textMutedClasses} leading-relaxed mb-6`}
                    >
                      {proj.description}
                    </p>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {proj.tags.map((t, idx) => (
                          <span
                            key={idx}
                            className={`px-2 py-0.5 rounded text-[11px] font-medium border ${darkMode ? "bg-slate-950 border-slate-800 text-cyan-300" : "bg-slate-100 border-slate-200 text-slate-700"}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1 text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
                        <span>View Project Breakdown</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECT SPOTLIGHT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div
            className={`max-w-2xl w-full rounded-2xl border p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-cyan-400 bg-slate-800/50"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              {selectedProject.category}
            </div>

            <h3 className={`text-2xl font-bold ${textPrimaryClasses} mb-1`}>
              {selectedProject.title}
            </h3>
            <div className="text-xs text-slate-400 font-medium mb-6">
              {selectedProject.subtitle}
            </div>

            <div className="space-y-4 mb-6">
              <h4 className={`text-sm font-bold ${textPrimaryClasses}`}>
                Technical Overview
              </h4>
              <p
                className={`text-xs sm:text-sm ${textMutedClasses} leading-relaxed`}
              >
                {selectedProject.details}
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <h4 className={`text-sm font-bold ${textPrimaryClasses}`}>
                Key Highlights
              </h4>
              {selectedProject.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs sm:text-sm text-cyan-400"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span className={textPrimaryClasses}>{h}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
              >
                Close Modal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDUCATION & CERTIFICATIONS */}
      <section
        id="education"
        className={`py-20 border-y ${darkMode ? "bg-slate-900/40 border-slate-900" : "bg-slate-100/60 border-slate-200"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Education */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                <GraduationCap className="w-4 h-4" />
                Academic Degree
              </div>
              <h2 className={`text-3xl font-bold ${textPrimaryClasses} mb-8`}>
                Education
              </h2>

              <div className={`p-8 rounded-2xl border ${cardBgClasses}`}>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="text-xs text-cyan-400 font-semibold mb-1">
                  2019 – 2023
                </div>
                <h3 className={`text-xl font-bold ${textPrimaryClasses} mb-1`}>
                  State Polytechnic of Malang
                </h3>
                <div
                  className={`text-xs sm:text-sm font-medium ${textMutedClasses} mb-6`}
                >
                  Bachelor of Applied Computer in Informatics Engineering
                </div>

                <div className="pt-4 border-t border-slate-700/40 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Cumulative GPA</span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    3.43 / 4.00
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Award className="w-4 h-4" />
                Verified Credentials
              </div>
              <h2 className={`text-3xl font-bold ${textPrimaryClasses} mb-8`}>
                Certifications
              </h2>

              <div className="space-y-4">
                <div
                  className={`p-6 rounded-2xl border border-l-4 border-l-cyan-400 ${cardBgClasses}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3
                      className={`text-base sm:text-lg font-bold ${textPrimaryClasses}`}
                    >
                      Certified Pega System Architect '23
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300">
                      Pegasystems
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-2">Issued 2024</p>
                  <p className={`text-xs ${textMutedClasses} leading-relaxed`}>
                    Hands-on architecture validation covering case management
                    design, workflow rulesets, UI fields, and enterprise data
                    models.
                  </p>
                </div>

                <div
                  className={`p-5 rounded-2xl border flex items-center gap-4 ${cardBgClasses}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold ${textPrimaryClasses}`}>
                      IT Support Google Specialization
                    </h3>
                    <p className="text-xs text-slate-400">
                      Coursera / Google • 2023
                    </p>
                  </div>
                </div>

                <div
                  className={`p-5 rounded-2xl border flex items-center gap-4 ${cardBgClasses}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center flex-shrink-0">
                    <Workflow className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold ${textPrimaryClasses}`}>
                      Networking Devices &amp; Initial Configuration
                    </h3>
                    <p className="text-xs text-slate-400">Cisco • 2023</p>
                  </div>
                </div>

                <div
                  className={`p-5 rounded-2xl border flex items-center gap-4 ${cardBgClasses}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center flex-shrink-0">
                    <Database className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold ${textPrimaryClasses}`}>
                      Data Visualization Best Practices
                    </h3>
                    <p className="text-xs text-slate-400">
                      Google Sheets Specialization • 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Send className="w-4 h-4" />
                Communication
              </div>
              <h2
                className={`text-3xl sm:text-4xl font-bold ${textPrimaryClasses} mb-6`}
              >
                Let's Connect
              </h2>
              <p className={`text-sm ${textMutedClasses} leading-relaxed mb-8`}>
                Open to discuss Low-Code analyst roles, enterprise
                consultations, or web development projects.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:rezaldy.rafi2@gmail.com"
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-colors ${cardBgClasses}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Email</span>
                    <span className={`text-sm font-bold ${textPrimaryClasses}`}>
                      rezaldy.rafi2@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+6281945794475"
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-colors ${cardBgClasses}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">
                      Phone / WhatsApp
                    </span>
                    <span className={`text-sm font-bold ${textPrimaryClasses}`}>
                      +62 819-457-94475
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/rezaldy-rafi-861950233/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-colors ${cardBgClasses}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">
                      LinkedIn Profile
                    </span>
                    <span className={`text-sm font-bold ${textPrimaryClasses}`}>
                      linkedin.com/in/rezaldy-rafi-861950233
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className={`p-8 rounded-2xl border ${cardBgClasses}`}>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-cyan-400 transition-colors ${darkMode ? "bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-600" : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"}`}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-cyan-400 transition-colors ${darkMode ? "bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-600" : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"}`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Project Inquiry"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-cyan-400 transition-colors ${darkMode ? "bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-600" : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"}`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Your project description..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-cyan-400 transition-colors ${darkMode ? "bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-600" : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"}`}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  {submitStatus === 'success' && (
  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
    Thank you! Your message has been recorded. Direct email notification sent to rezaldy.rafi2@gmail.com.
  </div>
)}

{submitStatus === 'error' && (
  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold">
    Failed to send message. Please try again or email directly to rezaldy.rafi2@gmail.com.
  </div>
)}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`py-8 border-t text-xs ${darkMode ? "bg-slate-950 border-slate-900 text-slate-500" : "bg-slate-100 border-slate-200 text-slate-600"}`}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} Rezaldy Rafi. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/rezaldy-rafi-861950233/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:rezaldy.rafi2@gmail.com"
              className="hover:text-cyan-400 transition-colors"
            >
              Email
            </a>
            <a
              href="tel:+6281945794475"
              className="hover:text-cyan-400 transition-colors"
            >
              Phone
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
