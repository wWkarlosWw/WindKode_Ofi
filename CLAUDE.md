# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

WindKode — landing/portfolio site for a software development startup. Mission: custom software and process automation "with the agility of the wind" (lightweight, fast, accessible apps). Primary language of content and commits is Spanish; the UI is bilingual (ES default / EN) via vue-i18n.

## Commands

Uses pnpm (pnpm-lock.yaml is the current lockfile).

```sh
pnpm dev          # Vite dev server with HMR
pnpm build        # type-check + production build (runs both in parallel)
pnpm type-check   # vue-tsc only
pnpm preview      # serve the production build
```

There is no linter or test runner configured.

## Commit convention

Enforced by husky + commitlint (`@commitlint/config-conventional`). Format: `<tipo>: <descripción breve>` with types `feat|fix|docs|style|refactor|perf|test|chore`. Descriptions are written in Spanish (see `commit.md` for examples).

## Stack

Vue 3 (Composition API, `<script setup lang="ts">`), TypeScript, Vite 8, TailwindCSS v4 (via `@tailwindcss/vite`, no tailwind.config — theme lives in `src/assets/main.css` `@theme` block), Vue Router 4, Pinia (setup-store style), vue-i18n v11 (Composition API, `legacy: false`).

## Architecture

Data flow: **View → Composable → Service → Store**. Components receive props and emit events only — no business logic in components.

- `src/components/ui/` — atomic base components (AppButton, AppCard, AppBadge, WLogo, CtaLink), styled with Tailwind, variant props
- `src/components/layout/` — AppNavbar, AppFooter, AppSection (page chrome, mounted once in App.vue)
- `src/components/shared/` — business components (ProjectCard, ContactForm)
- `src/composables/` — thin reactive wrappers (useLocale wraps locale.store, useScrollTo, useIntersectionObserver)
- `src/services/` — data layer returning Promises (currently mock data; project mock text is resolved through i18n so it localizes)
- `src/data/` — static UI content (services, stats, team, pillars, marquee items) with lucide icon components; user-facing text stays in i18n, these arrays hold only keys + icons
- `src/stores/` — Pinia setup stores; `locale.store` is the single writer for locale (syncs vue-i18n, `<html lang>`, and localStorage)
- `src/types/` — shared interfaces (Project, Skill, ContactForm)

Each component folder has an `index.ts` barrel — import via `import { AppButton } from '@/components/ui'`. Path alias `@` → `src/`.

## i18n rules

- Translation files: `src/i18n/locales/es.json` and `en.json`. Both files must always have identical key structure; `es` is the fallback locale.
- Keys are grouped by scope (`nav`, `hero`, `servicios`, `footer`, …) and named in Spanish.
- In components use `const { t } = useI18n()` — never hardcode user-facing strings.
- Mock/data text (e.g. projects) also goes through i18n (`projects_data.*`).
- Locale persists in localStorage; change it only through the locale store / useLocale.

## Design system

The palette is **semantic and theme-aware**, defined once in the `@theme` block of `src/assets/main.css`: abyss (page background), graphite (surfaces), carbon (elevated surfaces), steel (muted accent), silver (body text), platinum (CTA background), ink (max-contrast foreground — use it instead of `white`/`black` utilities), halo (CTA hover), veil (shadow color). Light values live on `:root`; dark values are redefined under `:root.dark` and duplicated inside a `prefers-color-scheme: dark` media block for the system default — **keep those two dark blocks in sync**. Theme selection: default follows the OS; `theme.store.ts` persists a manual `light`/`dark` override in localStorage by toggling a `.light`/`.dark` class on `<html>` (no class = system). No `dark:` variants are needed — colors flip via the tokens, so never hardcode `text-white`, `bg-black`, raw hex, or rgba in components (use `text-ink`, `border-ink/10`, the `--metal-*`/`--logo-glow` vars, etc.). Font tokens: Bebas Neue = display for giant uppercase headings, Fraunces = headline, Inter = body.

When consuming Pinia stores outside components, and in composables, use `storeToRefs` to keep reactivity (see `useLocale`/`useTheme`). Dark, minimalist aesthetic; big display titles use the `.text-metal` gradient class, primary CTAs use `CtaLink` (which carries the `.btn-shine` periodic shimmer). Icons come from `@lucide/vue`. Scroll-reveal animations use the `RevealOnScroll` shared component. Brand logo: `src/assets/svg/W-logo.svg` (inlined as the `WLogo` ui component so it inherits `currentColor`).

## Routes

Each nav section is its own page: `/` (hero + teasers), `/servicios`, `/nosotros`, `/equipo`, `/proyectos`, `/agenda` (contact form). The navbar logo links home ("Inicio" is the logo, not a nav item); the navbar morphs into a floating island pill on scroll.
