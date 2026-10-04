# AMMRC Website Design

## Goal
Build a bilingual official-style website for the Advanced Membrane Materials Research Center (AMMRC), National Taiwan University of Science and Technology, by reusing the proven structure and visual language of the existing NTUST-GAST-Tsai-Lab website while converting it from a single-lab site into a research-center site.

## Primary Constraints
- Keep Chinese/English language switching.
- Use the existing Tsai Lab site as the starting design system to minimize build time and risk.
- Remove lab-specific Equipment/Facilities, Professor Profile, and Members/student sections.
- Present the center as an institutional research center rather than a personal laboratory.
- Use the eight confirmed faculty members:
  1. Hsieh-Chih Tsai
  2. Juin-Yih Lai
  3. Wei-Song Hong
  4. (Neal) Tai-Shung Chung
  5. Chien-Chieh Hu
  6. Chih-Chia Cheng
  7. Jem-Kun Chen
  8. Chen-Tsyr Lo
- Faculty photos supplied by the user will be normalized to a consistent display ratio and visual hierarchy.
- Recent publications will cover 2022–2026, deduplicating center coauthored papers on the center-wide publication page.

## Information Architecture
Top navigation:
- Home
- About
- Research
- Faculty
- Publications
- Collaboration
- News
- Contact

## Page Design

### Home
- Center name in Chinese and English.
- NTUST affiliation.
- Hero area using a center/research image rather than an individual professor portrait.
- Short center mission statement.
- Research-area highlights.
- Compact faculty preview with eight headshots.
- Recent publications and recent news preview.

### About
- Center overview.
- Mission and strategic focus.
- Center development/history where source material is available.
- Director and founding leadership references where appropriate.

### Research
- Organize content by center-level themes rather than by individual faculty.
- Initial themes may include membrane separation, energy membranes, biomedical/functional polymer materials, clean water, CO2 capture, electrochemical systems, and advanced polymer/membrane interfaces.
- Final wording will be grounded in verified faculty research profiles.

### Faculty
- Responsive card grid.
- Each card contains photo, Chinese and English name, title/unit, concise research interests, and links to Profile and Publications.
- Use consistent image dimensions and typography.
- Avoid long CV-style text on the listing page.

### Faculty Profile
- Research Interests.
- Education / professional role where verified.
- Honors where verified and relevant.
- Selected Recent Publications.
- External academic links where available, such as official profile, ORCID, Scopus, or lab page.

### Publications
- Coverage: 2022, 2023, 2024, 2025, 2026.
- Sort newest first.
- Record format: Authors; article title; journal; year; DOI/link when verified.
- Center coauthored papers appear once on the center-wide page.
- Each publication keeps faculty tags so it can appear in multiple faculty-specific views without duplication in the center list.
- Publication data will be verified using official university pages and reliable scholarly metadata sources.

### Collaboration
- International collaborations, MOUs, student/research exchanges, and industrial collaboration.
- Designed to accommodate future additions without changing the page structure.

### News
- Research center activities, lectures, visits, MOU events, student exchanges, and major research announcements.

### Contact
- Center contact information.
- NTUST affiliation and address.
- Optional map/link if reliable official details are available.

## Technical Architecture
- Static HTML/CSS/JavaScript suitable for GitHub Pages.
- Reuse the existing Tsai Lab CSS/layout patterns where they improve speed and visual consistency.
- Reuse/adapt the existing language-switching JavaScript instead of adding a new framework.
- Keep the implementation dependency-light; no CMS or build framework is required for the first version.
- Separate reusable content where practical so faculty/publication updates do not require redesigning the site.

## Data Flow
- Faculty identity and user-provided photos are treated as authoritative user inputs.
- Titles, affiliations, research interests, and publication metadata are verified against external scholarly/official sources before being published.
- Publications are normalized into one internal structure and rendered into the center page and faculty views.

## Error Handling and Content Quality
- Do not publish uncertain titles, affiliations, or papers as confirmed facts.
- Flag ambiguous author matches instead of silently assigning publications.
- Prefer official NTUST pages, ORCID/Scopus metadata, DOI/Crossref-style records, and journal pages for verification.
- If an image is unsuitable for the standardized card crop, preserve the face and avoid aggressive cropping.

## Testing
- Verify all navigation links on desktop and mobile.
- Verify Chinese/English switching on every page.
- Verify GitHub Pages path handling under the repository subpath.
- Verify images do not overflow or crop faces incorrectly.
- Verify faculty links and publication filters/tags.
- Verify no legacy Tsai Lab-only Equipment, Member, or single-professor navigation remains.
- Check representative modern desktop and mobile viewport widths.

## First Release Scope
The first release prioritizes a polished institutional structure, bilingual navigation, eight faculty profiles, verified recent publications, and a working GitHub Pages deployment. Advanced dynamic publication APIs or CMS integration are deliberately excluded from the first release to keep the build fast and maintainable.
