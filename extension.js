const vscode = require("vscode");

const COLOR_DARK = "Sonic-Inspired Dark";
const COLOR_LIGHT = "Sonic-Inspired Light";
const ICON_CHARACTERS = "sonic-inspired-icons";
/** Built-in VS Code / Cursor default file icons. */
const ICON_DEFAULT = "vs-seti";
const PREV_ICON_KEY = "sonicInspired.previousIconTheme";

const MODES = [
  {
    command: "sonic-inspired.darkWithIcons",
    label: "Full Dark",
    description: "Sonic-Inspired Dark + character icons",
    colorTheme: COLOR_DARK,
    useCharacterIcons: true,
  },
  {
    command: "sonic-inspired.lightWithIcons",
    label: "Full Light",
    description: "Sonic-Inspired Light + character icons",
    colorTheme: COLOR_LIGHT,
    useCharacterIcons: true,
  },
  {
    command: "sonic-inspired.darkColorsOnly",
    label: "Dark colors only",
    description: "Sonic-Inspired Dark + default VS Code icons",
    colorTheme: COLOR_DARK,
    useCharacterIcons: false,
  },
  {
    command: "sonic-inspired.lightColorsOnly",
    label: "Light colors only",
    description: "Sonic-Inspired Light + default VS Code icons",
    colorTheme: COLOR_LIGHT,
    useCharacterIcons: false,
  },
];

/**
 * @param {vscode.ExtensionContext} context
 * @param {string} colorTheme
 * @param {boolean} useCharacterIcons
 */
async function applyMode(context, colorTheme, useCharacterIcons) {
  const config = vscode.workspace.getConfiguration("workbench");
  const currentIcon = config.get("iconTheme");

  let iconTheme;
  if (useCharacterIcons) {
    if (
      typeof currentIcon === "string" &&
      currentIcon !== ICON_CHARACTERS
    ) {
      await context.globalState.update(PREV_ICON_KEY, currentIcon);
    }
    iconTheme = ICON_CHARACTERS;
  } else {
    const previous = context.globalState.get(PREV_ICON_KEY);
    iconTheme =
      typeof previous === "string" && previous !== ICON_CHARACTERS
        ? previous
        : ICON_DEFAULT;
  }

  await setWorkbenchThemes(colorTheme, iconTheme);

  const iconsLabel = useCharacterIcons
    ? "character icons"
    : "default icons (no characters)";

  void vscode.window
    .showInformationMessage(
      `Sonic-Inspired: ${colorTheme} + ${iconsLabel}.`,
      "Open File Icon Theme",
    )
    .then((choice) => {
      if (choice === "Open File Icon Theme") {
        void vscode.commands.executeCommand("workbench.action.selectIconTheme");
      }
    });

  const appliedIcon = vscode.workspace
    .getConfiguration("workbench")
    .get("iconTheme");

  if (useCharacterIcons && appliedIcon !== ICON_CHARACTERS) {
    void vscode.window.showWarningMessage(
      `Sonic-Inspired: character icons did not stick (still "${appliedIcon}"). Use File Icon Theme → Sonic-Inspired Icons.`,
    );
  }

  if (!useCharacterIcons && appliedIcon === ICON_CHARACTERS) {
    // Host rejected Seti / previous — fall back to None.
    await setWorkbenchThemes(colorTheme, null);
    const afterNone = vscode.workspace
      .getConfiguration("workbench")
      .get("iconTheme");
    if (afterNone === ICON_CHARACTERS) {
      void vscode.window.showWarningMessage(
        'Sonic-Inspired: could not leave character icons. Open File Icon Theme and pick "Seti" or "None".',
      );
    }
  }
}

/**
 * @param {string} colorTheme
 * @param {string | null} iconTheme
 */
async function setWorkbenchThemes(colorTheme, iconTheme) {
  const config = vscode.workspace.getConfiguration("workbench");
  const colorInspect = config.inspect("colorTheme");
  const iconInspect = config.inspect("iconTheme");

  for (const [key, inspected] of [
    ["colorTheme", colorInspect],
    ["iconTheme", iconInspect],
  ]) {
    if (inspected?.workspaceFolderValue !== undefined) {
      await config.update(
        key,
        undefined,
        vscode.ConfigurationTarget.WorkspaceFolder,
      );
    }
    if (inspected?.workspaceValue !== undefined) {
      await config.update(key, undefined, vscode.ConfigurationTarget.Workspace);
    }
  }

  // Flush cached icon theme, then apply.
  await config.update("iconTheme", null, vscode.ConfigurationTarget.Global);
  await config.update("colorTheme", colorTheme, vscode.ConfigurationTarget.Global);
  await config.update("iconTheme", iconTheme, vscode.ConfigurationTarget.Global);

  if (vscode.workspace.workspaceFolders?.length) {
    try {
      await config.update(
        "colorTheme",
        colorTheme,
        vscode.ConfigurationTarget.Workspace,
      );
      await config.update(
        "iconTheme",
        iconTheme,
        vscode.ConfigurationTarget.Workspace,
      );
    } catch {
      // Restricted workspace.
    }
  }

  await writeWorkspaceSettingsFile(colorTheme, iconTheme);
}

/**
 * @param {string} colorTheme
 * @param {string | null} iconTheme
 */
async function writeWorkspaceSettingsFile(colorTheme, iconTheme) {
  const folder = vscode.workspace.workspaceFolders?.[0];
  if (!folder) {
    return;
  }

  const vscodeDir = vscode.Uri.joinPath(folder.uri, ".vscode");
  const settingsUri = vscode.Uri.joinPath(vscodeDir, "settings.json");

  /** @type {Record<string, unknown>} */
  let settings = {};
  try {
    const raw = await vscode.workspace.fs.readFile(settingsUri);
    settings = JSON.parse(Buffer.from(raw).toString("utf8"));
  } catch {
    settings = {};
  }

  settings["workbench.colorTheme"] = colorTheme;
  settings["workbench.iconTheme"] = iconTheme;

  try {
    await vscode.workspace.fs.createDirectory(vscodeDir);
  } catch {
    // May already exist.
  }

  const body = Buffer.from(`${JSON.stringify(settings, null, 2)}\n`, "utf8");
  await vscode.workspace.fs.writeFile(settingsUri, body);
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  for (const mode of MODES) {
    context.subscriptions.push(
      vscode.commands.registerCommand(mode.command, async () => {
        await applyMode(context, mode.colorTheme, mode.useCharacterIcons);
      }),
    );
  }

  context.subscriptions.push(
    vscode.commands.registerCommand("sonic-inspired.chooseMode", async () => {
      const picked = await vscode.window.showQuickPick(
        MODES.map((mode) => ({
          label: mode.label,
          description: mode.description,
          mode,
        })),
        {
          title: "Sonic-Inspired — Choose Mode",
          placeHolder: "Dark/Light, with character icons or default icons",
        },
      );

      if (!picked) {
        return;
      }

      await applyMode(
        context,
        picked.mode.colorTheme,
        picked.mode.useCharacterIcons,
      );
    }),
  );
}

function deactivate() {}

module.exports = { activate, deactivate };
