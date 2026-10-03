# Paul Castor’s personal portfolio

A simple one-page introduction, selected work, and direct contact page. Built with React, TypeScript, and Vite.

## Run locally

Use Node.js 20 or newer with npm installed:

```sh
npm ci
npm run dev
```

Open the local address printed by Vite (normally `http://localhost:8080`).

## Build and check

```sh
npm run build
npx tsc --noEmit -p tsconfig.app.json
```

Run the browser checks against a running preview:

```sh
npx playwright install chromium
node qa/check-portfolio.mjs
```

`PORTFOLIO_URL` can point the checks at another preview address. `BROWSER_EXECUTABLE` can select an installed Chromium-based browser. The script checks four screen widths, navigation, keyboard access, disclosures, email copying and its fallback, link destinations, the preview image, and unknown-page recovery.

## Update content

- Identity, email, GitHub profile, and public address: `src/lib/profile.ts`.
- Introduction and biography: `src/components/Hero.tsx` and `src/components/About.tsx`.
- Selected projects and additional projects: `src/components/Projects.tsx`.
- Research papers: `src/components/Publications.tsx`.
- Education, appointments, and service: their components, available through About’s expandable section.
- Contact wording: `src/components/Contact.tsx`.
- Search and sharing metadata: `index.html`.
- Design: `src/index.css`.

When changing the public address, update `src/lib/profile.ts`, `index.html`, `public/robots.txt`, and `public/sitemap.xml` together. The preview image is `public/og-image.png`. The hosting service must route unknown application URLs to `index.html` for the friendly not-found screen to work.

Additional social profiles and a résumé can be added once the real URLs and a reviewed public file are supplied. The portfolio currently uses direct email links; it does not collect messages in a database.

See `REVIEW.md` for the assessment, refinements, verification, and remaining opportunities.

## Accessibility verification

The page uses larger relative text sizes, native expandable sections, visible keyboard focus, labelled contact controls, and the browser’s high-contrast and reduced-motion preferences. All visible standalone controls are checked for at least 44×44 CSS pixel targets.

For the optional automated accessibility audit, install axe-core locally without changing the dependency manifests:

```sh
npm install --no-save --package-lock=false axe-core
node qa/check-accessibility.mjs
```

`AXE_SOURCE_PATH` can point to an existing `axe.min.js` instead. The audit covers mobile, desktop, 200% root text sizing, 320×256 CSS pixel reflow, and forced colors, with extra sections closed and open. It also walks the expanded desktop page by keyboard. A browser reflow simulation is not an actual screen-reader or operating-system magnifier test. Forced-color contrast requires visual inspection when the audit reports it as incomplete.

See `REVIEW.md` for the scope and limitations of the accessibility checks.
