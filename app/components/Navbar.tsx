"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="glass">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-2xl font-black tracking-tighter group">
          TSG<span className="text-primary transition-colors group-hover:text-zinc-400">.</span>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 sm:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-primary ${
                    pathname === link.href
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="h-5 w-px bg-border/60 hidden sm:block" />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

