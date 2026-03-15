# Get your portfolio live (free link for job applications)

Your site is ready to build and deploy. Here’s the fastest way to get a link.

---

## Option 1: Vercel (recommended — free, ~2 minutes)

1. **Push this folder to GitHub** (if you haven’t already)
   - Create a new repo at [github.com/new](https://github.com/new), e.g. `portfolio`
   - In your project folder, run:
   ```bash
   git init
   git add .
   git commit -m "Portfolio ready for deploy"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username.

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in with **GitHub**.
   - Click **Add New…** → **Project**.
   - Import your **portfolio** repo.
   - Leave settings as default (Build: `npm run build`, Output: `dist`).
   - Click **Deploy**.

3. **Get your link**
   - When it finishes, you’ll get a URL like:  
     **`https://portfolio-xxxx.vercel.app`**
   - You can change it in Vercel: Project → **Settings** → **Domains** (e.g. `andile-mahlaba.vercel.app`).

Use this link on your CV, LinkedIn, and job applications.

---

## Option 2: Netlify (also free)

1. Push your code to GitHub (same as above).
2. Go to [netlify.com](https://netlify.com) → **Sign up** with GitHub.
3. **Add new site** → **Import from Git** → choose your portfolio repo.
4. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy**. Your link will be like: `https://something.netlify.app`

---

## After you’re live

- Add your portfolio URL to **LinkedIn** (Profile → Contact info → Website).
- Put the same link on your **CV** and in **job applications**.

If anything fails (e.g. build error), check the build log in Vercel or Netlify; it usually shows the exact error.
