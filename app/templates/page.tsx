"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Code2, ArrowRight, Sparkles, Layout, Box, Zap, Search } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { templates, Template } from "@/lib/templates";
import LZString from "lz-string";
import { useState } from "react";

export default function TemplatesPage() {
  const { theme, setTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTemplates = templates.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getTemplateUrl = (template: Template) => {
    const state = JSON.stringify({ 
      html: template.html, 
      css: template.css, 
      javascript: template.js 
    });
    const encoded = LZString.compressToEncodedURIComponent(state);
    return `/playground?state=${encoded}`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090B] text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-300">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-[#09090B]/80 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-2.5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold tracking-tight">Livepen</span>
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Home</Link>
            <Link href="/playground" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors text-indigo-600 dark:text-indigo-400 font-medium">Editor</Link>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 dark:text-zinc-400"
            >
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* Header Section */}
        <section className="relative pt-20 pb-12 overflow-hidden border-b border-zinc-100 dark:border-zinc-800/50">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent:110%)]" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Starter <span className="text-indigo-600 dark:text-indigo-400">Templates</span>
              </h1>
              <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto mb-8">
                Accelerate your workflow with pre-built components and layouts.
              </p>

              <div className="max-w-md mx-auto relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-indigo-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Template Grid */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            {filteredTemplates.length === 0 ? (
              <div className="text-center py-20 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-800">
                <p className="text-zinc-500">No templates found matching your search.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTemplates.map((template, idx) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="group rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5 transition-all flex flex-col h-full overflow-hidden"
                  >
                    <div className="p-6 flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          {template.category === "Layout" ? <Layout className="w-5 h-5" /> : 
                           template.category === "Component" ? <Box className="w-5 h-5" /> : 
                           <Zap className="w-5 h-5" />}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                          {template.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {template.name}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                        {template.description}
                      </p>
                    </div>
                    <div className="px-6 pb-6 mt-auto">
                      <Link
                        href={getTemplateUrl(template)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-400 dark:hover:text-white transition-all transform group-active:scale-[0.98]"
                      >
                        Use Template
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-100 dark:border-zinc-800/50 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-zinc-400 dark:text-zinc-600">
          Built for focused coding &copy; {new Date().getFullYear()} Livepen
        </div>
      </footer>
    </div>
  );
}
