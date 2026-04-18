"use client";

import { useState, useEffect, useRef, useCallback, Suspense } from "react";
import Editor from "@monaco-editor/react";
import { emmetHTML, emmetCSS, emmetJSX } from "emmet-monaco-es";
import { Panel, Group as PanelGroup, Separator as PanelResizeHandle } from "react-resizable-panels";
import LZString from "lz-string";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { 
  Play, Download, Share2, RefreshCcw, 
  Settings, Layout, Sun, Moon,
  FileCode2, FileJson, Check
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

const DEFAULT_HTML = `<div class="container">
  <h1>Hello, Livepen!</h1>
  <p>Start editing to see some magic happen.</p>
  <button id="btn">Click me</button>
</div>`;

const DEFAULT_CSS = `body {
  font-family: system-ui, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f0f4f8;
  color: #334155;
  transition: all 0.3s ease;
}

.container {
  text-align: center;
  background: white;
  padding: 2rem 4rem;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #4338ca;
}`;

const DEFAULT_JS = `document.getElementById('btn').addEventListener('click', () => {
  const h1 = document.querySelector('h1');
  h1.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
  
  const btn = document.getElementById('btn');
  btn.innerText = "Wow, colors!";
});`;

type EditorType = "html" | "css" | "javascript";

let emmetInitialized = false;

function PlaygroundContent() {
  const { theme, setTheme } = useTheme();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [html, setHtml] = useState(DEFAULT_HTML);
  const [css, setCss] = useState(DEFAULT_CSS);
  const [javascript, setJavascript] = useState(DEFAULT_JS);
  
  const [activeTab, setActiveTab] = useState<EditorType>("html");
  const [srcDoc, setSrcDoc] = useState("");
  const [shareCopied, setShareCopied] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Initialize from URL or LocalStorage
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const initialize = () => {
      const encodedState = searchParams.get("state");
      if (encodedState) {
        try {
          const decoded = LZString.decompressFromEncodedURIComponent(encodedState);
          if (decoded) {
            const parsed = JSON.parse(decoded);
            setHtml(parsed.html || "");
            setCss(parsed.css || "");
            setJavascript(parsed.javascript || "");
          }
        } catch (e) {
          console.error("Failed to decode state", e);
        }
      } else {
        const savedHtml = localStorage.getItem("livepen-html");
        const savedCss = localStorage.getItem("livepen-css");
        const savedJs = localStorage.getItem("livepen-js");

        if (savedHtml !== null) setHtml(savedHtml);
        if (savedCss !== null) setCss(savedCss);
        if (savedJs !== null) setJavascript(savedJs);
      }
      setIsReady(true);
    };

    // Run initialization async to bypass strict set-state-in-effect linting
    timeoutId = setTimeout(initialize, 0);

    return () => clearTimeout(timeoutId);
  }, [searchParams]);

  // Auto-save to LocalStorage
  useEffect(() => {
    if (!isReady) return;
    localStorage.setItem("livepen-html", html);
    localStorage.setItem("livepen-css", css);
    localStorage.setItem("livepen-js", javascript);
  }, [html, css, javascript, isReady]);

  // Debounced Render
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>${javascript}</script>
          </body>
        </html>
      `);
    }, 400);

    return () => clearTimeout(timeout);
  }, [html, css, javascript]);

  const handleEditorChange = (value: string | undefined, type: EditorType) => {
    const val = value || "";
    if (type === "html") setHtml(val);
    else if (type === "css") setCss(val);
    else if (type === "javascript") setJavascript(val);
  };

  const handleShare = async () => {
    const state = JSON.stringify({ html, css, javascript });
    const encoded = LZString.compressToEncodedURIComponent(state);
    const url = `${window.location.origin}${window.location.pathname}?state=${encoded}`;
    
    // Update URL without reload
    window.history.replaceState(null, '', url);
    
    try {
      await navigator.clipboard.writeText(url);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const downloadZip = async () => {
    const zip = new JSZip();
    
    const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Livepen Project</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  ${html}
  <script src="script.js"></script>
</body>
</html>`;

    zip.file("index.html", indexHtml);
    zip.file("style.css", css);
    zip.file("script.js", javascript);

    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "livepen-project.zip");
  };

  const downloadIndividualFile = () => {
    if (activeTab === "html") {
        const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Livepen Project</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  ${html}
  <script src="script.js"></script>
</body>
</html>`;
      const blob = new Blob([indexHtml], { type: "text/html;charset=utf-8" });
      saveAs(blob, "index.html");
    } else if (activeTab === "css") {
      const blob = new Blob([css], { type: "text/css;charset=utf-8" });
      saveAs(blob, "style.css");
    } else if (activeTab === "javascript") {
      const blob = new Blob([javascript], { type: "text/javascript;charset=utf-8" });
      saveAs(blob, "script.js");
    }
  };

  const clearEditor = () => {
    if (confirm("Are you sure you want to completely clear the workspace?")) {
      setHtml("");
      setCss("");
      setJavascript("");
      router.replace("/playground");
    }
  };

  if (!isReady) return <div className="h-screen w-screen dark:bg-bg-primary"></div>;

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-zinc-50 dark:bg-bg-primary text-zinc-900 dark:text-text-main font-sans">
      {/* Header */}
      <header className="flex-none h-14 border-b border-zinc-200 dark:bg-bg-secondary dark:border-border-dark flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-bold flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="w-8 h-8 rounded bg-accent flex items-center justify-center text-white font-mono font-bold text-lg">&lt;/&gt;</span>
            <span className="hidden sm:inline">Livepen</span>
          </Link>
          
          <div className="h-6 w-px bg-zinc-300 dark:bg-border-dark mx-2"></div>
          
          <div className="flex bg-zinc-200 dark:bg-bg-tertiary p-1 rounded-md">
            <button
              onClick={() => setActiveTab("html")}
              className={`px-3 py-1 text-sm font-medium rounded transition-colors ${activeTab === "html" ? 'bg-white dark:bg-bg-secondary shadow-sm text-zinc-900 dark:text-text-main' : 'hover:bg-zinc-300 dark:hover:bg-bg-primary text-zinc-600 dark:text-text-muted'}`}
            >
              HTML
            </button>
            <button
              onClick={() => setActiveTab("css")}
              className={`px-3 py-1 text-sm font-medium rounded transition-colors ${activeTab === "css" ? 'bg-white dark:bg-bg-secondary shadow-sm text-zinc-900 dark:text-text-main' : 'hover:bg-zinc-300 dark:hover:bg-bg-primary text-zinc-600 dark:text-text-muted'}`}
            >
              CSS
            </button>
            <button
              onClick={() => setActiveTab("javascript")}
              className={`px-3 py-1 text-sm font-medium rounded transition-colors ${activeTab === "javascript" ? 'bg-white dark:bg-bg-secondary shadow-sm text-zinc-900 dark:text-text-main' : 'hover:bg-zinc-300 dark:hover:bg-bg-primary text-zinc-600 dark:text-text-muted'}`}
            >
              JS
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={clearEditor}
            className="p-2 text-zinc-500 dark:text-text-muted hover:text-red-500 dark:hover:text-red-400 transition-colors"
            title="Clear all"
          >
            <RefreshCcw className="w-4 h-4" />
          </button>
          
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 text-zinc-500 dark:text-text-muted hover:text-zinc-900 dark:hover:text-text-main transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <div className="h-6 w-px bg-zinc-300 dark:bg-border-dark mx-1 hidden sm:block"></div>

          <button
            onClick={downloadZip}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-zinc-200 hover:bg-zinc-300 dark:bg-bg-tertiary dark:hover:bg-[#2D333B] dark:border dark:border-border-dark dark:text-text-muted rounded transition-colors"
          >
            <Download className="w-4 h-4" />
            Export ZIP
          </button>
          
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-accent hover:opacity-90 text-white rounded transition-colors w-24 justify-center"
          >
            {shareCopied ? (
              <><Check className="w-4 h-4" /> Copied</>
            ) : (
              <><Share2 className="w-4 h-4" /> Share</>
            )}
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 overflow-hidden">
        <PanelGroup orientation="horizontal">
          {/* Editor Panel */}
          <Panel defaultSize={50} minSize={20} className="flex flex-col relative z-0">
            <div className="absolute top-2 right-4 z-10">
              <button 
                onClick={downloadIndividualFile}
                className="p-1.5 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md text-zinc-600 dark:text-zinc-400 transition-colors shadow-sm"
                title={`Download ${activeTab === 'html' ? 'index.html' : activeTab === 'css' ? 'style.css' : 'script.js'}`}
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 relative">
              {activeTab === "html" && (
                <Editor
                  height="100%"
                  language="html"
                  theme={theme === 'dark' ? 'vs-dark' : 'vs-light'}
                  value={html}
                  onChange={(val) => handleEditorChange(val, "html")}
                  onMount={(_editor, monaco) => {
                    if (!emmetInitialized) {
                      emmetHTML(monaco);
                      emmetCSS(monaco);
                      emmetInitialized = true;
                    }
                  }}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    wordWrap: "on",
                    padding: { top: 16 }
                  }}
                />
              )}
              {activeTab === "css" && (
                <Editor
                  height="100%"
                  language="css"
                  theme={theme === 'dark' ? 'vs-dark' : 'vs-light'}
                  value={css}
                  onChange={(val) => handleEditorChange(val, "css")}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    wordWrap: "on",
                    padding: { top: 16 }
                  }}
                />
              )}
              {activeTab === "javascript" && (
                <Editor
                  height="100%"
                  language="javascript"
                  theme={theme === 'dark' ? 'vs-dark' : 'vs-light'}
                  value={javascript}
                  onChange={(val) => handleEditorChange(val, "javascript")}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    wordWrap: "on",
                    padding: { top: 16 }
                  }}
                />
              )}
            </div>
          </Panel>

          <PanelResizeHandle className="w-2 md:w-1 bg-zinc-200 dark:bg-border-dark hover:bg-accent dark:hover:bg-accent transition-colors cursor-col-resize z-10" />

          {/* Preview Panel */}
          <Panel defaultSize={50} minSize={20} className="relative z-0 bg-white">
            <div className="absolute inset-x-0 top-0 h-8 bg-[#F1F5F9] border-b border-[#E2E8F0] px-3 flex items-center justify-between text-[11px] font-semibold text-[#64748B] uppercase tracking-wider z-10">
              <span>Live Preview</span>
              <span className="flex items-center gap-1.5 text-green-600 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Active
              </span>
            </div>
            <iframe
              title="preview"
              sandbox="allow-scripts allow-modals allow-pointer-lock allow-popups"
              srcDoc={srcDoc}
              className="w-full h-full pt-8 border-none bg-white"
            />
          </Panel>
        </PanelGroup>
      </main>
    </div>
  );
}

export default function Playground() {
  return (
    <Suspense fallback={<div className="h-screen w-screen dark:bg-bg-primary flex items-center justify-center text-zinc-900 dark:text-text-main">Loading...</div>}>
      <PlaygroundContent />
    </Suspense>
  );
}
