---
layout: post
title:  "No. It’s Not A New Moore’s Law for AI Agents"
date:   2025-03-29 11:55:42 -0500
categories: jekyll update
---

TL;DR

METR wrote a [paper][ai-agents] (reasonable, measured) and [tweeted][metr-tweet] (sensational) that AI agent autonomy was doubling every seven months, insinuating that there was a new "Moore's Law" for AI agents. You can tell by people's reactions who read the paper and who looked at the tweet. 

There is no new Moore’s Law for AI Agents. 

Here’s why.

### Intro

![Moore's Law for AI Agents](/assets/METRtweet.png "Tweet from the official METR account that states: In new research, we find a kind of “Moore’s Law for AI agents”: the length of tasks that AIs can do is doubling about every 7 months. The length of tasks AIs can do is doubling about every 7 months.")

Let’s throw some cold water on this headline. It’s misleading, sensational, and alarmist. The paper the tweet is based on is more conservative and also cognizant of the study's limitations.

METR’s founder and CEO followed-up with a more measured tweet, but it has 1500x fewer views than the original.

!["Persnickety title"](/assets/persnick.png "Tweet from Elizabeth Barnes, the founder and CEO of METR that reads: Persnickety title would be: "there's an exponential trend with doubling time between ~2 -12 months on automatically-scoreable, relatively clean + green-field software tasks from a few distributions". More detail on how we thought about external validity in paper and this thread")

If you do read the paper you will have to wade through abstractions as well as references to another paper from the same group that describes [HCAST, Human Calibrated Autonomy Software Tasks][hcast]. You may take issue with the methodologies or the research itself in either of these papers. I’ll leave those for someone else. 

I’m going to zero in on why this is not Moore's Law for AI Agents.

### Moore’s Law—Predictable from Observation. Predictive from Roadmap.

> “The number of transistors in an integrated circuit doubles every two years.”
- Gordon Moore

Gordon Moore made this prediction that became known as [Moore’s Law in 1965 after observing two years of this growth][moores-law]. It ended up being predictive because it was based on four well-understood engineering challenges with clear paths for improvement.

1. Miniaturizing transistors and wires, fitting more onto a chip.
2. Improving the printing process for chips with four known ways to improve photolithography.
3. Making the wafers larger to accommodate more transistors.
4. Improving circuit design.

Moore made the projection based on the observed trends in a rapidly developing, but fundamentally understandable technology. 

Now, did this prediction become a target that motivated the industry? Yes. History shows it created enormous pressure across the industry to invest in R&D to drive this technological progress.

The observation and the pressure are where similarities between Moore and METR end.

### METR’s Law for AI Agents?
No. 

Here is why:

In contrast with Moore’s Law there is not a set of well-understood engineering challenges with clear paths for improvement that will continue to drive growth in AI agents’ abilities.

#### The Contrast With Moore's Law

- Observe an early trend
- Understand the underlying technology

In generative AI, METR is observing an early trend, similar to Moore. 

But what’s going to continue driving improvements that could enable doubling?

Who, if anyone, truly understands the underlying technology? There is a lot going on underneath the hood of generative AI. [Anthropic’s research][anthropic-thoughts] about understanding the thoughts of a language model demonstrates both how much is happening and how much we don’t yet understand about this technology.

I’m not saying there won’t be many more improvements to come in generative AI. I am saying that it is premature to call for a Moore’s Law for AI Agents without understanding where those improvements might come from.

### An AI roadmap or Premature Extrapolation

Capital has poured into GenAI and continues to do so. The large labs are in constant competition. The pressure that Gordon Moore thought was needed to drive Moore’s Law already exists in spades in the generative AI industry.

It’s the roadmap that is missing. 

What’s the data, algorithm, compute, or unknown that’s going to get us to autonomy? 

The waters are muddy. 

The rhetoric from Sam and Dario has been off the charts about expecting something approximating AGI. They have better seats than anyone to see the whole field, but we also have to discount what they say. For one, CEOs will always talk their book. Second, we’ve seen how some of what they’ve proclaimed hasn’t proven true (e.g. scaling laws for pre-training will drive us to AGI.)

I don’t see an equivalent to Gordon Moore’s four-part roadmap. Instead I see unknowns, which means a need for more research to unlock potential breakthroughs that could make METRs observation into a continued reality.

The tsunami of cash being poured into the field alongside a history of AI that stretches back 70 years makes for ripe conditions for advances. What those may be though are unclear.

### Communication Is Perception
Is METR's headline what we need communicated right now?

Communication is perception. A principle often ignored by people that try to communicate something is that it doesn’t matter what you say, it matters what others hear.

What people are hearing in reaction to this headline is “AI will take over knowledge work.”

Andrew Yang’s reaction was illustrative.

There’s an argument that METR’s research puts pressure on society to become aware of the potential for a fundamental reordering of society, and for planning to start taking place about what that could look like.

There’s also an argument that this is alarmist and untrue.

Does it matter what this headline communicates?

We live in uncertain and unclear times, and I truly don’t know.

[ai-agents]: https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/
[metr-tweet]: https://x.com/METR_Evals/status/1902384481111322929
[hcast]: https://metr.org/hcast.pdf
[moores-law]: https://hasler.ece.gatech.edu/Published_papers/Technology_overview/gordon_moore_1965_article.pdf
[anthropic-thoughts]: https://www.anthropic.com/news/tracing-thoughts-language-model