# Project Ze Champions

A **Next.js + TypeScript** app that models mainline Pokémon damage mechanics, including:

- Base stats, EVs, fixed 31 IVs (as per Champions)
- Level-based stat calculation with nature modifiers
- A UI for exploring matchups and damage ranges

---

## Tech stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (via `create-next-app` template)
- **Testing**: Vitest
- **Dev environment**: Devbox

---

## Getting started

### 1. Use Devbox (recommended)

This repo includes a `devbox.json` so you can get a reproducible environment quickly.

Install Devbox by following the instructions on the official site: [`https://www.jetify.com/devbox`](https://www.jetify.com/devbox).

Then, from the project root:

```bash
devbox shell
```

This drops you into a shell with all required tools available (Node, npm, etc.). Inside that shell, install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser to see the app.

### 2. Without Devbox

If you don’t want to use Devbox, you can run the project with your own Node environment:

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000`.

---

## Project structure

Key folders:

- `app/` – Next.js routes and layout
- `src/libs/damage-calculator/`
  - `helpers/`
    - `statHelper.ts` – core stat formula (`calculateStat`)
  - `types/`
    - `stats.ts` – branded types for IV/EV and stat identifiers
    - `nature.ts` – nature definitions and their stat modifiers
- `src/libs/damage-calculator/**/*.test.ts` – unit tests (Vitest)
- `vitest.config.ts` – Vitest configuration
- `tsconfig.json` – TypeScript configuration
- `devbox.json` – Devbox environment definition

---

## Testing

This project uses **Vitest** for unit tests, especially around the damage and stat calculation logic.

From inside the Devbox shell (or your own Node environment):

```bash
npm run test
```

---

## Future work

- Add full damage calculation including:
  - Move power, type effectiveness, STAB
  - Items, abilities, weather, terrain, and other modifiers
- Build a polished UI for selecting Pokémon, moves, items, and conditions
- Add integration tests for key user flows
