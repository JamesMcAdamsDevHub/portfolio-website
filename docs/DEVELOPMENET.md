# Website Development Guide

## Purpose

This document records the process I used to build this website from start to finish. It serves both as documentation for this project and as a reference I can use when creating future websites.

It includes setup instructions, development steps, useful commands, explanations of important concepts, and solutions to problems encountered throughout development.

## Process

### Initial Setup

**Step 1. Install [Node.js](https://nodejs.org/en/download)**

**Step 2. Verify installation**

- Open a terminal and run:

```bash
node --version
npm --version
```

**Step 3. Create the app**

- In the terminal, navigate to the directory where you want to create the project.

- Run the following command, replacing `<Project Name Here>` with the name of your project:

```bash
npx create-next-app@latest <Project Name Here>
```

- After running this command, choose either the default configuration or customize the project.

- For this project, I chose the custom configuration and used the following settings:

```text
Would you like to use TypeScript?        Yes
Which linter would you like to use?      ESLint
Would you like to use React Compiler?    No
Would you like to use Tailwind CSS?      Yes
Would you like your code inside src/?    Yes
Would you like to use App Router?        Yes
Would you like to customize alias?       No
Include AGENTS.md?                       No
```

**Step 4. Read the README.md file**

- This file is automatically created by `create-next-app` and explains the Getting Started basics.

- Most importantly, it explains how to run the development server locally.

- From the project directory, run:

```bash
npm run dev
```

- Then view the project at [http://localhost:3000](http://localhost:3000)

**Step 5. Update the README.md file**

- Save a copy of the default Next.js README elsewhere if it contains information you want to keep for future reference.

- Replace the default README content with documentation specific to the project being created.

**Step 6. Install and configure Prettier**

- Prettier is used to automatically format the project's source code consistently.

- From the project directory, install Prettier as a development dependency:

```bash
npm install --save-dev prettier
```

**Step 7. Install the Prettier extension**

- Installing Prettier in the project makes Prettier available as a development dependency, but VS Code also needs the Prettier extension to automatically format files while editing.

- In VS Code, press `Ctrl+Shift+X` to open the Extensions panel.

- Search for `Prettier - Code formatter`.

- Install the extension published by Prettier.

**Step 8. Configure Prettier to format on save**

- Open the VS Code Settings with `Ctrl+,`.

- Search for `Format On Save`.

- Enable `Editor: Format On Save`.

- Search for `Default Formatter`.

- Set `Editor: Default Formatter` to `Prettier - Code formatter`.

### Understanding the Next.js Project

> **TODO:** Continue expanding this section as I learn more about the development process.
