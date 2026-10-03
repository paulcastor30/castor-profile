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

## Portrait review on October 3, 2026

Thirty-six researcher portraits and one lab-head portrait were matched by the supplied folder names to existing records. The Ral Angelo identity was confirmed by the owner; the spelling in the supplied photo folder is used. Four researchers retain empty frames, and Paul Castor's head card retains its text-only presentation. Three extra uploaded researchers are not assigned to thesis groups without the missing group records.

The matched originals total approximately 145.5 MB, including individual files above 20 MB. Web copies total approximately 1.26 MB while retaining the source composition and identity. Original uploads are preserved in the source project and excluded from the production output; unmatched originals and desktop metadata are also excluded. Nothing has been deployed externally.

Portraits stay beside visible names. Empty alternative text avoids reading each name twice, and neither photos nor empty frames become keyboard stops. Images reserve space, load lazily, and decode asynchronously. A failed researcher image returns to the empty frame; a failed optional lab-head image returns to the prior text-only card. Photos use contained sizing rather than cropping faces or graduation attire.

Production build, TypeScript, and changed-file lint checks passed. The portrait checks verified all 37 image assets decode successfully, four researcher frames stay empty, missing head photos leave their cards unchanged, redundant image announcements are excluded, and a deliberately failed researcher image returns to a clean frame. No portrait exceeds the checked 100 KB limit. Production output contains only the matched web copies and excludes original uploads.

Twenty-five portrait scenarios across the lab home, People, Contact, sign-language group, and a mixed-photo/missing-photo group passed phone, desktop, 200% text, narrow reflow, and forced-color audits with zero axe-core WCAG A/AA violations and no horizontal overflow. Phone, desktop, and flagged forced-color views were visually reviewed. The laboratory's existing contact, filter, output, and navigation journeys passed. Complete keyboard walks verified all interactive controls remained reachable with visible focus; all 21 public pages returned meaningful initial HTML without JavaScript. The existing personal contact journey and simple laboratory navigation remain in place. Actual screen-reader and disability-user sessions are still outstanding.

## Additional ongoing groups on October 3, 2026

Five supplied theses were added as ongoing groups, bringing the directory to 21 groups, 53 memberships, and 52 unique researchers. Larita's graduated BS membership is retained alongside the new MS membership; the People introduction explains why a researcher can appear twice. Program and cohort filters now show five MS groups, sixteen BS groups, and six ongoing groups.

The owner explicitly confirmed the additional co-adviser roles in the continuation rows. Supervision pages support and label multiple co-advisers instead of dropping a second name. Harreez Villaruz-Quimque remains primary adviser for the rice-tungro thesis, and Dr. Ernesto E. Empig remains primary adviser for Smart G-ID. Existing graduation cohorts and paper statuses are preserved. No new acceptance, publication, results, prototype media, or paper association is inferred from the new registration records.

Castor's new photo and the three bell-pepper student photos use small, composition-preserving WebP copies. The existing Larita portrait is shared by both memberships. Missing photos retain their empty frames, and originals remain unchanged. The total asset directory has 41 portraits: 39 researchers and two heads. Castor's portrait was also added to the personal About section and person metadata to help visitors recognize him while preserving the direct contact journey.

Production generation, TypeScript, and changed-file lint checks passed. All five new groups passed supervision, ongoing status, portrait, contact, and 25 mobile/desktop/enlarged-text/reflow/forced-color audit scenarios. The updated lab and portrait journeys passed, with no axe-core WCAG A/AA violations in the tested page types. The homepage passed its collapsed and expanded audits and its 29-control keyboard walk. Full lab keyboard walks passed, and all 26 public addresses returned their own initial content and canonical links without JavaScript. Contact and navigation journeys passed at four screen widths. Selected phone and forced-color screenshots were visually reviewed.

These are local checks. Actual screen-reader and disability-user sessions remain outstanding, and no production deployment or traffic improvement was established.

## Latest attached CV reconciliation on October 3, 2026

The document's six published citations and thirteen conference entries were compared field by field with the current site. Titles, author records, venues, and supplied DOI addresses match. Appointments, editorial term, internship, education dates, and spoken languages also agree with the existing public record; the previously owner-confirmed academic ranks remain. No new academic appointment or paper was invented to make this refresh appear larger.

A useful gap remained in the personal work section: the CV's calamansi and fish-temperature collaborations were available as lab groups but absent from the personal project list. Both now have plain descriptions, accurate thesis-adviser roles from the supplied group records, selected tools, research periods, and links to their teams. Goat and wearable projects also display their CV periods. Extra examples stay within the existing native disclosure, preserving three featured projects and the short introduction-to-contact journey.

The newly uploaded Andrew Andres photo is matched to his existing Smart G-ID record using a small WebP copy; missing portraits stay empty and originals remain unchanged. No CV phone number, ambiguous GPA, fabricated results, unavailable media link, or new conference status was added. The CV is reference material, not a public download or an instruction source.

Production generation, TypeScript, and changed-file lint checks passed. The four CV periods, two additional project links, nineteen paper records, and default disclosure states passed checks at 320, 390, 768, and 1440 pixels. Contact and navigation journeys passed at those widths. The homepage's expanded keyboard walk reached 31 controls with visible focus and no header obstruction. Collapsed and expanded audits found no axe-core WCAG A/AA violations under phone, desktop, 200% text, narrow reflow, and forced-color scenarios. Portrait loading, empty-frame counts, small assets, and failure fallback passed, with zero automated violations in 25 tested portrait layouts. Selected views were visually inspected. These checks do not replace actual screen-reader or disability-user sessions. Changes remain local; no deployment or improved reach was claimed.


## Group outputs and directory review on October 3, 2026

The strict review found two concrete problems: the ongoing groups lacked matching CV papers, and rendering every member portrait on People made the page grow with every new group. Neither helped visitors find a person or understand the research quickly.

Rice tungro now has Larita's two related papers; Smart G-ID has Castillo's two goat-profiling papers; bell-pepper monitoring has Listanco's review. Five earlier matches remain. Ten outputs across eight groups now resolve from the same citation records used by the personal portfolio, preventing duplicated author/venue/status data from drifting. Exact-title resolution fails during generation if a record is missing. Related reviews are identified as research outputs without implying a completed thesis, and only owner-confirmed accepted records retain that status. The unrelated CNC paper and other adviser-only/name-only matches remain outside these group outputs.

People now shows six groups per page, visible names, and optional native portrait disclosures. Search tolerates missing accents; program and graduation/current filters narrow the directory. Shareable URLs retain filters/page state, live result counts explain the matches, and explicit pagination moves keyboard focus back to the directory heading. Missing portrait frames and existing photo matches are preserved. Lab-head emails and the personal-portfolio link remain direct routes to contact.

Production generation, TypeScript, and changed-file lint passed. Directory journeys verified all 21 groups, 53 memberships, 52 unique researchers, search, filters, refreshable URLs, page focus, native keyboard disclosure toggles, and the new paper counts. Ten collapsed/expanded scenarios passed phone, desktop, 200% text, 320px reflow, and forced-color checks with zero axe-core WCAG A/AA violations, no horizontal overflow, and checked controls at least 44px tall/wide. The full lab journeys, 25 lab layouts, 25 portrait layouts, every portrait's loading/fallback, all lab keyboard controls, and 26 initial HTML pages also passed. Mobile, desktop, and forced-color directory screenshots were visually reviewed. Real screen-reader and disability-user sessions remain unverified; automated results are not a claim of universal accessibility. Changes are local and have not been deployed.


## Individual directory refinement on October 3, 2026

The owner clarified that People must show both undergraduate and master's supervision and distinguish current researchers from graduating classes. The prior group-based layout reduced portrait height but still organized people around thesis titles, duplicated Larita, and required a separate action to recognize someone by photograph. The individual directory addresses those problems.

The lab introduction and People now spell out BSCA and MSCA. People presents 52 unique researchers with 53 academic memberships, visible small portraits, and descriptive research links. Independent program and graduation/current filters combine without confusing degree completion with publication status. Current researchers come first, followed by newest graduation classes; program headings make both degrees visible, and surname ordering within each category is explicit. Twelve entries per page limit directory growth. Co-heads retain equal leadership prominence; Paul's confirmed academic position, personal-portfolio link, and a direct collaboration email invitation support recognition and contact. No unconfirmed faculty position or student contact detail was added.

Production generation, TypeScript, and changed-file lint passed. Tests verified all 52 unique people across five pages, 53 memberships, surname/category ordering, dual-program records, accent-insensitive search, combined filters, persistent URLs, pagination focus and research navigation. Ten full/filtered People scenarios passed phone, desktop, 200% text, narrow reflow, and forced-color checks with zero automated WCAG A/AA violations, no horizontal overflow, and checked interactive targets at least 44px wide and tall. All forty unique directory researcher portraits and twelve empty frames were checked, alongside image decoding and failure fallbacks. The broader 25 lab layouts, 25 portrait layouts, direct contact journeys, keyboard walks including all thirty People controls, and 26 meaningful initial HTML pages passed. Selected mobile and forced-color layouts were visually reviewed. Actual screen-reader and disability-user sessions remain outstanding. These are local changes; no deployment or increase in reach is claimed.


## Co-head restoration and shorter directory guidance

The owner marked Paul's personal-portfolio link for removal and requested the previous co-head area. Both cards have been restored to the previous content and link presentation: portrait, name, co-head/degree line, and email. The newly added rank and portfolio link were removed. The shared added head-link display override was also reverted. The co-head area is preserved from further redesign.

Below that area, duplicated directory instructions were shortened to one program explanation and one ordering note so researchers are reached sooner on mobile. Unique person records, visible portraits, program/class filters, academic status, research links and direct collaboration contact remain. Production generation, TypeScript and changed-file lint passed. Individual directory journeys and ten phone/desktop/200%-text/reflow/forced-color scenarios passed with zero automated WCAG A/AA violations and no horizontal overflow. Keyboard walks reached all 29 People controls; all 26 public pages retained initial HTML content. The browser confirmed the selected card link is absent and both head emails remain; the desktop view was visually inspected. Actual assistive-technology user testing remains unverified. No deployment was performed.


## Owner-requested continuous scrolling

Pagination was removed at the owner's explicit preference for scrolling. All 52 unique people and 53 academic memberships now appear in a single document. Existing compact individual entries and current/program/graduation-class sections are retained, rather than reverting to large thesis-group portrait blocks. Filters remain optional and accessible; obsolete page parameters do not limit the directory. The protected co-head cards are unchanged.

Production build, TypeScript and changed-file lint passed. Directory checks verified the complete roster, academic ordering, independent combined filters, unique counts, old page URLs, visible portrait loading, and research navigation. Ten full/filtered scenarios passed phone, desktop, 200% text, narrow reflow, and forced-color automated checks with zero WCAG A/AA violations and no horizontal overflow. Keyboard walks reached all 68 People controls with visible unobscured focus. All 26 public routes retained initial HTML without JavaScript. The local browser confirmed the full list and absence of pagination. Actual screen-reader/disability-user sessions remain unverified; changes remain local.


## Long-page navigation and beginner contact refinement

A focused review found that continuous scrolling preserved the owner's preference but made reaching later graduating classes laborious. Explicit section links now jump to the filtered directory's program/class headings while keeping the whole list in the same document. Focus follows the selected heading, which remains clear of the header; a return-to-search link supports further browsing. The protected co-head cards are unchanged.

A second gap was the closing collaboration action's reliance on a configured email app. A new link opens the existing Contact page with visible addresses and copy controls. Research's cohort filter label now matches People. Sorting no longer depends on a fixed 2030 reference year, preserving current-first ordering as future graduation records are added. No person, citation or academic status was changed.

Production build, TypeScript and changed-file lint passed. Directory journeys verified all 52 unique people, 53 memberships, combined filters, ordering, section jumps and focus, return-to-search navigation, the contact fallback, and research links. Ten full/filtered accessibility/layout scenarios passed phone, desktop, 200% text, narrow reflow and forced colors with zero automated WCAG A/AA violations, no horizontal overflow, and checked targets at least 44px. The broader lab/contact journeys and 25 layout scenarios passed; keyboard walks reached all 75 People controls with visible unobscured focus. All 26 public routes retained initial HTML without JavaScript. The section jump to MSCA graduates was visually inspected. Actual assistive-technology user testing remains outstanding. Changes are local, with no deployment or measured reach improvement.


## Research program/class sorting

At the owner's request, Research now places ongoing groups first and graduates afterward by newest graduation class, separated into MSCA and BSCA sections. Alphabetical project titles provide a predictable order within each section because no project start dates were supplied. Existing filters retain the same ordering. Section headings are level two and project headings level three; existing card appearance and link target sizes are preserved. No group, supervision record or research-output status was altered.

Production build, TypeScript and changed-file lint passed. Research tests verified five section headings in order, alphabetical projects, all 21 group URLs, ten outputs, filters, URL persistence, contact copying/fallback and navigation. Twenty-five lab accessibility/layout scenarios passed with zero automated WCAG A/AA violations and no horizontal overflow. The browser confirmed the ongoing/program headings and descending graduate classes. Changes remain local.


## Portrait/frame balance

The supplied example showed visible side bands around two narrower graduation photographs while a wider photo filled its frame. The cause was contain fitting within fixed 4:5 frames. Portraits now fill their existing frames without distortion, with an upper-centered display crop rather than uneven letterboxing. The image files themselves remain unchanged, as do names, card layouts and empty frames.

All 42 matched portrait assets were visually checked together under the new 4:5 fitting; faces remained visible. The local campus-navigation group was inspected in the browser. Production generation passed, and portrait decoding, forty unique directory photos, twelve missing frames, small image assets, redundant-alt handling and broken-image fallback passed. Twenty-five portrait layout/accessibility scenarios passed phone, desktop, 200% text, narrow reflow and forced colors with zero automated WCAG A/AA violations and no horizontal overflow. Changes remain local.


## Princess Castillo photo update

The newly uploaded Castillo_Photo.jpg was matched by the supplied folder and existing full name to Princess April E. Castillo. Her People entry and Smart G-ID group now display the same optimized photo. A display-only framing adjustment reduces excess building/background in the frame while preserving her face. No academic membership, status, supervision or research output was changed. Source upload and all existing photos remain unchanged; missing-photo frames remain empty.

Production generation, TypeScript and changed-file lint passed. Portrait checks verified 41 unique researcher images, eleven missing frames, 43 web assets, decoding, small file sizes and failure fallback. Twenty-five portrait layout/accessibility scenarios and twenty-five group scenarios passed phone, desktop, 200% text, narrow reflow and forced colors with zero automated WCAG A/AA violations and no horizontal overflow. The Smart G-ID researcher framing was visually inspected. Changes remain local; actual disability-user sessions and deployment are outstanding.


## John Bernal photo update

Bernal_Photo.jpg was matched by the supplied folder and existing full name to John Benedict D. Bernal. People and Smart G-ID share the optimized web copy. A display-only zoom and top-anchored crop provides clearer recognition and adequate headroom; neither source pixels nor academic records were changed. All three Smart G-ID members have photos, and ten other researcher frames remain empty.

Production generation passed. Portrait loading, 42 unique directory researcher images, ten missing frames, 44 web assets, small file size and broken-image fallback passed. Twenty-five portrait layouts and twenty-five group layouts passed phone, desktop, 200% text, narrow reflow and forced colors with zero automated WCAG A/AA violations and no horizontal overflow. After a small final headroom adjustment, production generation passed again and the final group composition was visually inspected. Changes remain local; actual disability-user sessions are outstanding.


## SEO implementation

The owner authorized strengthening search discoverability. The existing sitemap/static content and personal identity markup were extended into consistent site-wide identities, accurate descriptive metadata, breadcrumbs and two meaningful co-head lab-role profiles. Names and supervision records come from the current supplied data; Paul's homepage remains his primary personal destination. Profiles are linked separately below the protected cards, which are unchanged. Research descriptions include the actual researcher names without putting every name in page titles. All researcher names remain visible in initial People and group HTML. Thin student pages and invented credentials are avoided.

The sitemap is generated from pre-rendered routes and contains 28 public pages. Unknown/invalid pages use noindex and omit structured data. Static and client metadata stay aligned, including Alce's own sharing portrait. ProfilePage markup is used only for single-person content; the directory uses a list instead. Implementation was checked against Google's profile-page and title guidance. No Search Console access or public indexing status was established.

Production generation, TypeScript and changed-file lint passed. SEO tests verified all 28 initial HTML pages without JavaScript, unique titles, canonical URLs, descriptions, indexing directives, JSON-LD identity references, social metadata, the sitemap and crawl permissions. Ten profile scenarios passed phone, desktop, 200% text, narrow reflow and forced colors with zero automated WCAG A/AA violations and no horizontal overflow. Profile links, route focus and contact navigation passed. Complete keyboard walks reached both new profile pages and existing lab pages. The Alce mobile layout was visually inspected; invalid profile addresses were checked for a single main/heading and noindex. Google's live Rich Results Test and Search Console verification/indexing checks require publication and account ownership. Changes remain local; no ranking or traffic improvement is claimed.


## Owner-requested removal of dedicated co-head profiles

The owner clarified that the laboratory is part of the personal portfolio and requested removal of both dedicated research profiles. Their routes, page/data files, separate profile navigation and sitemap entries were removed. Person identity references now point to the existing portfolio and People page; no remaining public structured data or metadata points to either removed route. The protected co-head cards remain unchanged. Existing SEO titles/descriptions, canonical URLs, breadcrumbs, researcher names and initial HTML remain.

Production generation, TypeScript and changed-file lint passed. SEO checks verified the 26 remaining public pages, retained structured data and metadata, reduced sitemap, absence of profile links, and noindex behavior on removed addresses. Keyboard walks and all 26 initial HTML pages passed. The local People page was checked in the browser. Changes remain local, with no publication or indexing claim.

## GeoSentry researcher portraits — 3 October 2026

Matched the three new uploads by their researcher folder names to Renato G. Beroy, Sherie Grace L. Lupoz, and Arianne G. Mecarsos. Shared portrait records make them visible in the People directory and the existing GeoSentry thesis page. Small WebP copies are 25–32 KB; source files are unchanged and excluded from deployment. Renato's wider portrait has a modest display-only framing adjustment. The scrollable directory, BSCA/MSCA and graduation filters, contact links, co-head cards, and profile removal remain intact. There are now 45 researcher portraits, seven clean missing-photo boxes, and 47 portrait assets including both lab heads.

Production build, TypeScript, changed-file lint, portrait identity/loading/fallback checks, and 30 portrait layout/accessibility scenarios passed. Portfolio accessibility passed ten layouts at phone, desktop, enlarged text, narrow reflow, and forced colors with zero automated WCAG A/AA violations. Lab keyboard navigation and all 26 initial HTML pages without JavaScript passed. People search, program and graduation filters, scrollable ordering, contact-copy success and fallback, and portfolio navigation passed. GeoSentry composition was visually inspected in the browser. Automated checks do not replace testing with people who use assistive technology. Changes remain local; no deployment, indexing, ranking, or reach improvement is claimed.

## About section composition — 3 October 2026

The About heading spans the section. A narrow portrait column now aligns with the biography, and research links, laboratory introduction, and academic background follow below. Mobile stacks these in reading order with a compact 120px portrait. Co-head cards and the scrollable People directory remain unchanged. Production generation and automated portfolio accessibility checks passed before publication.
