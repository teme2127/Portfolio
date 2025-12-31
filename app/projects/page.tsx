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
        "Troubleshooting",
      ],
    },
    {
      title: "Instructor & Staff Training Program",
      role: "Instructor Trainer",
      description:
        "Delivered hands-on training sessions for instructors and administrative staff on course management, grade submission, and student registration workflows.",
      skills: [
        "Instructor Training",
        "User Manuals",
        "Communication",
        "Academic Systems",
      ],
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
        "User Feedback",
      ],
    },
    {
      title: "React CRUD Application",
      role: "Front-End Developer (Junior)",
      description:
        "Built a React CRUD application that fetches data from an API, displays user data, and supports create, update, and delete operations.",
      skills: ["React", "JavaScript", "API Integration", "UI Design"],
    },
    {
      title: "Hardware & Software Maintenance",
      role: "IT Support Specialist",
      description:
        "Performed computer and mobile hardware/software maintenance, OS installation, troubleshooting, and performance optimization.",
      skills: [
        "Hardware Maintenance",
        "Windows OS",
        "Software Installation",
        "System Optimization",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Projects & Experience
        </h1>

        <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400">
          A selection of projects and professional experience demonstrating my
          skills in system administration, IT support, training, and front-end
          development.
        </p>

        {/* PROJECT LIST */}
        <div className="mt-12 space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-black"
            >
              <h2 className="text-xl font-semibold text-black dark:text-white">
                {project.title}
              </h2>

              <p className="mt-1 text-sm font-medium text-zinc-500">
                {project.role}
              </p>

              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>

              {/* SKILLS */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-zinc-200 px-3 py-1 text-xs text-black dark:bg-zinc-800 dark:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
