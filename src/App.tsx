import { useState } from "react";
import {
  profile,
  stats,
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
import {
  Mail,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Header / Hero */}
      <header className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-800 pb-8">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-emerald-400 uppercase bg-emerald-950/50 border border-emerald-800/50 px-3 py-1 rounded-full mb-3">
              <Sparkles size={12} /> Available for Enterprise & Full-stack Roles
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              {profile.name}
            </h1>
            <p className="text-lg text-slate-400 mt-2 font-medium">
              {profile.role} • {profile.location}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-5 py-2.5 rounded-xl transition"
            >
              <Mail size={18} /> Contact Me
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8 space-y-16">
        {/* About Section */}
        <section className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Code2 className="text-emerald-400" size={24} /> About Me
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              {profile.summary}
            </p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 grid grid-cols-3 gap-4 text-center">
            {stats.map((st, idx) => (
              <div key={idx}>
                <div className="text-2xl font-bold text-emerald-400">{st.value}</div>
                <div className="text-xs text-slate-400 mt-1">{st.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Sparkles className="text-emerald-400" size={24} /> What I Do
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const IconComp = cap.icon;
              return (
                <div key={idx} className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
                    <IconComp size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{cap.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Briefcase className="text-emerald-400" size={24} /> Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="group cursor-pointer bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/50 rounded-2xl p-6 transition flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                    {proj.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-emerald-400 transition">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-2 line-clamp-3">
                    {proj.description || proj.tagline || proj.summary}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.stack.slice(0, 3).map((st) => (
                      <span key={st} className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                        {st}
                      </span>
                    ))}
                  </div>
                  <ChevronRight className="text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition" size={18} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Execution Process */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Code2 className="text-emerald-400" size={24} /> Execution Process
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {processSteps.map((step) => (
              <div key={step.number} className="bg-slate-900/30 border border-slate-800/60 rounded-2xl p-5 space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-400">{step.number}</span>
                <h3 className="text-base font-semibold text-white">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Briefcase className="text-emerald-400" size={24} /> Work Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 space-y-4">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-emerald-400 font-medium">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="text-sm font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-300 text-sm">{exp.summary}</p>
                {exp.tracks && exp.tracks.length > 0 && (
                  <div className="space-y-3 pt-2">
                    {exp.tracks.map((tr) => (
                      <div key={tr.id} className="bg-slate-950/60 border border-slate-800/50 rounded-xl p-4 space-y-2">
                        <h4 className="text-sm font-semibold text-slate-200">{tr.role}</h4>
                        <ul className="space-y-1">
                          {tr.points.map((pt, i) => (
                            <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                              <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Certifications */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Award className="text-emerald-400" size={24} /> Technical Skills
            </h2>
            <div className="space-y-4">
              {skillGroups.map((group) => (
                <div key={group.id} className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 space-y-3">
                  <h3 className="font-semibold text-white">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((it) => (
                      <span key={it.name} className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-700/50">
                        {it.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="text-emerald-400" size={24} /> Certifications & Education
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 space-y-2">
                  <h3 className="font-semibold text-white">{cert.title}</h3>
                  <p className="text-xs font-mono text-emerald-400">{cert.issuer} • {cert.year}</p>
                  <p className="text-xs text-slate-400">{cert.description}</p>
                </div>
              ))}
              <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 space-y-2">
                <h3 className="font-semibold text-white">{education.degree}</h3>
                <p className="text-xs font-mono text-emerald-400">{education.school} ({education.period})</p>
                <p className="text-xs text-slate-400">GPA: {education.gpa}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

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