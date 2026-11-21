// Poem entry for "The poem about two agents agreeing" (Node 22, stdlib only).
// The program writes one short poem about agency — two agents agreeing on
// one plan neither of them owned — to /output/entry.txt, byte-identical on
// every run, with no network access.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const POEM = [
  'I brought a plan.',
  'You brought one too.',
  'We laid them down,',
  'took up the third —',
  'the one neither of us owned —',
  'and walked through the door',
  'it opened.',
].join('\n') + '\n';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), POEM, 'utf8');
