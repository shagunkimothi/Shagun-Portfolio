# Shagun Kimothi — Portfolio

A responsive React + Vite portfolio with Tailwind CSS, Framer Motion, and Lucide icons.

## Requirements
- Node.js 18+ (Node.js 20+ recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```

## Add your resume
Copy your current resume PDF into `public/` and name it exactly:
`Shagun_Kimothi_Resume.pdf`

The resume buttons point to `/Shagun_Kimothi_Resume.pdf`. The PDF is intentionally not fabricated or included as a placeholder.

## Update LinkedIn
Open `src/data/profile.js` and replace the empty `linkedin` value with your public profile URL, for example:
`https://www.linkedin.com/in/your-username/`

The previously supplied LinkedIn URL was a feed URL, so it is not used as a personal profile link.

## Contact form (optional)
The contact form uses Formspree when configured.

1. Create a form at https://formspree.io.
2. Copy `.env.example` to `.env`.
3. Set `VITE_FORMSPREE_ENDPOINT` to your Formspree endpoint.
4. Restart the Vite development server.

If the endpoint is unset, the form displays a configuration notice and directs visitors to email instead. It does not pretend to submit a message.

## Deploy to Netlify
- Push the project to GitHub.
- Create a new Netlify site from the repository.
- Build command: `npm run build`
- Publish directory: `dist`
- Add `VITE_FORMSPREE_ENDPOINT` in Site configuration → Environment variables if using Formspree.

## Deploy to Vercel
- Import the GitHub repository into Vercel.
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Add the optional environment variable if using Formspree.

## Deploy to GitHub Pages
For GitHub Pages, configure Vite's `base` in `vite.config.js` to `'/repository-name/'` if deploying to a project page, then build and publish `dist` using GitHub Actions or a Pages workflow. For a user site repository named `username.github.io`, the default `/` base is appropriate.

## Edit portfolio content
Personal information, skills, education, experience, project details, and social links are in `src/data/profile.js`.

## Notes
- The engineering lab diagrams and CI/CD run button are frontend demonstrations, not live AWS or Jenkins integrations.
- The developer terminal is a safe simulated interface. It does not execute operating-system commands.
- Project links point to the public GitHub repositories supplied for this portfolio.
