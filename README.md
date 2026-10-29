# Portfolio Website

A personal portfolio for James McAdams, featuring software projects, professional experience, and a browser-playable Unity game.

**Live site:** [jamesmcadams.com](https://www.jamesmcadams.com)

## Features

- Project cards with image and video galleries, descriptions, and repository links.
- A data-driven resume with a downloadable PDF.
- A browser-playable Minesweeper game built with Unity WebGL.
- Responsive layouts and keyboard-accessible site navigation and gallery controls.

## Tech stack

Next.js, React, TypeScript, and Tailwind CSS. The site is hosted on Vercel.

## Run locally

Use Node.js 24:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run `npm run lint` and `npm run build` before reviewing or deploying changes.

## Project content

Project entries and media paths are defined in [`src/content/projects.json`](src/content/projects.json). Resume content is in [`src/content/resume.json`](src/content/resume.json), and the introduction is in [`src/content/about.json`](src/content/about.json). Static media and the Unity WebGL build are in `public/`.

## Accessibility note

The site includes visible keyboard focus and text descriptions for project media. The embedded Unity Minesweeper game currently uses pointer or touch controls and is not keyboard navigable; its play page explains this limitation.

## Documentation

- [Implementation plan](docs/implementation-plan.md) — original objectives and decisions.
- [Development guide](docs/development-guide.md) — setup notes and development process.
