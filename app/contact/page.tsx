export default function ContactPage() {
  const contactMethods = [
    {
      title: "Email",
      value: "temesgensisay16@gmail.com",
      href: "mailto:temesgensisay16@gmail.com",
      icon: "✉️",
      description: "For professional inquiries and support"
    },
    {
      title: "Phone",
      value: "+251 941832246",
      href: "tel:+251941832246",
      icon: "📞",
      description: "Direct contact for urgent matters"
    },
    {
      title: "LinkedIn",
      value: "Temesgen Sisay",
      href: "https://linkedin.com/in/temesgen-sisay-m21m27",
      icon: "💼",
      description: "Connect with me professionally"
    }
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gradient">
          Get in Touch
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Feel free to reach out for IT support, system administration, training,
          or collaboration opportunities. I'm always open to new challenges.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contactMethods.map((method) => (
          <a
            key={method.title}
            href={method.href}
            target={method.title === "LinkedIn" ? "_blank" : undefined}
            rel={method.title === "LinkedIn" ? "noopener noreferrer" : undefined}
            className="group relative flex flex-col items-center text-center p-8 rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/50 hover:-translate-y-1"
          >
            <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">
              {method.icon}
            </span>
            <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {method.title}
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              {method.description}
            </p>
            <p className="text-sm font-semibold text-primary break-all">
              {method.value}
            </p>
          </a>
        ))}
      </div>

      <div className="mt-24 rounded-2xl border border-border bg-muted/30 p-8 sm:p-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Location</h2>
        <p className="text-lg text-muted-foreground">
          Currently based in <span className="font-semibold text-foreground">Adama, Ethiopia</span>
        </p>
        <p className="mt-2 text-muted-foreground">Available for remote work worldwide</p>
      </div>
    </div>
  );
}

