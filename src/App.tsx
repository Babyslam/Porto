import { useState } from "react";
import {
  profile,
  stats,
  marqueeItems,
  capabilities,
  processSteps,
  projects,
  experience,
  skillGroups,
  education,
  certifications,
  Project,
} from "./data";
import ProjectModal from "./components/ProjectModal";
import ProjectVisual from "./components/ProjectVisual";
import ContactForm from "./components/ContactForm";
import {
  ArrowUpRight,
  ChevronRight,
  Code2,
  GraduationCap,
  Award,
  Sparkles,
  Mail,
  Menu,
  X,
  Check,
} from "lucide-react";

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTrackMap, setActiveTrackMap] = useState<Record<string, string>>({});

  const handleTrackChange = (expId: string, trackId: string) => {
    setActiveTrackMap((prev) => ({ ...prev, [expId]: trackId }));
  };

  return (
    <div className="portfolio-app">
      {/* Header */}
      <header className="site-header is-scrolled">
        <div className="container header-inner">
          <a href="#" className="brand">
            <span className="brand__mark">
              RR<i />
            </span>
            <div className="brand__text">
              <strong>{profile.name}</strong>
              <span>{profile.role}</span>
            </div>
          </a>

          <nav className="desktop-nav">
            <a href="#about" className="nav-link">About</a>
            <a href="#work" className="nav-link">Work</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#toolkit" className="nav-link">Toolkit</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="header-actions">
            <a href="#contact" className="button button--accent header-cta">
              Get in touch
            </a>
            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-menu__nav">
            <a href="#about" className="mobile-menu__link" onClick={() => setMobileMenuOpen(false)}>
              <span className="mobile-menu__index">01</span> About <ChevronRight size={20} />
            </a>
            <a href="#work" className="mobile-menu__link" onClick={() => setMobileMenuOpen(false)}>
              <span className="mobile-menu__index">02</span> Work <ChevronRight size={20} />
            </a>
            <a href="#experience" className="mobile-menu__link" onClick={() => setMobileMenuOpen(false)}>
              <span className="mobile-menu__index">03</span> Experience <ChevronRight size={20} />
            </a>
            <a href="#toolkit" className="mobile-menu__link" onClick={() => setMobileMenuOpen(false)}>
              <span className="mobile-menu__index">04</span> Toolkit <ChevronRight size={20} />
            </a>
            <a href="#contact" className="mobile-menu__link" onClick={() => setMobileMenuOpen(false)}>
              <span className="mobile-menu__index">05</span> Contact <ChevronRight size={20} />
            </a>
          </nav>
        </div>
      )}

      {/* Hero */}
      <section className="hero">
        <div className="hero__ambient">
          <div className="hero__grid-lines" />
          <div className="hero__orb hero__orb--one" />
          <div className="hero__orb hero__orb--two" />
        </div>

        <div className="container hero__inner">
          <div>
            <span className="eyebrow">
              <span className="status-dot" /> Available for Enterprise & Full-stack Roles
            </span>
            <h1>
              Building <span className="display-italic">enterprise</span> systems & modern web apps.
            </h1>
            <p className="hero__lead">
              Low-code ITSM analyst and full-stack developer turning complex rules into secure, human systems across <strong>ServiceNow</strong>, <strong>Pegasystems</strong>, and <strong>OutSystems</strong>.
            </p>
            <div className="hero__actions">
              <a href="#work" className="button button--accent">
                Explore Selected Work <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="button button--ghost">
                Let's Talk
              </a>
            </div>
            <div className="hero__meta">
              <span><Sparkles size={14} /> Based in {profile.location}</span>
              <span><Code2 size={14} /> Low-Code & Full-Stack</span>
            </div>
          </div>

          <div className="hero__visual">
            <div className="console">
              <div className="console__bar">
                <span className="console__dots"><i /><i /><i /></span>
                <span>rezaldy-rafi / platform-overview</span>
                <span className="console__live">ACTIVE</span>
              </div>
              <div className="console__body">
                <div className="console__topline">
                  <span>ENTERPRISE & WEB</span>
                  <span>MALANG, ID</span>
                </div>
                <h2>Low-code & Web Developer</h2>
                <div className="console__company">
                  <div className="console__logo">RR</div>
                  <div>
                    <strong>{profile.name}</strong>
                    <span>{profile.role}</span>
                  </div>
                </div>
                <div className="console__platforms">
                  <div className="console__platform">
                    <span className="console__platform-index">01</span>
                    <div>
                      <strong>ServiceNow ITSM</strong>
                      <span>Fix Scripts & Data Migration</span>
                    </div>
                    <span className="console__platform-dot" />
                  </div>
                  <div className="console__platform">
                    <span className="console__platform-index">02</span>
                    <div>
                      <strong>Pegasystems PCSA</strong>
                      <span>Case Workflows & REST APIs</span>
                    </div>
                    <span className="console__platform-dot" />
                  </div>
                  <div className="console__platform">
                    <span className="console__platform-index">03</span>
                    <div>
                      <strong>React & TypeScript</strong>
                      <span>Full-Stack Web Systems</span>
                    </div>
                    <span className="console__platform-dot" />
                  </div>
                </div>
              </div>
              <div className="console__footer">
                <span><span className="status-dot" /> READY FOR NEW CHALLENGES</span>
                <span>2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Stats */}
        <div className="container">
          <div className="hero__stats">
            {stats.map((st, i) => (
              <div key={i} className="hero-stat">
                <strong>{st.value}</strong>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee__track">
          <div className="marquee__group">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <span key={idx} className="marquee__item">
                {item} <i />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* About */}
      <section id="about" className="section about">
        <div className="container about-grid">
          <div className="about-copy">
            <div className="section-label">
              <span>01</span> About
            </div>
            <p className="about-copy__lead">
              Bridging complex enterprise logic with intuitive user experiences.
            </p>
            <p>{profile.summary}</p>
            <div className="about-facts">
              <div>
                <span>Location</span>
                <strong>{profile.location}</strong>
              </div>
              <div>
                <span>Primary Role</span>
                <strong>{profile.role}</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>Enterprise Low-Code & Full-Stack</strong>
              </div>
            </div>
          </div>

          <div>
            <div className="capability-grid">
              {capabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <div key={idx} className={`capability-card capability-card--${cap.accent}`}>
                    <div className="capability-card__top">
                      <div className="capability-card__icon">
                        <Icon size={20} />
                      </div>
                      <span className="capability-card__index">0{idx + 1}</span>
                    </div>
                    <h3>{cap.title}</h3>
                    <p>{cap.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="container">
          <div className="process">
            <div className="process__intro">
              <span className="mono-label">HOW I WORK</span>
              <p>Structured execution from discovery to deployment.</p>
            </div>
            {processSteps.map((step) => (
              <div key={step.number} className="process__step">
                <span>{step.number}</span>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="section work">
        <div className="container">
          <div className="section-intro">
            <div>
              <div className="section-label">
                <span>02</span> Selected Work
              </div>
              <h2>
                Featured <span className="display-italic">projects</span> & enterprise builds.
              </h2>
            </div>
            <p>
              A showcase of machine learning systems, enterprise low-code solutions, and platform migrations.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((proj) => (
              <article
                key={proj.id}
                className={`project-card project-card--${proj.layout}`}
                style={{ "--project-accent": proj.accent } as React.CSSProperties}
              >
                <button
                  type="button"
                  className="project-card__action"
                  onClick={() => setSelectedProject(proj)}
                  aria-label={`View details for ${proj.title}`}
                />
                <div className="project-card__visual">
                  <ProjectVisual kind={proj.visual} />
                </div>
                <div className="project-card__body">
                  <div className="project-card__meta">
                    <span>{proj.category}</span>
                    <span>{proj.context}</span>
                  </div>
                  <h3>{proj.title}</h3>
                  <p>{proj.summary || proj.description}</p>
                  <div className="project-card__footer">
                    <span className="project-card__stack">
                      {proj.stack.slice(0, 3).join(" · ")}
                    </span>
                    <span className="project-card__cta">
                      View Case Study <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section experience">
        <div className="container experience-grid">
          <div className="experience-aside">
            <div className="experience-aside__sticky">
              <span className="experience-badge">Career Track</span>
              <h3>
                Enterprise <span className="display-italic">experience</span> & achievements.
              </h3>
              <p>
                Hands-on development across ServiceNow, Pegasystems, and OutSystems.
              </p>
            </div>
          </div>

          <div className="timeline">
            {experience.map((exp) => {
              const activeTrackId = activeTrackMap[exp.id] || (exp.tracks?.[0]?.id ?? "");
              const currentTrack = exp.tracks?.find((t) => t.id === activeTrackId) || exp.tracks?.[0];

              return (
                <div key={exp.id} className="experience-card experience-card--featured">
                  <div className="experience-card__head">
                    <div>
                      <span className="experience-card__period">{exp.period}</span>
                      <h3>{exp.role}</h3>
                      <div className="experience-card__company">
                        {exp.company} <span>{exp.location}</span>
                      </div>
                    </div>
                    <span className="experience-card__type">{exp.type}</span>
                  </div>

                  <p className="experience-card__summary">{exp.summary}</p>

                  {exp.tracks && exp.tracks.length > 0 && (
                    <>
                      <div className="track-tabs" role="tablist">
                        {exp.tracks.map((track) => (
                          <button
                            key={track.id}
                            type="button"
                            className="track-tab"
                            role="tab"
                            aria-selected={activeTrackId === track.id}
                            onClick={() => handleTrackChange(exp.id, track.id)}
                          >
                            {track.label}
                          </button>
                        ))}
                      </div>

                      {currentTrack && (
                        <div className="track-panel" role="tabpanel">
                          <div className="track-panel__head">
                            <h4>{currentTrack.role}</h4>
                          </div>
                          <p>{currentTrack.summary}</p>
                          <ul className="check-list">
                            {currentTrack.points.map((pt, i) => (
                              <li key={i}>
                                <Check size={14} />
                                <span>{pt}</span>
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
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section id="toolkit" className="section toolkit">
        <div className="container">
          <div className="section-intro">
            <div>
              <div className="section-label">
                <span>03</span> Technical Skills
              </div>
              <h2>
                Tools & <span className="display-italic">technologies</span> I work with.
              </h2>
            </div>
          </div>

          <div className="skill-grid">
            {skillGroups.map((group, idx) => {
              const Icon = group.icon;
              return (
                <div key={group.id} className={`skill-card skill-card--${group.accent}`}>
                  <div className="skill-card__top">
                    <div className="skill-card__icon">
                      <Icon size={20} />
                    </div>
                    <span className="skill-card__index">0{idx + 1}</span>
                  </div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <span>{item.name}</span>
                        <em>{item.level}</em>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section credentials">
        <div className="container credentials-grid">
          <div className="education-card">
            <div className="education-card__top">
              <div className="education-card__icon">
                <GraduationCap size={22} />
              </div>
              <span>{education.period}</span>
            </div>
            <h3>{education.degree}</h3>
            <p className="education-card__school">{education.school}</p>
            <div className="education-card__gpa">
              <div>
                <span>GPA Score</span>
                <strong>{education.gpa.split(" ")[0]}</strong>
              </div>
            </div>
          </div>

          <div className="cert-grid">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`cert-card ${cert.featured ? "cert-card--featured" : ""}`}
              >
                <div className="cert-card__top">
                  <div className="cert-card__icon">
                    <Award size={18} />
                  </div>
                  <span>{cert.year}</span>
                </div>
                <h3>{cert.title}</h3>
                <span className="cert-card__issuer">{cert.issuer}</span>
                <p>{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <div className="contact__glow" />
        <div className="container contact-grid">
          <div>
            <div className="contact-head">
              <div className="section-label">
                <span>04</span> Contact
              </div>
              <h2>
                Let's build something <span className="display-italic">extraordinary</span>.
              </h2>
              <p>
                Whether you have an enterprise low-code initiative, a full-stack project, or a technical inquiry — feel free to reach out.
              </p>
            </div>

            <div className="contact-channels">
              <a href={`mailto:${profile.email}`} className="contact-channel">
                <div className="contact-channel__icon">
                  <Mail size={18} />
                </div>
                <div>
                  <span>Email</span>
                  <strong>{profile.email}</strong>
                </div>
                <ArrowUpRight size={16} className="contact-channel__arrow" />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-channel"
              >
                <div className="contact-channel__icon">
                  <LinkedinIcon size={18} />
                </div>
                <div>
                  <span>LinkedIn</span>
                  <strong>{profile.linkedinDisplay}</strong>
                </div>
                <ArrowUpRight size={16} className="contact-channel__arrow" />
              </a>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#">
                {profile.name}<span>.</span>
              </a>
              <p>{profile.role}</p>
            </div>
            <a href="#" className="back-to-top">
              Back to top ↑
            </a>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
            <div className="footer-links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={14} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Mail size={14} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;