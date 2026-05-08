import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Student Web & Mobile System Support",
      role: "System Administrator / IT Support",
      description:
        "Provided full technical support for E-Student systems including login issues, grade submission, student registration, document printing, and system navigation.",
      skills: [
        "System Administration",
        "IT Support",
        "E-Learning Systems",
        "User Training",
      ],
      period: "2024 - Present"
    },
    {
      title: "Instructor & Staff Training Program",
      role: "Instructor Trainer",
      description:
        "Delivered hands-on training sessions for instructors and administrative staff on course management, grade submission, and student registration workflows.",
      skills: [
        "Instructor Training",
        "User Manuals",
        "Academic Systems",
      ],
      period: "2024"
    },
    {
      title: "System Testing & QA Collaboration",
      role: "Requirements & QA Support",
      description:
        "Collected requirements and feedback from users, reported bugs, and assisted developers in testing new and updated system modules.",
      skills: [
        "Requirements Gathering",
        "QA Testing",
        "Bug Reporting",
      ],
      period: "2024"
    },
    {
      title: "React CRUD Application",
      role: "Front-End Developer (Junior)",
      description:
        "Built a React CRUD application that fetches data from an API, displays user data, and supports create, update, and delete operations.",
      skills: ["React", "JavaScript", "API Integration"],
      period: "2023"
    },
    {
      title: "Hardware & Software Maintenance",
      role: "IT Support Specialist",
      description:
        "Performed computer and mobile hardware/software maintenance, OS installation, troubleshooting, and performance optimization.",
      skills: [
        "Hardware Maintenance",
        "Windows OS",
        "System Optimization",
      ],
      period: "2023"
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gradient">
          Projects & Experience
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          A selection of projects and professional experience demonstrating my
          skills in system administration, IT support, training, and development.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-primary/60 bg-primary/5 px-2 py-1 rounded">
                {project.period}
              </span>
            </div>
            
            <h2 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
              {project.title}
            </h2>

            <p className="text-sm font-medium text-muted-foreground mb-4">
              {project.role}
            </p>

            <p className="text-sm text-muted-foreground flex-grow mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-secondary px-3 py-0.5 text-[10px] font-semibold text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-muted-foreground mb-6">Want to see more or discuss a project?</p>
        <Link
          href="/contact"
          className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-all hover:scale-105 active:scale-95"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
}

