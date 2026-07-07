# Sonic Theme

Tema visual para VS Code inspirado em **Sonic the Hedgehog** — com color themes e file icons customizados usando as cores clássicas: azul Sonic, vermelho, dourado dos anéis e verde Emerald Hill.

## O que está incluído

### Color Themes

| Tema | Descrição |
|------|-----------|
| **Sonic Dark** | Tema escuro com fundo navy, acentos azul Sonic e highlights dourados |
| **Sonic Light** | Tema claro com fundo azul-pálido e mesma paleta semântica |

### Paleta de cores

| Cor | Hex (Dark / Light) | Uso |
|-----|---------------------|-----|
| Azul Sonic | `#4D8CFF` / `#1E5BFF` | Keywords, activity bar, acentos |
| Laranja coral | `#FF7A45` / `#D45A20` | Tags, erros, badges, git deleted |
| Dourado anel | `#FFD700` / `#B8860B` | Strings, git modified |
| Teal Emerald Hill | `#5BC8D4` / `#0E8A96` | Comentários |
| Verde-água | `#3DDBA8` / `#0A9E6E` | Imports, git untracked |
| Ciano função | `#7DD3FC` / `#0284C7` | Funções, chamadas |
| Rosa-salmão | `#FF9EAA` / `#C43D52` | Tipos, classes |
| Magenta | `#FF6B9D` / `#CC4488` | Booleanos, regex |

> **Acessibilidade:** A paleta foi ajustada na v0.2.0 para ser distinguível por pessoas com protanopia e deuteranopia. O vermelho-verde clássico foi substituído por laranja coral e teal, com diferenciação adicional via luminância e estilos de fonte (negrito, itálico, sublinhado). A identidade Sonic é preservada: azul, dourado dos anéis, teal de Emerald Hill e energia laranja.

### File Icon Theme — Sonic Icons

| Extensão | Ícone | Temática |
|----------|-------|----------|
| `.js`, `.mjs`, `.cjs`, `.jsx` | Anel dourado | Ring |
| `.md`, `.mdx` | Tails | Documentação |
| `.ts`, `.tsx` | Sonic | TypeScript / velocidade |
| `.json`, `.jsonc` | Esmeralda | Chaos Emerald |
| `.html`, `.htm` | Knuckles | HTML |
| `.css`, `.scss`, `.sass`, `.less` | Tênis | Speed shoes |
| `.py` | Amy | Python |
| `.yaml`, `.yml` | Shadow | Configuração |
| `.vue`, `.svelte` | Sonic | Frameworks front-end |

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
   - `Ctrl+K Ctrl+T` → **Sonic Dark** ou **Sonic Light**
   - `Ctrl+Shift+P` → `Preferences: File Icon Theme` → **Sonic Icons**

### Instalar via VSIX

```bash
npm install
npm run package
```

Isso gera `sonic-theme-0.2.0.vsix`. Instale com:

`Ctrl+Shift+P` → `Extensions: Install from VSIX...`

## Estrutura do projeto

```
SonicTheme/
├── package.json              # Manifest da extensão
├── themes/
│   ├── sonic-dark-color-theme.json
│   └── sonic-light-color-theme.json
├── icons/
│   ├── sonic-icon-theme.json
│   └── assets/               # PNGs dos ícones + SVGs de pasta/arquivo
├── scripts/
│   └── make-icons-transparent.mjs
└── .vscode/launch.json       # Debug F5
```

## Contribuindo

Sinta-se à vontade para abrir issues ou PRs com novos mapeamentos de ícones, ajustes de cores ou variantes de tema.

## Licença

[MIT](LICENSE)
