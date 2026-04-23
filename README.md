# Todo App

A clean, responsive Todo App built with React 18.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Features](#features)
- [Environment Variables](#environment-variables)
- [Building for Production](#building-for-production)
- [Running Tests](#running-tests)

---

## Prerequisites

Make sure you have the following installed before setting up the project:

- **Node.js** ≥ 18 LTS — [Download from nodejs.org](https://nodejs.org/)
- **npm** — comes bundled with Node.js (no separate install needed)

> Create React App 5 requires Node.js 14 or higher, but **Node.js 18 LTS or later is strongly recommended** for best compatibility and long-term support.

To verify your versions:

```bash
node --version
npm --version
```

---

## Getting Started

Follow these steps to get the app running locally.

**1. Clone the repository**

```bash
git clone https://github.com/kalpshah-simform/todo-app.git
cd todo-app
```

**2. Install dependencies**

Use `npm ci` for a clean, reproducible install based on the lockfile:

```bash
npm ci
```

> `npm ci` is preferred over `npm install` in this project because a `package-lock.json` is committed. It installs exact versions and is faster in CI/CD environments.

**3. Start the development server**

```bash
npm start
```

The app will open automatically at [http://localhost:3000](http://localhost:3000). The page hot-reloads whenever you save a file.

---

## Available Scripts

All scripts are run from the project root.

| Command | What it does |
|---|---|
| `npm start` | Runs the app in development mode on `http://localhost:3000` with hot-reload |
| `npm test` | Launches the Jest test runner in interactive watch mode |
| `npm run build` | Builds an optimised production bundle into the `build/` directory |
| `npm run eject` | One-way operation that exposes CRA config files (**irreversible**) |

> ⚠️ **Do not run `npm run eject` unless you are certain you need it.** Ejecting permanently exposes and copies all Create React App configuration files into your project. This action cannot be undone.

---

## Project Structure

```
todo-app/
├── public/
│   └── index.html          # HTML template served to the browser
├── src/
│   ├── index.js            # React entry point — mounts <App /> into the DOM
│   ├── App.js              # Root component — holds state, logic, and main JSX
│   ├── ThemeContext.js     # Light/dark theme context with localStorage persistence
│   └── theme.css           # Global styles and CSS custom properties for theming
├── package.json            # Project metadata and npm scripts
└── package-lock.json       # Lockfile for reproducible installs
```

- **`public/index.html`** — The single HTML page that CRA injects the React bundle into. Rarely needs editing.
- **`src/App.js`** — The heart of the app. All todo state management and core UI logic lives here.
- **`src/ThemeContext.js`** — Provides a React context for the light/dark theme. The selected theme is saved to `localStorage` so it persists across browser sessions.
- **`src/theme.css`** — Defines CSS custom properties (variables) for colours and styles. Swapping themes is handled entirely at the CSS level — no CSS-in-JS library is used.

---

## Features

- ✅ **Add** new todo items
- ✏️ **Edit** existing todo items inline
- 🗑️ **Delete** individual todo items
- ☑️ **Toggle** items between active and completed states
- 🔍 **Filter** the list by **All**, **Active**, or **Completed**
- 🧹 **Clear all completed** items in one click
- 🌗 **Light/dark theme toggle** — preference is persisted to `localStorage`

---

## Environment Variables

Create React App supports custom environment variables prefixed with `REACT_APP_`. These are embedded into the build at compile time and accessible via `process.env.REACT_APP_*`.

**To add environment variables:**

1. Create a `.env` file at the project root:

```bash
touch .env
```

2. Add your variables using the required prefix:

```bash
# .env
REACT_APP_API_URL=https://api.example.com
REACT_APP_FEATURE_FLAG=true
```

3. Reference them in your code:

```js
const apiUrl = process.env.REACT_APP_API_URL;
```

**Notes:**

- Variables **without** the `REACT_APP_` prefix are ignored by CRA (except for `NODE_ENV` and `PUBLIC_URL`).
- The `.env` file is already listed in `.gitignore` — do not commit secrets to source control.
- Changes to `.env` require restarting the development server (`npm start`) to take effect.
- No `.env` variables are required to run this project in its default state.

---

## Building for Production

To create an optimised production build, run:

```bash
npm run build
```

This generates a `build/` directory at the project root containing:

- **Minified and bundled JavaScript** — code-split for efficient loading
- **Optimised static assets** — images, fonts, and other files with content-hash filenames for cache-busting
- **A static `index.html`** — the entry point for the deployed app

The `build/` folder is ready to be served by any static file server. For a quick local preview, you can use [`serve`](https://www.npmjs.com/package/serve):

```bash
npx serve -s build
```

The `-s` flag enables single-page app mode, redirecting all routes to `index.html`.

> The `build/` directory is not committed to source control. It should be generated as part of your deployment pipeline.

---

## Running Tests

This project uses **Jest** as the test runner and **React Testing Library** for component testing, both included via Create React App.

To run the tests:

```bash
npm test
```

This launches Jest in **interactive watch mode**. Jest will:

- Run tests related to files changed since the last commit
- Re-run automatically when you save a file
- Prompt you with options to run all tests, filter by filename, or quit

**Useful watch mode shortcuts:**

| Key | Action |
|---|---|
| `a` | Run all tests |
| `f` | Run only failed tests |
| `p` | Filter tests by filename pattern |
| `t` | Filter tests by test name pattern |
| `q` | Quit watch mode |

To run tests once without watch mode (useful in CI):

```bash
CI=true npm test
```
