# Sonic Theme

Tema visual para VS Code inspirado em **Sonic the Hedgehog** — com color themes e file icons customizados usando as cores clássicas: azul Sonic, vermelho, dourado dos anéis e verde Emerald Hill.

> **Disclaimer:** Este é um projeto de fã não oficial. Sonic the Hedgehog é propriedade da SEGA. Os ícones são arte original minimalista inspirada no universo Sonic, sem uso de assets oficiais.

## O que está incluído

### Color Themes

| Tema | Descrição |
|------|-----------|
| **Sonic Dark** | Tema escuro com fundo navy, acentos azul Sonic e highlights dourados |
| **Sonic Light** | Tema claro com fundo azul-pálido e mesma paleta semântica |

### Paleta de cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Azul Sonic | `#1E5BFF` | Keywords, activity bar, acentos |
| Vermelho Sonic | `#E52521` | Tags, erros, badges |
| Dourado anel | `#FFD700` | Strings, números, cursor |
| Verde Emerald Hill | `#2ECC71` | Comentários, imports |

### File Icon Theme — Sonic Icons

| Extensão | Ícone | Temática |
|----------|-------|----------|
| `.js`, `.mjs`, `.cjs`, `.jsx` | Anel dourado | Ring |
| `.md`, `.mdx` | Tails | Documentação |
| `.ts`, `.tsx` | Sonic | TypeScript / velocidade |
| `.json`, `.jsonc` | Esmeralda | Chaos Emerald |
| `.html`, `.htm` | Colina verde | Green Hill Zone |
| `.css`, `.scss`, `.sass`, `.less` | Tênis | Speed shoes |
| `.py` | Chaos | Chaos energy |
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

Isso gera `sonic-theme-0.1.0.vsix`. Instale com:

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
│   └── assets/               # SVGs dos ícones
└── .vscode/launch.json       # Debug F5
```

## Contribuindo

Sinta-se à vontade para abrir issues ou PRs com novos mapeamentos de ícones, ajustes de cores ou variantes de tema.

## Licença

[MIT](LICENSE)
