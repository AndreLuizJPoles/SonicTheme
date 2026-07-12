# Sonic-Inspired Theme

Tema visual **não oficial** para VS Code, inspirado na estética de Sonic the Hedgehog — com color themes e file icons customizados nas cores clássicas: azul, dourado dos anéis e teal de Emerald Hill.

## Aviso de propriedade intelectual

Este é um **projeto de fã**, gratuito e sem fins comerciais.

- **Não** é afiliado, endossado, patrocinado ou aprovado pela SEGA CORPORATION, SEGA of America, Inc. ou qualquer empresa do grupo SEGA.
- Sonic the Hedgehog, personagens relacionados, nomes e marcas associadas são **marcas registradas e propriedade intelectual da SEGA**.
- Os ícones de personagens e símbolos temáticos em `icons/assets/` são fan art inspirada nessa franquia; o uso deles **não** concede direitos sobre a IP da SEGA.
- Não há versão paga desta extensão, nem monetização vinculada ao uso da marca ou dos personagens.

## O que está incluído

### Color Themes

| Tema | Descrição |
|------|-----------|
| **Sonic-Inspired Dark** | Tema escuro com fundo navy, acentos azul e highlights dourados |
| **Sonic-Inspired Light** | Tema claro com fundo azul-pálido e mesma paleta semântica |

### Paleta de cores

| Cor | Hex (Dark / Light) | Uso |
|-----|---------------------|-----|
| Azul | `#4D8CFF` / `#1E5BFF` | Keywords, activity bar, acentos |
| Laranja coral | `#FF7A45` / `#D45A20` | Tags, erros, badges, git deleted |
| Dourado anel | `#FFD700` / `#B8860B` | Strings, git modified |
| Teal Emerald Hill | `#5BC8D4` / `#0E8A96` | Comentários |
| Verde-água | `#3DDBA8` / `#0A9E6E` | Imports, git untracked |
| Ciano função | `#7DD3FC` / `#0284C7` | Funções, chamadas |
| Rosa-salmão | `#FF9EAA` / `#C43D52` | Tipos, classes |
| Magenta | `#FF6B9D` / `#CC4488` | Booleanos, regex |

> **Acessibilidade:** A paleta foi ajustada na v0.2.0 para ser distinguível por pessoas com protanopia e deuteranopia. O vermelho-verde clássico foi substituído por laranja coral e teal, com diferenciação adicional via luminância e estilos de fonte (negrito, itálico, sublinhado). A identidade visual inspirada é preservada: azul, dourado dos anéis, teal de Emerald Hill e energia laranja.

### File Icon Theme — Sonic-Inspired Icons

Ícones de personagens mapeados por cor e vibe:

| Ícone | Extensões / arquivos | Por quê |
|-------|----------------------|---------|
| Sonic | `.ts`, `.tsx`, `tsconfig.json` | Azul / velocidade |
| Tails | `.js`, `.mjs`, `.cjs`, `.jsx` | Amarelo / JS |
| Knuckles | `.html`, `.htm` | Vermelho / HTML |
| Amy | `.css` | Rosa / estilo |
| Rouge | `.scss`, `.sass`, `.less` | Rosa-escuro / Sass |
| Super Sonic | `.json`, `.jsonc`, `package.json` | Dourado / JSON |
| Cream | `.md`, `.mdx`, `README.md` | Documentação |
| Vanilla | `.txt`, `LICENSE` | Texto simples |
| Shadow | `.yaml`, `.yml`, `.env`, `.gitignore` | Config “dark” |
| Wave | `.toml`, `.ini`, `.conf` | Engenheira / config |
| Jet | `.py`, `.vue` | Verde / Python & Vue |
| Marine | `.svelte` | Teal / front |
| Vector | `.go`, áudio (`.mp3`, `.wav`…) | Verde + fones |
| Metal Sonic | `.rs` | Metal / Rust |
| Espio | `.rb`, lockfiles | Magenta / ninja |
| Blaze | `.php` | Roxo / PHP |
| Silver | `.cs`, `.fs` | Prata / C# & F# |
| Omega | `.c`, `.cpp`, `.h`… | Robô / nativo |
| Storm | shell, `Dockerfile` | Pesado / infra |
| Gamma | `.exe`, `.dll`, `.bin`… | Robô / binário |
| Emerl | `.wasm` | Gizoid / runtime |
| Chaos | `.sql`, `.graphql`, `.prisma` | Fluido / dados |
| Tikal | `.xml`, `.svg` | Antigo / markup |
| Charmy | `.log` | “Bug” / logs |
| Big | `.zip`, `.tar`, `.gz`… | Arquivos pesados |
| Cheese | arquivo padrão (fallback) | Chao / genérico |

## Instalação

### Desenvolvimento local (F5)

1. Clone o repositório:
   ```bash
   git clone https://github.com/AndreLuizJPoles/SonicTheme.git
   cd SonicTheme
   ```
2. Abra a pasta no VS Code
3. Pressione **F5** para abrir o Extension Development Host
4. No host, ative os temas:
   - `Ctrl+K Ctrl+T` → **Sonic-Inspired Dark** ou **Sonic-Inspired Light**
   - `Ctrl+Shift+P` → `Preferences: File Icon Theme` → **Sonic-Inspired Icons**

### Instalar via VSIX

```bash
npm install
npm run package
```

Isso gera `sonic-inspired-theme-0.4.0.vsix`. Instale com:

`Ctrl+Shift+P` → `Extensions: Install from VSIX...`

## Estrutura do projeto

```
SonicTheme/
├── package.json              # Manifest da extensão
├── LICENSE                   # Licença dual (MIT + assets restritos)
├── themes/
│   ├── sonic-dark-color-theme.json
│   └── sonic-light-color-theme.json
├── icons/
│   ├── sonic-icon-theme.json
│   └── assets/               # PNGs dos personagens + SVGs de pasta
├── scripts/
│   └── make-icons-transparent.mjs
└── .vscode/launch.json       # Debug F5
```

## Contribuindo

Sinta-se à vontade para abrir issues ou PRs com novos mapeamentos de ícones, ajustes de cores ou variantes de tema. Contribuições devem respeitar o caráter não comercial e de fã do projeto.

## Licença

Licença **dual** — veja [LICENSE](LICENSE):

- **MIT:** código da extensão, temas de cor e mapeamento de ícones
- **Restrita (não comercial):** assets em `icons/assets/` inspirados em personagens/símbolos da franquia Sonic; redistribuição comercial desses assets não é permitida
