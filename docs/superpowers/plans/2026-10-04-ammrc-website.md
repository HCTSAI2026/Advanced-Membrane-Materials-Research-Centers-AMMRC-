# AMMRC Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a bilingual GitHub Pages website for the Advanced Membrane Materials Research Center (AMMRC), NTUST, by adapting the existing Tsai Lab static-site design into a center-level site with eight faculty members and verified 2022–2026 publications.

**Architecture:** Reuse the existing `NTUST-GAST-Tsai-Lab` HTML/CSS/JavaScript patterns as the visual foundation, but create a clean AMMRC-specific set of pages and data. Keep the implementation static and dependency-light, with bilingual copy handled by the existing language-switching pattern and faculty/publication content kept in focused data files so future updates do not require redesigning pages.

**Tech Stack:** Static HTML5, CSS3, vanilla JavaScript, GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-10-04-ammrc-website-design.md`

## Global Constraints

- Keep Chinese/English language switching.
- Reuse the existing Tsai Lab site as the starting design system to minimize build time and risk.
- Remove lab-specific Equipment/Facilities, Professor Profile, and Members/student sections.
- Present the center as an institutional research center rather than a personal laboratory.
- Use the eight confirmed faculty members: Hsieh-Chih Tsai; Juin-Yih Lai; Wei-Song Hong; (Neal) Tai-Shung Chung; Chien-Chieh Hu; Chih-Chia Cheng; Jem-Kun Chen; Chen-Tsyr Lo.
- Recent publications cover 2022–2026 and center coauthored papers are deduplicated on the center-wide publication page.
- Do not publish uncertain titles, affiliations, research interests, or publications as confirmed facts.
- Prefer official NTUST pages and reliable scholarly metadata sources for verification.
- No CMS, framework, or live publication API in the first release.

## Review Focus

- Repository-subpath links must work under GitHub Pages and must not assume root hosting.
- Chinese/English switching must preserve all navigation and page content without mixed-language remnants.
- Faculty image cards must preserve faces at desktop and mobile widths and avoid distorted crops.
- Publication deduplication must not erase valid faculty associations for coauthored center papers.
- Legacy Tsai Lab-only navigation, names, student/member content, and facilities content must not appear in the AMMRC release.

---

### Task 1: Establish the AMMRC site shell and shared design system

**Files:**
- Create: `.nojekyll`
- Create: `style.css`
- Create: `language.js`
- Create: `README.md`
- Create: `tests/site-smoke.js`

**Interfaces:**
- Consumes: visual tokens and responsive patterns from `HCTSAI2026/NTUST-GAST-Tsai-Lab/style.css` and translation behavior from its `language.js`.
- Produces: shared `.top`, `.brand`, `.nav`, `.wrap`, `.hero`, `.section`, `.footer`, faculty-card, publication, and responsive CSS classes; `setLanguage(lang)`/language toggle behavior used by every page.

- [ ] **Step 1: Write the failing smoke test**

Create `tests/site-smoke.js` to assert that required shared files exist and that `style.css` contains mobile breakpoints while `language.js` contains both `en` and `zh` translation paths.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/site-smoke.js`
Expected: FAIL because the AMMRC shared site files do not yet exist.

- [ ] **Step 3: Implement the shared shell**

Adapt the existing Tsai Lab design tokens and responsive rules into `style.css`; adapt the bilingual switcher into `language.js`; add `.nojekyll` and a concise AMMRC `README.md` describing GitHub Pages deployment and content structure.

- [ ] **Step 4: Run the smoke test**

Run: `node tests/site-smoke.js`
Expected: PASS.

- [ ] **Step 5: Commit**

Commit message: `feat: add AMMRC shared site shell`

### Task 2: Build the bilingual core navigation and institutional pages

**Files:**
- Create: `index.html`
- Create: `about.html`
- Create: `research.html`
- Create: `collaboration.html`
- Create: `news.html`
- Create: `contact.html`
- Modify: `language.js`
- Modify: `tests/site-smoke.js`

**Interfaces:**
- Consumes: shared CSS and bilingual switcher from Task 1.
- Produces: canonical top navigation `Home / About / Research / Faculty / Publications / Collaboration / News / Contact` and the institutional content shell used throughout the site.

- [ ] **Step 1: Extend the smoke test for navigation and legacy-content exclusion**

Assert every core page contains links to all eight canonical sections, contains the AMMRC/NTUST brand, and does not contain `FACILITIES`, `MEMBERS`, `Professor Profile`, or `Hsieh-Chih Tsai Research Group` as site-level branding.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/site-smoke.js`
Expected: FAIL because the core pages do not yet exist.

- [ ] **Step 3: Implement the six institutional pages**

Create the center-level home hero, About mission/overview, Research theme grid, Collaboration placeholder structure, News listing structure, and Contact page. Use relative links only. Keep claims conservative where source material has not yet been verified.

- [ ] **Step 4: Add bilingual copy keys**

Add Chinese and English strings for the new navigation, section titles, buttons, institutional descriptions, and empty-state copy to `language.js`.

- [ ] **Step 5: Run test to verify it passes**

Run: `node tests/site-smoke.js`
Expected: PASS.

- [ ] **Step 6: Commit**

Commit message: `feat: add bilingual AMMRC core pages`

### Task 3: Add structured faculty data and the Faculty page

**Files:**
- Create: `data/faculty.js`
- Create: `faculty.html`
- Create: `faculty.js`
- Modify: `style.css`
- Modify: `language.js`
- Modify: `tests/site-smoke.js`

**Interfaces:**
- Consumes: verified identity information and user-supplied faculty photos.
- Produces: `window.AMMRC_FACULTY` array with stable `id`, `nameEn`, `nameZh`, `titleEn`, `titleZh`, `unitEn`, `unitZh`, `researchEn`, `researchZh`, `photo`, and external-profile fields; `faculty.js` renders faculty cards from this array.

- [ ] **Step 1: Add faculty data/render tests**

Assert `data/faculty.js` contains exactly eight unique faculty IDs and all eight confirmed English names. Assert `faculty.html` loads `data/faculty.js` before `faculty.js`.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/site-smoke.js`
Expected: FAIL because faculty data/page files do not yet exist.

- [ ] **Step 3: Implement the faculty data contract**

Create eight records using the confirmed names. Use verified titles/units/research interests only; where verification is incomplete, use neutral wording rather than guessing.

- [ ] **Step 4: Implement the responsive Faculty page**

Render eight consistent cards with standardized portrait ratio, names, role/unit, research interests, and Profile/Publications actions. Preserve facial area with `object-position` overrides where necessary.

- [ ] **Step 5: Run test to verify it passes**

Run: `node tests/site-smoke.js`
Expected: PASS, including exactly eight faculty records.

- [ ] **Step 6: Commit**

Commit message: `feat: add AMMRC faculty directory`

### Task 4: Add faculty images and individual profile views

**Files:**
- Create: `images/faculty/` image assets for the eight faculty members
- Create: `faculty-profile.html`
- Create: `faculty-profile.js`
- Modify: `data/faculty.js`
- Modify: `style.css`
- Modify: `tests/site-smoke.js`

**Interfaces:**
- Consumes: `window.AMMRC_FACULTY` from Task 3 and user-provided photos.
- Produces: profile rendering selected by `?id=<faculty-id>` with verified research interests, role/unit, external academic links, and selected recent publications area.

- [ ] **Step 1: Add profile lookup tests**

Assert all eight faculty IDs map to non-empty image paths and that `faculty-profile.html` supports the `id` query parameter with a visible fallback for an invalid ID.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/site-smoke.js`
Expected: FAIL before image/profile implementation.

- [ ] **Step 3: Add normalized faculty portraits**

Prepare web-friendly image files with consistent dimensions and filenames; do not aggressively crop faces.

- [ ] **Step 4: Implement profile rendering**

Render profile header, research interests, verified external links, and a publications container. Invalid/missing IDs display a faculty-not-found message and a link back to `faculty.html`.

- [ ] **Step 5: Run test to verify it passes**

Run: `node tests/site-smoke.js`
Expected: PASS.

- [ ] **Step 6: Commit**

Commit message: `feat: add AMMRC faculty profiles`

### Task 5: Research, normalize, and add 2022–2026 publication data

**Files:**
- Create: `data/publications.js`
- Create: `docs/publication-sources.md`
- Modify: `tests/site-smoke.js`

**Interfaces:**
- Consumes: official NTUST profiles, ORCID/Scopus metadata where available, DOI/journal/Crossref-style records, and the faculty IDs from Task 3.
- Produces: `window.AMMRC_PUBLICATIONS` records with `id`, `year`, `authors`, `title`, `journal`, optional `doi`, optional `url`, and `facultyIds[]`.

- [ ] **Step 1: Add publication integrity tests**

Assert every publication year is between 2022 and 2026 inclusive, every `facultyIds` value exists in the faculty data, publication IDs are unique, and duplicate DOI values are rejected.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/site-smoke.js`
Expected: FAIL because publication data does not yet exist.

- [ ] **Step 3: Verify faculty publication identities**

For each of the eight faculty members, establish reliable author identity using official/academic profile evidence before assigning publications. Record sources in `docs/publication-sources.md`.

- [ ] **Step 4: Normalize 2022–2026 records**

Create one publication record per article; coauthored center papers carry multiple `facultyIds` but remain one record. Do not include ambiguous author matches.

- [ ] **Step 5: Run integrity tests**

Run: `node tests/site-smoke.js`
Expected: PASS with no duplicate IDs or DOIs and no unknown faculty references.

- [ ] **Step 6: Commit**

Commit message: `data: add verified 2022-2026 publications`

### Task 6: Build the center Publications page and faculty publication filtering

**Files:**
- Create: `publications.html`
- Create: `publications.js`
- Modify: `faculty-profile.js`
- Modify: `style.css`
- Modify: `language.js`
- Modify: `tests/site-smoke.js`

**Interfaces:**
- Consumes: `window.AMMRC_PUBLICATIONS` and `window.AMMRC_FACULTY`.
- Produces: year-grouped center publication list and faculty-specific publication views using the same deduplicated records.

- [ ] **Step 1: Add rendering-contract tests**

Assert `publications.html` loads faculty/publication data before `publications.js`, contains 2022–2026 year navigation, and faculty profile rendering can filter by `facultyIds` without copying publication records.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/site-smoke.js`
Expected: FAIL before the page/rendering code exists.

- [ ] **Step 3: Implement center-wide publication rendering**

Sort newest first, group by year, show author/title/journal/year/DOI link, and add faculty tags for center members associated with each record.

- [ ] **Step 4: Implement faculty-specific publication rendering**

In `faculty-profile.js`, filter the shared publication dataset by faculty ID and show selected/recent entries without duplicating source data.

- [ ] **Step 5: Run test to verify it passes**

Run: `node tests/site-smoke.js`
Expected: PASS.

- [ ] **Step 6: Commit**

Commit message: `feat: add AMMRC publication views`

### Task 7: Final bilingual, responsive, and GitHub Pages verification

**Files:**
- Modify: any affected HTML/CSS/JS files
- Modify: `tests/site-smoke.js`
- Create: `docs/release-checklist.md`

**Interfaces:**
- Consumes: complete site from Tasks 1–6.
- Produces: release-ready static site on the repository default branch.

- [ ] **Step 1: Expand final smoke checks**

Test all internal links, eight-page navigation consistency, eight faculty records, 2022–2026 publication-year validity, absence of legacy lab-only labels, and presence of bilingual keys for page-level headings.

- [ ] **Step 2: Run automated verification**

Run: `node tests/site-smoke.js`
Expected: PASS with zero reported errors.

- [ ] **Step 3: Perform responsive/manual review**

Check representative desktop, tablet, and mobile widths; verify portraits do not crop faces, publication lines remain readable, navigation wraps cleanly, and relative paths work under the repository subpath.

- [ ] **Step 4: Verify GitHub Pages readiness**

Confirm `index.html` and `.nojekyll` are on the default branch and document the Pages source/settings required for publishing from `main` root in `docs/release-checklist.md`.

- [ ] **Step 5: Commit**

Commit message: `chore: verify AMMRC site for GitHub Pages`

## Self-Review Result

- Spec coverage: all required pages, bilingual operation, eight faculty members, verified publication workflow, deduplication, responsive behavior, and GitHub Pages deployment are mapped to tasks.
- Step scan: each task has an independent test/verification cycle and a reviewable deliverable.
- Interface consistency: faculty IDs are the shared key between faculty profiles and publication records; publication records remain single-source and are filtered rather than duplicated.
- Review focus: repository-subpath routing, bilingual completeness, portrait cropping, coauthor deduplication, and legacy-content leakage are explicitly tested/reviewed.
- Proportion: implementation details are specified at interface/test level without embedding full application source code.
