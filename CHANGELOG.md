# Changelog

## [1.0.2] - 2026-07-13

### Changed

- Marketplace package is a **pure theme** (color + icon themes only) — no runtime JS that rewrites editor settings (avoids “suspicious content” false positives)
- Added square `icon.png` (256×256) for Marketplace metadata
- README documents the four modes via Color Theme + File Icon Theme pickers

## [1.0.1] - 2026-07-13

### Fixed

- Marketplace packaging: exclude build `scripts/` from the VSIX
- Mode commands no longer write `.vscode/settings.json` on disk (settings API only) to avoid “suspicious content” false positives

## [1.0.0] - 2026-07-13

First stable release. Unofficial, free, non-profit fan theme for Visual Studio Code / Cursor.

### Included

- **Sonic-Inspired Dark** and **Sonic-Inspired Light** color themes (accessibility-tuned palette)
- **Sonic-Inspired Icons** — 26 character file icons mapped by color/vibe
- **Four Command Palette modes** (`Sonic-Inspired`):
  - Full Dark / Full Light — colors + character icons
  - Dark / Light colors only — colors + default editor icons (Seti / previous / None)
- English README, Marketplace description, and dual **LICENSE** (MIT for code; restricted non-commercial for character assets)
- SEGA trademark / non-affiliation notice

### Pre-1.0

Earlier `0.x` builds covered palette work, icon remaps, licensing, Command Palette modes, and icon-switching fixes. Those notes are folded into this 1.0.0 release.
