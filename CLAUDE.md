# CLAUDE.md - AI Assistant Guide for Compound Health

## Project Overview

**Compound Health** ("Metrics That Matter") is a static, evidence-based fitness education website focused on five health metrics that impact longevity: Strength, VO2 Max, LDL Cholesterol, Blood Pressure, and Body Fat Percentage. It is built with vanilla web technologies (HTML5, CSS3, ES6+ JavaScript) with no build tools, frameworks, or backend.

## Repository Structure

```
fitness/
├── index.html                 # Homepage / landing page
├── health-metrics.html        # Metrics overview page
├── strength.html              # Strength metric page (fully populated)
├── vo2max.html                # VO2 Max / cardiovascular fitness page
├── ldl.html                   # LDL cholesterol page
├── blood-pressure.html        # Blood pressure page
├── body-fat.html              # Body fat percentage page
├── tracking.html              # Tracking progress guide
├── tracking-template.html     # Printable tracking template
├── css/
│   ├── main.css               # Primary stylesheet (~1700 lines, all design tokens)
│   └── charts.css             # Chart-specific styles
├── js/
│   ├── navigation.js          # Navigation, hamburger menu, smooth scrolling
│   └── charts.js              # Chart.js visualizations (~450 lines, 8+ chart types)
├── README.md                  # Project overview
├── GRAPHICS_GUIDE.md          # Infographic design specifications
├── GRAPHICS_SUMMARY.md        # Graphics implementation status
└── .gitignore
```

## Technology Stack

| Technology | Purpose | Notes |
|---|---|---|
| HTML5 | Page markup | Semantic elements throughout |
| CSS3 | Styling | CSS Grid, Flexbox, CSS Custom Properties |
| Vanilla JavaScript (ES6+) | Interactivity | No frameworks |
| Chart.js | Data visualizations | Loaded via CDN, not installed locally |
| Google Fonts (Inter) | Typography | Loaded via CDN |
| Heroicons | UI icons | Inline SVGs in HTML |

## Development Workflow

### Running Locally

No build process required. Open `index.html` directly in a browser. All pages are statically linked.

### No Build Tools

There is no package.json, no bundler, no preprocessor. Files are served as-is. Do not introduce build tooling without explicit request.

### No Automated Tests or Linters

There is no test framework, no ESLint, no Prettier, and no CI/CD pipeline configured. Quality is maintained through manual review and browser testing.

### Git Workflow

- The primary branch is `main` (remote) / `master` (local).
- Development uses feature branches with pull requests.
- Commit messages should be clear and descriptive.

## Key Conventions

### HTML Pages

- Each metric page follows a consistent structure: hero header, main content sections with alternating backgrounds, benchmark/data tables, and a footer.
- Pages include citation markers for research references.
- All pages share the same navigation bar (markup duplicated per page, behavior from `navigation.js`).
- Navigation is a sticky top bar with blur effect; includes a mobile hamburger menu.

### CSS Architecture

- All design tokens are defined as CSS Custom Properties in `:root` in `css/main.css`.
- Key color variables:
  - `--primary-color: #4f46e5` (Indigo)
  - `--secondary-color: #7c3aed` (Purple)
  - `--accent-color: #06b6d4` (Cyan)
  - `--accent-warm: #f59e0b` (Orange)
  - `--text-dark: #0f172a`
  - `--bg-white: #ffffff`, `--bg-light: #f8fafc`, `--bg-medium: #f1f5f9`
- Spacing uses the `--spacing-*` scale (xs through xxl).
- Border radii use `--radius-*` tokens.
- Mobile-first responsive design using media queries.
- Reusable component classes: `.metric-card`, `.chart-container`, `.benchmark-table`, `.feature-row`, `.cta-button`.

### JavaScript

- `js/navigation.js`: Handles sticky nav, hamburger toggle, dropdown menus, active page highlighting, smooth scroll for anchor links. Touch and keyboard accessible.
- `js/charts.js`: Creates all Chart.js visualizations. Chart data is hardcoded in this file. Supports bar, line, radar, and horizontal bar chart types. Charts are responsive.
- No module system (no imports/exports). Scripts loaded via `<script>` tags.

### Content Principles

- **Evidence over anecdote** - all health claims must be backed by research.
- **Clarity over complexity** - simple, accessible language.
- **Data-driven** - use visualizations to support key points.
- **No ads, no products** - purely educational.

## Important Guidelines for AI Assistants

### Do

- Maintain the existing vanilla web stack. Do not introduce frameworks, build tools, or package managers unless explicitly asked.
- Use CSS Custom Properties from `:root` for colors, spacing, and typography rather than hardcoding values.
- Follow the existing page structure pattern when creating or modifying metric pages.
- Keep Chart.js loaded via CDN. Chart data lives in `js/charts.js`.
- Ensure all changes work on mobile (responsive design is expected).
- Use semantic HTML5 elements.
- Keep navigation markup consistent across all pages (changes to nav structure must be replicated to every HTML file).
- Cite research when adding health/fitness content.

### Do Not

- Do not add Node.js dependencies, build steps, or package.json.
- Do not introduce CSS preprocessors (Sass, Less, etc.).
- Do not add JavaScript frameworks (React, Vue, etc.).
- Do not add inline styles when a CSS class already exists or a new class would be more appropriate.
- Do not break the existing responsive layout.
- Do not provide medical advice in content — include disclaimers that this is educational only.
- Do not remove the existing CDN-loaded dependencies (Chart.js, Google Fonts) in favor of local copies without explicit request.

### Cross-Cutting Concerns

- **Navigation updates**: The nav bar is duplicated in every HTML file. Any structural change to navigation must be applied to all 9 HTML pages.
- **Chart additions**: New charts should follow the patterns in `js/charts.js` — use `document.getElementById()` to target a `<canvas>` element, configure via Chart.js API, and ensure responsive options are set.
- **New pages**: Follow the existing page template (copy an existing metric page), update the `<title>`, hero section, and content. Add the page to the navigation in all HTML files.

## File Quick Reference

| To modify... | Edit... |
|---|---|
| Site-wide colors/spacing/typography | `css/main.css` (`:root` variables) |
| Page layout and component styles | `css/main.css` |
| Chart-specific styles | `css/charts.css` |
| Navigation behavior | `js/navigation.js` |
| Data visualizations | `js/charts.js` |
| Navigation links (all pages) | Every `.html` file's `<nav>` section |
| Graphics specifications | `GRAPHICS_GUIDE.md` |

## Browser Support

Target the latest versions of Chrome, Firefox, Safari, Edge, and mobile browsers (iOS Safari, Chrome Mobile).
