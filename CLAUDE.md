# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an English pronunciation learning project ("English Practicing 21 Days") that uses VuePress to build a documentation site. The project contains 21 SRT (subtitle) files with Chinese pronunciation instruction content covering vowels, consonants, stress, rhythm, intonation, and other pronunciation topics.

## Development Commands

### Local Development
```bash
pnpm dev
# or with clean cache
pnpm run docs:clean-dev
```
Starts VuePress dev server at http://localhost:8080 (default). The dev server has hot module replacement for immediate feedback when editing markdown files.

### Build
```bash
pnpm run docs:build
```
Generates static files in `docs/.vuepress/dist/` for production deployment.

### Update Dependencies
```bash
pnpm run docs:update-package
```
Updates VuePress and related packages using vp-update.

## Architecture

### Directory Structure
- **`data-srt/`**: Contains 21 SRT subtitle files (1-21) covering pronunciation lessons in Chinese. These are source materials, not directly rendered in the docs site.
- **`docs/`**: VuePress documentation source
  - **`README.md`**: Home page with hero layout
  - **`get-started.md`**: Getting started guide
  - **`.vuepress/config.js`**: VuePress site configuration (theme, navbar, bundler settings)
  - **`.vuepress/.cache/`** and **`.vuepress/.temp/`**: Generated during development (ignored by git)

### Technology Stack
- **VuePress 2.0.0-rc.20**: Static site generator
- **Vue 3**: UI framework
- **Vite**: Build bundler
- **pnpm**: Package manager

### VuePress Configuration
Located at `docs/.vuepress/config.js`. Currently uses:
- Default theme with minimal navbar (`/` and `/get-started`)
- Vite bundler
- English language (`en-US`)

When modifying the site structure, update the navbar or sidebar configuration in this file.

## CI/CD

GitHub Actions workflow (`.github/workflows/deploy-docs.yml`) auto-deploys to GitHub Pages on push to `main` branch:
1. Installs dependencies with pnpm
2. Builds docs with `pnpm run docs:build`
3. Creates `.nojekyll` file in output
4. Deploys `docs/.vuepress/dist/` to `gh-pages` branch

**Note**: The workflow triggers on `main` branch, but current repo is on `master` branch. Update the workflow if needed.

## Working with Content

### Adding New Pages
1. Create `.md` files in `docs/` directory
2. Update navbar/sidebar in `docs/.vuepress/config.js`
3. Use VuePress markdown extensions and Vue components as needed

### SRT Files
The SRT files in `data-srt/` contain lesson transcripts. Each file follows pattern: `{number}_{topic}.srt`. To integrate these into the documentation site, you'll need to parse and convert them to markdown or create custom Vue components to display them.
