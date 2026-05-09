import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const skillGroups = [
    {
      title: "Core Infrastructure",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
      ),
      skills: ["System Administration", "IT Support", "E-Student Systems", "Windows OS", "Hardware Maintenance"]
    },
    {
      title: "Modern Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      ),
      skills: ["React", "Next.js", "Tailwind CSS", "MySQL", "Java", "PHP", "C++"]
    },
    {
      title: "Specialized Training",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
      ),
      skills: ["Instructor Training", "Customer Support", "Database Management", "System Testing & QA"]
    }
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10 blur-3xl opacity-50" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />

      {/* HERO */}
      <section className="flex flex-col items-center gap-10 sm:flex-row sm:items-start lg:gap-16">
        <div className="relative group animate-float">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 opacity-0 blur-2xl transition duration-1000 group-hover:opacity-100" />
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-zinc-200 to-zinc-400 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 dark:from-zinc-700 dark:to-zinc-900" />
            <Image
              src="/profile.jpg"
              alt="Temesgen Sisay"
              width={200}
              height={200}
              className="relative rounded-full border-2 border-white/50 dark:border-zinc-800 shadow-2xl transition-all duration-500 group-hover:scale-[1.02] grayscale-[0.5] group-hover:grayscale-0"
              priority
            />
          </div>
        </div>

        <div className="flex-1 space-y-6 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-gradient">
            Temesgen Sisay
          </h1>

          <p className="text-xl font-semibold text-muted-foreground max-w-xl">
            System Administrator & IT Specialist dedicated to building robust digital foundations.
          </p>

          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground/80">
            Expertise in E-Student systems, technical support, and instructor training. 
            Bridging the gap between complex infrastructure and seamless user experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start pt-4">
            <Link
              href="/projects"
              className="group inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground transition-all hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-95"
            >
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background/50 backdrop-blur-sm px-8 text-sm font-bold transition-all hover:bg-accent hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Contact Me
            </Link>
            <a
              href="/Temesgen-Sisay-CV-New.pdf"
              className="group inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors px-2 py-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-y-1"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mt-32">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Technical Mastery</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-lg border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-foreground transition-all hover:border-primary hover:bg-primary/5"
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
      <section className="mt-32 mb-16">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Latest Impact</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        </div>

        <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-sm transition-all hover:shadow-2xl hover:border-primary/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
          
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                Current Role
              </div>
              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors sm:text-3xl">
                System Administrator & IT Support
              </h3>
              <p className="text-xl font-medium text-muted-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Hawi Software Solution
              </p>
            </div>
            <div className="text-right sm:text-right">
              <p className="text-sm font-bold text-muted-foreground bg-muted px-4 py-2 rounded-xl inline-block border border-border/50">
                Jan 2024 – Present
              </p>
              <p className="text-sm font-medium text-muted-foreground mt-2 px-4">Adama, Ethiopia</p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 text-muted-foreground sm:grid-cols-2 lg:gap-6">
            {[
              { text: "Supported E-Student web & mobile systems", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="19" cy="11" r="4"/></svg> },
              { text: "Handled system administration & backups", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg> },
              { text: "Trained instructors and staff", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> },
              { text: "Collected requirements for developers", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> },
              { text: "Participated in system testing & QA", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
              { text: "Managed user access control", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg> },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-transparent hover:border-border hover:bg-muted/50 transition-all">
                <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center text-primary shadow-sm">
                  {item.icon}
                </div>
                <span className="text-sm font-medium leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


