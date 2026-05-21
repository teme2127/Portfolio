import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/10 bg-background/40 backdrop-blur-sm relative z-10">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest text-center sm:text-left">
            © {new Date().getFullYear()} Temesgen Sisay <span className="text-purple-500">•</span> Crafted with Precision
          </p>
          <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
