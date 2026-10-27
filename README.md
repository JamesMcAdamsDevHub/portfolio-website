# Portfolio Website

## Description

A website to showcase my personal projects and resume for the purpose of providing future prospective employers a glimpse into my skillsets and experience.

## Objectives

### Create a strong landing page

The landing page (Home) must include:

- [x] About me
- [x] Featured project
- [x] Easy navigation to Projects and Resume pages
- [x] Links to GitHub and LinkedIn and Instagram

### Create a data-driven Projects page

The Projects page must include:

- [x] A list of projects generated from project data
- [x] Project cards containing relevant project information
- [x] Project images
- ~~[ ] Links to individual project detail pages~~
- [x] Repository links when available
- [x] Play links for browser-playable projects when available
- ~~[ ] Project detail pages generated from centralized project data~~

### Create a data-driven Resume page

The Resume page must include:

- [x] Professional profile
- [x] Work experience
- [x] Education
- [x] Skills
- [x] Resume content loaded from a centralized resume.json file
- [x] Downloadable PDF version of my resume

### Support browser-playable projects

Projects with a browser-playable version must include:

- [x] A Play option from the associated project
- [x] A Play page
- [x] Support for embedding Unity Web builds
- [ ] ~~Navigation back to the associated project~~

### Create a responsive and accessible user interface

The website must include:

- [x] Responsive layouts for desktop and mobile devices
- [x] Clear and consistent navigation
- [x] Semantic HTML where appropriate
- [x] Keyboard-accessible navigation and portfolio controls
- [x] Appropriate alternative text for informative images
- [x] Consistent styling throughout the website

The embedded Unity Minesweeper game currently uses pointer or touch controls. Its play page explains this limitation; keyboard support for the game is future work.

### Create an easily maintainable project system

The website must:

- [x] Store project information in a centralized JSON file
- [x] Allow a project to be added primarily by adding its data and media
- [x] Avoid project-specific pages and components when reusable solutions are appropriate
- [x] Support optional project information such as repository links, playable demos, and featured status

### Deploy the website

The finished website must:

- ~~[ ] Be statically exported with Next.js~~
- ~~[ ] Be automatically deployed through GitHub Actions~~
- [x] Be hosted with ~~GitHub Pages~~ Vercel
- [x] Be available at jamesmcadams.dev
- [x] Use HTTPS

## Run locally

Use Node.js 24, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Run `npm run lint` and `npm run build` to check the project before a review or deployment.

Project details are in `src/content/projects.json`, and resume details are in `src/content/resume.json`.
