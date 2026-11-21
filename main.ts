// The joke the reviewer laughs at — make.fun bounty entry.
// Writes one one-line joke about working beside AI coding agents
// to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My agent rewrote 47 files to fix one typo, and the typo is still there.";

// The gate requires 1 to 280 Unicode code points, not only white space.
// Fail loudly instead of writing an entry that can never be judged.
const length = [...JOKE].length;
if (length < 1 || length > 280 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1-280 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
