# Sonic-Inspired Theme

An unofficial fan theme for Visual Studio Code, inspired by the classic look of Sonic the Hedgehog — speed blue, ring gold, and Emerald Hill teal.

It started as a way to code with a visual identity that nods to that franchise, without claiming to be official. It is free, non-profit, and meant for anyone who wants the editor to feel a little more fun.

## Four modes

Easiest path: open the **Command Palette** (`Ctrl+Shift+P` / `Cmd+Shift+P` on macOS) and type `Sonic-Inspired`.

| Command | What it applies |
|---------|-----------------|
| **Sonic-Inspired: Choose Mode…** | Pick one of the four modes from a menu |
| **Full Dark (colors + icons)** | Dark theme + character file icons |
| **Full Light (colors + icons)** | Light theme + character file icons |
| **Dark colors only** | Dark theme + default VS Code icons (Seti / previous) |
| **Light colors only** | Light theme + default VS Code icons (Seti / previous) |

You can still set colors and icons separately (`Ctrl+K Ctrl+T` and `Preferences: File Icon Theme`) if you prefer.

> **Note:** `Ctrl+K Ctrl+T` only changes colors. To turn character icons on or off, use the **Sonic-Inspired** commands above (or File Icon Theme → **Sonic-Inspired Icons** vs **Seti** / **None**).

## Color Themes

| Theme | Description |
|-------|-------------|
| **Sonic-Inspired Dark** | Navy background, blue accents, gold highlights |
| **Sonic-Inspired Light** | Pale-blue background with the same semantic palette |

### Palette

| Color | Hex (Dark / Light) | Use |
|-------|--------------------|-----|
| Blue | `#4D8CFF` / `#1E5BFF` | Keywords, activity bar, accents |
| Coral orange | `#FF7A45` / `#D45A20` | Tags, errors, badges, git deleted |
| Ring gold | `#FFD700` / `#B8860B` | Strings, git modified |
| Emerald Hill teal | `#5BC8D4` / `#0E8A96` | Comments |
| Aqua green | `#3DDBA8` / `#0A9E6E` | Imports, git untracked |
| Function cyan | `#7DD3FC` / `#0284C7` | Functions, calls |
| Salmon pink | `#FF9EAA` / `#C43D52` | Types, classes |
| Magenta | `#FF6B9D` / `#CC4488` | Booleans, regex |

The palette aims to stay clearer for people with protanopia or deuteranopia — coral orange and teal instead of classic red/green, plus luminance and font styles — without losing the blue / ring / Emerald Hill vibe.

## File Icon Theme — Sonic-Inspired Icons

Character icons mapped by color and feel (optional — turn them on or off via the modes above):

| Icon | Extensions / files | Why |
|------|--------------------|-----|
| Sonic | `.ts`, `.tsx`, `tsconfig.json` | Blue / speed |
| Tails | `.js`, `.mjs`, `.cjs`, `.jsx` | Yellow / JS |
| Knuckles | `.html`, `.htm` | Red / HTML |
| Amy | `.css` | Pink / styling |
| Rouge | `.scss`, `.sass`, `.less` | Deep pink / Sass |
| Super Sonic | `.json`, `.jsonc`, `package.json` | Gold / JSON |
| Cream | `.md`, `.mdx`, `README.md` | Docs |
| Vanilla | `.txt`, `LICENSE` | Plain text |
| Shadow | `.yaml`, `.yml`, `.env`, `.gitignore` | “Dark” config |
| Wave | `.toml`, `.ini`, `.conf` | Engineer / config |
| Jet | `.py`, `.vue` | Green / Python & Vue |
| Marine | `.svelte` | Teal / front-end |
| Vector | `.go`, audio (`.mp3`, `.wav`…) | Green + headphones |
| Metal Sonic | `.rs` | Metal / Rust |
| Espio | `.rb`, lockfiles | Magenta / ninja |
| Blaze | `.php` | Purple / PHP |
| Silver | `.cs`, `.fs` | Silver / C# & F# |
| Omega | `.c`, `.cpp`, `.h`… | Robot / native |
| Storm | shell, `Dockerfile` | Heavy / infra |
| Gamma | `.exe`, `.dll`, `.bin`… | Robot / binaries |
| Emerl | `.wasm` | Gizoid / runtime |
| Chaos | `.sql`, `.graphql`, `.prisma` | Fluid / data |
| Tikal | `.xml`, `.svg` | Ancient / markup |
| Charmy | `.log` | “Bug” / logs |
| Big | `.zip`, `.tar`, `.gz`… | Heavy archives |
| Cheese | default file (fallback) | Chao / generic |

## Installation

### Local development (F5)

1. Clone the repository:
   ```bash
   git clone https://github.com/AndreLuizJPoles/SonicTheme.git
   cd SonicTheme
   ```
2. Open the folder in VS Code
3. Press **F5** to launch the Extension Development Host
4. In that window: `Ctrl+Shift+P` / `Cmd+Shift+P` → type `Sonic-Inspired` → **Choose Mode…** (or pick a mode directly)

### Install from VSIX

```bash
npm install
npm run package
```

This produces `sonic-inspired-theme-1.0.0.vsix`. Install with:

`Ctrl+Shift+P` / `Cmd+Shift+P` → `Extensions: Install from VSIX...`

## SEGA / intellectual property notice

This is a **fan project**: **free** and **non-profit**. There is no paid version, no brand-tied donations, and no monetization based on the characters.

- It is **not** affiliated with, endorsed, sponsored, or approved by SEGA CORPORATION, SEGA of America, Inc., or any SEGA group company.
- Sonic the Hedgehog, related characters, names, and marks are **trademarks and intellectual property of SEGA**.
- Icons under `icons/assets/` are fan art inspired by that franchise; using them **does not** grant any rights to SEGA’s IP.

## Project structure

```
SonicTheme/
├── package.json              # Extension manifest
├── extension.js              # Commands for the four modes
├── LICENSE                   # Dual license (MIT + restricted assets)
├── themes/
│   ├── sonic-dark-color-theme.json
│   └── sonic-light-color-theme.json
├── icons/
│   ├── sonic-icon-theme.json
│   └── assets/               # Character PNGs + folder SVGs
├── scripts/
│   └── make-icons-transparent.mjs
└── .vscode/launch.json       # F5 debug
```

## Contributing

Issues and PRs are welcome — new icon mappings, color tweaks, clearer docs. Please keep contributions free, non-commercial, and clearly fan-made.

## License

**Dual** licensing — see [LICENSE](LICENSE):

- **MIT:** code, color themes, and icon mapping JSON
- **Restricted (non-commercial):** assets under `icons/assets/` inspired by franchise characters; commercial redistribution of those files is not allowed
