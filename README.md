# Kimia Heidari — Interactive Online Resume

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-22d3ee?style=for-the-badge&logo=githubpages&logoColor=white)](https://heidari2020.github.io/KimiaHD/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, bilingual (**English / German**) interactive resume and portfolio built for a **.NET Software Engineer** specializing in FinTech, Microservices, DDD, and Clean Architecture.

🔗 **Live Site:** [https://heidari2020.github.io/KimiaHD/](https://heidari2020.github.io/KimiaHD/)

---

## ✨ Key Features

- **Bilingual Support (EN / DE):** Instant language switching tailored for both international and DACH (Germany, Austria, Switzerland) job markets.
- **Interactive Backend Showcase:** Includes a **Live API Health Check Simulator** and a syntax-highlighted `BackendEngineer.cs` preview card.
- **Modern UX & Micro-Interactions:** 3D-tilt profile card with floating badges, mouse-following spotlight, scroll progress indicator, and animated metric counters.
- **Filterable Skills & Timeline:** Category-based technical skill filtering and a structured work experience timeline highlighting measurable impact.
- **Clean & Modular Structure:** Separation of data (`resumeData.js`) and UI components for easy maintenance and scalability.
- **Automated CI/CD:** Automatically builds and deploys to GitHub Pages via **GitHub Actions** on every push to `main`.

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Icons:** Lucide React & Custom Brand SVGs
- **Deployment:** GitHub Actions & GitHub Pages

---

## 📂 Project Structure

```text
├── .github/workflows/
│   └── deploy.yml          # Automated GitHub Pages CI/CD pipeline
├── public/
│   └── profile.jpeg        # Profile photo
└── src/
    ├── data/
    │   └── resumeData.js   # Centralized EN/DE content & metrics
    ├── components/
    │   ├── Navbar.jsx      # Navigation & EN/DE capsule switcher
    │   ├── Hero.jsx        # Intro, CTA buttons & 3D tilt portrait
    │   ├── BentoSection.jsx# Animated stats & Live API simulator
    │   ├── Skills.jsx      # Filterable technical skill cards
    │   ├── Experience.jsx  # Work history timeline
    │   ├── Education.jsx   # Degree, languages & certifications
    │   └── Contact.jsx     # Direct email & copy-to-clipboard CTA
    ├── App.jsx             # Main layout & global UX effects
    └── index.css           # Tailwind config & custom animations
```



🚀 Run Locally
Bash

# 1. Clone the repository
git clone [https://github.com/heidari2020/KimiaHD.git](https://github.com/heidari2020/KimiaHD.git)
cd KimiaHD

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev