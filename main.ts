// The 3 AM Excuse — remake entry (Node 22, stdlib only).
// Writes the one-line excuse to $MAKEFUN_OUTPUT_DIR/entry.txt, then
// reads it back and holds it against the competition gate: a single
// line under 200 characters, plain ASCII, spoken by a hardware wallet
// refusing to sign at 3 AM.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "At 3 AM I'm cold storage, not a hot wallet: I won't sign a warm send from a half-asleep hand.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outputDir, { recursive: true });
const outputFile = join(outputDir, "entry.txt");
writeFileSync(outputFile, LINE, "utf8");

// Verify against the saved bytes: what the judge reads is the file,
// so the file is what gets checked, rule by rule. The table keeps
// every gate condition visible in one place, and a failure names
// the exact rule instead of a generic rejection.
const saved = readFileSync(outputFile, "utf8");
const byteCount = Buffer.byteLength(saved, "utf8");

const RULES: Array<[string, (t: string) => boolean]> = [
  ["not whitespace only", (t) => t.trim().length > 0],
  ["under 200 characters", (t) => t.length < 200],
  ["single line", (t) => !/[\r\n]/.test(t)],
  ["plain ASCII", (t) => byteCount === t.length],
  ["mentions 3 AM", (t) => t.includes("3 AM")],
  ["talks about signing", (t) => /sign/i.test(t)],
  ["claims the cold-storage identity", (t) => /cold storage/i.test(t)],
  ["keeps the cold/hot contrast", (t) => /hot wallet/i.test(t)],
  ["matches the entry text byte-for-byte", (t) => t === LINE],
];

for (const [label, passes] of RULES) {
  if (!passes(saved)) {
    throw new Error(`gate rejected the entry: ${label}`);
  }
}

console.log(`entry saved (${saved.length} chars, ${byteCount} bytes): ${saved}`);
