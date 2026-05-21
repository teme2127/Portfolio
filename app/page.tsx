import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const skillGroups = [
    {
      title: "Core Infrastructure",
      category: "sys_admin",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 dark:text-cyan-400"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
      ),
      skills: ["System Administration", "IT Support", "E-Student Systems", "Windows OS", "Hardware Maintenance"]
    },
    {
      title: "Modern Development",
      category: "frontend_backend",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 dark:text-purple-400"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      ),
      skills: ["React", "Next.js", "Tailwind CSS", "MySQL", "Java", "PHP", "C++"]
    },
    {
      title: "Specialized Training",
      category: "management_qa",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600 dark:text-pink-400"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
      ),
      skills: ["Instructor Training", "Customer Support", "Database Management", "System Testing & QA"]
    }
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 relative overflow-hidden">
      {/* HERO */}
      <section className="flex flex-col-reverse items-center gap-12 sm:flex-row sm:items-start lg:gap-16">
        <div className="flex-1 space-y-6 text-center sm:text-left">
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-semibold tracking-wider uppercase border border-cyan-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            SYSTEM ACCESS GRANTED
          </div>

          {/* Heading with Mono workspace directory */}
          <div className="space-y-2">
            <div className="flex items-center justify-center sm:justify-start gap-2 font-mono text-xs text-muted-foreground/60">
              <span className="text-cyan-600 dark:text-cyan-400">~/</span>workspace/home
            </div>
            <h1 className="text-5xl font-black tracking-tighter sm:text-7xl lg:text-8xl text-foreground">
              TEMESGEN <br />
              <span className="neon-text">SISAY</span>
            </h1>
          </div>

          <p className="text-xl font-bold font-mono text-muted-foreground/80 max-w-xl">
            &gt; System Administrator & IT Specialist dedicated to building robust digital foundations.
          </p>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground/70">
            Expertise in E-Student infrastructure, high-availability networks, and instructor workflows. 
            Bridging the gap between complex backend architectures and seamless daily user experiences.
          </p>

          {/* Terminal Intro Shell Simulation */}
          <div className="glass-dark border border-white/5 rounded-2xl p-5 text-left font-mono text-xs text-muted-foreground/70 space-y-2 max-w-xl">
            <p><span className="text-cyan-600 dark:text-cyan-400">guest@tsg:~$</span> ./init_profile.sh</p>
            <p className="text-green-500">[OK] Fetching identity assets from Adama, Ethiopia...</p>
            <p className="text-purple-500">[OK] Mounting Hawi Software Solution E-Student systems...</p>
            <p className="text-foreground animate-pulse">&gt; Ready for collaboration. _</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start pt-4 font-mono">
            <Link
              href="/projects"
              className="group inline-flex h-12 items-center justify-center rounded-xl bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-700 hover:dark:bg-cyan-600 px-6 text-xs font-bold text-white transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-cyan-500/10"
            >
              EXPLORE PROJECTS
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-foreground/5 backdrop-blur-sm px-6 text-xs font-bold transition-all hover:bg-foreground/10 hover:border-purple-500/50 hover:scale-[1.02] active:scale-95"
            >
              CONTACT BASE
            </Link>
            <a
              href="/Temesgen-Sisay-CV-New.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-cyan-400 transition-colors px-2 py-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-y-0.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              GET CV.PDF
            </a>
          </div>
        </div>

        {/* Profile Image with Neon Shadow */}
        <div className="relative group animate-float">
          {/* Neon Glow Rings */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-20 blur-2xl transition duration-1000 group-hover:opacity-45" />
          <div className="relative">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-30 blur transition duration-1000 group-hover:opacity-80 group-hover:duration-200" />
            <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Temesgen Sisay"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mt-36">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-foreground/10 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground/60 mb-2">
              <span className="text-cyan-600 dark:text-cyan-400">~/</span>workspace/skills_dir
            </div>
            <h2 className="text-3xl font-black tracking-tighter uppercase sm:text-5xl">
              TECHNICAL <span className="neon-text">MASTERY</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-muted-foreground/40 max-w-xs md:text-right">
            &gt; ls -la --color=always
            <br />
            Audited infrastructure expertise & stack operations.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, idx) => (
            <div 
              key={idx} 
              className="glass-dark p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Corner accent glow */}
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="flex justify-between items-center mb-6">
                <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  {group.icon}
                </div>
                <span className="font-mono text-[9px] text-foreground/30 uppercase tracking-widest border border-white/5 px-2 py-0.5 rounded-full">
                  //{group.category}
                </span>
              </div>
              
              <h3 className="text-lg font-bold mb-4 tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{group.title}</h3>
              
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-lg border border-white/5 bg-foreground/5 px-2.5 py-1 font-mono text-[10px] text-muted-foreground transition-all hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SUMMARY */}
      <section className="mt-36 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-foreground/10 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground/60 mb-2">
              <span className="text-cyan-600 dark:text-cyan-400">~/</span>workspace/audit_logs
            </div>
            <h2 className="text-3xl font-black tracking-tighter uppercase sm:text-5xl">
              LATEST <span className="neon-text">IMPACT</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-muted-foreground/40 max-w-xs md:text-right">
            &gt; git log -n 1 --stat
            <br />
            Continuous integration of administration workflows.
          </p>
        </div>

        {/* Audit Log Terminal Frame */}
        <div className="glass-dark border border-white/10 rounded-2xl overflow-hidden group">
          {/* Mock Window Header */}
          <div className="bg-foreground/5 px-5 py-3 border-b border-white/5 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="font-mono text-[10px] text-muted-foreground/40 uppercase tracking-widest">sys_audit.exe</span>
          </div>

          <div className="p-6 sm:p-10 relative">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start border-b border-white/5 pb-8">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-mono text-[9px] font-bold uppercase tracking-wider">
                  ACTIVE_ROLE
                </div>
                <h3 className="text-2xl font-bold group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors sm:text-3xl tracking-tight">
                  System Administrator & IT Support
                </h3>
                <p className="text-lg font-semibold text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                  Hawi Software Solution
                </p>
              </div>
              <div className="text-left sm:text-right font-mono text-xs space-y-1">
                <p className="text-muted-foreground uppercase tracking-widest font-bold">
                  Jan 2024 – PRESENT
                </p>
                <p className="text-muted-foreground/60">Adama, Ethiopia</p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 text-muted-foreground sm:grid-cols-2">
              {[
                { text: "Supported E-Student web & mobile systems", icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 dark:text-cyan-400"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="19" cy="11" r="4"/></svg> },
                { text: "Handled system administration & backups", icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 dark:text-cyan-400"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg> },
                { text: "Trained instructors and staff", icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 dark:text-cyan-400"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> },
                { text: "Collected requirements for developers", icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 dark:text-cyan-400"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> },
                { text: "Participated in system testing & QA", icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 dark:text-cyan-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
                { text: "Managed user access control", icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 dark:text-cyan-400"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-foreground/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/[0.02] transition-all">
                  <div className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-sm shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-medium leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
