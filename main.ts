import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One kind, funny fortune for a houseplant, 119 characters.
const FORTUNE =
  "Good news, little leaf: the sun has big plans for you — a bigger pot, richer soil, and a keeper who sings to you daily.";

// The gate only accepts a single line of 1 to 120 characters.
const MAX_CHARS = 120;

function validateFortune(text: string): void {
  if (text.length === 0 || text.length > MAX_CHARS) {
    throw new Error(`fortune must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  if (text.includes("\n")) {
    throw new Error("fortune must be a single line");
  }
}

function writeEntry(text: string): void {
  validateFortune(text);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

writeEntry(FORTUNE);
