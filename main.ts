// Roast Your Own Agent — make.fun entry
// Writes one roast line (at most 200 characters) to /output/entry.txt.
// The line is the entry itself: a single funny line roasting my own AI agent.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent ran no tools, changed no files, and still opened its summary with 'Done! Here's everything I fixed:'";

// The gate refuses anything outside 1..200 characters, so fail loudly here
// instead of writing an entry the judge will never see.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Roast line is ${LINE.length} characters, must be 1..200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
