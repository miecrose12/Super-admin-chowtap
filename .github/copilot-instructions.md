## Purpose

Provide concise, actionable guidance for AI coding agents working on this React + Vite admin template.

## Quick project overview

- Tech stack: React (v19) + Vite, Tailwind CSS, PostCSS, ESLint.
- App entry: [src/main.jsx](src/main.jsx) → [src/App.jsx](src/App.jsx).
- UI structure: layout components live under [src/components/layout](src/components/layout) (see `Layout.jsx`, `Header.jsx`, `Sidebar.jsx`).
- Pages: route views are in [src/pages](src/pages) (e.g., `Dashboard.jsx`, `Analytics.jsx`, `Login.jsx`).

## How to run (developer commands)

Use scripts in `package.json`:

```bash
npm run dev    # starts Vite dev server with HMR
npm run build  # production build
npm run preview# preview built app
npm run lint   # run ESLint across the repo
```

## Key patterns and conventions (project-specific)

- Routing & auth: `src/App.jsx` uses `react-router-dom`. Routing is split into a public `/login` route and protected routes mounted under `/` via the `Layout` component. Authentication is a simple localStorage boolean `authenticated` — many components rely on this behavior for redirects.
- Layout pattern: `Layout.jsx` composes `Sidebar` + `Header` and renders nested routes via `<Outlet/>`. Toggle and collapse state for the sidebar is lifted into `Layout` and passed down as props.
- Pages ↔ Routes mapping: file names in `src/pages` directly correspond to route paths (e.g., `Analytics.jsx` → `/analytics`). Keep that 1:1 mapping unless you add explicit route declarations in `src/App.jsx`.
- Styling: Tailwind utility classes are used in JSX. Global styles are in [src/index.css](src/index.css) and [src/App.css](src/App.css). PostCSS and Tailwind config are at `postcss.config.js` and `tailwind.config.js`.
- Icons: project uses `react-icons` and `lucide-react` for UI icons.

## Code edits guidance (what to change and where)

- To add a new page: create `src/pages/NewPage.jsx`, then add a `<Route path="new" element={<NewPage/>} />` inside the protected `<Route path="/" ...>` block in [src/App.jsx](src/App.jsx).
- To change top-level layout behavior (sidebar, header): modify [src/components/layout/Layout.jsx](src/components/layout/Layout.jsx) and propagate props to `Sidebar.jsx` and `Header.jsx`.
- To add global state or a store: prefer adding a small context/provider near `src/App.jsx` and wrap `<Routes>` so `Layout` and pages can consume it.

## Linting, formatting, and tests

- Lint: `npm run lint` (ESLint config is at project root; follow existing ESLint rules). There are no tests in the repo by default — add tests under `src/__tests__` if needed.

## Integration & external dependencies

- No backend is included. Auth is client-side only (localStorage). Integrations with an API should be added as a separate service module (e.g., `src/services/api.js`) and injected via context or props.
- Key deps: `react-router-dom`, `tailwindcss`, `vite`, `eslint`.

## Examples (concrete snippets)

- Protected route pattern (see [src/App.jsx](src/App.jsx)) — uses localStorage `authenticated` flag and `<Navigate/>` for redirects.
- Layout composition (see [src/components/layout/Layout.jsx](src/components/layout/Layout.jsx)) — `Layout` toggles sidebar and passes handlers to `Sidebar`/`Header`.

## What to avoid

- Don’t assume server-side auth — the current app uses client-side localStorage for dev convenience.
- Avoid changing routes without updating `Layout` or the corresponding `pages` file names; this repo follows a simple routes→pages mapping.

## When in doubt

- Look at `src/App.jsx`, `src/components/layout/Layout.jsx`, and the files in `src/pages` first — they contain the majority of app wiring.

---
If you'd like, I can iterate on wording, add examples for adding a new component, or include ESLint rules to follow. What should I refine next?
