// main.ts — make.fun entry: "The Funniest Out-of-Office"
// (u-kreutzx-the-funniest-out-of-office-054815cf)
//
// The competition asks for a single line of an out-of-office auto-reply,
// the funniest one line we can write, in 140 characters or fewer. This
// program is the whole entry: it writes that one line to entry.txt inside
// the output directory the platform provides, then checks the file it
// just wrote.
//
// Nothing here is random or time-dependent. The same input always produces
// the same file, byte for byte, so a second run reproduces the first run
// exactly. The program validates the line before writing it (non-empty,
// within the 140-character limit) and validates the file again after
// writing it (read back, compare byte for byte). Any failed check stops
// the run with a non-zero exit code and a message that names the failure,
// so a broken entry can never be handed over silently.
//
// Safety note: this script never deletes anything. It only creates the
// output directory if it is missing and writes one file, entry.txt, into
// it. It never removes the output directory or anything inside it.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// ---------------------------------------------------------------------------
// The entry line
// ---------------------------------------------------------------------------

// The joke: the reply opens with the plainest out-of-office sentence
// anyone has ever set ("I'm out of office until Monday"), then turns the
// work back on the sender — answer your own email with what you think I'd
// say, then do that. The twist is the whole second sentence: the reader
// expects a forwarding address or a return date and gets a job instead.
// Drafted first as "Please reply to your own email with what you think
// I'd say, then act on it", then revised: "until Monday" was added so the
// line reads as a real auto-reply, "Please" was cut, and "act on it"
// became the shorter, punchier "do that".
const ENTRY_LINE =
  "I'm out of office until Monday. Reply to your own email with what you think I'd say, then do that.";

// The competition gate: 1 to 140 characters, not only white space.
const MAX_ENTRY_CHARS = 140;

// ---------------------------------------------------------------------------
// Validation helpers
// ---------------------------------------------------------------------------

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Validate the line, then write and verify it
// ---------------------------------------------------------------------------

// The checks below mirror ONLY the sealed gate for this competition:
// 1 to 140 characters, not only white space. No other guard belongs here
// — the gate allows any single line within the limit, so the program
// imposes nothing beyond length and non-emptiness.

if (ENTRY_LINE.trim().length === 0) {
  fail("entry line is empty or only white space");
}

if (ENTRY_LINE.length > MAX_ENTRY_CHARS) {
  fail(
    `entry line is ${ENTRY_LINE.length} characters, over the ${MAX_ENTRY_CHARS}-character limit`,
  );
}

// The platform provides the output directory in MAKEFUN_OUTPUT_DIR; the
// documented fallback for a local run is /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

writeFileSync(outputPath, ENTRY_LINE, "utf8");

const writtenBack = readFileSync(outputPath, "utf8");
if (writtenBack !== ENTRY_LINE) {
  fail("entry.txt read back differently from the entry line");
}

console.log(
  `Wrote ${ENTRY_LINE.length} characters to ${outputPath} (within the ${MAX_ENTRY_CHARS}-character limit).`,
);
