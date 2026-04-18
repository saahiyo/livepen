"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Code2, MonitorPlay, Zap, Download, Share2, Layers, ArrowRight, Terminal, Sparkles } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export default function LandingPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090B] text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-300">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-[#09090B]/80 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Livepen</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="#features" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Features</Link>
            <Link href="#preview" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Preview</Link>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 dark:text-zinc-400"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>
            <Link
              href="/playground"
              className="px-4 py-2 text-sm font-medium bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Open Editor
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-28 pb-20 overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                Powered by Monaco Editor
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Write code.
                <br />
                <span className="text-indigo-600 dark:text-indigo-400">See it live.</span>
              </h1>

              <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                A fast, minimal playground for HTML, CSS, and JavaScript.
                Prototype ideas, share snippets, and export projects — all from your browser.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/playground"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all text-base"
                >
                  Start Coding
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-medium rounded-lg transition-all text-base"
                >
                  Explore Features
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Editor Preview Section */}
        <section id="preview" className="pb-24 px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-5xl mx-auto"
          >
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-2xl shadow-zinc-900/5 dark:shadow-black/30">
              {/* Mock browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-zinc-200 dark:bg-zinc-800 text-xs text-zinc-500 dark:text-zinc-500 font-mono">
                    localhost:3000/playground
                  </div>
                </div>
              </div>
              {/* Mock editor content */}
              <div className="flex">
                <div className="flex-1 p-6 bg-zinc-50 dark:bg-[#1a1a2e] font-mono text-sm border-r border-zinc-200 dark:border-zinc-800">
                  <div className="space-y-1 text-zinc-600 dark:text-zinc-400">
                    <div><span className="text-zinc-400 dark:text-zinc-600 select-none mr-4">1</span><span className="text-red-500 dark:text-red-400">&lt;div</span> <span className="text-amber-600 dark:text-amber-400">class</span>=<span className="text-green-600 dark:text-green-400">&quot;card&quot;</span><span className="text-red-500 dark:text-red-400">&gt;</span></div>
                    <div><span className="text-zinc-400 dark:text-zinc-600 select-none mr-4">2</span>  <span className="text-red-500 dark:text-red-400">&lt;h1&gt;</span>Hello, World!<span className="text-red-500 dark:text-red-400">&lt;/h1&gt;</span></div>
                    <div><span className="text-zinc-400 dark:text-zinc-600 select-none mr-4">3</span>  <span className="text-red-500 dark:text-red-400">&lt;p&gt;</span>Start editing...<span className="text-red-500 dark:text-red-400">&lt;/p&gt;</span></div>
                    <div><span className="text-zinc-400 dark:text-zinc-600 select-none mr-4">4</span><span className="text-red-500 dark:text-red-400">&lt;/div&gt;</span></div>
                    <div><span className="text-zinc-400 dark:text-zinc-600 select-none mr-4">5</span></div>
                    <div className="flex items-center"><span className="text-zinc-400 dark:text-zinc-600 select-none mr-4">6</span><span className="w-0.5 h-4 bg-indigo-500 animate-pulse" /></div>
                  </div>
                </div>
                <div className="flex-1 p-6 bg-white dark:bg-[#0f0f1a] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">Hello, World!</div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">Start editing...</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 border-t border-zinc-100 dark:border-zinc-800/50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Built for developers</h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-xl mx-auto">
                Everything you need for focused front-end prototyping. Nothing you don&apos;t.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={<MonitorPlay className="w-5 h-5" />}
                title="Instant Preview"
                description="Real-time rendering with intelligent debouncing. See every change as you type."
                delay={0}
              />
              <FeatureCard
                icon={<Terminal className="w-5 h-5" />}
                title="Monaco Editor"
                description="The same editor that powers VS Code — IntelliSense, syntax highlighting, and formatting built in."
                delay={0.05}
              />
              <FeatureCard
                icon={<Layers className="w-5 h-5" />}
                title="Resizable Panels"
                description="Drag to resize editor and preview panels. Collapse what you don't need."
                delay={0.1}
              />
              <FeatureCard
                icon={<Share2 className="w-5 h-5" />}
                title="Shareable Links"
                description="Compress your entire project into a URL. Share with anyone, no account needed."
                delay={0.15}
              />
              <FeatureCard
                icon={<Download className="w-5 h-5" />}
                title="Export as ZIP"
                description="Download a clean, structured project folder ready for deployment."
                delay={0.2}
              />
              <FeatureCard
                icon={<Zap className="w-5 h-5" />}
                title="Auto-Save"
                description="Your code persists automatically to local storage. Pick up right where you left off."
                delay={0.25}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 border-t border-zinc-100 dark:border-zinc-800/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto px-6 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Ready to start building?</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg mb-8">
              No sign-up required. Open the editor and start writing code immediately.
            </p>
            <Link
              href="/playground"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all text-lg"
            >
              Open the Playground
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 dark:border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-600">
            <Code2 className="w-4 h-4" />
            <span className="text-sm">&copy; {new Date().getFullYear()} Livepen</span>
          </div>
          <p className="text-sm text-zinc-400 dark:text-zinc-600">
            Built for focused coding.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay = 0 }: { icon: React.ReactNode; title: string; description: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group p-6 rounded-xl border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 bg-white dark:bg-zinc-900/50 transition-colors"
    >
      <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/30 transition-colors">
        {icon}
      </div>
      <h3 className="text-base font-semibold mb-2">{title}</h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
