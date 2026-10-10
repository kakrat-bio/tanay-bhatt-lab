# Bhatt Research Lab — Site Guide

**Read this whole file before changing anything in this repository.** It is the single source of truth for what the site says, how it says it, and what is still pending. It is written so that any person or AI assistant can pick up the work without prior context.

Last updated: 10 October 2026.

---

## 1. What this site is

- **Name:** Bhatt Research Lab (always this form; never "Tanay Bhatt Lab" in visible text or titles).
- **What it is:** the academic website of a small, virtual research group led by Tanay Bhatt. Members work at, and are registered through, different host institutions.
- **Why it exists:** to present the group's science and to give students and researchers public credit for their work under their own host institutions. Their work is otherwise not visible on any company site.
- **Live URL:** https://tanaybhattlab.pages.dev/ — hosted on Cloudflare Pages, which deploys automatically from the `main` branch. There is no build step; the repository root is the site root. Do not reintroduce the old URL `bhattlab.pages.dev`.
- **Owner:** Tanay Bhatt (goes by Yana).

---

## 2. Rules that must not be broken

1. **Science first.** Describe questions, systems, methods and published findings. Do not describe business structure, revenue, services, profit/non-profit status or who paid for what.
2. **Owner-approved exception (8 October 2026):** The interactive `research-connections.html` page may show KoshKey as a clearly labelled translational programme, with its public science link and the About affiliations/disclosures link. It may use labelled question, tool and translational-direction lists. Other pages retain the following rule. **KoshKey appears only in the People and About sections, linked to koshkey.com:** Tanay's People card ("KoshKey — Co-founder") and the About page affiliations list plus its one-line competing-interests statement. Nowhere else. Do not add sentences such as "includes R&D involving KoshKey".
3. **Tanay's title for KoshKey is "Co-founder" only.** Not "Director", not "Co-founder and Director".
4. **No client or sponsor information, ever.** No client or sponsor names, purchase-order numbers, product or active names, doses, formulations, results, figures or timelines from commissioned work. Before publishing any sentence about Theme 04 (or any sponsored work), apply this test: *would the sponsor recognise their project from this sentence?* If yes, generalise it further or delete it.
5. **No unpublished results.** Only published papers and posted preprints may be described as findings. Manuscripts in preparation may be listed by topic only, and only with the owner's approval.
6. **No invented facts.** Never invent a person's title, institution, date, degree, link or photo. If a fact is missing, leave the field out and add it to the pending list in section 8. Do not publish placeholders like "[TBD]" on live pages.
7. **Institution names are written out in full on first mention on each page:**
   - National Centre for Biological Sciences (NCBS)
   - Centre for Cellular and Molecular Platforms (C-CAMP)
   - Shiv Nadar Institution of Eminence (SNIoE, linked to Colin Jamora’s faculty page)
   - Indigenisation of Diagnostics (InDx) Program
8. **Do not claim appointments.** Do not describe Tanay as "Principal Investigator" of any institutional project, or give any institutional job title, unless he supplies it in writing. Use "Group Lead" for his role in this group.
9. **Keep the footer independence statement** on every page, unchanged: *"This website is independently maintained by Bhatt Research Lab. It is not an official website of any affiliated or collaborating institution and does not represent their views or positions."*
10. **Always fetch the latest `main` before editing** — the owner also edits directly on GitHub.

---

## 3. Voice and style

- **Write flowing prose, as a scientist would write for an educated reader.** Paragraphs, not labelled blocks. Do **not** use headings or bold lead-ins such as "Why it matters / What we ask / How we study it / Where it's heading" — the owner has rejected this robotic format. The same logic can shape a paragraph (context → question → approach → next step), but it must read naturally.
- Plain, specific words. Sentences mostly under 25 words. Paragraphs of 2–4 sentences.
- British spelling in prose (programme, characterise, neutralisation, organisation, centre). Keep official names as the institutions spell them ("InDx Program").
- Use "we" for the group. Use "Tanay Bhatt" (third person) on About and People.
- Name papers by journal and year in running text (e.g. "PLOS Biology, 2022") only when needed; link DOIs in the "Key papers" line under each theme instead.
- Preprints are always labelled "(preprint)" or "Preprint".
- Paper titles are copied exactly as published (capitalisation included), with species names in italics (e.g. *Carica papaya*).
- Hyphenated names that must not split across lines (C-CAMP, SARS-CoV-2) are wrapped in `<span class="nowrap">` in visible text.
- Spell "host defence" in British form everywhere, including titles and the header tagline; keep `host-defense` in existing ids and file names so links do not break.
- Company name spelling: **KoshKey**.
- Reference materials terminology: use **"reference reagents"** or **"reference materials"**, not "Reference Standard Project".
- No emoji, no exclamation marks, no marketing adjectives ("cutting-edge", "world-class").
- **Link arrows:** use **↗** only on links that leave the site (any `href` starting with `https://`: LinkedIn, ORCID, GitHub, DOI, bioRxiv, institution pages). Use **→** on links within the site (`*.html` pages, `#section` anchors, and in-page jumps on the research map). "Back to top ↑" keeps its upward arrow. Inline institution links in prose carry no arrow.
- **Contact email:** always written as `tanaynbhatt (at) gmail (dot) com` in plain text, never as a `mailto:` link or in the `name@domain` form, to reduce harvesting by spam bots.

---

## 4. Files and structure

| File | Purpose |
| --- | --- |
| `index.html` | Home: hero, five theme cards, people preview, five selected publications (newest first, including Cell Reports 2019), short "About the group" |
| `research.html` | Five research themes in full prose, each with tags and a "Key papers" line |
| `research-connections.html` | Owner-approved interactive map connecting research questions, methods and translational directions |
| `research-connections.css`, `research-connections.js` | Styles and interactions for the research map |
| `people.html` | Group lead card, then Project associates, Collaborating researchers, Dissertation students, Alumni |
| `publications.html` | Complete publication list, newest first |
| `about.html` | How the group works, affiliations, competing-interests statement |
| `styles.css` | All styling (single file) |
| `script.js` | Mobile menu and footer year only |
| `assets/people/*.webp` | Portraits (headshot crops preferred) |
| `assets/skin-host-defense.webp` | Hero artwork |
| `assets/og-image.jpg` | 1200×630 social preview image used by every page |
| `assets/logo-mark.svg` | Owner-provided vector logo used in the header and as the browser icon |
| `sitemap.xml`, `robots.txt` | Search indexing; update `lastmod` when pages change |
| `SITE_GUIDE.md` | This file |

Every page shares the same `<head>` pattern: title `"<Page> | Bhatt Research Lab"`, description, canonical URL at `https://tanaybhattlab.pages.dev/<page>` (extensionless), Open Graph tags including `og:image`, JSON-LD `WebSite`, favicon, stylesheet and deferred script. Keep that pattern on any new page and add the page to `sitemap.xml` and to the navigation on **all** pages.

The header brand mark and browser icon use the owner-provided vector in `assets/logo-mark.svg`. The tagline under the name is **SKIN BIOLOGY · HOST DEFENSE · BIOLOGICAL STANDARDS**, and the home hero eyebrow uses the same text.

### Templates

**Publication entry** (used on `publications.html`; the first four also appear on `index.html`):

```html
<a class="publication" id="paper-YYYY" href="https://doi.org/DOI"><span class="pub-year">YYYY</span><span><span class="pub-type">Research article | Preprint | Review | Protocol</span><strong>Title in sentence case.</strong><small>Journal · DOI DOI</small></span><span class="arrow" aria-hidden="true">↗</span></a>
```

**Person card** (inside the right `.profile-grid`):

```html
<article class="profile" id="first-last"><div class="profile-photo"><img src="assets/people/first-last-headshot.webp" alt="First Last" width="600" height="450" loading="lazy" decoding="async" class="photo-first-last"></div><div class="profile-copy"><h3>First Last</h3><p class="profile-role">Role in this group · Since YYYY</p><p class="profile-affiliation">Host institution (where registered / hosted)</p><p class="profile-bio">Two or three sentences on research interests.</p><ul class="profile-links"><li><a href="URL" aria-label="First Last on LinkedIn">LinkedIn <span aria-hidden="true">↗</span></a></li></ul></div></article>
```

Photos: WebP, 4:3 headshot crop, under ~150 KB. If a face sits off-centre, add a `.profile-photo .photo-first-last{object-position:…}` rule in `styles.css`.

**Research theme** (inside `.research-details`):

```html
<section class="research-detail" id="anchor"><div><p class="eyebrow">THEME 0N</p><h2>Theme title</h2></div><div><p>Paragraph.</p><p>Paragraph.</p><ul class="tags"><li>Tag</li></ul><p class="theme-papers">Key papers: <a href="https://doi.org/DOI">Journal Year</a> · …</p></div></section>
```

---

## 5. Content reference

### 5.1 Research themes (live text as of 27 September 2026)

Anchors are fixed; the home page cards link to them.

| # | Anchor | Title | Key papers |
| --- | --- | --- | --- |
| 01 | `#skin-repair` | Skin biology and tissue repair | PLOS Biology 2022; Bio-protocol 2018; Cell Communication & Adhesion 2013 |
| 02 | `#host-defense` | Antimicrobial peptides and host defense | Cell Reports 2019; bioRxiv 2026 (preprint); Frontiers in Immunology 2023; bioRxiv 2025 (preprint) |
| 03 | `#virology` | Virology and host–pathogen interactions | Frontiers in Immunology 2023; bioRxiv 2025 (preprint) |
| 04 | `#cellular-health` | Cellular health and circadian skin biology | none yet |
| 05 | `#reference-standards` | Biological reference materials and measurement | none yet (manuscript in preparation) |

Scientific facts the theme text relies on (verified against the papers):

- **2022 PLOS Biology:** wound-induced release of epidermal tension drives nuclear translocation of DNMT3a in differentiated keratinocytes; DNMT3a occupies and methylates the caspase-8 promoter, down-regulating caspase-8 to initiate repair.
- **2019 Cell Reports:** S100A7 (psoriasin) secretion after bacterial exposure is biphasic; the sustained phase depends on caspase-8 downregulation, also seen in inflammatory skin disease.
- **2023 Frontiers in Immunology:** LL37 (cathelicidin) disrupts the SARS-CoV-2 membrane; niacinamide enhances this; LL37 levels correlated inversely with COVID-19 severity.
- **2025 bioRxiv (preprint):** 12-hydroxystearic acid induces keratinocytes to secrete antimicrobial peptides that inhibit viral infection.
- **2026 bioRxiv (preprint):** flavonoid-capped silver nanoparticles derived from a Carica papaya fraction improved cell-culture antiviral selectivity over the unformulated fraction, acted before or during dengue virus adsorption, and reduced viral RNA across all four dengue serotypes.
- **Dengue context:** more than 14 million cases were reported worldwide in 2024 (International Journal of Infectious Diseases, 2025: https://www.sciencedirect.com/science/article/pii/S120197122500164X).
- **InDx work:** secondary reference reagents for DENV-1 to DENV-4, traceable to WHO reference reagents, with homogeneity and accelerated-stability studies and a four-laboratory collaborative study. Do not publish assigned values, Ct values or other data from the manuscript.

Theme 04 must stay at the level of questions, model systems and methods (primary human keratinocytes, ex vivo human skin, mitochondrial network and mitophagy imaging, oxidative stress and energy measurements, clock-gene time courses with cosinor analysis). Do not add results, compounds, sponsors or study designs.

### 5.2 Publications (complete list, verified on PubMed and Crossref)

| Year | Title | Journal | DOI | Type |
| --- | --- | --- | --- | --- |
| 2026 | Biogenic flavonoid capping converts a cytotoxic Carica papaya fraction into a selective, cross-serotype Dengue entry inhibitor | bioRxiv | 10.64898/2026.09.26.754612 | Preprint |
| 2025 | 12-Hydroxystearic acid induces epidermal keratinocytes to secrete antimicrobial peptides that are potent inhibitors of viral infection | bioRxiv | 10.1101/2025.07.01.662536 | Preprint |
| 2023 | Niacinamide enhances cathelicidin mediated SARS-CoV-2 membrane disruption | Frontiers in Immunology 14:1255478 | 10.3389/fimmu.2023.1255478 | Research article |
| 2022 | Initiation of wound healing is regulated by the convergence of mechanical and epigenetic cues | PLOS Biology 20(9):e3001777 | 10.1371/journal.pbio.3001777 | Research article |
| 2019 | Sustained secretion of the antimicrobial peptide S100A7 is dependent on the downregulation of caspase-8 | Cell Reports 29(9):2546–2555 | 10.1016/j.celrep.2019.10.090 | Research article |
| 2018 | Activation of fibroblast contractility via cell–cell interactions and soluble signals | Bio-protocol 8(18):e3021 | 10.21769/BioProtoc.3021 | Protocol |
| 2013 | Signaling and mechanical roles of E-cadherin | Cell Communication & Adhesion 20(6):189–199 | 10.3109/15419061.2013.854778 | Review |

**Name clash:** a 2026 *Conservation Biology* paper (doi 10.1111/cobi.70204) is by a different Tanay Bhatt (economist, UT Austin). Never add it.

### 5.3 Tanay Bhatt — how to present him

Profile links below his summary use the shared `.profile-links` list: LinkedIn `https://www.linkedin.com/in/tanay-bhatt/` and ORCID `https://orcid.org/0000-0001-9961-8051`. The public ORCID record identifies Tanay Bhatt and links to this LinkedIn profile (verified 8 October 2026).

People card, right column (`.role-list`), exactly three items:

1. **Indigenisation of Diagnostics (InDx) Program** — National Centre for Biological Sciences (NCBS) and Centre for Cellular and Molecular Platforms (C-CAMP)
2. **Colin Jamora Lab** — Shiv Nadar Institution of Eminence
3. **KoshKey** — Co-founder

Eyebrow above his name: **GROUP LEAD**. Do not add institutional job titles unless the owner provides them in writing.

### 5.4 About page — affiliations block

Three items (InDx Program; Colin Jamora Lab; KoshKey — "Tanay Bhatt is a co-founder of KoshKey."), followed by:

> **Competing interests.** Funding sources and author affiliations for each study, including any involvement of KoshKey, are declared in the corresponding publication.

and the virtual-group paragraph ("Bhatt Research Lab is a virtual research group. Members may work at different host institutions; a person's participation in the group does not imply an appointment at every collaborating organisation.").

---

## 6. Change log

**9 October 2026**

- Made the Research Connections central focus background translucent so connecting lines remain visible; kept text fully opaque.

**8 October 2026**

- Added Tanay’s verified LinkedIn and ORCID links below his People profile summary, matching the other researchers’ profile links.

- Added the owner-approved interactive Research Connections page, six connected fields, questions, tools and translational directions; distinguished proposed bridges and the KoshKey translational programme.
- Added links below the Home research themes and Research introduction, navigation on all pages, and the new canonical URL to the sitemap.
- Added LSDV to the reference-reagent description, as confirmed by the owner; retained DENV-specific WHO traceability.

**1 October 2026**

- Added the dengue-entry bioRxiv preprint to Publications, the four-paper Home preview, and Research Theme 03. Summarised cell-culture findings without clinical claims.

**27 September 2026**

- Removed all "includes academic collaborations and R&D involving Koshkey" wording (Home, Research, About); spelling standardised to KoshKey.
- Added a competing-interests statement on About; KoshKey role reduced to "Co-founder".
- Rewrote all five research themes as flowing prose based on the published work; added "Key papers" links; renamed Theme 05 to "Biological reference materials and measurement"; named the InDx Program; C-CAMP and NCBS written in full.
- Replaced "Principal Investigator, Reference Standard Project" and "Collaborator, Colin Jamora Laboratory" on the People card with the minimal three-item list (section 5.3).
- Publications page now lists all six works (added 2018 Bio-protocol and 2013 review); home page shows four.
- Home page title and Open Graph title unified to "Bhatt Research Lab"; one tagline across header and hero.
- Added `og:image` (`assets/og-image.jpg`) and Twitter card tags to every page.
- Replaced the "B" letter mark with a neutral three-wave placeholder, then replaced that placeholder with the owner-provided logo.
- "NCBS-TIFR" standardised to "NCBS".
- Home "About the group" text rewritten without company wording.

---

## 7. How to make changes safely

1. `git pull` (or fetch the file from GitHub) — the owner edits on GitHub directly.
2. Edit HTML by hand or with a script; keep one-line `<main>` structure intact.
3. Preview locally: `python3 -m http.server 8000` and open `http://localhost:8000`.
4. Check at desktop width and at 390 px (phone). No horizontal scroll.
5. Search the whole site for forbidden text before committing: `Koshkey` (wrong spelling), `Director`, `Principal Investigator`, `Reference Standard Project`, `R&D involving`, `//bhattlab.pages.dev` (the old URL; note `tanaybhattlab.pages.dev` is correct), `TBD`. ("Tanay Bhatt Lab" may appear only in the JSON-LD `alternateName` in `index.html`.)
6. Update `sitemap.xml` `lastmod` for changed pages and add a line to the change log above.
7. Commit to `main` with a descriptive message; Cloudflare Pages redeploys in about a minute. If it does not, open the Cloudflare dashboard → Workers & Pages → the project → Deployments, and retry the latest deployment.

---

## 8. Pending — needs information from the owner

Do not implement these until the owner supplies the facts.

| Item | What is needed | Where it goes |
| --- | --- | --- |
| Host institution for every member | For Sarang Gajare, Akarsh B, Sanyukta Bholay, Zidhan Subair (and confirm the others): the institution each person is registered or hosted at | `.profile-affiliation` on People |
| Start year for every member; start–end for alumni | Years for everyone (Jeel Dasondi already has May–July 2026; Asmi Ashish Mehta has none) | `.profile-role`, e.g. "Project Associate · Since 2025" |
| Clarify roles | Sarang is listed as "Project Associate" and "M.Sc. Molecular Medicine student"; Harshini as "Collaborating Project Associate". Confirm the correct role in the group vs the degree being studied | People |
| Bios | Decide whether every bio has a one-line personal note or none (currently 4 of 11 do) | People |
| Photos | Consistent headshot crop for all; possibly a more neutral group-lead photo | `assets/people/` |
| Amrutha Sharma | A profile link (LinkedIn/ORCID/GitHub) | People |
| Colin Jamora Lab link | Lab name links to the lab website; SNIoE abbreviation links to Colin Jamora’s Shiv Nadar faculty page | People, About, Research, Home |
| Tanay's profiles | ORCID and LinkedIn are installed. Google Scholar URL still needed; update ResearchGate (currently shows "Research Scholar, TIFR") | People card, footer |
| 2025 preprint authorship | Confirm author position before any "first author" labelling | Publications |
| Join page | How students join (via which institutions), what to send, and a contact method | New `join.html` + nav on every page |
| Acknowledgements | Named funders and core facilities to acknowledge | About (new section) |
| Contact email | Installed as `tanaynbhatt (at) gmail (dot) com` (plain text, no `mailto:`) in the footer of every page and on Tanay's People card. Replace if a dedicated lab address is set up later | Footer / People |
| Logo | Owner-provided SVG logo is installed in `assets/logo-mark.svg` for the header and browser icon | All pages |
| Sponsored-work check | Owner to confirm agreements allow a general mention of mitochondrial and circadian research (Theme 04) | Research |
| Manuscripts in preparation | Owner and co-authors to approve listing by topic only (dengue reference reagents; silver nanoparticles against DENV-2) | Publications |
| News | Optional: dated items such as new members, preprints, talks, NCBS Open Day 2026 | New section on Home |
