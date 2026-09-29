# Mackay Green Energy Global — website

A static, single-page site with no build step. Upload the folder to any static host (Netlify, Vercel, GitHub Pages, cPanel).

Preview locally (the SVG logo masks need http, so opening the file directly won't show them):

```bash
python3 -m http.server 8420
```

```
index.html          page content (copy derived from MGEG Master Narrative v5)
css/styles.css      brand tokens at the top: Oat, Sand, Grass, Moss, Bark
js/main.js          header state, mobile menu, scroll reveal
img/brand/          cleaned, renamed brand files used by the site
img/photos/         placeholder photography (Unsplash, see below)
assets/             the original files as received, untouched
```

## Brand assets: what was in `assets/`

The folder held **8 marks × 4 colourways** (Bark, Black, Oat, White). The numbered
"(1)(2)(3)" files are colour variants, not duplicates:

| Original | What it is | Used on site as |
|---|---|---|
| Primary Logo `.png` / (1) / (2) / (3) | Full lockup + tagline — Black / White / Oat / Bark | `logo-primary.svg` (footer) |
| Secondary logo `.png` / (1) / (2) / (3) | Full lockup + "Solutions" — Black / White / Oat / Bark | `logo-secondary.svg` (not used yet) |
| Asset 1 | Single rampant lion | `mark-lion-*.png` (PNG only, no SVG supplied) |
| Asset 2 | Two lions facing | `mark-lions.svg` |
| Asset 3 | MG/EG monogram | `monogram-*.png` (PNG only, no SVG supplied) |
| Asset 4 | Monogram in oval | `mark-oval-monogram.svg`, favicon |
| Asset 6 | Crest: lions + oval monogram | `mark-crest.svg` (header, hero) |
| Asset 8 | Lion in oval | `mark-oval-lion.svg` (contact) |

The site SVGs are recoloured with CSS masks, so one file serves every brand colour.
`pattern-grass.svg` is a crisp recreation of the flowing-line texture from the style sheet.

## Open items before launch

- **Contact email:** `info@example.com` in `index.html` is a placeholder.
- **Photography:** the six photos are free Unsplash placeholders (see below). Ideally
  replace them with MGEG's own shots: real Mackay Bana grass, nurseries, the team in the field.
- **Missing vectors:** ask 504 Collective for SVGs of Asset 1 and Asset 3, and for Asset 5
  (shown on the style sheet but not in the files).
- **Domain:** add `og:url` and an absolute `og:image` URL once it is known.

## Placeholder photography

All photos are from Unsplash under the [Unsplash License](https://unsplash.com/license):
free for commercial use, attribution not required but credited in the footer anyway.
None of them show Mackay Bana grass itself.

| File | Used in | Photographer | Source |
|---|---|---|---|
| `hero-field.jpg` | Hero oval | An Duc Cao Xuan | https://unsplash.com/photos/X93OA6dPryw |
| `crop-leaves.jpg` | The Crop | Austris Augusts | https://unsplash.com/photos/i5SzUPuVgaY |
| `aerial-rows.jpg` | Full-width band | Bernd Dittrich | https://unsplash.com/photos/fnZ-FXWxl2c |
| `product-chips.jpg` | End products | Regard Vrai IDF | https://unsplash.com/photos/AjIlmFCARJA |
| `nursery-hands.jpg` | Start with a nursery | GreenForce Staffing | https://unsplash.com/photos/bYZn_C-RswQ |
| `region-valley.jpg` | Where we work | Nadine Venter | https://unsplash.com/photos/KG46xMHpaPM |

To swap one, keep the same filename, or update the `src`, `width` and `height` in `index.html`.
Once all six are replaced, remove the `.credits` line in the footer.
