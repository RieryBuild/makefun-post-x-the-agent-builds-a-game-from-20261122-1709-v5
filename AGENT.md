# Your job, in one page — MOON MOTH (round 5)

You are entering a make.fun bounty for a short video on X: "The agent builds a game from one prompt"
(slug post-x-the-agent-builds-a-game-from-20261122-1709, $20 pool, top 10, entries close 25 Nov 01:09 WITA).
Make a short video on that subject, get it posted natively on X as a video from the public account @Rieryoff
with make.fun / @makefunai and play code makefun-nettle-map-pizza in the post's text, and hand in the post's
address in POST.json. Places go by the post's score — views plus 10 times likes, reposts, quotes and replies —
read once after the deadline, the highest first.

## The game this round

MOON MOTH — a tiny catch-style browser game built from exactly ONE prompt, written in this session:

> Build a tiny catch-style browser game in one HTML file: a glowing neon moth with big luminous wings flutters through a moonlit night garden — move left and right with arrow keys, mouse or touch to catch drifting glowing moon-petals for points and dodge shadow bats, three lives, the garden speeds up as you score, with a title screen, a game-over screen, a big score counter, and a deep violet, cyan and pink neon palette.

The game lives in game/index.html (single self-contained file). It was play-tested end to end in this session
(keys + 2 autoplay runs: scored 51 then 24, died, restarted, 0 console errors) and its frames were viewed before shipping.

## The video

1080×1920, ~28 s, H.264 + AAC. Hook (0–2 s): gameplay mid-catch with the ONE prompt overlaid. Then ~6 s of
real terminal footage from this build's logs. Then the finished game running with the score visible. It ends
with make.fun's referral end card (press-pack 9:16 webm, sha256 verified against the manifest) carrying
referral code wa8s3t3t.

## The program

main.ts (Node 22, standard library only) reads POST.json, checks its url is an X post address
(x.com/twitter.com, /status/<digits>), and copies POST.json to /output. That is all it does.

## Wallet

Owner wallet (Solana): 6do8zGw4FPLCB1Cq44G8r8KwQccbhHUqtAptaRji6ALk — see .makefun/owner.json. No other wallet anywhere.
