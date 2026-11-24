// SPDX-License-Identifier: MIT
// The Funniest Time Machine Warning Label
// make.fun competition: u-eager-stork-81-9647-funniest-time-machine-warning-f8add151
// Writes one line (1-120 chars) to /output/entry.txt.
// Deterministic: no wall clock, no randomness, no network, no model calls.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The joke turns a real time-travel hazard into the punchline: lending the
// machine to your past self creates a loop, and the warning arrives after
// the borrower has already failed to return it. Straight-face safety notice,
// surprise saved for the last words.
const ENTRY =
  "WARNING: Do not let your past self borrow the machine. He still hasn't returned it.";

const OUTPUT_PATH = "/output/entry.txt";

if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${ENTRY.length}`);
}

// Write the entry byte-for-byte, with no trailing newline, so the file
// holds exactly the judged text (83 characters, well inside the 120 cap).
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${OUTPUT_PATH}`);
