export default function ContactPage() {
  const contactMethods = [
    {
      title: "Email",
      value: "temesgensisay16@gmail.com",
      href: "mailto:temesgensisay16@gmail.com",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
      description: "For professional inquiries and support"
    },
    {
      title: "Phone",
      value: "+251 941832246",
      href: "tel:+251941832246",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
      description: "Direct contact for urgent matters"
    },
    {
      title: "LinkedIn",
      value: "Temesgen Sisay",
      href: "https://linkedin.com/in/temesgen-sisay-m21m27",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
      description: "Connect with me professionally"
    }
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/5 -z-10 blur-3xl rounded-full" />
      
      <div className="text-center space-y-6 mb-20">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gradient">
          Let&apos;s Connect
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Whether you have a question about IT infrastructure, need system support, 
          or want to discuss a potential project, I&apos;m here to help.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {contactMethods.map((method) => (
          <a
            key={method.title}
            href={method.href}
            target={method.title === "LinkedIn" ? "_blank" : undefined}
            rel={method.title === "LinkedIn" ? "noopener noreferrer" : undefined}
            className="group relative flex flex-col items-center text-center p-10 rounded-3xl border border-border bg-card shadow-sm transition-all hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform shadow-inner">
              {method.icon}
            </div>
            
            <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              {method.title}
            </h2>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {method.description}
            </p>
            <p className="text-sm font-bold text-primary break-all bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
              {method.value}
            </p>
          </a>
        ))}
      </div>

      <div className="mt-32 glass-card p-10 sm:p-16 rounded-[2.5rem] text-center relative overflow-hidden">
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <h2 className="text-3xl font-bold mb-6">Current Base</h2>
        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-background border border-border shadow-sm text-lg font-semibold">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            Adama, Ethiopia
          </div>
          <p className="text-muted-foreground max-w-sm">
            Available for onsite projects in Ethiopia and remote collaborations worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}

