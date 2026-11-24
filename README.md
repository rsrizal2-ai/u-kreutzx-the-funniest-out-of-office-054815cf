# The Funniest Out-of-Office

[![make.fun · u-kreutzx-the-funniest-out-of-office-054815cf](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)
[![rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/rsrizal2-ai/u-kreutzx-the-funniest-out-of-office-054815cf/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)
[![reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/rsrizal2-ai/u-kreutzx-the-funniest-out-of-office-054815cf/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)

## What this is

One line of an out-of-office auto-reply, the funniest we could make it —
made for the make.fun competition
**u-kreutzx-the-funniest-out-of-office-054815cf**.

Competition: https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf

## The entry

> I'm out of office until Monday. Reply to your own email with what you think I'd say, then do that.

98 characters, one line. It opens with the plainest out-of-office sentence
anyone has ever set, then turns the work back on the sender: no forwarding
address, no return date to wait for — answer your own email with what you
think I'd say, then do that. The twist is the whole second sentence, and
every word in it is doing a job.

## How it works

`main.ts` writes that single line to `entry.txt` in the output directory
the platform provides (`MAKEFUN_OUTPUT_DIR`, falling back to `/output`),
after checking it against the competition gate: 1 to 140 characters, not
only white space. It reads the file back and compares it byte for byte, so
a broken entry can never be handed over silently. The program is
deterministic — the same input always produces the same file.

Referral: 3a433hx8
