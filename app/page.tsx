"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Code2, MonitorPlay, Zap, Download, Share2, Layers } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export default function LandingPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-bg-primary text-zinc-900 dark:text-text-main font-sans transition-colors duration-300">
      <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:bg-bg-secondary dark:border-border-dark">
        <div className="flex items-center gap-2">
          <Code2 className="w-6 h-6 text-accent" />
          <span className="text-xl font-bold tracking-tight">Livepen</span>
        </div>
        <nav className="flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-accent transition-colors">Features</Link>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-border-dark transition-colors"
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-32">
          
          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                Code freely. <br />
                <span className="text-accent">
                  See it instantly.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 dark:text-text-muted max-w-2xl mx-auto mb-10">
                A modern, lightning-fast playground for HTML, CSS, and JavaScript. 
                Write, test, and export your front-end ideas right in your browser.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/playground"
                  className="px-8 py-4 bg-accent hover:opacity-90 text-white font-semibold rounded-lg shadow-lg shadow-accent/25 transition-all w-full sm:w-auto text-lg"
                >
                  Start Coding Now
                </Link>
                <Link
                  href="#features"
                  className="px-8 py-4 bg-zinc-200 dark:bg-bg-tertiary hover:bg-zinc-300 dark:hover:bg-border-dark text-zinc-900 dark:text-text-main font-semibold rounded-lg transition-all w-full sm:w-auto text-lg"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-zinc-100 dark:bg-bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need</h2>
              <p className="text-zinc-600 dark:text-text-muted">A complete toolbelt for focused front-end prototyping.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<MonitorPlay className="w-6 h-6 text-accent" />}
                title="Instant Preview"
                description="Watch your code come to life in real-time as you type, thanks to debounced live rendering."
              />
              <FeatureCard 
                icon={<Code2 className="w-6 h-6 text-blue-500" />}
                title="Monaco Editor"
                description="Powered by the same technology as VS Code. Enjoy rich IntelliSense, syntax highlighting, and formatting."
              />
              <FeatureCard 
                icon={<Layers className="w-6 h-6 text-green-500" />}
                title="Resizable Panels"
                description="Customize your workspace with fully resizable and collapsible editor and preview panels."
              />
              <FeatureCard 
                icon={<Share2 className="w-6 h-6 text-purple-500" />}
                title="Shareable Links"
                description="Encode your entire project state into the URL and share it instantly with anyone."
              />
              <FeatureCard 
                icon={<Download className="w-6 h-6 text-amber-500" />}
                title="Export as ZIP"
                description="Take your code with you. Download your project as a clean, ready-to-deploy zip file."
              />
              <FeatureCard 
                icon={<Zap className="w-6 h-6 text-pink-500" />}
                title="Local Auto-Save"
                description="Never lose your work. Your code is automatically persisted to your browser's local storage."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center border-t border-zinc-200 dark:border-border-dark text-zinc-500 dark:text-text-muted">
        <p>Built for focused coding. &copy; {new Date().getFullYear()} Livepen</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 rounded-2xl bg-white dark:bg-bg-tertiary border border-zinc-200 dark:border-border-dark shadow-sm"
    >
      <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-border-dark flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-zinc-600 dark:text-text-muted line-clamp-3">{description}</p>
    </motion.div>
  );
}
