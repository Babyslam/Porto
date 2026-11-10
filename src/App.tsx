import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Award,
  Briefcase,
  Check,
  Copy,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Sun,
  X,
  Zap,
} from "lucide-react";
import {
  capabilities,
  certifications,
  education,
  experience,
  marqueeItems,
  processSteps,
  profile,
  projects,
  skillGroups,
  stats,
} from "./data";
import type { Project } from "./data";
import ContactForm from "./components/ContactForm";
import ProjectModal from "./components/ProjectModal";
import ProjectVisual from "./components/ProjectVisual";

type Theme = "dark" | "light";

const navLinks = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "toolkit", label: "Toolkit" },
  { id: "credentials", label: "Credentials" },
];

const heroPlatforms = [
  { name: "ServiceNow", detail: "ITSM · incidents · releases" },
  { name: "Pegasystems", detail: "Case workflows · REST · UI" },
  { name: "OutSystems", detail: "Features · SQL · demos" },
];

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.49 1.49 0 1 0 0 2.97 1.49 1.49 0 0 0 0-2.97Z" />
    </svg>
  );
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <span className="section-label">
      <span>{number}</span>
      {label}
    </span>
  );
}

function getInitialTheme(): Theme {
  const attribute = document.documentElement.getAttribute("data-theme");
  return attribute === "light" ? "light" : "dark";
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTrack, setActiveTrack] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const projectTriggerRef = useRef<HTMLButtonElement | null>(null);
  const copyTimer = useRef<number | null>(null);

  const accenture = experience[0];
  const tracks = accenture.tracks ?? [];
  const currentTrack = tracks[activeTrack];

  const closeProject = useCallback(() => {
    setSelectedProject(null);
    window.requestAnimationFrame(() => projectTriggerRef.current?.focus());
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("rr-theme", theme);
    } catch {
      // Theme still applies for this session when storage is unavailable.
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#0f1517" : "#f7f6f1");
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 16);
      setScrollProgress(scrollable > 0 ? Math.min(1, y / scrollable) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "main section[id]",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-32% 0px -58% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const elements =
      document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
      if (event.key !== "Tab" || !menuRef.current) return;

      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    requestAnimationFrame(() => {
      menuRef.current
        ?.querySelector<HTMLElement>(".mobile-menu__link")
        ?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [menuOpen]);

  useEffect(() => {
    return () => {
      if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
      copyTimer.current = window.setTimeout(() => {
        setCopiedEmail(false);
      }, 1800);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleTrackKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      return;
    }

    event.preventDefault();
    let nextIndex = index;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % tracks.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + tracks.length) % tracks.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tracks.length - 1;
    }

    setActiveTrack(nextIndex);
    document
      .getElementById(`track-tab-${tracks[nextIndex].id}`)
      ?.focus();
  };

  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container header-inner">
          <a className="brand" href="#home">
            <span className="brand__mark">
              RR
              <i aria-hidden="true" />
            </span>
            <span className="brand__text">
              <strong>Rezaldy Rafi</strong>
              <span>Enterprise systems</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                className={`nav-link ${
                  activeSection === link.id ? "is-active" : ""
                }`}
                href={`#${link.id}`}
                aria-current={
                  activeSection === link.id ? "location" : undefined
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={() =>
                setTheme((current) =>
                  current === "dark" ? "light" : "dark",
                )
              }
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
              title={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <a className="button button--accent header-cta" href="#contact">
              Let&apos;s talk
              <ArrowUpRight size={15} />
            </a>

            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              ref={menuButtonRef}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
        <span
          className="scroll-progress"
          style={{ transform: `scaleX(${scrollProgress})` }}
          aria-hidden="true"
        />
      </header>

      {menuOpen && (
        <div
          className="mobile-menu"
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          ref={menuRef}
        >
          <nav className="mobile-menu__nav" aria-label="Mobile navigation">
            {navLinks.map((link, index) => (
              <a
                className="mobile-menu__link"
                href={`#${link.id}`}
                key={link.id}
                onClick={() => setMenuOpen(false)}
              >
                <span className="mobile-menu__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {link.label}
                <ArrowUpRight size={22} />
              </a>
            ))}
            <a
              className="mobile-menu__link"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              <span className="mobile-menu__index">06</span>
              Contact
              <ArrowUpRight size={22} />
            </a>
          </nav>

          <div className="mobile-menu__footer">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <p>{profile.location}</p>
            <div>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href={`tel:${profile.phone}`}>Phone</a>
            </div>
          </div>
        </div>
      )}

      <main id="main-content">
        <section className="hero" id="home">
          <div className="hero__ambient" aria-hidden="true">
            <span className="hero__grid-lines" />
            <span className="hero__orb hero__orb--one" />
            <span className="hero__orb hero__orb--two" />
          </div>

          <div className="container hero__inner">
            <div className="hero__copy">
              <div className="eyebrow" data-reveal>
                <span className="status-dot" />
                {profile.role} · Malang, ID
              </div>

              <h1 data-reveal style={{ transitionDelay: "70ms" }}>
                Low-code.
                <br />
                <span className="display-italic">High impact.</span>
              </h1>

              <p
                className="hero__lead"
                data-reveal
                style={{ transitionDelay: "140ms" }}
              >
                I&apos;m <strong>{profile.name}</strong> — a low-code developer
                turning thorny enterprise rules into
                secure, human systems across{" "}
                <span>ServiceNow</span>, <span>Pega</span>, and{" "}
                <span>OutSystems</span>.
              </p>

              <div
                className="hero__actions"
                data-reveal
                style={{ transitionDelay: "210ms" }}
              >
                <a className="button button--accent" href="#work">
                  See selected work
                  <ArrowDown size={16} />
                </a>
                <a className="button button--ghost" href="#contact">
                  Start a conversation
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div
                className="hero__meta"
                data-reveal
                style={{ transitionDelay: "280ms" }}
              >
                <span>
                  <MapPin size={15} />
                  {profile.location}
                </span>
                <span>
                  <Award size={15} />
                  Certified Pega System Architect &apos;23
                </span>
              </div>
            </div>

            <div
              className="hero__visual"
              data-reveal
              style={{ transitionDelay: "180ms" }}
            >
              <div className="console">
                <div className="console__bar">
                  <span className="console__dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>/accenture/current-focus</span>
                  <span className="console__live">LIVE</span>
                </div>

                <div className="console__body">
                  <div className="console__topline">
                    <span>Currently building</span>
                    <span>Jan 2024 — now</span>
                  </div>

                  <h2>
                    Low-code.
                    <br />
                    Enterprise scale.
                  </h2>

                  <div className="console__company">
                    <span className="console__logo" aria-hidden="true">
                      A
                    </span>
                    <div>
                      <strong>Accenture</strong>
                      <span>{accenture.role}</span>
                    </div>
                  </div>

                  <div className="console__platforms">
                    {heroPlatforms.map((platform, index) => (
                      <div className="console__platform" key={platform.name}>
                        <span className="console__platform-index">
                          0{index + 1}
                        </span>
                        <div>
                          <strong>{platform.name}</strong>
                          <span>{platform.detail}</span>
                        </div>
                        <span className="console__platform-dot" />
                      </div>
                    ))}
                  </div>

                  <div className="console__cert">
                    <Award size={18} />
                    <div>
                      <span>Certified</span>
                      <strong>Pega System Architect &apos;23</strong>
                    </div>
                    <ArrowUpRight size={15} />
                  </div>
                </div>

                <div className="console__footer">
                  <span>
                    <i className="status-dot" />
                    Available for conversations
                  </span>
                  <span>GMT+7</span>
                </div>
              </div>

              <div className="console-float" aria-hidden="true">
                <span className="console-float__icon">
                  <Zap size={15} />
                </span>
                <div>
                  <strong>78%</strong>
                  <span>model accuracy</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="hero__stats">
              {stats.map((stat) => (
                <div className="hero-stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[0, 1].map((group) => (
              <div className="marquee__group" key={group}>
                {marqueeItems.map((item) => (
                  <span className="marquee__item" key={`${group}-${item}`}>
                    {item}
                    <i />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="section about" id="about">
          <div className="container">
            <div className="section-intro">
              <div>
                <SectionLabel number="01" label="About" />
                <h2>
                  Enterprise thinking.
                  <br />
                  <span className="display-italic">Human-centered delivery.</span>
                </h2>
              </div>
              <p>
                The rules behind enterprise software are often complex. The
                experience of using it should not be.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-copy" data-reveal>
                <p className="about-copy__lead">
                  I work where business rules meet real people — translating
                  requirements into systems that hold up in production.
                </p>
                <p>{profile.summary}</p>
                <p>
                  My work spans low-code configuration and custom engineering:
                  the common thread is understanding the actual job to be done,
                  then testing the edges until the system can be trusted.
                </p>

                <div className="about-facts">
                  <div>
                    <span>Currently</span>
                    <strong>Accenture · Low-code developer</strong>
                  </div>
                  <div>
                    <span>Focus</span>
                    <strong>Enterprise workflows & web products</strong>
                  </div>
                  <div>
                    <span>Base</span>
                    <strong>Malang, East Java</strong>
                  </div>
                </div>
              </div>

              <div className="capability-grid">
                {capabilities.map((capability, index) => {
                  const Icon = capability.icon;
                  return (
                    <article
                      className={`capability-card capability-card--${capability.accent}`}
                      key={capability.title}
                      data-reveal
                      style={{ transitionDelay: `${index * 65}ms` }}
                    >
                      <div className="capability-card__top">
                        <span className="capability-card__icon">
                          <Icon size={19} />
                        </span>
                        <span className="capability-card__index">
                          0{index + 1}
                        </span>
                      </div>
                      <h3>{capability.title}</h3>
                      <p>{capability.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="process" data-reveal>
              <div className="process__intro">
                <span className="mono-label">How I work</span>
                <p>From ambiguity to a release someone can trust.</p>
              </div>
              {processSteps.map((step) => (
                <div className="process__step" key={step.number}>
                  <span>{step.number}</span>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section work" id="work">
          <div className="container">
            <div className="section-intro">
              <div>
                <SectionLabel number="02" label="Selected work" />
                <h2>
                  Systems with
                  <br />
                  <span className="display-italic">a job to do.</span>
                </h2>
              </div>
              <div className="section-intro__aside">
                <span>03 case studies</span>
                <p>
                  Chosen for depth, not volume. Open any card for the brief,
                  build decisions, and evidence.
                </p>
              </div>
            </div>

            <div className="project-grid">
              {projects.map((project, index) => (
                <article
                  className={`project-card project-card--${project.layout} project-card--${project.id}`}
                  key={project.id}
                  style={
                    {
                      "--project-accent": project.accent,
                      transitionDelay: `${index * 80}ms`,
                    } as CSSProperties
                  }
                  data-reveal
                >
                  <button
                    type="button"
                    className="project-card__action"
                    onClick={(event) => {
                      projectTriggerRef.current = event.currentTarget;
                      setSelectedProject(project);
                    }}
                    aria-haspopup="dialog"
                    aria-label={`Open ${project.fullTitle} case study`}
                  />

                  <div className="project-card__visual" aria-hidden="true">
                    <ProjectVisual kind={project.visual} />
                  </div>

                  <div className="project-card__body">
                    <div className="project-card__meta">
                      <span>{project.category}</span>
                      <span>{project.context}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.tagline}</p>
                    <div className="project-card__result">
                      <strong>{project.metrics[0].value}</strong>
                      <span>{project.metrics[0].label}</span>
                    </div>
                    <div className="project-card__footer">
                      <span className="project-card__stack">
                        {project.stack.slice(0, 3).join(" / ")}
                      </span>
                      <span className="project-card__cta" aria-hidden="true">
                        Open case study
                        <ArrowUpRight size={15} />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="container">
            <div className="section-intro">
              <div>
                <SectionLabel number="03" label="Experience" />
                <h2>
                  Three platforms.
                  <br />
                  <span className="display-italic">One delivery standard.</span>
                </h2>
              </div>
              <p>
                Enterprise low-code work is rarely one clean track. Mine runs
                across platform configuration, integration, testing, and
                production support.
              </p>
            </div>

            <div className="experience-grid">
              <aside className="experience-aside" data-reveal>
                <div className="experience-aside__sticky">
                  <span className="experience-badge">
                    <Briefcase size={14} />
                    Production delivery
                  </span>
                  <h3>
                    Configure.
                    <br />
                    Integrate.
                    <br />
                    <span className="display-italic">Own the release.</span>
                  </h3>
                  <p>
                    I stay with the work from story refinement through UAT and
                    post-release fixes — not just the configuration step.
                  </p>
                  <dl className="experience-facts">
                    <div>
                      <dt>Since</dt>
                      <dd>2024 at Accenture</dd>
                    </div>
                    <div>
                      <dt>Platforms</dt>
                      <dd>ServiceNow · Pega · OutSystems</dd>
                    </div>
                    <div>
                      <dt>Environments</dt>
                      <dd>Dev → QAT → UAT</dd>
                    </div>
                  </dl>
                </div>
              </aside>

              <div className="timeline">
                <article
                  className="experience-card experience-card--featured"
                  data-reveal
                >
                  <div className="experience-card__head">
                    <div>
                      <span className="experience-card__period">
                        {accenture.period}
                      </span>
                      <h3>{accenture.role}</h3>
                      <p className="experience-card__company">
                        {accenture.company}
                        <span>{accenture.location}</span>
                      </p>
                    </div>
                    <span className="experience-card__type">
                      {accenture.type}
                    </span>
                  </div>

                  <p className="experience-card__summary">
                    {accenture.summary}
                  </p>

                  <div
                    className="track-tabs"
                    role="tablist"
                    aria-label="Accenture platform focus"
                  >
                    {tracks.map((track, index) => (
                      <button
                        type="button"
                        className="track-tab"
                        id={`track-tab-${track.id}`}
                        role="tab"
                        aria-selected={activeTrack === index}
                        aria-controls="track-panel"
                        tabIndex={activeTrack === index ? 0 : -1}
                        key={track.id}
                        onClick={() => setActiveTrack(index)}
                        onKeyDown={(event) =>
                          handleTrackKeyDown(event, index)
                        }
                      >
                        {track.label}
                      </button>
                    ))}
                  </div>

                  {currentTrack && (
                    <div
                      className="track-panel"
                      id="track-panel"
                      role="tabpanel"
                      aria-labelledby={`track-tab-${currentTrack.id}`}
                      tabIndex={0}
                      key={currentTrack.id}
                    >
                      <div className="track-panel__head">
                        <span className="mono-label">Platform focus</span>
                        <h4>{currentTrack.role}</h4>
                      </div>
                      <p>{currentTrack.summary}</p>
                      <ul className="check-list">
                        {currentTrack.points.map((point) => (
                          <li key={point}>
                            <Check size={15} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="tag-row">
                        {currentTrack.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </article>

                {experience.slice(1).map((item, index) => (
                  <article
                    className="experience-card experience-card--compact"
                    key={item.id}
                    data-reveal
                    style={{ transitionDelay: `${index * 60}ms` }}
                  >
                    <div className="experience-card__head">
                      <div>
                        <span className="experience-card__period">
                          {item.period}
                        </span>
                        <h3>{item.role}</h3>
                        <p className="experience-card__company">
                          {item.company}
                          <span>{item.location}</span>
                        </p>
                      </div>
                      <span className="experience-card__type">
                        {item.type}
                      </span>
                    </div>

                    <p className="experience-card__summary">{item.summary}</p>

                    <ul className="check-list">
                      {item.points.map((point) => (
                        <li key={point}>
                          <Check size={15} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="tag-row">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section toolkit" id="toolkit">
          <div className="container">
            <div className="section-intro">
              <div>
                <SectionLabel number="04" label="Toolkit" />
                <h2>
                  Broad enough
                  <br />
                  <span className="display-italic">to connect the dots.</span>
                </h2>
              </div>
              <p>
                The useful skill is not any single platform. It is knowing how
                the workflow, the data, and the release fit together.
              </p>
            </div>

            <div className="skill-grid">
              {skillGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <article
                    className={`skill-card skill-card--${group.accent}`}
                    key={group.id}
                    data-reveal
                    style={{ transitionDelay: `${index * 65}ms` }}
                  >
                    <div className="skill-card__top">
                      <span className="skill-card__icon">
                        <Icon size={19} />
                      </span>
                      <span className="skill-card__index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item.name}>
                          <span>{item.name}</span>
                          {item.level && <em>{item.level}</em>}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section credentials" id="credentials">
          <div className="container">
            <div className="section-intro">
              <div>
                <SectionLabel number="05" label="Credentials" />
                <h2>
                  Proof of the
                  <br />
                  <span className="display-italic">foundation.</span>
                </h2>
              </div>
              <p>
                A formal computer science foundation, plus platform
                certifications that keep the low-code work grounded.
              </p>
            </div>

            <div className="credentials-grid">
              <article className="education-card" data-reveal>
                <div className="education-card__top">
                  <span className="education-card__icon">
                    <education.icon size={22} />
                  </span>
                  <span>{education.period}</span>
                </div>
                <h3>{education.degree}</h3>
                <p className="education-card__school">{education.school}</p>
                <div className="education-card__gpa">
                  <strong>{education.gpa}</strong>
                  <span>Cumulative GPA</span>
                </div>
              </article>

              <div className="cert-grid">
                {certifications.map((certification, index) => {
                  const Icon = certification.icon;
                  return (
                    <article
                      className={`cert-card ${
                        certification.featured
                          ? "cert-card--featured"
                          : ""
                      }`}
                      key={certification.title}
                      data-reveal
                      style={{ transitionDelay: `${index * 60}ms` }}
                    >
                      <div className="cert-card__top">
                        <span className="cert-card__icon">
                          <Icon size={18} />
                        </span>
                        <span>{certification.year}</span>
                      </div>
                      <h3>{certification.title}</h3>
                      <span className="cert-card__issuer">
                        {certification.issuer}
                      </span>
                      <p>{certification.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact__glow" aria-hidden="true" />
          <div className="container">
            <div className="contact-head" data-reveal>
              <SectionLabel number="06" label="Contact" />
              <h2>
                Let&apos;s build something
                <br />
                <span className="display-italic">that works.</span>
              </h2>
              <p>
                Open to enterprise engineering roles, low-code consulting, and
                full-stack product conversations. Tell me what you are trying
                to make real.
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-channels" data-reveal>
                <div className="contact-channel">
                  <span className="contact-channel__icon">
                    <Mail size={18} />
                  </span>
                  <div>
                    <span>Email</span>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </div>
                  <button
                    type="button"
                    className="copy-button"
                    onClick={handleCopyEmail}
                    aria-label={
                      copiedEmail ? "Email copied" : "Copy email address"
                    }
                  >
                    {copiedEmail ? (
                      <Check size={16} />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>

                <a
                  className="contact-channel"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-channel__icon">
                    <LinkedInIcon size={17} />
                  </span>
                  <div>
                    <span>LinkedIn</span>
                    <strong>{profile.linkedinDisplay}</strong>
                  </div>
                  <ArrowUpRight size={16} className="contact-channel__arrow" />
                </a>

                <a
                  className="contact-channel"
                  href={`tel:${profile.phone}`}
                >
                  <span className="contact-channel__icon">
                    <Phone size={18} />
                  </span>
                  <div>
                    <span>Phone / WhatsApp</span>
                    <strong>{profile.phoneDisplay}</strong>
                  </div>
                  <ArrowUpRight size={16} className="contact-channel__arrow" />
                </a>

                <div className="contact-channel contact-channel--static">
                  <span className="contact-channel__icon">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <span>Based in</span>
                    <strong>{profile.location}</strong>
                  </div>
                </div>

                <div className="availability">
                  <span className="status-dot" />
                  <div>
                    <strong>Open to conversations</strong>
                    <span>
                      Enterprise engineering · low-code · full-stack
                    </span>
                  </div>
                </div>

                <p className="contact-channels__note" aria-live="polite">
                  {copiedEmail
                    ? "Email address copied to clipboard."
                    : "The quickest route is email. The form works too."}
                </p>
              </div>

              <div data-reveal style={{ transitionDelay: "90ms" }}>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#home" aria-label="RR. Back to top">
                RR<span>.</span>
              </a>
              <p>Enterprise systems, made human.</p>
            </div>

            <a className="back-to-top" href="#home">
              Back to top
              <ArrowUp size={16} />
            </a>
          </div>

          <div className="footer-bottom">
            <span>
              © {year} {profile.name}. All rights reserved.
            </span>
            <span>Built with React · Malang, Indonesia</span>
            <div className="footer-links">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon size={16} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Mail size={16} />
              </a>
              <a href={`tel:${profile.phone}`} aria-label="Phone">
                <Phone size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeProject} />
      )}
    </>
  );
}

export default App;
