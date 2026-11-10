# david.lebee.info

David Lebée's personal site. Plain HTML/CSS, no build step, hosted on GitHub Pages.

| File | What it is |
| --- | --- |
| `index.html` | The site. Edit content directly here. |
| `brand-kit.html` | Brand kit — local only (gitignored); view at http://localhost:4173/brand-kit.html. |
| `assets/css/tokens.css` | Every colour, font and spacing value (light + dark). |
| `assets/css/site.css` | Layout and components, incl. print styles. |
| `assets/js/site.js` | Computes "years" from `data-since="YYYY-MM"` so durations stay current. |
| `favicon.svg` | Browser-tab icon. |
| `assets/img/david.jpg` | Portrait (metadata stripped). |
| `CNAME` | Custom domain: `david.lebee.info`. |

Run locally: `python3 -m http.server 4173` then open http://localhost:4173.

Adding a skill: copy an `<li data-since="YYYY-MM">` row in the skills aside.
Adding an article: copy an `<li>` in the `.posts` list under "Writing & teaching".
