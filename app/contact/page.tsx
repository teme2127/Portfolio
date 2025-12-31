import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Contact Me
        </h1>

        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Feel free to reach out for IT support, system administration, training,
          or collaboration opportunities.
        </p>

        {/* CONTACT CARDS */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {/* EMAIL */}
          <a
            href="mailto:temesgensisay16@gmail.com"
            className="rounded-xl border bg-white p-6 text-center shadow transition hover:shadow-md dark:border-zinc-800 dark:bg-black"
          >
            <p className="text-lg font-semibold">Email</p>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              temesgensisay16@gmail.com
            </p>
          </a>

          {/* PHONE */}
          <a
            href="tel:+251941832246/+251"
            className="rounded-xl border bg-white p-6 text-center shadow transition hover:shadow-md dark:border-zinc-800 dark:bg-black"
          >
            <p className="text-lg font-semibold">Phone</p>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              +251 941832246/
              +251906233152
            </p>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/in/temesgen-sisay-m21m27"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border bg-white p-6 text-center shadow transition hover:shadow-md dark:border-zinc-800 dark:bg-black"
          >
            <p className="text-lg font-semibold">LinkedIn</p>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              linkedin.com/in/temesgen-sisay-m21m27
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
