import Link from "next/link";

const skills = [
  "System Administration", "IT Support", "E-Student Systems", "Windows OS",
  "Hardware Maintenance", "React", "Next.js", "Tailwind CSS", "MySQL",
  "Java", "PHP", "C++", "Instructor Training", "System Testing & QA",
];

export function Resume() {
  return (
    <article className="glass-dark rounded-2xl border border-border p-6 sm:p-10">
      <header className="space-y-3 border-b border-border pb-6">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Resume</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Temesgen Sisay</h1>
        <p className="text-lg text-muted-foreground">System Administrator &amp; IT Specialist</p>
        <p className="text-sm text-muted-foreground">Adama, Ethiopia</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="mailto:temesgensisay16@gmail.com" className="break-all text-primary hover:underline">temesgensisay16@gmail.com</a>
          <a href="tel:+251941832246" className="text-primary hover:underline">+251 941832246</a>
        </div>
      </header>

      <section className="mt-6 space-y-3">
        <h2 className="text-xl font-semibold">Profile</h2>
        <p className="leading-relaxed text-muted-foreground">
          System administration and IT support professional with experience supporting
          E-Student infrastructure, training instructors, troubleshooting hardware and
          software, and collaborating on system testing and web development.
        </p>
      </section>

      <section className="mt-6 space-y-3">
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li key={skill} className="rounded-lg bg-foreground/5 px-3 py-2 text-sm">{skill}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6 space-y-3">
        <h2 className="text-xl font-semibold">Experience &amp; Projects</h2>
        <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
          <li>E-Student web and mobile system support: registration, grade submission, login troubleshooting, and user support.</li>
          <li>Instructor and staff training on academic system workflows.</li>
          <li>Requirements gathering, bug reporting, and system testing with developers.</li>
          <li>React CRUD application development and hardware/software maintenance.</li>
        </ul>
        <Link href="/projects" className="inline-block text-primary hover:underline">View project details</Link>
      </section>

      <footer className="mt-8 flex flex-wrap gap-4 border-t border-border pt-6 text-sm">
        <a href="https://github.com/teme2127" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/temesgen-sisay-m21m27" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a>
        <a href="/Temesgen-Sisay-CV-New.pdf" download className="text-primary hover:underline">Download CV</a>
      </footer>
    </article>
  );
}
