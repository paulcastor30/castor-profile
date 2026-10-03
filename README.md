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

When changing the public address, update `src/lib/profile.ts`, `index.html`, `public/robots.txt`, and `public/sitemap.xml` together. The preview image is `public/og-image.png`. The build generates initial HTML for all 26 public pages and a friendly `404.html`. `vercel.json` enables clean URLs for these static pages. Other hosts need equivalent extensionless HTML routing and a custom 404 page.

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

`node qa/check-lab-keyboard.mjs` verifies every lab page control by keyboard and all 26 public pages with JavaScript disabled.

## October 2026 CV update

The portfolio displays six published papers and thirteen conference entries from the updated owner-supplied CV. Confirmed accepted outputs retain their acceptance label; other entries use “Conference paper” without inferring presentation or publication from conference dates. Eight lab groups have ten directly matching outputs, including the cacao review's publisher link.

Recent featured work highlights goat monitoring and wearable sign-language letter recognition, using the supplied thesis-adviser roles. Earlier engineering work stays available in the projects disclosure. The internship, Associate Editor appointment and term, program committee role, five journal-review records, and seven conference-review records are available through About's background disclosure. Conference details use a second native disclosure so the main journey stays short.

The CV's private phone number and ambiguous GPA are omitted. The original document is not copied into the public website. The public contact section lists the CV's spoken languages: English, Filipino, and Cebuano.

Run `node qa/check-cv-update.mjs` against a preview to verify the updated record and disclosures at four screen widths. Generated `qa/cv-results.json` and screenshots are ignored by Git.

## Researcher and lab-head portraits

Original uploads remain in `public/images/researchers/` and `public/images/lab head/`, with the supplied folder names unchanged. Only explicitly matched, optimized web copies under `public/images/portraits/` are deployed. Their displayed names and asset locations are listed in `src/data/portraits.ts`. Existing thesis records retain their groups; uploaded photos alone do not establish a new research group or degree record.

The current match includes portraits for 40 of the 52 unique researchers and both lab heads. There are 53 group memberships because Larita appears in both a graduated BS group and an ongoing MS group. Twelve researcher cards retain empty boxes. Paul Castor's portrait also appears in the personal About section. The owner confirmed that the Ral Angelo folder matches the thesis researcher; the directory now uses the folder spelling, Ral Angelo S. Lluisma. Photos for Selena B. Suario, Marie Glo C. Generalao, and Raymond M. Valdepeñas remain unassigned because no matching thesis-group record has been supplied.

Images use their original composition, with no CSS cropping or face changes. Smaller WebP copies remove unnecessary metadata, reserve layout space, decode asynchronously, and load lazily. Adjacent names identify each person, so portraits use empty alternative text and are excluded from repeated screen-reader announcements. An image that fails to load returns to the clean frame. Lab-head photos are shown only when available.

When adding a photo later, create a small web copy in `public/images/portraits/` and add its exact existing display name, URL, and dimensions to `src/data/portraits.ts`. Test with `node qa/check-portraits.mjs`. The build excludes the original upload folders and desktop metadata from `dist`.

## Five additional ongoing groups

The directory now includes 21 groups: 5 MS and 16 BS groups. Six groups are ongoing; the existing 2025 and 2026 cohorts continue to describe graduates. New entries cover rice tungro disease, bell-pepper aphid damage, Smart G-ID goat profiling, GeoSentry landslide warnings, and carbon dioxide monitoring with zeolite adsorption.

The owner confirmed Alce as an additional co-adviser for Larita's MS thesis and Dr. Slamet Riyadi as an additional co-adviser for both bell-pepper and GeoSentry theses. Use the optional `additionalCoAdvisers` array in `src/data/laboratory.ts` when a group has more than one co-adviser. The public page labels and lists the full supervision team. Paper status or group associations should not be inferred from ongoing thesis registration.

Run `node qa/check-new-groups.mjs` for the five new groups' records, images, direct contact, and phone, desktop, larger-text, reflow, and forced-color audits.

## Latest CV reconciliation

The attached CV's six published and thirteen conference records already match the website's titles, author lists, venues, and DOI addresses. The personal work section now includes all four selected research collaborations from the CV: goat monitoring, wearable ASL letters, calamansi disease detection, and fish transport temperature monitoring. The four supplied research periods are displayed without treating them as evidence of thesis completion or publication. The latter two projects sit in the existing expandable list and link to the corresponding lab teams.

Andrew Earl L. Andres's newly uploaded portrait is matched to his existing Smart G-ID researcher record. Current web assets total 42 portraits: forty researchers and two lab heads. There are 41 researcher photo placements because Larita appears in two groups.


## Group outputs and compact People directory

Research outputs are assigned by explicit group/title matches in `src/data/laboratory.ts`, then resolved from the shared CV citation records in `src/data/research.ts`. Rice tungro (Larita) has two, Smart G-ID (Castillo) has two, and bell-pepper monitoring (Listanco) has one. The five earlier mapped outputs remain, giving ten outputs across eight groups. A researcher appearing in a citation does not by itself establish the paper's thesis-group association. The CNC paper is not attached to Smart G-ID; Larita's MS papers are not attached to his former BS group. No DOI or acceptance status is inferred.

The People directory shows six groups per page with researcher names visible and portraits inside native disclosures. Search matches names and group titles without requiring accents. Program and graduation/current filters, clear controls, result counts, and previous/next buttons keep the directory usable as it grows. Filters and page state use `q`, `program`, `group`, and `page` URL parameters. Page changes focus the directory heading; filtering preserves the active control. All research detail pages remain individually available in initial HTML.

Run `node qa/check-directory.mjs` with the existing browser/axe environment settings to check search, filters, pagination, membership totals, output counts, native disclosures, and collapsed/expanded accessibility layouts. Generated results and screenshots are ignored by Git.


## Individual People directory (current design)

This replaces the earlier six-thesis-group People layout. `src/data/people.ts` derives a unique person directory from the existing thesis memberships; it does not create new affiliations. All 52 people appear once across five pages, with 53 program memberships retained. Twelve compact entries per page show portraits directly. Forty unique researcher photos are displayed; twelve people retain clean boxes. Group detail pages retain their original full researcher cards.

Both the lab introduction and People explicitly state BSCA and MSCA supervision. People has independent program and status/graduation-class filters plus accent-insensitive name/topic search. Default ordering is current researchers first, then newest graduation class, with MSCA and BSCA headings and alphabetical surname order within each category. A person with two memberships appears once with both records; a program/class filter shows only matching memberships. Result counts represent unique people. URL parameters remain q/program/group/page. Missing photos and unrelated academic records are unchanged.

Co-head email links remain visible, Paul's profile links to his personal portfolio, and a closing collaboration invitation provides direct contact. The directory does not publish student email addresses. `qa/check-directory.mjs` now verifies individual counts, academic grouping, surname ordering, combined filters, preserved dual memberships, pagination and contact/research controls under ten layout/accessibility scenarios.


## Owner-requested co-head restoration

The People co-head cards retain the previous name, portrait, “Co-head · Master of Science” line, and email link. The added faculty-rank line and personal-portfolio link inside Paul's card were removed at the owner's request. Further refinements should preserve this area unless explicitly requested. Directory instructions have been shortened while preserving program explanations, sorting, filters, portraits and contact.


## Scrollable People directory (current owner preference)

People now renders all 52 unique researchers on a single continuous page. Previous/Next controls and page numbers are removed. Old page query parameters no longer hide any records. Search and independent BSCA/MSCA and graduation/current filters remain; current researchers appear first, followed by newest graduation class, with program headings and alphabetical surnames. Compact visible portraits, missing-photo boxes, research links, and restored co-head cards are retained. Images remain lazy-loaded. Program and class headings make the long page navigable; direct lab contact remains in the header.


## Navigation refinement for the continuous directory

People retains the complete scrollable roster and the owner-protected co-head cards. Section links below the filters jump to the visible current/program/class headings without hiding people. Headings receive focus and clear the navigation header; a closing link returns to researcher search. The collaboration block also links to Contact's visible/copyable email addresses for visitors whose mail app links do not work. Research and People use the same “Status / graduation class” filter label. Academic ordering compares current status, graduation year and program directly, avoiding a fixed future-year cutoff.


## Research ordering

Research now uses explicit status/class and program sections: ongoing MSCA, ongoing BSCA, then graduates by newest class with MSCA before BSCA within a class. Projects are alphabetical within each section. Program/cohort filters retain this order and omit empty sections. Card headings are level three below level-two section headings. Graduation cohorts do not establish paper publication status.


## Portrait display fitting

At the owner's request, portrait presentation now fills each existing frame using CSS object-fit: cover and object-position: center 20%, replacing the earlier contain setting that created uneven side bands. Display crops favor the upper part of each photo to keep faces visible. Source files and optimized assets are unchanged; no pixels, identities or names were edited. Empty-photo frames and broken-image fallbacks remain. Co-head card content and layout are unchanged.


## Princess Castillo portrait

Princess April E. Castillo's uploaded photo is matched to her existing Smart G-ID and People records. The optimized WebP is 525×700 and approximately 86 KB; the original remains unchanged and excluded from deployment output. Optional portrait framing metadata allows this casual photo's on-page crop to emphasize her face without altering the image file. Existing portraits retain their prior framing. There are now 43 matched assets: 41 researchers and two co-heads. Eleven researchers retain empty frames.


## John Bernal portrait

John Benedict D. Bernal's uploaded photo is matched to his existing People and Smart G-ID records. A 525×700 WebP copy is approximately 61 KB. Display framing emphasizes the person with comfortable headroom; the source upload is unchanged. All three Smart G-ID researchers now have portraits. Current totals are 44 matched assets, comprising 42 researchers and two co-heads, with ten researchers retaining empty boxes.


## SEO and public indexing

Search metadata now describes the lab, both co-heads, BSCA/MSCA researchers, and individual projects accurately. The existing portfolio remains Paul's personal destination; lab-head names and research roles remain on People and group pages. Dedicated lab-head profiles and their navigation links were removed at the owner's request. Co-head cards remain unchanged. No additional student profile pages are generated.

`SearchData` provides linked Website, Organization, Person, WebPage/ProfilePage and breadcrumb identities. People has a researcher list on the unfiltered page; filtered URLs do not assert a full visible list. ProfilePage markup is restricted to individual profile content. No degrees, academic appointments, official lab recognition, publications or external identities are fabricated. Project descriptions mention their existing researcher names.

Canonical URLs, titles/descriptions, social metadata and indexing settings agree between initial HTML and client navigation. Existing public pages retain the personal site's sharing image. Unknown pages use noindex and omit structured data. Builds generate the 26-page sitemap from the same routes that are pre-rendered, avoiding forgotten profile URLs. `robots.txt` points to the public sitemap. Run `qa/check-seo.mjs` with the existing browser/axe environment to verify SEO content and profile journeys.

After publication, verify a URL-prefix property for `https://paulrodolfcastor.vercel.app/` in Google Search Console. Use Google's supplied ownership-verification method; no verification token is included in this repository. Submit `sitemap.xml`, inspect the homepage, lab homepage, People and Research, and request indexing where appropriate. Test live structured markup using Google's Rich Results Test. Check indexing and search-performance reports before claiming improved visibility. Local tests do not establish live deployment, Google indexing, ranking or rich-result eligibility.

Official references: https://developers.google.com/search/docs/appearance/structured-data/profile-page and https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl .


## Dedicated profile removal

The two added lab-head profile routes, page/data files, metadata entries, navigation links and sitemap URLs have been removed. Structured Person identities reference the existing portfolio and People page instead. The lab remains part of the personal portfolio. Existing search titles/descriptions, breadcrumbs, initial HTML, researcher names, canonical URLs and generated 26-page sitemap remain.
