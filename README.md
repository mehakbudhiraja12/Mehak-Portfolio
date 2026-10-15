# Mehak Budhiraja — Personal Developer Portfolio

A production-ready personal developer portfolio built with React.js, Vite, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** [React.js](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) + Custom Brand SVGs
- **Motion & Interactions:** [Framer Motion](https://www.framer.com/motion/)

---

## 📂 Project Architecture

```
mehak-portfolio/
├── public/
│   ├── favicon.svg               # Minimal MB monogram favicon
│   ├── robots.txt                # SEO crawler directives
│   ├── sitemap.xml               # Search engine sitemap
│   ├── _redirects                # Netlify SPA redirect
│   └── resume/
│       └── Development_Resume_MB.pdf  # Downloadable PDF Resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Fixed blurred navbar with smooth scroll & mobile menu
│   │   ├── SectionHeading.jsx    # Standardized section headings
│   │   ├── ProjectCard.jsx       # Interactive showcase card with visual previews
│   │   ├── ProjectModal.jsx      # In-depth project detail dialog
│   │   ├── ProjectPreviews.jsx   # Custom UI & code mockup graphics
│   │   ├── SkillGroup.jsx        # Categorized skill cards
│   │   ├── ContactForm.jsx       # Validated form with mailto fallback & mail app button
│   │   ├── SocialIcons.jsx       # SVG components for GitHub & LinkedIn
│   │   └── Footer.jsx            # Footer with dynamic year & back-to-top control
│   ├── sections/
│   │   ├── Hero.jsx              # Opening hero section with MB monogram badge
│   │   ├── About.jsx             # Personal narrative & 3 core pillar cards
│   │   ├── Skills.jsx            # 6 organized skill categories
│   │   ├── Projects.jsx          # 3 primary projects showcase
│   │   ├── Research.jsx          # Dedicated academic research paper feature
│   │   ├── Education.jsx         # Academic timeline (BE CSE @ Chitkara, Schooling)
│   │   ├── Achievements.jsx      # IISDT AI/ML cert & IE(I) leadership role
│   │   └── Contact.jsx           # Contact information & message interface
│   ├── data/
│   │   ├── socialLinks.js        # Contact details & social link configurations
│   │   ├── projects.js           # Project metadata, features & repo links
│   │   ├── skills.js             # Categorized skills list
│   │   ├── education.js          # Academic background data
│   │   └── achievements.js       # Certifications & research metadata
│   ├── App.jsx                   # Root application layout
│   ├── index.css                 # Base Tailwind styles & custom scrollbars
│   └── main.jsx                  # React 19 root mounting
├── index.html                    # SEO tags, OpenGraph metadata, font preloads
├── tailwind.config.js            # Custom color palettes & dark theme extensions
├── vercel.json                   # Vercel deployment rewrite rules
└── package.json                  # Dependencies & npm scripts
```

---

## 🛠️ Quick Start & Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run local development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

3. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled assets will be in the `dist/` directory.

4. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## ⚙️ How to Customize & Update Content

### 1. Updating Social & Contact Links
Open [`src/data/socialLinks.js`](file:///src/data/socialLinks.js) and fill in your actual URLs:
```javascript
socialLinks: {
  linkedin: {
    url: "https://www.linkedin.com/in/mehakbudhiraja", // Add your URL here
    label: "LinkedIn",
  },
  github: {
    url: "https://github.com/mehakbudhiraja", // Add your URL here
    label: "GitHub",
  }
}
```

### 2. Updating Project Repositories & Demos
Open [`src/data/projects.js`](file:///src/data/projects.js). For any project, update:
```javascript
githubUrl: "https://github.com/your-username/repo-name",
demoUrl: "https://your-demo-url.vercel.app",
```
If left as an empty string `""`, the site displays an informative placeholder notification.

### 3. Replacing or Updating Your Resume
Place your new PDF inside `public/resume/` and update `resumeFileName` in [`src/data/socialLinks.js`](file:///src/data/socialLinks.js).

---

## 🌐 Deployment Instructions

### Deploy on Vercel
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Click **Deploy**.

### Deploy on Netlify
1. Connect your repository to [Netlify](https://www.netlify.com/).
2. Build Command: `npm run build`.
3. Publish Directory: `dist`.
4. Click **Deploy Site**. The included `public/_redirects` ensures seamless SPA routing.
