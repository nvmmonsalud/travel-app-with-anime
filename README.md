# travel-app-with-anime

A starter project for a travel planning app with anime-inspired destinations.

## Tech stack

- **Frontend:** React + Vite + TypeScript
- **Backend:** Reserved (`server/` directory) for future API work

## Project structure

```
.
├── public/            # Static assets
├── server/            # Placeholder for future API/server code
├── src/               # Frontend source code
├── index.html         # Vite HTML entry
├── package.json       # Dependency management + scripts
└── vite.config.ts     # Vite configuration
```

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build:
   ```bash
   npm run preview
   ```

## Architecture overview

- **UI entry point:** `src/main.tsx` mounts the React app.
- **Primary view:** `src/App.tsx` renders the hero section and destination cards.
- **Styling:** `src/main.css` provides the global styles and layout.
- **Static assets:** place images or icons in `public/` for Vite to serve.
- **Future server:** `server/` is ready for an API or backend when needed.
