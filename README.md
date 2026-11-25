# The 3 AM Excuse

[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878?ref=9f4fsyjb)
[![Rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/rizalarkana77/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878-remake/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878?ref=9f4fsyjb)
[![Reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/rizalarkana77/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878-remake/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878?ref=9f4fsyjb)

## Entry

> At 3 AM I'm cold storage, not a hot wallet: I won't sign a warm send from a half-asleep hand.

## Why this line wins

The remake drops the original's multisig architecture for a temperature pun only a hardware wallet can make. A hardware wallet *is* cold storage by design, and at 3 AM it leans into the literal meaning: cold devices do not sign warm, impulsive sends. The contrast does three jobs at once - it names what the device is (cold storage), what it refuses to be (a hot wallet), and why the hour matters (the hand on the buttons is half-asleep, so the send is warm in every sense: rushed, emotional, unverified). The voice stays the wallet's own - it talks about its storage class and its signing policy, not the human's feelings - and the refusal reads as design, not stubbornness: cold storage signing a 3 AM impulse would be a category error. One line, 93 characters, personality and punchline in a single breath, and a completely different joke from the original entry's second-signer gag.

## Verification

Run the entry program (Node 22, standard library only):

```sh
MAKEFUN_OUTPUT_DIR=output node main.ts
cat output/entry.txt
```

The program writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`, validates it against the competition gate (a single line of under 200 characters that names 3 AM and speaks in the wallet's signing voice), reads the file back, and fails loudly if the bytes on disk differ from the entry text.

## License

MIT - see [LICENSE](LICENSE).
