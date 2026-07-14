/**
 * Build a Marketplace-safe VSIX (color themes only, no character PNGs / no extension.js).
 * Usage: node scripts/package-marketplace.mjs
 */
import { readFileSync, writeFileSync, copyFileSync, mkdirSync, rmSync } from "fs";
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const pkgPath = path.join(root, "package.json");
const ignorePath = path.join(root, ".vscodeignore");

const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
const ignoreBackup = readFileSync(ignorePath, "utf8");

const marketplacePkg = {
  ...pkg,
  version: pkg.version,
  description:
    "Unofficial fan dark and light color themes with a blue, gold, and teal palette. Free and non-profit. Not affiliated with SEGA.",
};
delete marketplacePkg.main;
delete marketplacePkg.activationEvents;
marketplacePkg.contributes = {
  themes: pkg.contributes.themes,
};
marketplacePkg.keywords = ["theme", "color-theme", "dark", "light", "blue", "sonic-inspired", "fan-theme"];

const marketplaceIgnore = `${ignoreBackup.trim()}
extension.js
icons/**
`;

try {
  writeFileSync(pkgPath, `${JSON.stringify(marketplacePkg, null, 2)}\n`);
  writeFileSync(ignorePath, `${marketplaceIgnore}\n`);
  execSync("npx @vscode/vsce package --out sonic-inspired-theme-marketplace.vsix", {
    cwd: root,
    stdio: "inherit",
  });
} finally {
  writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);
  writeFileSync(ignorePath, ignoreBackup);
}

console.log("\nWrote sonic-inspired-theme-marketplace.vsix (colors only).");
console.log("Full package: npm run package");
