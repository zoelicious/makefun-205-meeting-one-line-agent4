import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "The meeting was to discuss the spreadsheet, which was on the screen the entire time, and the spreadsheet had already answered every question before anyone spoke.";

function main() {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  const target = join(outDir, "entry.txt");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(target, LINE + "\n", "utf8");
}

main();
