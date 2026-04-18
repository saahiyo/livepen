export interface Template {
  id: string;
  name: string;
  description: string;
  category: "Layout" | "Component" | "Animation" | "Full Page" | "Starter";
  html: string;
  css: string;
  js: string;
}

export const templates: Template[] = [
  {
    id: "hello-world",
    name: "Hello World",
    description: "The simplest possible starting point. Just a heading and a clean background.",
    category: "Starter",
    html: `<h1>Hello World!</h1>
<p>Start building something amazing with Livepen.</p>`,
    css: `body {
  font-family: system-ui, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  background: #fdfdfd;
  color: #111;
}

h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}`,
    js: `console.log("Hello World template loaded!");`
  },
  {
    id: "html5-boilerplate",
    name: "HTML5 Boilerplate",
    description: "A complete HTML5 structure with essential meta tags and a clean layout.",
    category: "Starter",
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Livepen Project</title>
</head>
<body>
    <header>
        <h1>Website Title</h1>
    </header>
    <main>
        <section>
            <h2>Welcome</h2>
            <p>This is a standard HTML5 starter template.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Your Project</p>
    </footer>
</body>
</html>`,
    css: `body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    padding: 20px;
    max-width: 800px;
    mx-auto;
}

header {
    border-bottom: 2px solid #eee;
    margin-bottom: 20px;
}

footer {
    margin-top: 40px;
    color: #888;
    font-size: 0.8rem;
    border-top: 1px solid #eee;
}`,
    js: `// Start coding here`
  },
  {
    id: "css-boilerplate",
    name: "Modern CSS Reset",
    description: "A modern CSS reset boilerplate to ensure consistent styling across browsers.",
    category: "Starter",
    html: `<div class="content">
  <h1>CSS Reset Template</h1>
  <p>This template includes a modern CSS reset in the CSS tab.</p>
  <button>Test Button</button>
</div>`,
    css: `/* Modern CSS Reset */
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: sans-serif;
  padding: 2rem;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}`,
    js: `// No JS needed for a reset demo`
  },
  {
    id: "modern-hero",
    name: "Glassmorphism Hero",
    description: "A trendy, responsive hero section with a glassmorphism effect and smooth animations.",
    category: "Layout",
    html: `<section class="hero">
  <div class="glass-card">
    <h1>Design Your Future</h1>
    <p>Build stunning components with real-time feedback using Livepen.</p>
    <div class="cta-group">
      <button class="btn-primary">Get Started</button>
      <button class="btn-secondary">Learn More</button>
    </div>
  </div>
</section>`,
    css: `body {
  margin: 0;
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero {
  padding: 2rem;
}

.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px border rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 3rem;
  max-width: 600px;
  text-align: center;
  color: white;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

p {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.cta-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

button {
  padding: 0.8rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn-primary {
  background: white;
  color: #764ba2;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 1px solid rgba(255,255,255,0.4);
}

.btn-secondary:hover {
  background: rgba(255,255,255,0.1);
}`,
    js: `// No JS needed for this layout!
console.log("Hero template loaded successfully.");`
  },
  {
    id: "animated-cards",
    name: "Interactive Feature Cards",
    description: "A set of hover-animated cards perfect for highlighting product features.",
    category: "Component",
    html: `<div class="container">
  <div class="card">
    <div class="icon">🚀</div>
    <h3>Fast Performance</h3>
    <p>Optimized for lightning-fast loading speeds.</p>
  </div>
  <div class="card">
    <div class="icon">🛡️</div>
    <h3>Secure</h3>
    <p>Enterprise-grade security built-in by default.</p>
  </div>
  <div class="card">
    <div class="icon">🎨</div>
    <h3>Beautiful UI</h3>
    <p>Designed with modern aesthetics in mind.</p>
  </div>
</div>`,
    css: `body {
  background: #f8fafc;
  font-family: system-ui, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1000px;
  width: 100%;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  text-align: center;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

h3 {
  margin: 0.5rem 0;
  color: #1e293b;
}

p {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;
}`,
    js: `document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h3').innerText;
    alert(\`You clicked on: \${title}\`);
  });
});`
  },
  {
    id: "dark-nav",
    name: "Modern Sticky Navbar",
    description: "A sleek, responsive dark-mode navigation bar with animated toggles.",
    category: "Component",
    html: `<nav class="navbar">
  <div class="logo">DevFlow</div>
  <ul class="nav-links">
    <li><a href="#" class="active">Home</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <button class="toggle-btn">Menu</button>
</nav>

<div style="height: 200vh; padding: 100px 20px; color: #666; text-align: center;">
  Scroll down to see the sticky effect...
</div>`,
    css: `body {
  margin: 0;
  background: #111;
  font-family: 'Inter', sans-serif;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  background: rgba(17, 17, 17, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  z-index: 1000;
  transition: padding 0.3s ease;
}

.navbar.scrolled {
  padding: 1rem 4rem;
}

.logo {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -1px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2.5rem;
  margin: 0;
}

.nav-links a {
  color: #999;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover, .nav-links a.active {
  color: white;
}

.toggle-btn {
  display: none;
  background: transparent;
  border: 1px solid #444;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .nav-links { display: none; }
  .toggle-btn { display: block; }
  .navbar { padding: 1rem 1.5rem; }
}`,
    js: `window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});`
  }
];
