import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      {/* HERO */}
      <section className="flex flex-col items-center gap-10 sm:flex-row sm:items-start lg:gap-16">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-zinc-200 to-zinc-400 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 dark:from-zinc-700 dark:to-zinc-900" />
          <Image
            src="/profile.jpg"
            alt="Temesgen Sisay"
            width={180}
            height={180}
            className="relative rounded-full border border-border shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
            priority
          />
        </div>

        <div className="flex-1 space-y-6 text-center sm:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-gradient">
            Temesgen Sisay Gezahagn
          </h1>

          <p className="text-xl font-medium text-muted-foreground">
            System Administrator | IT Support | Instructor Trainer
          </p>

          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Experienced IT professional with expertise in E-Student systems, 
            technical support, and training. Dedicated to bridging the gap 
            between complex technology and user empowerment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start pt-4">
            <Link
              href="/projects"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-all hover:scale-105 active:scale-95"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background px-8 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95"
            >
              Contact Me
            </Link>
            <a
              href="/Temesgen-Sisay-CV-New.pdf"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mt-32">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Technical Skills</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            "System Administration",
            "IT Support",
            "E-Student Systems",
            "React",
            "Next.js",
            "Tailwind CSS",
            "MySQL",
            "Java",
            "PHP",
            "C++",
            "Database Management",
            "Windows OS",
            "Hardware & Software Maintenance",
            "Instructor Training",
            "Customer Support",
          ].map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-md border border-border bg-card px-3 py-1 text-sm font-medium text-foreground shadow-sm transition-all hover:border-primary hover:text-primary"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SUMMARY */}
      <section className="mt-32 mb-16">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Latest Experience</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                System Administrator & IT Support
              </h3>
              <p className="text-lg font-medium text-muted-foreground">
                Hawi Software Solution
              </p>
            </div>
            <p className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
              Jan 2024 – Present | Adama
            </p>
          </div>

          <ul className="mt-6 grid gap-3 text-muted-foreground sm:grid-cols-2">
            {[
              "Supported E-Student web & mobile systems",
              "Handled system administration & backups",
              "Trained instructors and staff",
              "Collected requirements for developers",
              "Participated in system testing & QA",
              "Managed user access control",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

