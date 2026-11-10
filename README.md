# lebee.info

David Lebée's résumé site. Plain HTML/CSS, no build step, hosted on GitHub Pages.

| File | What it is |
| --- | --- |
| `index.html` | The résumé. Edit content directly here. |
| `brand/index.html` | Brand kit (logo, colour, type, voice) at `/brand/`. |
| `assets/css/tokens.css` | Every colour, font and spacing value (light + dark). |
| `assets/css/site.css` | Layout and components, incl. print styles for "Save PDF". |
| `assets/js/site.js` | Computes "years" from `data-since="YYYY-MM"` so durations stay current. |
| `assets/img/mark.svg` | Monogram (also `favicon.svg`). |
| `CNAME` | Custom domain: `lebee.info`. |

Run locally: `python3 -m http.server 4173` then open http://localhost:4173.

Adding a skill: copy an `<li data-since="YYYY-MM">` row in the skills aside.
Adding an article: copy an `<li>` in the `.posts` list under "Writing & teaching".
