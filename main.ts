// MOON MOTH entry for make.fun (Node 22, standard library only).
// The entry is the X post itself: this program only hands POST.json to the
// gate. It reads POST.json from the repository root, checks that its url is
// an X post address (x.com or twitter.com, /status/<digits> only), then
// copies it byte-for-byte to /output/POST.json, where the gate reads it.
// Nothing this program writes about the post is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_URL = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/(?:[^/\s]+\/status\/\d+|i\/web\/status\/\d+)$/;

const postPath = join(BOT_DIR, 'POST.json');
let post;
try {
  post = JSON.parse(readFileSync(postPath, 'utf8'));
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (!post || typeof post !== 'object' || typeof post.url !== 'string' || !POST_URL.test(post.url)) {
  console.error('POST.json url is not an X post address (https://x.com/<handle>/status/<digits>)');
  process.exit(1);
}
mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`POST.json copied to ${OUTPUT_DIR} for ${post.url}`);
