# ⚡ Modern Developer Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.0.0-%2361DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0.0-%646CFF)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0.0-%2338B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.0.0-black)](https://www.framer.com/motion/)

> A premium, high-performance portfolio website built with **React 19**, **Vite**, and **Tailwind CSS v4**. Featuring a sophisticated **Sea Blue & Black** aesthetic, smooth **Framer Motion** animations, and a custom photography showcase.

![Portfolio Preview](./public/assets/img/personalWebsites.png)

## � Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Key Components](#-key-components)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Contact](#-contact)

---

## 🚀 Features

### 🎨 Design & UI

- **Premium Aesthetic**: A sophisticated "Sea Blue" (`#006994`) accent color paired with a strict **Pure Black** (`#000000`) dark mode.
- **Glassmorphism**: Modern glass effects on cards and overlays using backdrop filters.
- **Responsive Layout**: Mobile-first architecture ensuring pixel-perfect rendering on phones, tablets, and desktops.
- **Dynamic Theme**: Seamless Dark/Light mode toggling with local storage persistence.

### ✨ Animations & Interactivity

- **Gravity Background**: A physics-based particle system using `Matter.js` that reacts to device orientation and gravity.
- **Photography Stack**: A Tinder-style swipeable card stack for showcasing photography, built with `Framer Motion` drag gestures.
- **Magnetic Buttons**: Interactive buttons that magnetically stick to the cursor movement.
- **Scroll Reveals**: Elements fade in, slide up, and stagger as you scroll down the page.
- **Split Text**: Character-by-character text reveal animations for impactful headlines.

### ⚡ Performance & Tech

- **Instant Load**: Powered by **Vite** for sub-second development server start and optimized production builds.
- **React 19**: Utilizing the latest React features for optimal rendering performance.
- **Tailwind v4**: The latest engine for zero-runtime CSS generation.
- **SEO Optimized**: Semantic HTML5 structure and proper meta tags.

---

## 🛠 Tech Stack

| Category       | Technology                                                 | Purpose                                |
| -------------- | ---------------------------------------------------------- | -------------------------------------- |
| **Core**       | [React 19](https://react.dev/)                             | UI Library                             |
| **Build Tool** | [Vite](https://vitejs.dev/)                                | Bundler & Dev Server                   |
| **Styling**    | [Tailwind CSS v4](https://tailwindcss.com/)                | Utility-first CSS                      |
| **Animations** | [Framer Motion](https://www.framer.com/motion/)            | Complex Animations                     |
| **Physics**    | [Matter.js](https://brm.io/matter-js/)                     | 2D Physics Engine (Gravity Background) |
| **Icons**      | [React Icons](https://react-icons.github.io/react-icons/)  | SVG Icon Library                       |
| **Routing**    | [React Router](https://reactrouter.com/)                   | Client-side Routing                    |
| **Scroll**     | [React Scroll](https://www.npmjs.com/package/react-scroll) | Smooth Scrolling                       |

---

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Usmankhalid20/Personal-Website.git
   cd Personal-Website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173`.

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```bash
src/
├── assets/                  # Static assets
│   ├── img/                 # Profile, project screenshots
│   ├── photography/         # High-res photography images
│   └── resume/              # PDF Resume files
├── components/              # React Components
│   ├── DarkModeToggle.jsx   # Theme switcher component
│   ├── Footer.jsx           # Site footer
│   ├── GravityBackground.jsx # Physics-based background
│   ├── Header.jsx           # Sticky navigation bar
│   ├── Home.jsx             # Hero section
│   ├── MagneticButton.jsx   # Hover effect wrapper
│   ├── PhotographyStack.jsx # Swipeable image stack
│   ├── Skills.jsx           # Tech stack grid
│   ├── SplitText.jsx        # Text animation component
│   ├── Typewriter.jsx       # Typing effect component
│   └── Work.jsx             # Project showcase
├── Data/
│   └── data.jsx             # Centralized content data
├── App.jsx                  # Main application layout
├── index.css                # Global styles & Tailwind imports
└── main.jsx                 # Entry point
```

---

## 🧩 Key Components

### `GravityBackground.jsx`

A unique background component that creates falling "tech pills" (React, Node, JS logos) that react to gravity. It uses `Matter.js` to simulate physical collisions and `DeviceOrientation` API to change gravity direction on mobile devices.

### `PhotographyStack.jsx`

An interactive gallery that allows users to swipe through photos. It uses `Framer Motion`'s `useMotionValue` and `useTransform` to calculate rotation and opacity based on drag distance, creating a realistic card-toss effect.

### `MagneticButton.jsx`

A wrapper component that adds a magnetic pull effect to any button or link. As the mouse approaches the element, it moves slightly towards the cursor, creating a sticky, premium feel.

---

## ⚙️ Customization

### Colors

The color palette is defined in `src/index.css` using CSS variables and Tailwind configuration.

```css
/* src/index.css */
:root {
  --color-primary-500: #006994; /* Sea Blue */
  --color-accent: #006994;
}
```

To change the theme color, simply update the `--color-primary-500` variable.

### Content

Most textual content is managed in `src/Data/data.jsx`. Update this file to change:

- Project details
- Skills list
- About me text
- Social links

### Images

- **Profile Image**: Replace `src/assets/img/profileImage.jpeg`.
- **Photography**: Add images to `src/assets/photography/` and update the `PHOTO_DATA` array in `PhotographyStack.jsx`.

---

## 🚀 Deployment

This project is optimized for deployment on **Vercel**.

1. Push your code to GitHub.
2. Import the repository in Vercel.
3. Vercel will automatically detect Vite and set the build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📬 Contact

**Usman Khalid** - Full-Stack MERN Developer

- 🔗 [LinkedIn](https://www.linkedin.com/in/usman-khalid-9a2bb72b7/)
- 🎨 [Behance](https://www.behance.net/Usman2205)
- 💻 [GitHub](https://github.com/Usmankhalid20)
- 📧 [Email](mailto:usman@example.com)

---

_© 2025 Usman Khalid. All rights reserved._
