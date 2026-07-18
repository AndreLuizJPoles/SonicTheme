const vscode = require("vscode");

const COLOR_DARK = "Sonic-Inspired Dark";
const COLOR_LIGHT = "Sonic-Inspired Light";
const COLOR_TAILS_DARK = "Sonic-Inspired Tails Dark";
const COLOR_TAILS_LIGHT = "Sonic-Inspired Tails Light";

const MODES = [
  {
    command: "sonic-inspired.darkColorsOnly",
    label: "Sonic Dark",
    description: "Sonic-Inspired Dark",
    colorTheme: COLOR_DARK,
  },
  {
    command: "sonic-inspired.lightColorsOnly",
    label: "Sonic Light",
    description: "Sonic-Inspired Light",
    colorTheme: COLOR_LIGHT,
  },
  {
    command: "sonic-inspired.tailsDarkColorsOnly",
    label: "Tails Dark",
    description: "Sonic-Inspired Tails Dark",
    colorTheme: COLOR_TAILS_DARK,
  },
  {
    command: "sonic-inspired.tailsLightColorsOnly",
    label: "Tails Light",
    description: "Sonic-Inspired Tails Light",
    colorTheme: COLOR_TAILS_LIGHT,
  },
];

/**
 * Apply a color theme so Workspace overrides cannot keep an old theme stuck.
 * @param {string} colorTheme
 */
async function applyMode(colorTheme) {
  const config = vscode.workspace.getConfiguration("workbench");
  const inspect = config.inspect("colorTheme");

  try {
    if (inspect?.workspaceFolderValue !== undefined) {
      await config.update(
        "colorTheme",
        undefined,
        vscode.ConfigurationTarget.WorkspaceFolder,
      );
    }

    if (vscode.workspace.workspaceFolders?.length) {
      await config.update(
        "colorTheme",
        colorTheme,
        vscode.ConfigurationTarget.Workspace,
      );
    }

    await config.update(
      "colorTheme",
      colorTheme,
      vscode.ConfigurationTarget.Global,
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    void vscode.window.showErrorMessage(
      `Sonic-Inspired: could not apply theme (${message}).`,
    );
    return;
  }

  const applied = vscode.workspace
    .getConfiguration("workbench")
    .get("colorTheme");

  if (applied !== colorTheme) {
    void vscode.window.showWarningMessage(
      `Sonic-Inspired: asked for "${colorTheme}" but "${applied}" is still active. Open Ctrl+K Ctrl+T — if Tails is missing, restart the Extension Development Host (package.json themes only load on full relaunch).`,
    );
    return;
  }

  void vscode.window.showInformationMessage(`Applied: ${colorTheme}`);
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  for (const mode of MODES) {
    context.subscriptions.push(
      vscode.commands.registerCommand(mode.command, async () => {
        await applyMode(mode.colorTheme);
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
          title: "Sonic-Inspired — Choose Theme",
          placeHolder: "Sonic or Tails · Dark or Light",
        },
      );

      if (!picked) {
        return;
      }

      await applyMode(picked.mode.colorTheme);
    }),
  );
}

function deactivate() {}

module.exports = { activate, deactivate };
