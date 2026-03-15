# Andile Mahlaba — Portfolio

Professional portfolio for job applications and showcasing the National Digital Student Identity System (NDSIS) and other projects.

## Quick start

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Before you share it

1. **Photo**  
   Your profile photo is in `public/andile.png`. To change it, replace that file and keep the name, or update the `img` src in `src/App.jsx`.

2. **Update contact links**  
   In `src/App.jsx`, update:
   - **Email:** replace `andile@example.com` in the Contact section (in `src/App.jsx`) with your real email.
   - **LinkedIn:** replace the LinkedIn URL with your profile if different from `https://www.linkedin.com/in/andile-mahlaba`.

3. **Add project links**  
   If you have live demos or other repos for DUT Alumni or Insurance OCR, add `live` or `repo` URLs in the `PROJECTS` array in `src/App.jsx`.

## Build for production

```bash
npm run build
```

Output is in `dist/`. You can deploy that folder to:

- **Vercel** — connect your GitHub repo and set root to `portfolio`.
- **Netlify** — drag-and-drop `dist` or connect repo, build command: `npm run build`, publish directory: `portfolio/dist` (if monorepo) or `dist`.
- **GitHub Pages** — push `dist` to a `gh-pages` branch or use the `gh-pages` npm package.

## Tech

- React 19 + Vite
- No backend; static deploy
