# Resume Page Plan

## Goal

Replace the placeholder at `pages/resume.html` with a readable resume page that
fits the existing site’s aesthetic and works well on desktop and mobile.

## Plan

1. **Integrate the page with the site.** Keep the shared Bootstrap navbar and
   footer, mark Resume as the active navigation item, and use the existing site
   layout.
2. **Match the site’s look while keeping the CV comfortable to read.** Use the
   cream background and green accents defined in `css/main.css`. Keep Lobster
   for decorative headings or accents, and use a straightforward body font for
   the dense resume content.
3. **Clearly delineate every section with Bootstrap 5 components and
   utilities.** Present Education, Professional Experience, Achievements,
   Volunteering, Presentations, and Technical Skills as separate Bootstrap
   cards. Use consistent card headers for section titles, card bodies for
   content, and Bootstrap spacing, border, and responsive grid utilities to
   distinguish sections without straying from the site’s palette. Keep
   experience roles in reverse chronological order, dates easy to spot, and
   original bullets intact; group skills under the categories used in the CV.
4. **Make the long page easy to navigate.** Add a compact set of in-page links
   to the card sections, use accessible headings and spacing, and let cards
   stack naturally on smaller screens.
5. **Omit personal contact details.** Do not include the CV’s street address,
   phone number, or email address on the page. Do not link to or publish the
   original PDF as a download, since it contains those details.
6. **Keep the source PDF private.** The supplied
   `sikowitz-joseph-cv-050725.pdf` is in the project root. Omitting contact
   details from the HTML does not redact the PDF, so keep the source PDF out of
   anything deployed publicly. If a downloadable CV is wanted later, prepare a
   separately redacted copy.
7. **Preserve the supplied CV’s facts and dates.** The document is a May 2025
   version. Retain its dates and descriptions rather than inferring updates;
   incorporate any subsequent changes only if they are provided.
8. **Preserve the footer email link.** Keep the existing site footer intact on
   the resume page, including its Email link. Omitting personal contact details
   from the resume content does not apply to the shared footer.
9. **Keep resume styles in the shared stylesheet.** Store resume-specific CSS,
   including print styles, in `css/main.css`; link to that stylesheet from
   `pages/resume.html` and do not embed CSS in the page.
10. **Add alert box at top of page.** At the user's request, a green Bootstrap 
    success alert reading “This page created with generative AI.” will be added 
    near the top of `pages/resume.html`.

## Source CV Sections

- Education
- Professional Experience
- Achievements
- Volunteering
- Presentations
- Technical Skills

Education includes graduate study at Northeastern University, an MA in History
from UMass Boston, an MLS from the University of Maryland, and a BS from the
University of Maryland. Professional experience includes leadership and library
systems roles at the Fenway Library Organization, along with earlier library,
education, and community roles.

## Approval

This document records the plan only. No site implementation changes have been
made; implementation should begin only after approval.

## Implementation Note


