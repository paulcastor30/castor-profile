# Paul Castor’s personal portfolio

A simple personal introduction, selected work, and direct contact page, with a separate research laboratory at `/lab`. Built with React, TypeScript, and Vite.

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
- Research citations: `src/data/research.ts`; presentation: `src/components/Publications.tsx`.
- Education, appointments, and service: their components, available through About’s expandable section.
- Contact wording: `src/components/Contact.tsx`.
- Search and sharing metadata: `index.html`.
- Design: `src/index.css`.

When changing the public address, update `src/lib/profile.ts`, `index.html`, `public/robots.txt`, and `public/sitemap.xml` together. The preview image is `public/og-image.png`. The build generates initial HTML for all 21 public pages and a friendly `404.html`. `vercel.json` enables clean URLs for these static pages. Other hosts need equivalent extensionless HTML routing and a custom 404 page.

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

## Laboratory

`/lab` has Research, People, and Contact pages. The personal homepage keeps a direct personal contact route and links to the laboratory.

- Group records, researcher names, academic supervision, graduation years, and outputs: `src/data/laboratory.ts`.
- Each group has a stable address under `/lab/research/` and a short, plain-language introduction above its official thesis title.
- 2025 and 2026 are graduation cohorts. The ongoing fish-vendor project is listed separately.
- Accepted papers are cited without clickable links until a confirmed publisher, proceedings, or public paper URL exists. A DOI is not required to record acceptance. Set an output's optional `url` when the verified link becomes available; change its `status` only after confirmation.
- The only public email addresses are the two lab heads' contact addresses. Student email addresses from the supplied table are omitted.
- Portraits use decorative, empty boxes in `src/components/LabShared.tsx`. Replace each box with the corresponding supplied portrait when available. Keep the adjacent name and meaningful image alternative text as appropriate; no broken image URLs are needed.
- Do not add empty demo, code, gallery, or paper-download sections. Add these only when actual material is supplied.
- The address and co-head names follow the owner's supplied records; the pages do not claim formal institutional accreditation or approval.

Build generation lives in `scripts/build.mjs` and `src/prerender.tsx`. Route titles, descriptions, and canonical addresses live in `src/lib/labMetadata.ts`; the sitemap lists every public page.

Run `node qa/check-laboratory.mjs` with `AXE_SOURCE_PATH` pointing to axe-core and optional `BROWSER_EXECUTABLE` / `PORTFOLIO_URL`. It checks the directory, filters, group pages, accepted outputs, contact copying and fallback, navigation, mobile layouts, larger text, reflow, and forced colors.

`node qa/check-lab-keyboard.mjs` verifies every lab page control by keyboard and all 21 public pages with JavaScript disabled.

## October 2026 CV update

The portfolio displays six published papers and thirteen conference entries from the updated owner-supplied CV. Confirmed accepted outputs retain their acceptance label; other entries use “Conference paper” without inferring presentation or publication from conference dates. Five lab groups have directly matching outputs, including the cacao review's publisher link.

Recent featured work highlights goat monitoring and wearable sign-language letter recognition, using the supplied thesis-adviser roles. Earlier engineering work stays available in the projects disclosure. The internship, Associate Editor appointment and term, program committee role, five journal-review records, and seven conference-review records are available through About's background disclosure. Conference details use a second native disclosure so the main journey stays short.

The CV's private phone number and ambiguous GPA are omitted. The original document is not copied into the public website. The public contact section lists the CV's spoken languages: English, Filipino, and Cebuano.

Run `node qa/check-cv-update.mjs` against a preview to verify the updated record and disclosures at four screen widths. Generated `qa/cv-results.json` and screenshots are ignored by Git.
