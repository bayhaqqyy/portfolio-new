<p align="center">
  <img src="https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-FF0050?style=for-the-badge&logo=framer&logoColor=white" />
</p>

# 🖥️ Rafli Abdul Bay Haqqy — Portfolio

> Personal portfolio website for an **Infrastructure / System Engineer**, built with React + Vite. Showcasing professional certifications, work experience, technical training records, and a curated blog feed.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🏠 **Single-Page Home** | Hero section with typewriter animation, About, Skills, Certifications, Experience, Training, and Contact — all on one page with smooth scroll navigation |
| 🎓 **Certifications Gallery** | Filterable card grid (Linux / Cloud / Network) with animated transitions and external verification links (Credly, MikroTik) |
| 💼 **Experience Timeline** | Vertical timeline with live indicator for current position |
| 📝 **Blog List** | Curated blog feed with tag-based filtering. Cards redirect to the full articles on [blog.bayhaqqy.my.id](https://blog.bayhaqqy.my.id) |
| 🎨 **Dark Theme** | Material Design 3 inspired color tokens with glassmorphism, dot-grid background, and custom cursor |
| ⚡ **Animations** | Page transitions, staggered card reveals, and hover micro-interactions via Framer Motion |
| 📱 **Fully Responsive** | Mobile-first design with collapsible hamburger navigation |

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Routing:** [React Router DOM v6](https://reactrouter.com/)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/) with custom Material Design 3 color tokens
- **Animations:** [Framer Motion 11](https://www.framer.com/motion/)
- **Fonts:** Space Grotesk (headings) · Inter (body) · JetBrains Mono (labels/code) · Material Symbols Outlined (icons)

---

## 📁 Project Structure

```
portfolio-ai/
├── public/
│   ├── my-avatar.jpg          # Profile photo
│   ├── resume.pdf             # Downloadable resume
│   └── rhcsa.png              # RHCSA badge
├── src/
│   ├── components/
│   │   ├── About.jsx          # About section + terminal card
│   │   ├── BlogCard.jsx       # Blog post card (external link)
│   │   ├── Certifications.jsx # Filterable cert gallery
│   │   ├── Contact.jsx        # Contact form + info
│   │   ├── Cursor.jsx         # Custom cursor effect
│   │   ├── Experience.jsx     # Work experience timeline
│   │   ├── Footer.jsx         # Footer with social links
│   │   ├── Hero.jsx           # Hero section + typewriter
│   │   ├── Navbar.jsx         # Fixed navbar with smart routing
│   │   ├── ScrollToTop.jsx    # Auto-scroll on route change
│   │   ├── Skills.jsx         # Technical skills showcase
│   │   └── Training.jsx       # Training records section
│   ├── data/
│   │   └── blogData.js        # Static blog post data
│   ├── pages/
│   │   ├── BlogList.jsx       # /blog — Blog listing page
│   │   └── HomePage.jsx       # / — Main landing page
│   ├── App.jsx                # Root component with routing
│   ├── index.css              # Global styles + Tailwind
│   └── main.jsx               # Entry point with BrowserRouter
├── index.html
├── tailwind.config.js         # Custom MD3 theme tokens
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x — [Download here](https://nodejs.org/)
- **npm** ≥ 9.x (bundled with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/bayhaqqyy/portfolio-ai.git
cd portfolio-ai

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

The output will be in the `dist/` folder, ready to deploy.

---

## 🌐 Deployment

This project is a static site and can be deployed to any static hosting provider:

| Platform | Command / Notes |
|----------|----------------|
| **Vercel** | Connect GitHub repo → auto-deploys on push |
| **Netlify** | Build command: `npm run build` · Publish dir: `dist` |
| **GitHub Pages** | Use `vite-plugin-gh-pages` or deploy `dist/` manually |
| **Cloudflare Pages** | Build command: `npm run build` · Output dir: `dist` |

> **⚠️ Important:** Since this project uses client-side routing (`react-router-dom`), make sure your hosting platform handles SPA fallback redirects. For example, on Netlify add a `_redirects` file in `public/`:
> ```
> /*    /index.html   200
> ```

---

## 📄 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |

---

## 🎨 Customization

### Modify Content
- **Personal info & experience:** Edit the data arrays inside each component (`Experience.jsx`, `Certifications.jsx`, etc.)
- **Blog posts:** Update `src/data/blogData.js` with your latest articles
- **Resume:** Replace `public/resume.pdf`
- **Avatar:** Replace `public/my-avatar.jpg`

### Modify Theme
All color tokens are defined in `tailwind.config.js` using Material Design 3 naming conventions. Key colors:
- `primary` → Cyan/green (`#46f1c5`)
- `secondary` → Violet (`#cabeff`)
- `background` → Deep dark (`#131318`)

---

## 📬 Contact

- **Email:** rafliabdulbayhaqqy@gmail.com
- **LinkedIn:** [linkedin.com/in/rafliabdulb](https://linkedin.com/in/rafliabdulb)
- **GitHub:** [github.com/bayhaqqyy](https://github.com/bayhaqqyy)
- **Blog:** [blog.bayhaqqy.my.id](https://blog.bayhaqqy.my.id)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ☕ and 🎧 by <strong>Rafli Abdul Bay Haqqy</strong>
</p>
