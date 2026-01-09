<<<<<<< HEAD
# Dineth Basura — 3D Portfolio

Personal 3D developer portfolio built with **React + Vite**, **React Three Fiber/Three.js**, **TailwindCSS**, and **Framer Motion**.

This site showcases:
- My **projects** (with “Read more” details)
- **Certifications & Achievements** (repurposed from testimonials)
- A **Download CV** button
- Contact section with **copy-to-clipboard email**

## Live Links
- LinkedIn: https://www.linkedin.com/in/dineth-basura-00711035a/
- GitHub: https://github.com/Dineth-Basura

## Features
- 3D hero visuals using **React Three Fiber** and **Drei**
- Smooth UI animations and section transitions with **Framer Motion**
- Responsive layout styled with **TailwindCSS**
- Projects section with detailed modal/“Read more” view
- Certifications & Achievements section
- CV download via navbar button (served from `public/assets/socials/cv.pdf`)

## Tech Stack
- **React**
- **Vite**
- **TailwindCSS**
- **Three.js / React Three Fiber / Drei**
- **Framer Motion**

## Project Structure
```bash
public/
  assets/
    socials/
      cv.pdf
    projects/
    logos/
    frameworksLogo/
  models/
src/
  components/
  constants/
  hoc/
  sections/
  App.jsx
  main.jsx
  index.css
```

## Getting Started (Local Development)
### 1) Install dependencies
```bash
npm install
```

### 2) Start the dev server
```bash
npm run dev
```

Vite will print the local URL (usually `http://localhost:5173`).

### 3) Build for production
```bash
npm run build
```

### 4) Preview the production build
```bash
npm run preview
```

## Customization Notes
Most content is driven from:
- `src/constants/index.js` (services, technologies, education/experience, certifications, projects)

Assets used by the UI live in:
- `public/assets/**`

### CV Download
Place your CV at:
- `public/assets/socials/cv.pdf`

The navbar button should link to it as:
- `/assets/socials/cv.pdf`

## Credits
This portfolio is based on a 3D portfolio starter and then customized with my personal content and sections.

## License
If you’re reusing this repo, keep attribution where appropriate and replace personal content/assets with your own.
=======

>>>>>>> e30ac8e67bd94de5f446eedbdb80b385dd9b05b1
