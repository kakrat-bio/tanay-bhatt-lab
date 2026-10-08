# Bhatt Research Lab website

Static academic website for the virtual research group led by Tanay Bhatt.

## Pages

- `index.html`: research overview and selected publications
- `research.html`: five research themes
- `research-connections.html`: interactive questions, tools and connections across six fields
- `people.html`: group lead, project associates, collaborators, dissertation students and alumni
- `publications.html`: selected publications, newest first; preprints labelled
- `about.html`: virtual group structure, affiliations and disclosures

Shared presentation and navigation are in `styles.css` and `script.js`. Optimised portraits are in `assets/people/`. No framework, package installation or build step is required.

## Local preview

Run `python3 -m http.server 8000` in this directory and open `http://localhost:8000`.

## Deployment

The existing Cloudflare Pages project deploys `main`, with no build command and the repository root as the output directory. Cloudflare serves `.html` pages at extensionless URLs; canonical links and the sitemap use those URLs.

## Content conventions

**Before editing, read [`SITE_GUIDE.md`](SITE_GUIDE.md).** It holds the rules, voice, templates, verified publication list and the list of items still pending.

In short: use Bhatt Research Lab as the formal name; lead with the science; the owner-approved Research Connections page additionally labels KoshKey as a translational programme; elsewhere mention KoshKey only on Tanay's People card (Co-founder) and in the About affiliations and competing-interests statement; write institution names in full on first mention; write research text as flowing prose; never publish client, sponsor or unpublished details; never invent titles, dates or links. Keep the independence statement as the final footer text on every page.
