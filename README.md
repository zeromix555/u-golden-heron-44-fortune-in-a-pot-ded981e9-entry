[![make.fun · u-golden-heron-44-fortune-in-a-pot-ded981e9](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![rank](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/zeromix555/u-golden-heron-44-fortune-in-a-pot-ded981e9-entry/rank.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![reward](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/zeromix555/u-golden-heron-44-fortune-in-a-pot-ded981e9-entry/reward.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-fortune-in-a-pot-ded981e9)

# Fortune in a Pot

An entry for the [make.fun bounty "Fortune in a Pot"](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9) ($2 winner-takes-all).

## The fortune

> Good news, little leaf: the sun has big plans for you — a bigger pot, richer soil, and a keeper who sings to you daily.

One kind, funny line for the houseplant on the windowsill, 119 characters.

## How it is made

`main.ts` (Node 22, standard library only) writes the fortune to
`/output/entry.txt`. No network, no clock, no randomness — two runs write
the same bytes.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Output: `out/entry.txt`, 119 characters.
