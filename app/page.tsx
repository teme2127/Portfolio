import Image from "next/image";
// import { contact }  from "./contact"
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="mx-auto max-w-5xl px-6 py-24">
        {/* HERO */}
        <section className="flex flex-col items-center gap-10 sm:flex-row sm:items-start">
          <Image
            src="/profile.png" // add your photo in /public
            alt="Temesgen Sisay"
            width={160}
            height={160}
            className="rounded-full border shadow"
            priority
          />

          <div>
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
              Temesgen Sisay Gezahagn
            </h1>

            <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
              System Administrator | IT Support | Instructor Trainer | Customer
              Support Specialist
            </p>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
              Experienced IT professional with hands-on expertise in E-Student
              Web & Mobile Systems, system administration, user training, and
              technical support. Skilled in supporting academic systems,
              troubleshooting issues, training instructors, and collaborating
              with developers for system improvement.
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/projects"
                className="rounded-full bg-black px-6 py-3 text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                View Projects
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-black px-6 py-3 transition hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
              >
                Contact Me

                
              </Link>
              
              <a
                href="/Temesgen-Sisay-CV.pdf"
                className="rounded-full border px-6 py-3 text-sm transition hover:bg-zinc-100 dark:hover:bg-zinc-900"
              >
                Download CV
              </a>
            </div>
          </div>
        </section>
        

        {/* SKILLS */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-black dark:text-white">
            Technical Skills
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
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
                className="rounded-full bg-zinc-200 px-4 py-2 text-sm text-black dark:bg-zinc-800 dark:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SUMMARY */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-black dark:text-white">
            Experience
          </h2>

          <div className="mt-6 rounded-xl border bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-black">
            <h3 className="font-semibold text-lg">
              System Administrator & IT Support – Hawi Software Solution
            </h3>
            <p className="text-sm text-zinc-500">Jan 2024 – Present | Adama</p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-600 dark:text-zinc-400">
              <li>Supported E-Student web & mobile systems</li>
              <li>Handled system administration, backups, and access control</li>
              <li>Trained instructors and staff on grade submission & registration</li>
              <li>Collected requirements and feedback for developers</li>
              <li>Participated in system testing and QA</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
