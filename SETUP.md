# Quick Setup Guide

## Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install:
- React 18.3.1
- React DOM 18.3.1
- Framer Motion 11.0.0 (for animations)
- Vite 5.1.0 (build tool)
- @vitejs/plugin-react 4.2.1

## Step 2: Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Step 3: Make It Your Own

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`)
   - Update your name, title, and tagline

2. **About Section** (`src/components/About.jsx`)
   - Modify the three cards with your information

3. **Work Section** (`src/components/Work.jsx`)
   - Update projects array with your work
   - Change links, descriptions, and gradients

4. **Skills Section** (`src/components/Skills.jsx`)
   - Update skills array with your technologies

5. **Contact Section** (`src/components/Contact.jsx`)
   - Update email and social media links

## Features You Get

✅ Smooth scroll animations
✅ Hover effects on all interactive elements
✅ Mobile responsive design
✅ Apple-inspired minimalistic UI
✅ Fast performance with Vite
✅ Modern React with hooks
✅ Framer Motion animations

## Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## Deploy

You can deploy the `dist` folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Troubleshooting

**Port already in use?**
Vite will automatically try the next available port.

**Animations not working?**
Make sure Framer Motion is installed: `npm install framer-motion`

**Styles not loading?**
Check that all CSS files are imported in their respective components.

## Need Help?

Check the main README.md for more detailed information.
