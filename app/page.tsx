"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Code2, MonitorPlay, Zap, Download, Share2, Layers, ArrowRight, Terminal, Sparkles, Menu, X } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useState } from "react";

export default function LandingPage() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090B] text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-300">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-[#09090B]/80 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-14 sm:h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Livepen</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Features</Link>
            <Link href="/templates" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Templates</Link>
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

          {/* Mobile Nav Controls */}
          <div className="flex md:hidden items-center gap-2">
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
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 dark:text-zinc-400"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-[#09090B]/95 backdrop-blur-xl"
          >
            <div className="flex flex-col px-4 py-3 gap-1">
              <Link href="#features" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2.5 rounded-lg text-sm text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">Features</Link>
              <Link href="/templates" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2.5 rounded-lg text-sm text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">Templates</Link>
              <Link href="#preview" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2.5 rounded-lg text-sm text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">Preview</Link>
              <Link
                href="/playground"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 px-4 py-2.5 text-sm font-medium bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors text-center"
              >
                Open Editor
              </Link>
            </div>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-10 sm:pt-15 pb-10 sm:pb-15 overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 sm:mb-8 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                Powered by Monaco Editor
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4 sm:mb-6">
                Write code.
                <br />
                <span className="text-indigo-600 dark:text-indigo-400">See it live.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
                A fast, minimal playground for HTML, CSS, and JavaScript.
                Prototype ideas, share snippets, and export projects — all from your browser.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/playground"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all text-base w-full sm:w-auto justify-center"
                >
                  Start Coding
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-medium rounded-lg transition-all text-base w-full sm:w-auto justify-center"
                >
                  Explore Features
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Editor Preview Section */}
        <section id="preview" className="pb-16 sm:pb-24 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-5xl mx-auto"
          >
            <div className="rounded-xl sm:rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden shadow-2xl shadow-zinc-900/10 dark:shadow-black/40 cursor-default bg-white dark:bg-[#0c0c0c]">
              {/* Editor Header / Chrome */}
              <div className="flex items-center px-3 sm:px-4 py-2 sm:py-3 bg-zinc-50/80 dark:bg-zinc-900/50 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80">
                <div className="flex gap-1.5 sm:gap-2 w-14 sm:w-20">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400 dark:bg-red-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400 dark:bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400 dark:bg-green-500/80" />
                </div>
                
                {/* Mock File Tabs */}
                <div className="flex-1 flex justify-center gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-white dark:bg-zinc-800 rounded-md shadow-sm border border-zinc-200 dark:border-zinc-700 text-[10px] sm:text-xs font-medium text-zinc-700 dark:text-zinc-200">
                    <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-500" />
                    index.html
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-transparent rounded-md text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-colors">
                    <MonitorPlay className="w-3.5 h-3.5 text-blue-500" />
                    style.css
                  </div>
                </div>
                <div className="w-14 sm:w-20" /> {/* Spacer for centering */}
              </div>

              {/* Editor Workspace */}
              <div className="flex flex-col sm:flex-row h-[280px] sm:h-[350px] md:h-[400px]">
                {/* Code Panel */}
                <div className="flex-1 p-3 sm:p-5 bg-[#fafafa] dark:bg-[#121212] font-mono text-xs sm:text-sm leading-relaxed border-b sm:border-b-0 sm:border-r border-zinc-200 dark:border-zinc-800/80 cursor-text overflow-hidden relative">
                  <div className="absolute top-0 bottom-0 left-0 w-7 sm:w-10 bg-zinc-100/50 dark:bg-[#181818] border-r border-zinc-200/50 dark:border-zinc-800/50 flex flex-col items-end py-3 sm:py-5 pr-1.5 sm:pr-3 text-zinc-400 dark:text-zinc-500 select-none text-[10px] sm:text-xs">
                    <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
                  </div>
                  <div className="pl-4 sm:pl-6 space-y-0 text-zinc-700 dark:text-zinc-300">
                    <div><span className="text-zinc-500">&lt;</span><span className="text-pink-600 dark:text-pink-400">div</span> <span className="text-cyan-600 dark:text-cyan-400">class</span><span className="text-zinc-500">=</span><span className="text-amber-600 dark:text-amber-300">&quot;card&quot;</span><span className="text-zinc-500">&gt;</span></div>
                    <div className="pl-2 sm:pl-4"><span className="text-zinc-500">&lt;</span><span className="text-pink-600 dark:text-pink-400">h1</span><span className="text-zinc-500">&gt;</span><span className="text-zinc-900 dark:text-zinc-100">Hello, Developer</span><span className="text-zinc-500">&lt;/</span><span className="text-pink-600 dark:text-pink-400">h1</span><span className="text-zinc-500">&gt;</span></div>
                    <div className="pl-2 sm:pl-4"><span className="text-zinc-500">&lt;</span><span className="text-pink-600 dark:text-pink-400">p</span><span className="text-zinc-500">&gt;</span><span className="text-zinc-600 dark:text-zinc-400 hidden sm:inline">Ready to build something amazing?</span><span className="text-zinc-600 dark:text-zinc-400 sm:hidden">Ready to build...</span><span className="text-zinc-500">&lt;/</span><span className="text-pink-600 dark:text-pink-400">p</span><span className="text-zinc-500">&gt;</span></div>
                    <div className="pl-2 sm:pl-4 hidden sm:block"><span className="text-zinc-500">&lt;</span><span className="text-pink-600 dark:text-pink-400">button</span> <span className="text-cyan-600 dark:text-cyan-400">id</span><span className="text-zinc-500">=</span><span className="text-amber-600 dark:text-amber-300">&quot;magic-btn&quot;</span><span className="text-zinc-500">&gt;</span><span className="text-zinc-900 dark:text-zinc-100">Click me</span><span className="text-zinc-500">&lt;/</span><span className="text-pink-600 dark:text-pink-400">button</span><span className="text-zinc-500">&gt;</span></div>
                    <div><span className="text-zinc-500">&lt;/</span><span className="text-pink-600 dark:text-pink-400">div</span><span className="text-zinc-500">&gt;</span></div>
                    <div className="h-4 sm:h-6"></div>
                    <div className="flex items-center"><span className="text-zinc-500">&lt;</span><span className="text-pink-600 dark:text-pink-400">style</span><span className="text-zinc-500">&gt;</span></div>
                    <div className="flex items-center pl-2 sm:pl-4 relative">
                      <span className="text-blue-600 dark:text-blue-400">.card</span> <span className="text-zinc-500">{'{'}</span>
                      <motion.span 
                        animate={{ opacity: [1, 0, 1] }} 
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-[2px] h-[1em] bg-indigo-500 ml-1 absolute left-[40px] sm:left-[56px] top-[4px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Preview Panel */}
                <div className="flex-1 bg-white dark:bg-[#0f0f12] relative cursor-default overflow-hidden flex flex-col justify-center items-center">
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded bg-zinc-100/80 dark:bg-zinc-800/80 text-[8px] sm:text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest backdrop-blur-sm shadow-sm border border-zinc-200/50 dark:border-zinc-700/50">
                    Live Preview
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-50 to-zinc-100 dark:from-zinc-900/40 dark:to-[#0f0f12]">
                    <div className="w-full max-w-[240px] sm:max-w-sm bg-white dark:bg-[#18181A] p-4 sm:p-8 text-center rounded-xl sm:rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)] border border-zinc-100 dark:border-zinc-800/60 transform hover:-translate-y-1 transition-transform duration-300">
                      <h2 className="text-lg sm:text-2xl font-bold text-zinc-900 dark:text-white mb-1 sm:mb-2">Hello, Developer</h2>
                      <p className="text-xs sm:text-base text-zinc-500 dark:text-zinc-400 mb-3 sm:mb-6 font-medium">Ready to build something amazing?</p>
                      <button className="px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-base bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md shadow-indigo-600/20 transition-all active:scale-95 w-full">
                        Click me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 sm:py-24 border-t border-zinc-100 dark:border-zinc-800/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight">Built for developers</h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-base sm:text-lg max-w-xl mx-auto">
                Everything you need for focused front-end prototyping. Nothing you don&apos;t.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
        <section className="py-16 sm:py-24 border-t border-zinc-100 dark:border-zinc-800/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto px-4 sm:px-6 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight">Ready to start building?</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-base sm:text-lg mb-6 sm:mb-8">
              No sign-up required. Open the editor and start writing code immediately.
            </p>
            <Link
              href="/playground"
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all text-base sm:text-lg w-full sm:w-auto justify-center"
            >
              Open the Playground
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 dark:border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
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
