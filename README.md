# Athul Krishna | Developer Portfolio 🚀

A modern, high-performance personal portfolio built with **React 19**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed with smooth 60fps Lenis inertial scrolling, dark glassmorphic aesthetics, interactive cursor spotlight, and showcase project cards with custom UI thumbnails.

---

## 🌟 Key Features

- ⚡ **Lightning Fast**: Built on Vite with React 19 for instant HMR and tiny bundle footprints.
- 🎨 **Modern Dark Glassmorphic Design**: Tailored color palette with deep obsidian tones, indigo/violet glow accents, and translucent backdrop-blur cards.
- 🖼️ **Interactive Project Showcase**: High-resolution project card thumbnails with hover zoom micro-interactions, category filtering, and direct links to live demos and GitHub repositories.
- 🧭 **Fluid Navigation**: Floating pill navbar with scroll-spy auto-highlighting, dynamic hide-on-scroll behavior, and smooth mobile drawer menu.
- 📜 **Interactive Experience & Skills Timeline**: Visual timeline showcasing professional experience, certifications, and categorized proficiencies with animated skill meters.
- ✉️ **Functional Contact Form**: Direct client-side validation, clipboard email copying, Sonner dark-mode toast alerts, and celebratory confetti effects.
- 📄 **Integrated Resume Downloads**: Reliable one-click PDF curriculum vitae download.

---

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Feedback**: [Sonner](https://sonner.emilkowal.ski/), [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 📂 Project Structure

```text
src/
├── assets/
│   └── images/
│       ├── projects/       # High-resolution project card thumbnails
│       ├── hero.png
│       └── profile.png
├── components/
│   ├── layout/             # Navbar, MobileMenu, Container
│   ├── sections/           # Hero, About, Skills, Projects, Contact, Timeline, Footer
│   └── ui/                 # Reusable Cards, Badges, Buttons, Cursor, Headings
├── data/
│   ├── projects.js         # Showcase projects with thumbnails & GitHub URLs
│   ├── skills.js           # Categorized proficiencies & progress stats
│   └── experience.js       # Career & education milestones
├── hooks/                  # Custom scroll & theme utilities
├── styles/
│   └── global.css          # Glassmorphism, glow keyframes, scrollbar styling
└── utils/
    └── constants.js        # Personal information & navigation constants
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Athul-krish/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

---

## 👤 Author

**Athul Krishna**
- **GitHub**: [@Athul-krish](https://github.com/Athul-krish)
- **Email**: [athulkrishna.dev@gmail.com](mailto:athulkrishna.dev@gmail.com)
- **Location**: Kerala, India

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
