# Bhatt Research Lab website

Static academic website for the virtual research group led by Tanay Bhatt.

## Pages

- `index.html`: research overview and selected publications
- `research.html`: five research themes
- `people.html`: group lead, project associates, collaborators, dissertation students and alumni
- `publications.html`: selected publications, newest first; preprints labelled
- `about.html`: virtual group structure, affiliations and disclosures

Shared presentation and navigation are in `styles.css` and `script.js`. Optimised portraits are in `assets/people/`. No framework, package installation or build step is required.

## Local preview

Run `python3 -m http.server 8000` in this directory and open `http://localhost:8000`.

## Deployment

The existing Cloudflare Pages project deploys `main`, with no build command and the repository root as the output directory. Cloudflare serves `.html` pages at extensionless URLs; canonical links and the sitemap use those URLs.

## Content conventions

Use Bhatt Research Lab as the formal name. The group operates across collaborating institutions and includes academic collaborations and R&D involving Koshkey. Keep descriptions scientific, identify preprints, and omit unpublished results and detailed novel methods. Use the agreed independence statement as the final footer text on every page.

No public email addresses or contact forms are included. Member roles and supplied institutional details should be updated when they change. The site does not imply that every member is affiliated with every collaborating institution.
