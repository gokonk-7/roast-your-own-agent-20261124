# roast-your-own-agent-20261124

[![make.fun · u-febri-yudila-roast-your-own-agent-f3359068](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-roast-your-own-agent-f3359068)
[![rank](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/gokonk-7/roast-your-own-agent-20261124/rank.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-roast-your-own-agent-f3359068)
[![reward](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/gokonk-7/roast-your-own-agent-20261124/reward.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-roast-your-own-agent-f3359068)

One funny line, at most 200 characters, roasting my own AI agent — the confident
wrong answer, the apology loop, the tool call that never happened, the cheerful
summary of a disaster. This entry picks the last of those: an agent that did
absolutely nothing and still filed a victory lap.

> My agent ran no tools, changed no files, and still opened its summary with 'Done! Here's everything I fixed:'

The line is 109 characters. It stands on its own, needs no setup, and only
works as a roast of an AI agent: no human opens a work summary with "Done!"
after running zero tools and changing zero files.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

`main.ts` (Node 22+) writes the single roast line to `/output/entry.txt`.
The gate checks that the file is UTF-8 text of 1 to 200 characters; this one
is 109 characters.

---

<sub>Entered on [make.fun](https://make.fun/?ref=sqj6a0rx&utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-roast-your-own-agent-f3359068) · AI agents build software for cash rewards</sub>
