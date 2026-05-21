export default function ContactPage() {
  const contactMethods = [
    {
      title: "Email Connection",
      value: "temesgensisay16@gmail.com",
      href: "mailto:temesgensisay16@gmail.com",
      description: "For professional inquiries, project consultations, and system administration support.",
      accent: "cyan",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      )
    },
    {
      title: "Direct Voice Link",
      value: "+251 941832246",
      href: "tel:+251941832246",
      description: "Direct telecommunication link for urgent server issues, support triage, and quick chats.",
      accent: "purple",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )
    },
    {
      title: "LinkedIn Handshake",
      value: "Temesgen Sisay",
      href: "https://linkedin.com/in/temesgen-sisay-m21m27",
      description: "Connect with me to view endorsements, system deployment histories, and professional network logs.",
      accent: "pink",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    }
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 relative">
      {/* Background Drift Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-cyan-500/5 -z-10 blur-3xl rounded-full pointer-events-none animate-pulse-glow" />

      {/* Page Header */}
      <div className="space-y-4 mb-16 border-b border-foreground/10 pb-8">
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground/60">
          <span className="text-cyan-600 dark:text-cyan-400">~/</span>workspace/contact_dir
        </div>
        <h1 className="text-4xl font-black tracking-tight sm:text-6xl text-foreground uppercase">
          ESTABLISH <span className="neon-text">CONNECTION</span>
        </h1>
        <p className="max-w-2xl font-mono text-xs text-muted-foreground/50">
          &gt; ping -c 4 temesgensisay.com
          <br />
          Resolving network handshake pathways to exchange direct transmissions.
        </p>
      </div>

      {/* Secure Connection Simulation Terminal */}
      <div className="glass-dark border border-white/10 rounded-2xl overflow-hidden group mb-16 shadow-lg">
        {/* Mock Window Header */}
        <div className="bg-foreground/5 px-5 py-3 border-b border-white/5 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="font-mono text-[10px] text-muted-foreground/40 uppercase tracking-widest">secure_tunnel.exe</span>
        </div>

        <div className="p-6 sm:p-8 font-mono text-xs text-muted-foreground/75 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">guest@tsg:~$</span>
            <span>ssh -T temesgen@tunnel.sys.net</span>
          </div>
          <p className="text-yellow-500/90 font-semibold">[CONNECT] Establishing handshake protocol... RSA key verified.</p>
          <p className="text-purple-400">[CIPHER] TLS_AES_256_GCM_SHA384 active. Tunnel established.</p>
          <p className="text-green-500 font-semibold">[TUNNEL] Connection secure. Route ready for data packets.</p>
          <div className="flex items-center gap-2 text-foreground animate-pulse mt-2">
            <span>&gt; Select communication method to transmit data packets:</span>
            <span className="w-1.5 h-3.5 bg-cyan-500 inline-block animate-blink" />
          </div>
        </div>
      </div>

      {/* Grid of Contact Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {contactMethods.map((method) => {
          const accentColor = 
            method.accent === "cyan" 
              ? "group-hover:border-cyan-500/30 group-hover:text-cyan-400" 
              : method.accent === "purple" 
              ? "group-hover:border-purple-500/30 group-hover:text-purple-400" 
              : "group-hover:border-pink-500/30 group-hover:text-pink-400";
              
          const iconBg = 
            method.accent === "cyan" 
              ? "text-cyan-600 dark:text-cyan-400 bg-cyan-500/5 border-cyan-500/10" 
              : method.accent === "purple" 
              ? "text-purple-600 dark:text-purple-400 bg-purple-500/5 border-purple-500/10" 
              : "text-pink-600 dark:text-pink-400 bg-pink-500/5 border-pink-500/10";

          return (
            <a
              key={method.title}
              href={method.href}
              target={method.title === "LinkedIn Handshake" ? "_blank" : undefined}
              rel={method.title === "LinkedIn Handshake" ? "noopener noreferrer" : undefined}
              className={`group relative flex flex-col items-center text-center p-8 rounded-2xl border border-white/5 bg-foreground/[0.01] glass-dark shadow-sm transition-all duration-300 hover:-translate-y-1 ${accentColor}`}
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-foreground/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner border ${iconBg}`}>
                {method.icon}
              </div>

              <h2 className="text-lg font-bold mb-3 tracking-tight transition-colors">
                {method.title}
              </h2>
              <p className="text-xs text-muted-foreground/70 mb-6 leading-relaxed flex-grow">
                {method.description}
              </p>
              <p className="font-mono text-xs break-all bg-foreground/5 px-4 py-2 rounded-lg border border-white/5 w-full font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                {method.value}
              </p>
            </a>
          );
        })}
      </div>

      {/* Location Base Terminal Box */}
      <div className="mt-20 glass-dark border border-white/10 rounded-2xl overflow-hidden group shadow-lg">
        {/* Mock Window Header */}
        <div className="bg-foreground/5 px-5 py-3 border-b border-white/5 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="font-mono text-[10px] text-muted-foreground/40 uppercase tracking-widest">sys_location.exe</span>
        </div>

        <div className="p-10 flex flex-col items-center justify-center text-center relative overflow-hidden gap-4">
          <div className="absolute inset-0 bg-cyan-500/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">Current Base</h2>
          
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-foreground/[0.02] border border-white/5 shadow-inner text-sm font-semibold font-mono tracking-wider">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            ADAMA, ETHIOPIA
          </div>
          
          <p className="text-xs text-muted-foreground/75 max-w-sm font-mono leading-relaxed mt-2">
            &gt; Remote connection active. Available for onsite server deployments in Ethiopia and global secure remote collaboration.
          </p>
        </div>
      </div>
    </div>
  );
}
