# Sweetwater District — BSA San Diego-Imperial Council
### Unit Website Platform

**Live site:** https://pkoniarski.github.io/sweetwater-district/

---

## Repository Structure

```
sweetwater-district/
├── index.html              ← District Hub (main page)
├── unit-template.html      ← Setup wizard — units use this to create their site
├── README.md               ← This file
└── units/
    ├── troop-800/
    │   └── index.html      ← Troop 800 website
    ├── troop-850/
    │   └── index.html
    ├── pack-755/
    │   └── index.html
    └── (add more as units join)
```

## Adding a New Unit (Roundtable Workflow)

1. Unit leader visits `https://pkoniarski.github.io/sweetwater-district/unit-template.html`
2. Completes the 5-step setup wizard (~5 minutes)
3. Downloads their generated HTML file (e.g. `Troop_800_Chula_Vista.html`)
4. In this repo: click **Add file → Upload files**
5. Navigate into `units/` → create folder `troop-800/` → upload file renamed to `index.html`
6. Commit — site is live in ~2 minutes at `pkoniarski.github.io/sweetwater-district/units/troop-800/`

## Unit URLs

| Unit | URL |
|------|-----|
| District Hub | https://pkoniarski.github.io/sweetwater-district/ |
| Setup Wizard | https://pkoniarski.github.io/sweetwater-district/unit-template.html |
| Troop 800 | https://pkoniarski.github.io/sweetwater-district/units/troop-800/ |
| Troop 850 | https://pkoniarski.github.io/sweetwater-district/units/troop-850/ |
| Pack 755 | https://pkoniarski.github.io/sweetwater-district/units/pack-755/ |

## Folder Name Convention

Use lowercase with hyphens: `troop-800`, `pack-755`, `crew-42`, `ship-12`

## Technology

Static HTML/CSS/JS — no build step required. GitHub Pages serves files directly.

**Backend migration:** When the Council server is ready, only two functions in each unit file need to change (`loadUnitData` and `saveUnitData`). All URLs stay the same.

## Contact

SM Paul · Troop 800 · Sweetwater District · San Diego-Imperial Council, BSA
