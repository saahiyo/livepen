# 🖋️ Livepen

**Code freely. See it instantly.**

Livepen is a modern, high-performance playground for HTML, CSS, and JavaScript. Designed for speed and focus, it allows developers to prototype front-end ideas with a real-time preview and a professional-grade editor.

![Livepen Preview](https://github.com/user-attachments/assets/livepen-placeholder.png) *(Placeholder for project screenshot)*

## ✨ Features

- **🚀 Instant Preview**: Watch your code come to life in real-time as you type with debounced live rendering.
- **💻 Monaco Editor**: Powered by the same engine as VS Code, featuring rich IntelliSense, syntax highlighting, and code formatting.
- **📐 Resizable Panels**: Fully customizable workspace with fluid, draggable editor and preview boundaries.
- **🔗 Shareable Links**: Encode your entire project state into a compressed URL string for instant sharing.
- **📦 Export as ZIP**: Take your work offline. Download your project as a clean, structured ZIP file.
- **💾 Local Auto-Save**: Never lose a line of code. Your progress is automatically persisted to local storage.
- **🌓 Dark Mode**: Built-in support for both light and dark themes to suit your coding environment.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI & Logic**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Code Editor**: [@monaco-editor/react](https://github.com/suren-atoyan/monaco-react)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Compression**: [LZ-String](https://pieroxy.net/blog/pages/lz-string/index.html)
- **Utilities**: [react-resizable-panels](https://github.com/bvaughn/react-resizable-panels), [JSZip](https://stuk.github.io/jszip/), [File-Saver](https://github.com/eligrey/FileSaver.js/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/livepen.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```text
├── app/              # Next.js App Router pages and layouts
├── components/       # Reusable UI components
├── lib/              # Utility functions and shared logic
├── public/           # Static assets
└── styles/           # Global styles and Tailwind configuration
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by [Shakir](https://github.com/shakir)
