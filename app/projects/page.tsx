import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Student Web & Mobile System Support",
      role: "System Administrator / IT Support",
      description:
        "Provided full technical support for E-Student systems including login issues, grade submission, student registration, document printing, and system navigation.",
      skills: ["System Administration", "IT Support", "E-Learning Systems", "User Training"],
      period: "2024 - Present",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <circle cx="19" cy="11" r="4" />
        </svg>
      )
    },
    {
      title: "Instructor & Staff Training Program",
      role: "Instructor Trainer",
      description:
        "Delivered hands-on training sessions for instructors and administrative staff on course management, grade submission, and student registration workflows.",
      skills: ["Instructor Training", "User Manuals", "Academic Systems"],
      period: "2024",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      )
    },
    {
      title: "System Testing & QA Collaboration",
      role: "Requirements & QA Support",
      description:
        "Collected requirements and feedback from users, reported bugs, and assisted developers in testing new and updated system modules.",
      skills: ["Requirements Gathering", "QA Testing", "Bug Reporting"],
      period: "2024",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: "React CRUD Application",
      role: "Front-End Developer (Junior)",
      description:
        "Built a React CRUD application that fetches data from an API, displays user data, and supports create, update, and delete operations.",
      skills: ["React", "JavaScript", "API Integration"],
      period: "2023",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      title: "Hardware & Software Maintenance",
      role: "IT Support Specialist",
      description:
        "Performed computer and mobile hardware/software maintenance, OS installation, troubleshooting, and performance optimization.",
      skills: ["Hardware Maintenance", "Windows OS", "System Optimization"],
      period: "2023",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    }
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 relative">
      {/* Page Header */}
      <div className="space-y-4 mb-20 border-b border-foreground/10 pb-8">
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground/60">
          <span className="text-cyan-600 dark:text-cyan-400">~/</span>workspace/projects_dir
        </div>
        <h1 className="text-4xl font-black tracking-tight sm:text-6xl text-foreground uppercase">
          PROJECTS & <span className="neon-text">IMPACT</span>
        </h1>
        <p className="max-w-2xl font-mono text-xs text-muted-foreground/50">
          &gt; ls -la --color=always
          <br />
          Displaying professional missions, system architectures, and engineering operations.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project, index) => {
          const scriptName = `deploy_${project.title.toLowerCase().replace(/[^a-z0-9]/g, "_")}.sh`;
          return (
            <div
              key={index}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-foreground/[0.01] dark:bg-foreground/[0.01] p-8 shadow-sm transition-all duration-500 hover:border-cyan-500/30 hover:bg-cyan-500/[0.01] glass-dark"
            >
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header elements inside card */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-115 transition-transform duration-500 shadow-sm border border-white/5">
                    {project.icon}
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground/40 bg-foreground/5 px-2.5 py-1 rounded-md border border-white/5">
                    {project.period}
                  </span>
                </div>

                {/* Info titles */}
                <h2 className="text-2xl font-bold mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-tight tracking-tight">
                  {project.title}
                </h2>

                <p className="text-[10px] font-mono font-bold text-purple-600 dark:text-purple-400 mb-4 uppercase tracking-wider">
                  // {project.role}
                </p>

                <p className="text-muted-foreground/80 leading-relaxed text-sm mb-8">
                  {project.description}
                </p>
              </div>

              {/* Technologies as Comment tags */}
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-6 border-t border-white/5 font-mono text-[11px] text-muted-foreground/45">
                {project.skills.map((skill) => (
                  <span key={skill} className="hover:text-cyan-400 transition-colors">
                    // {skill}
                  </span>
                ))}
              </div>

              {/* INTERACTIVE MOCK SHELL HOVER OVERLAY */}
              <div className="absolute inset-0 bg-background/98 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col font-mono text-xs text-muted-foreground/90 justify-between pointer-events-none group-hover:pointer-events-auto border border-cyan-500/20 rounded-2xl z-20">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[9px] opacity-35 tracking-wider font-mono">{scriptName}</span>
                  </div>
                  <p><span className="text-cyan-600 dark:text-cyan-400">guest@tsg:~$</span> ./{scriptName}</p>
                  <p className="text-green-500/80 font-semibold">[INFO] Initializing system stack...</p>
                  <p className="text-cyan-500/80">[INFO] Authenticating role: {project.role}</p>
                  <p className="text-purple-400/90">[OK] Compiling dependency: {project.skills[0]}</p>
                  <p className="text-green-400 font-semibold">[SUCCESS] Sandbox initialized at port :8080</p>
                </div>
                <div className="flex justify-between items-center border-t border-white/5 pt-2 mt-2">
                  <span className="text-[10px] text-cyan-500 dark:text-cyan-400 font-bold uppercase tracking-widest">STATUS: SYSTEM_ACTIVE</span>
                  <span className="animate-blink text-cyan-600 dark:text-cyan-400 text-sm font-black font-mono">_</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Let's build together Section */}
      <div className="mt-32 glass-dark border border-white/10 rounded-2xl overflow-hidden group">
        {/* Window Header */}
        <div className="bg-foreground/5 px-5 py-3 border-b border-white/5 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="font-mono text-[10px] text-muted-foreground/40 uppercase tracking-widest">sys_connect.exe</span>
        </div>

        <div className="p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <h3 className="text-2xl sm:text-3xl font-black mb-4 uppercase tracking-tight">
            Let&apos;s build <span className="neon-text">something premium</span>
          </h3>
          <p className="text-muted-foreground/70 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            Have a project in mind or need deep system administration and web expertise? I&apos;m ready to establish connection.
          </p>

          <Link
            href="/contact"
            className="group inline-flex h-12 items-center justify-center rounded-xl bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-700 hover:dark:bg-cyan-600 px-8 text-xs font-bold text-white transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-cyan-500/10 font-mono tracking-wider"
          >
            ESTABLISH CONNECTION
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
