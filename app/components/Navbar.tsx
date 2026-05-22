"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="glass sticky top-0 z-50 border-b border-white/5 dark:border-white/5 bg-background/60 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-mono text-xl font-extrabold tracking-tighter text-foreground hover:opacity-80 transition-opacity">
          <span className="text-cyan-600 dark:text-cyan-400">~$/</span>TSG
          <span className="animate-blink font-bold text-purple-500">_</span>
        </Link>

        <div className="flex items-center gap-6">
          {/* Desktop navigation */}
          <ul className="hidden sm:flex items-center gap-6 sm:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-mono text-xs font-bold uppercase tracking-widest transition-all relative py-1 px-2 flex items-center gap-1 ${
                      isActive
                        ? "text-cyan-600 dark:text-cyan-400"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <span className="text-cyan-600 dark:text-cyan-400 select-none text-[10px]">~/</span>
                    )}
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile menu button */}
          <button
            className="sm:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Mobile navigation */}
          {menuOpen && (
            <ul className="flex flex-col bg-background/90 backdrop-blur-md absolute top-full left-0 w-full p-4 sm:hidden">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href} className="mb-2">
                    <Link
                      href={link.href}
                      className={`font-mono text-sm font-bold uppercase tracking-widest transition-all py-2 px-2 flex items-center gap-1 ${
                        isActive
                          ? "text-cyan-600 dark:text-cyan-400"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {isActive && (
                        <span className="text-cyan-600 dark:text-cyan-400 select-none text-[10px]">~/</span>
                      )}
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
          <div className="h-5 w-px bg-border/40 hidden sm:block" />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

