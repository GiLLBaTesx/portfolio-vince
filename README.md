# Vince Colasi - Portfolio

A modern, Apple-inspired portfolio website built with React and Framer Motion.

## Features

- 🎨 Apple-inspired minimalistic design
- ⚡ Built with React + Vite for blazing fast performance
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 Interactive hover effects
- 🌙 Dark theme with elegant gradients

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animation library
- **CSS3** - Styling with custom properties

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Work.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-bg: #000000;
  --secondary-bg: #1d1d1f;
  --text-primary: #f5f5f7;
  --text-secondary: #a1a1a6;
  --accent: #0071e3;
  --accent-hover: #0077ed;
}
```

### Content

Update the content in the respective component files:
- Personal info: `src/components/Hero.jsx`, `src/components/About.jsx`
- Projects: `src/components/Work.jsx`
- Skills: `src/components/Skills.jsx`
- Contact: `src/components/Contact.jsx`

## License

© 2025 Jhon Vincent Colasi. All rights reserved.
