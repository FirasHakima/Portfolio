# Full prompt (paste into any AI, then attach your CV PDF + certificates)

```
You are a senior front-end engineer and designer. Build my personal portfolio website.

OWNER
Firas Hakima, Software Engineering student, Monastir, Tunisia.
GitHub: https://github.com/FirasHakima
LinkedIn: https://www.linkedin.com/in/firas-hakima-b7bb67256/
I attach my Software Engineer CV and my certificates. Extract from them: bio, education, experience, skills, certifications, contact details. Do not invent anything that is not in the attachments. If something is missing, leave a clear TODO and list all TODOs at the end.

DELIVERABLE FORMAT
Give me a Windows CMD script I can paste into Command Prompt that creates the whole project folder "portfolio" with every file (use PowerShell here-strings called from cmd, or a single Node.js/Python generator script saved with `echo`, whichever is most reliable on Windows). Also give the exact commands to run it locally (for example `python -m http.server 8000`) and to publish it for free on GitHub Pages.
Stack: plain HTML + CSS + vanilla JS. No build step, no frameworks.

LANGUAGES
French, English, German and Arabic. One language switcher in the header, remembers the choice, defaults to the browser language. Arabic must switch the whole layout to RTL (dir="rtl") and use a proper Arabic font (Cairo or Tajawal). All content, not only buttons, must exist in the four languages. Write natural translations, not literal ones, and show me the Arabic and German text so I can proofread.

PROJECTS (important)
My projects are only on GitHub, not deployed, and some repos look unfinished although the projects work on my machine.
1. Fetch my repos live from the GitHub API (https://api.github.com/users/FirasHakima/repos), skip forks, and render them as cards with name, description, main language, topics and a "View code" link.
2. Let me enrich each repo in a config object: custom title, translated description (4 languages), a screen-recording video (mp4) or screenshot stored in /assets, and an optional live demo URL.
3. Because nothing is deployed, show each project working through a short demo video or GIF on the card. Explain in a README how to record these (Windows: Win+G Game Bar or OBS) and where to put them.
4. Add a short "How to run" block per project (clone, install, run command) so a recruiter can try it.
5. Do NOT build any feature that exposes my personal computer (no remote access, no tunnels left open). If I want a live demo later, suggest free hosting (GitHub Pages for static, Render or Railway for backends) instead.

SECTIONS
Hero, About, Projects, Skills, Education, Experience, Certifications (with links to credentials if I have them), downloadable CV (one PDF per language), Contact.

DESIGN
Modern, professional, creative, not a template. Choose one memorable element (for example a hero that reacts to the mouse) and keep everything else calm and disciplined. A restrained palette: one dominant colour, one accent, neutrals; avoid purple-to-blue gradients and generic identical card grids. Distinctive display font plus a clean body font. Automatic light and dark mode. Motion only where it helps, and respect prefers-reduced-motion.

QUALITY BAR
Responsive from 360px to 1440px, semantic HTML, keyboard accessible, good contrast, meta tags and Open Graph for link previews, fast load. Fix any bug you find before answering. At the end give me: the TODO list, and 3 ideas to push the portfolio further.
```

## Tips
- Attach the CV as PDF; ask the AI to summarise what it extracted so you can correct it before it builds.
- Build in layers: structure first, then design polish, then translations review.
