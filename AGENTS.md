# Agent instructions

This repository is an Angular application (standalone components, NgRx for state, Vitest for unit tests). When changing application code, prefer patterns that match the existing modules under `src/app/`.

## Commands

- Install dependencies: `npm ci` (or `npm install`).
- Dev server: `npm start` (runs `ng serve`).
- Production build: `npm run build`.
- Unit tests: `npm test` (watch) or `npm run test:ci` (single run).

## Skills (Angular)

Project skills are managed with [`skills`](https://www.npmjs.com/package/skills) and installed under `.agents/skills/`. Each skill includes a `SKILL.md` (when the agent should apply it) and often a deeper `AGENTS.md` reference inside the skill folder.

| Skill | Purpose |
| --- | --- |
| `angular-best-practices` | General Angular 17+ guidance (signals, templates, RxJS, performance, testing, routing, etc.). |
| `angular-best-practices-ngrx` | NgRx-specific patterns (actions, reducers, effects, selectors, store structure). |

**Restore skills from lockfile (after clone or CI):**

```bash
npx skills experimental_install
```

**Add or update skills (examples):**

```bash
npx skills add alfredoperez/angular-best-practices --skill angular-best-practices --agent cursor -y
npx skills add alfredoperez/angular-best-practices --skill angular-best-practices-ngrx --agent cursor -y
npx skills update -y
```

**Paths in this repo:**

- `.agents/skills/angular-best-practices/SKILL.md` — entry point for core Angular work.
- `.agents/skills/angular-best-practices-ngrx/SKILL.md` — entry point when editing NgRx store code.

Skills run with the same permissions as the agent. Review skill content from the upstream repository before relying on it in sensitive environments.
