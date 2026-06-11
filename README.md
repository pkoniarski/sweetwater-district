# Sweetwater District Unit Website Platform

**Live site:** https://pkoniarski.github.io/sweetwater-district/

## Repo structure
```
sweetwater-district/
├── index.html             ← District Hub (directory, master calendar, news)
├── unit-template.html     ← Web Builder (5-step wizard → downloads unit site)
├── README.md
└── units/
    ├── troop-800/index.html      ← live unit sites (uploaded by district admin)
    ├── pack-755/index.html
    └── ...
```

## Unit URL convention
`https://pkoniarski.github.io/sweetwater-district/units/{type}-{number}/`
Folder names: lowercase, hyphens — `troop-800`, `troop-800g`, `pack-755`, `crew-42`, `ship-12`

## How a unit gets a website (the roundtable workflow)
1. Leader opens `/unit-template.html` and completes the 5-step wizard (~3 min)
2. Wizard downloads a configured file, e.g. `Troop_800_Chula_Vista.html`
3. Leader emails the file to the district admin
4. Admin uploads it to `units/troop-800/index.html` via GitHub drag-and-drop
5. Live in ~90 seconds

## Calendar sync (Phase 1 — same-origin localStorage)
- **Uplink:** when a unit adds an event with "📡 Also publish on the District
  calendar" checked, it's written to the shared key `sw_district_shared_events`,
  which the District Hub reads and displays with unit attribution.
- **Downlink:** the district admin clicks "+ District Event (admin)" on the
  master calendar (password protected); the event is written to
  `sw_district_broadcast`, which every unit page merges into its calendar.
- Live cross-tab updates via the browser `storage` event.
- ⚠️ Works only when pages share an origin (GitHub Pages ✅, file:// ❌).
- Phase 2 replaces both keys with REST endpoints (`/api/district/events`) —
  the migration points are marked with `COUNCIL SERVER:` comments in the code.

## Phase roadmap
| Phase | Hosting | Adds |
|---|---|---|
| 1 (now) | GitHub Pages, free | Unit sites, wizard, same-browser calendar sync |
| 2 | DigitalOcean ~$15/mo | Real DB, photo uploads, cross-device sync, iCal feeds |
| 3 | Council server | my.Scouting SSO, official hosting |
