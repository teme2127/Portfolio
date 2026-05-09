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
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="19" cy="11" r="4"/></svg>
    },
    {
      title: "Instructor & Staff Training Program",
      role: "Instructor Trainer",
      description:
        "Delivered hands-on training sessions for instructors and administrative staff on course management, grade submission, and student registration workflows.",
      skills: ["Instructor Training", "User Manuals", "Academic Systems"],
      period: "2024",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
    },
    {
      title: "System Testing & QA Collaboration",
      role: "Requirements & QA Support",
      description:
        "Collected requirements and feedback from users, reported bugs, and assisted developers in testing new and updated system modules.",
      skills: ["Requirements Gathering", "QA Testing", "Bug Reporting"],
      period: "2024",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    },
    {
      title: "React CRUD Application",
      role: "Front-End Developer (Junior)",
      description:
        "Built a React CRUD application that fetches data from an API, displays user data, and supports create, update, and delete operations.",
      skills: ["React", "JavaScript", "API Integration"],
      period: "2023",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    },
    {
      title: "Hardware & Software Maintenance",
      role: "IT Support Specialist",
      description:
        "Performed computer and mobile hardware/software maintenance, OS installation, troubleshooting, and performance optimization.",
      skills: ["Hardware Maintenance", "Windows OS", "System Optimization"],
      period: "2023",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gradient">
          Projects & Impact
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
          A selection of professional experience and technical projects demonstrating my expertise in 
          system administration, IT support, and user empowerment.
        </p>
      </div>

      <div className="mt-20 grid gap-8 sm:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-2xl hover:border-primary/20"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10 translate-x-1/2 -translate-y-1/2" />
            
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-sm">
                {project.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-muted px-3 py-1.5 rounded-lg border border-border/50">
                {project.period}
              </span>
            </div>
            
            <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
              {project.title}
            </h2>

            <p className="text-sm font-semibold text-primary/80 mb-4 uppercase tracking-wide">
              {project.role}
            </p>

            <p className="text-muted-foreground flex-grow mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-border/50">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-secondary/50 border border-border/50 px-3 py-1 text-[11px] font-bold text-secondary-foreground transition-colors hover:border-primary/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 glass-card p-12 rounded-3xl text-center border-primary/10">
        <h3 className="text-2xl font-bold mb-4">Let&apos;s build something together</h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Have a project in mind or need technical expertise? I&apos;m always open to discussing new opportunities.
        </p>
        <Link
          href="/contact"
          className="group inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 text-sm font-bold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95"
        >
          Get In Touch
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-3 transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
      </div>
    </div>
  );
}

