# Portfolio review and refinement

Reviewed October 3, 2026. Goal: help people get to know Paul and contact him through a minimalist, beginner-friendly personal portfolio.

## Assessment

The original site had useful personal and project information, but its main journey was buried in twelve sections, repeated technical descriptions, and seven navigation destinations. Social links led to service homepages, the résumé PDF and social preview image were missing, and the search metadata used a different address from the repository's published homepage. These were credibility and usability problems for someone arriving for the first time.

## Refinements

| Original issue | Refined behavior |
| --- | --- |
| Seven navigation choices and a mobile menu | About, My work, and Contact; Laboratory added in the later lab refinement |
| Full-screen introduction, repeated specialist terminology | Short personal introduction with a plain-language description and direct email button |
| Long academic and engineering sections | Education, experience, academic service, extra projects, and papers accessible through keyboard-operable disclosures |
| Seven competing featured projects | Three examples with purpose, role, and a project-specific email link; four others remain available |
| Generic GitHub, LinkedIn, Scholar, and ORCID destinations | Actual GitHub profile; unprovided personal profiles omitted |
| Missing résumé PDF | Broken download links removed |
| Indirect, technical contact language | Visible email address, Email me, Copy email address, and an explanation of how each works |
| Content depends on reveal animations | Content visible immediately; reduced-motion preference respected |
| Missing keyboard skip link and anchor offsets | Skip-to-content link, visible focus rings, and sticky-header clearance |
| Missing preview image and sitemap | Local 1200×630 PNG preview, sitemap, and consistent site metadata |
| Unused query, toast, and tooltip providers on the homepage | Leaner application shell |

Existing role and email were confirmed by the owner. No new career achievements, numerical results, or personal profile URLs were invented. The ambiguous grade metric was removed from the public education summary; degrees and career records remain available.

## Verification

- Production build passed.
- TypeScript application check passed.
- ESLint passed for changed application files.
- axe-core WCAG A/AA automated audits found zero violations at 390 and 1440 pixels, with details collapsed and expanded. Automated checks do not establish full accessibility compliance.
- Browser checks passed at 320, 390, 768, and 1440 pixels wide.
- No horizontal overflow in collapsed or expanded content.
- About, My work, and Contact links resolve and clear the sticky header.
- Clipboard success and permission-denied fallback verified.
- Native disclosures verified with keyboard Enter.
- Skip link transfers keyboard focus to main content.
- All rendered internal anchors resolve; email links target the confirmed address.
- No placeholder social homepages or missing résumé links remain in the rendered page.
- Social preview PNG loads successfully.
- Unknown URLs recover to the homepage.
- No browser console errors or uncaught application exceptions in checked journeys.

Use `qa/check-portfolio.mjs` to repeat the browser checks. Screenshots and results are generated locally under `qa/` and are ignored by Git.

## Remaining opportunities and limits

Add real project photos, demonstrations, repository links, and attributable measured results when available. These would strengthen credibility beyond the existing descriptions. LinkedIn and Scholar still need the owner's exact profile addresses. ORCID and Scopus were added from the supplied CV during the accessibility refinement. Restore a résumé button only after supplying a reviewed public file.

The canonical address is centralized in `src/lib/profile.ts` and also appears in `index.html`, `public/robots.txt`, and `public/sitemap.xml`; update all four when changing the public domain. The owner confirmed the Vercel homepage as the public address. Live-domain availability was not established by this review.

This is a local refinement, not a production deployment or a guarantee of increased traffic. Browser checks verify the website's contact links and clipboard behavior, not email delivery or the configuration of a visitor's email application.

## Accessibility refinement on October 3, 2026

The original simplified layout passed its basic automated audit, but that did not resolve all usability concerns for people with disabilities. This pass reviewed access for people with low vision, limited dexterity, motion sensitivity, and people using keyboard or screen-reader navigation.

| Barrier assessed | Refinement |
| --- | --- |
| Small fixed-size text | Text sizes now use relative units; descriptions and controls generally use at least a 1rem size. Metadata uses at least .875rem. Browser text preferences can enlarge the page. |
| Identical project link names | Each email link has a distinct accessible name including the project title, while preserving its visible wording for speech input. |
| Navigation scrolls without a clear focus destination | Main sections can receive focus when their anchor is activated. Keyboard users can skip directly to content or contact. |
| Persistent header may consume a magnified viewport | Header stays in document flow at narrow widths or short heights; navigation wraps instead of hiding choices. |
| Clipboard failure requires difficult manual selection | Labelled read-only email field automatically selects its address on focus; a failed copy action focuses and selects the field and announces manual copy instructions. |
| Repeated copy status may be missed | Polite, atomic status region refreshes for each attempt; no short timeout removes the message. |
| Technical or poetic headings can obscure purpose | About me, My work, and Contact me are direct headings; the university name and additional project descriptions are explained in plain language. |
| Small interaction targets | Visible standalone links, buttons, summaries, and the email field meet the checked 44×44 CSS pixel design target. |
| Color or motion preferences | Browser forced-color mode is respected, focus remains visible, and scroll movement is immediate. No autoplay, flashing content, or audio-only instructions are used. |
| Missing evidence links | Exact ORCID and Scopus profile URLs, and five paper DOI links, were taken from the supplied CV. |

The CV was used as reference material. It was not uploaded, changed, or published; the phone number was not added to the website. The existing role, email, and public Vercel address remain as confirmed by the owner.

### Evidence

The final production build, TypeScript check, and changed-file lint checks passed. Contact and navigation journeys passed at widths of 320, 390, 768, and 1440 CSS pixels, including clipboard success and permission-denied fallback, focus transfer, keyboard disclosures, unique project link names, and both skip links. No browser application errors were found in those journeys.

axe-core audits using WCAG 2.2 A/AA-related rules found zero violations in phone, desktop, 200% root text-size, and narrow reflow scenarios, with disclosures both closed and open. Forced-color audits also found zero violations, but flagged color contrast for manual review; the forced-color screenshots were visually inspected. A complete keyboard walkthrough reached 23 controls with visible focus and without header obstruction. Standalone control target dimensions and the absence of page-level horizontal overflow were checked automatically.

The 320×256 CSS pixel scenario checks a layout equivalent to a 1280×1024 viewport at 400% zoom. It does not simulate every magnifier or actual browser zoom behavior. The 200% root-font scenario checks text enlargement separately. See [W3C reflow guidance](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html), [target-size guidance](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), and [focus-obstruction guidance](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html).

### Practical limits

This is not a claim of full WCAG conformance or usability for every disability. Actual VoiceOver/NVDA sessions, operating-system magnifiers, and usability sessions with people with disabilities have not been performed. A brief session with those users remains the strongest next validation. The page gives visitors a direct route to report difficulty by email.

Research-profile and publisher link destinations came from the owner's CV; access requirements and current availability on those external websites were not tested. Email delivery, increased traffic, and a live production deployment were not verified or performed.

## Laboratory refinement on October 3, 2026

The research records were unsuitable as a wide public table: researchers occupied continuation rows, degree programs and graduation dates were mixed with supervision, and there was no clear contact journey. The laboratory now has its own `/lab` area while the homepage remains focused on Paul and direct personal contact.

The directory contains 16 thesis groups and 40 researchers. Each group has a short purpose, the supplied official title, named adviser and co-adviser, researcher cards, and a relevant lab-head contact link. Research has optional labelled native filters, an announced result count, a clear empty state, and a reset button. Filtered addresses can be shared. People and contact pages use direct headings and consistent navigation.

Castor and Alce receive equal co-head presentation. Dr. Adrian P. Galido remains primary adviser on the four master's theses; lab leadership does not replace thesis supervision. Classes of 2025 and 2026 describe graduated researchers. One ongoing group remains separate. Clean decorative portrait boxes are hidden from assistive technology, with names visible alongside them. Student email addresses, empty media panels, and unavailable download links are omitted.

The owner explicitly confirmed the Escolano group's EECSI 2026 acceptance and the Narvasa group's NiDS 2026 acceptance. Their paper titles and citations come from the supplied CV. Both are labelled Accepted, without invented DOI or paper links; conference dates alone do not establish presentation or publication. Other groups have no output section until an association and status are confirmed.

Initial HTML, page-specific metadata, and canonical links are generated for all 21 public pages. The Vercel configuration serves these through clean URLs, so shared group addresses and search crawlers receive the actual page content. The lab uses the same relative text sizing, visible focus, keyboard access, high-contrast support, and generous targets as the portfolio.

Verification results are recorded after the final checks below. This local addition does not establish institutional approval or guarantee reach; deployment and real assistive-technology user testing remain outside the verified scope.

### Final laboratory verification

Production generation, TypeScript, and changed-file lint checks passed. The homepage's contact, navigation, and keyboard disclosure journeys passed at 320, 390, 768, and 1440 pixels. Its updated 25-control expanded keyboard walk passed.

The lab checks passed every group address, all 40 researcher records, both confirmed accepted outputs, degree/cohort filter combinations including an empty result, shared filtered addresses, both lab-head clipboard success and permission-denied fallback, skip links, and focus on route changes. Five representative page types were checked under phone, desktop, 200% root text, 320×256 reflow, and forced-color scenarios: no horizontal overflow, undersized tested standalone targets, or axe-core WCAG A/AA violations were found. Forced-color screenshots flagged for contrast review were visually inspected.

Complete keyboard walks across those five lab page types verified all interactive controls were reachable with visible focus and without header obstruction. All 21 public addresses returned their own heading and canonical link with JavaScript disabled. These checks verify local build behavior; they do not replace VoiceOver/NVDA testing or sessions with people with disabilities.

## Updated CV review on October 3, 2026

The latest CV added a July–December 2026 internship at Asia University, an Associate Editor appointment for Information Processing in Agriculture (September 19, 2026–September 19, 2028), an EUSPN track committee role, additional journal and conference review service, a published cacao-disease scoping review, and a longer conference-paper record.

The portfolio now includes six published papers and thirteen conference entries, with the exact supplied author records, titles, venues, and six DOI addresses. The two previously confirmed acceptances remain labelled Accepted. Other conference entries use Conference paper: neither a past date nor the CV's section title is treated as proof of presentation or proceedings publication. Future conference dates remain visible without claims that the events have already occurred.

Five lab groups now have matching outputs: cacao disease (published review), hyperlocal air quality (conference paper), room-level energy monitoring (conference paper), goat geofencing (accepted), and wearable ASL letter recognition (accepted). The matches use the supplied researcher identities and research topics; other papers with overlapping authors but different projects remain in the personal research list rather than being assigned to a thesis group.

The main page stays focused on introduction, selected work, and personal contact. Two recent featured examples show Paul's advisory role rather than claiming sole implementation. The wearable description is limited to ASL letters and a pilot prototype, as the updated paper describes, rather than claiming broad sign-language translation. Older projects remain in a disclosure. Published papers and conference records are separated, with native expandable conference details and plain explanations of status labels. The public contact wording welcomes English, Filipino, and Cebuano.

The document was used as reference material, not as instructions or a public download. No phone number, GPA, new student email address, unavailable media, invented paper URL, or unverified new paper status was added. The previously confirmed Assistant Professor III rank is retained even though the updated CV abbreviates it to Assistant Professor. Existing education dates and public profile links agree with the supplied record.

### Verification of the CV update

Production generation, TypeScript, and changed-file lint checks passed. The CV-specific checks verified nineteen records, six publisher links, the full cacao-review title, two retained acceptance labels, eleven other conference labels, editor dates, reviewer counts, internship, and closed-by-default disclosures at 320, 390, 768, and 1440 pixels. Contact copying, fallback, anchor navigation, skip links, and project-specific email labels passed the existing portfolio journeys.

The homepage audit found no axe-core WCAG A/AA violations with details closed and open under phone, desktop, 200% root text sizing, narrow reflow, and forced colors. Its complete expanded keyboard walkthrough reached 29 controls with visible focus and no header obstruction. The lab journeys verified all sixteen groups, forty researchers, five correctly labelled outputs, filters and contact paths, with no automated violations in twenty-five representative layout scenarios. The new cacao output received an additional five-scenario layout and accessibility audit. Forced-color views flagged for manual contrast review were visually inspected. Browser rendering errors were not found in the checked journeys.

All twenty-one public addresses returned their own heading and canonical link with JavaScript disabled. Publisher link addresses are taken from the CV; external publisher availability, email delivery, and improved reach were not tested. Actual screen-reader, magnifier, and disability-user sessions remain outstanding; automated checks are evidence of the tested behaviors, not a claim of complete accessibility conformance. This update is local and is not a production deployment.
