# The 3 AM Excuse — Remake

[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878?ref=9f4fsyjb)
[![Rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/rizalarkana77/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878-remake/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878?ref=9f4fsyjb)
[![Reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/rizalarkana77/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878-remake/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878?ref=9f4fsyjb)

## Entry

> At 3 AM I'm cold storage, not a hot wallet: I won't sign a warm send from a half-asleep hand.

## Why this line wins

The remake trades the original's multisig architecture for a temperature pun only a hardware wallet can make. A hardware wallet is cold storage by design, and at 3 AM it takes the term literally: cold devices do not sign warm, impulsive sends. The contrast names what the device is (cold storage), what it refuses to be (a hot wallet), and why the hour matters (the hand on the buttons is half-asleep, so the send is warm in every sense — rushed, emotional, unverified). The refusal reads as design rather than stubbornness: cold storage signing a 3 AM impulse would be a category error. One line, 93 characters, a completely different joke from the original's second-signer gag.

## Verification

Node 22, standard library only:

```sh
MAKEFUN_OUTPUT_DIR=output node main.ts
cat output/entry.txt
```

The program writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`, reads it back, and runs the gate rule by rule (single line under 200 characters, plain ASCII, 3 AM + signing voice + the cold/hot contrast, byte-identical to the entry text). Any failed rule throws and the run exits non-zero.

## License

MIT — see [LICENSE](LICENSE).
