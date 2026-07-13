# Changelog

## [0.7.4] - 2026-07-13

### Removed

- **Sonic-Inspired Icons (Plain)** — colors-only modes use only character icons **or** the editor default (Seti / previous / None)

### Changed

- Colors-only restores the previous file icon theme when possible; otherwise Seti, then None if characters would remain

## [0.7.3] - 2026-07-13

### Fixed

- Mode commands now flush icons (`null` → target), write **User + Workspace** settings, and update `.vscode/settings.json` so folder workspaces (e.g. Teste) actually switch off character icons
- Always shows a confirmation toast; offers **Open File Icon Theme** to pick `Sonic-Inspired Icons (Plain)` manually if needed

## [0.7.2] - 2026-07-13

### Fixed

- **Colors only** modes switch to a built-in plain icon theme (`sonic-inspired-icons-plain`) with generic file/folder SVGs only — no reliance on Seti/None on Cursor/VS Code

### Added

- File icon theme **Sonic-Inspired Icons (Plain)**

## [0.7.1] - 2026-07-13

### Fixed

- **Colors only** modes now actually leave Sonic character icons (clear workspace overrides, fall back to Seti / None when the host rejects the icon theme id)

## [0.7.0] - 2026-07-13

### Changed

- Command Palette labels, README, and Marketplace description moved to English for a wider audience
- Quick Pick strings in `extension.js` updated to match

## [0.6.0] - 2026-07-13

### Added

- Command Palette commands for the four modes (`Ctrl+Shift+P` / `Cmd+Shift+P` → Sonic-Inspired)
- **Choose Mode…** Quick Pick with the four presets
- `extension.js` applies color theme + icon theme together

## [0.5.0] - 2026-07-13

### Changed

- Documented four usage modes (Dark/Light × with or without Sonic-Inspired Icons)
- README rewritten in a more approachable tone; SEGA notice and non-profit framing reinforced
- LICENSE explicitly calls out free / non-profit content and asset restrictions
- Marketplace description aligned with v0.5.0

## [0.4.0] - 2026-07-12

### Changed

- File icons: character art only (26); removed ring, emerald, and shoe icons
- Remapped by color/vibe (e.g. Tails→JS, Super→JSON, Metal→Rust, Chaos→SQL)

## [0.3.0] - 2026-07-12

### Changed

- Extension and theme names set to **Sonic-Inspired** (unofficial fan project)
- Dual license: MIT for code/color themes; non-commercial restriction for character assets
- README and Marketplace description with explicit IP / no-affiliation notice
- Extension remains free, with no monetization

## [0.2.0] - 2026-07-06

### Changed

- PNG icons with transparent backgrounds (`icons:transparent` via sharp)
- Sonic Dark and Sonic Light palette tuned for protanopia/deuteranopia
- Pure red replaced with coral orange; pure green with teal/cyan
- Stronger `fontStyle` (bold, italic, underline) on semantic tokens
- Workbench, git decoration, and terminal ANSI colors aligned to the new palette

## [0.1.0] - 2026-07-06

### Added

- Sonic Dark color theme
- Sonic Light color theme
- Sonic Icons file icon theme with thematic mappings for common extensions
