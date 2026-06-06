# Portfolio Revamp Tracking

**Branch:** `portfolio-revamp` (off: `main`)
**Design:** Bold & Editorial · Dark + Cyan · Subtle animations
**Started:** 2026-05-09

---

## Design Tokens

- [x] `tailwind.config.js` — accent `#06b6d4` (cyan), `surface-2`, `accent-dim`, custom breakpoints, `font-rej`
- [x] `src/index.css` — clean Tailwind setup, scrollbar → cyan, body `#0a0a0a`
- [x] `src/Components/MainContent.jsx` — blank slate
- [x] `src/App.jsx` — clean, renders MainContent only

---

## Sections

| # | Section        | Component              | Status    | Approved |
|---|----------------|------------------------|-----------|----------|
| 1 | Hero           | `LandingPage.jsx`      | complete  | [x]      |
| 2 | About          | `HeroAbout.jsx` (new)  | complete  | [x]      |
| 3 | Experience     | `ExperiencePage.jsx`   | complete  | [x]      |
| 4 | Projects       | `ProjectsPage.jsx`     | complete  | [x]      |
| 5 | Skills         | `SkillsPage.jsx`       | complete  | [x]      |
| 6 | Contact/Footer | `Footer.jsx`           | complete  | [x]      |

---

## Agent Pattern (per section)
1. **Research Agent** — reads existing component + reports current structure/animations
2. **Research Review** — main agent checks findings
3. **Code Agent** — implements section (full rewrite from main's old code)
4. **Code Review Agent** — checks layout, color, typography, responsiveness

## Rules
- Never add a section to `MainContent.jsx` until user approves it
- Approve each section before starting the next
- No lime (`#aaff00`) anywhere — accent is always `#06b6d4` cyan
- All new components written from scratch (main branch old code is discarded)
