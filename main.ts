// The 3 AM Excuse (remake) - entry program (Node 22, stdlib only).
// Writes the competition line to $MAKEFUN_OUTPUT_DIR/entry.txt,
// validates it against the gate (single line, under 200 chars,
// hardware-wallet voice refusing a 3 AM signature), then reads
// the file back and compares it byte-for-byte.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "At 3 AM I'm cold storage, not a hot wallet: I won't sign a warm send from a half-asleep hand.";

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(targetDir, { recursive: true });
const targetFile = join(targetDir, "entry.txt");

writeFileSync(targetFile, LINE, "utf8");

const saved = readFileSync(targetFile, "utf8");
const savedBytes = Buffer.byteLength(saved, "utf8");

function reject(reason: string): never {
  throw new Error(`gate rejected the entry: ${reason}`);
}

if (saved.trim() === "") reject("nothing but whitespace");
if (saved.length >= 200) reject(`${saved.length} characters, limit is under 200`);
if (/[\r\n]/.test(saved)) reject("entry spans more than one line");
if (savedBytes !== saved.length) reject("entry is not plain ASCII");
if (!saved.includes("3 AM")) reject("the excuse never mentions 3 AM");
if (!/sign/i.test(saved)) reject("the wallet never talks about signing");
if (!/cold storage/i.test(saved)) reject("the wallet never claims its cold-storage identity");
if (!/hot wallet/i.test(saved)) reject("the cold/hot contrast that carries the joke is missing");
if (saved !== LINE) reject("file contents differ from the entry text");

console.log(`entry saved (${saved.length} chars, ${savedBytes} bytes): ${saved}`);
