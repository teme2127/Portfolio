import "./globals.css";
import { ThemeProvider } from "next-themes";
import { JetBrains_Mono, Outfit } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
    <Head><meta name="viewport" content="width=device-width, initial-scale=1" /></Head>
      <body className={`${outfit.variable} ${jetbrainsMono.variable} font-sans min-h-screen flex flex-col antialiased relative selection:bg-blue-500/30 selection:text-blue-200 dark:selection:bg-cyan-500/20`}>
        {/* Background Visual Effects */}
        <div className="absolute inset-0 -z-50 overflow-hidden pointer-events-none bg-background">
          {/* Animated Neon Light Blobs */}
          <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-blue-600/10 dark:bg-cyan-500/5 rounded-full blur-[120px] animate-drift pointer-events-none" />
          <div className="absolute bottom-[20%] right-[-10%] w-96 h-96 bg-purple-600/10 dark:bg-purple-500/5 rounded-full blur-[120px] animate-drift-slow pointer-events-none" style={{ animationDelay: "-8s" }} />
          
          {/* Cyber Grid Mask */}
          <div className="absolute inset-0 cyber-grid opacity-20 dark:opacity-30" />
          
          {/* Noise Grain Mask */}
          <div className="absolute inset-0 noise-overlay mix-blend-overlay opacity-5 dark:opacity-3" />
        </div>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Navbar />
          <main className="flex-grow relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

