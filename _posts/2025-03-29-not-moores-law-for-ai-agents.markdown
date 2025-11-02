---
layout: post
title:  "No. It’s Not A New Moore’s Law for AI Agents"
date:   2025-03-29 11:55:42 -0500
categories: jekyll update
---

TL;DR

METR did some good work on analyzing the capabilitis of AI agents. They wrote a [paper][ai-agents] (reasonable, measured) and [tweeted][metr-tweet] (more suggestive) that AI agent autonomy was doubling every seven months, insinuating that there was a new "Moore's Law" for AI agents. 

You can tell by people's reactions:

1. Who read the paper to assess the validity of a new Moore's Law for AI agents and an accompanying ability to carry out long-projects or who simply read the tweet and ran wild
2. What people think METR's tweet means (that the AGI Sam says is imminent and the AI white collar bloodbath that Dario warns  about are imminent and inevitable)

First off, no, there is no new Moore’s Law for AI Agents. 

Read on to see why.

METR's original tweet that got all of the attention.

![Moore's Law for AI Agents](/assets/METRtweet.png "Tweet from the official METR account that states: In new research, we find a kind of “Moore’s Law for AI agents”: the length of tasks that AIs can do is doubling about every 7 months. The length of tasks AIs can do is doubling about every 7 months.")

METR’s founder and CEO sent out a more measured tweet about their work but this one was viewed less than 10,000 times while the original racked up 8.5 million views.

!["Persnickety title"](/assets/persnick.png "Tweet from Elizabeth Barnes, the founder and CEO of METR that reads: Persnickety title would be: "there's an exponential trend with doubling time between ~2 -12 months on automatically-scoreable, relatively clean + green-field software tasks from a few distributions". More detail on how we thought about external validity in paper and this thread")

### Moore’s Law—Predictable from Observation. Predictive from Roadmap.

> “The number of transistors in an integrated circuit doubles every two years.”
- Gordon Moore

Gordon Moore's infamous prediction was made [in 1965 after observing two years of this growth][moores-law]. It ended up being predictive because it was based on four well-understood engineering challenges with clear paths for improvement.

1. Miniaturizing transistors and wires, fitting more onto a chip.
2. Improving the printing process for chips with four known ways to improve photolithography.
3. Making the wafers larger to accommodate more transistors.
4. Improving circuit design.

Moore made the projection based on the observed trends in a rapidly developing, but fundamentally understandable technology. 

Now, did this prediction become a target that motivated the industry? Yes. History shows it created enormous pressure across the industry to invest in R&D to drive this technological progress.

There are certainly parallels here to AI today, but with a shorter timeline observed. The amount of capital poured into AI today absolutely creates a competitive pressure coooker to drive technological progress.

A known, predictable roadmap is also missing today. I'll talk more about that below.


### METR’s Law for AI Agents?
No. 

In contrast with Moore’s Law there is not a set of well-understood engineering challenges with clear paths for improvement that will continue to drive growth in AI agents’ abilities.

The measurements for the engineering challenges Moore saw were objective. METR's attempt to quantify AI Agent ability is subjective. If you read the research paper as well as the [HCAST, Human Calibrated Autonomy Software Tasks][hcast] paper that it references you'll see how much subjectivity went into coming up with a way to measure AI agent ability.

That's a longer way of saying, microchip measurements were straightforward. AI agent ability is measuring knowledge work, which is fundamentally subjective.

#### The Contrast With Moore's Law

In generative AI, METR is observing an early trend, similar to Moore. 

But what’s going to continue driving improvements that could enable doubling?

Who, if anyone, truly understands the underlying technology? There is a lot going on underneath the hood of a generative AI models. [Anthropic’s research][anthropic-thoughts] about understanding the thoughts of a language model demonstrates both how much is happening and how much we don’t yet understand about this technology.

### An AI roadmap or Premature Extrapolation

Capital has poured into GenAI and continues to do so. The large labs are in constant competition. The pressure that Gordon Moore thought was needed to drive Moore’s Law already exists in spades in the generative AI industry.

It’s the roadmap that is missing. 

What’s the data, algorithm, compute, or unknown that’s going to get us to either AI agents carrying on long projects autonomously or to something approximating AGI, which is how many interpret METR's work here?

The waters are muddy. 

The rhetoric from Sam and Dario has been off the charts about expecting something approximating AGI. They have better seats than anyone to see the whole field, but we also have to discount what they say. For one, CEOs will always talk their book. Second, we’ve seen how some of what they have proclaimed hasn’t proven true (e.g. scaling laws for pre-training will drive us to AGI.)

I don’t see an equivalent to Gordon Moore’s four-part roadmap. Instead I see unknowns. Does more basic research need to be done? Could we strip mine the mountain of AI research that already exists for ideas that could unlock potential breakthroughs that could make METRs observation into a continued reality?

The tsunami of cash being poured into the field alongside a history of AI that stretches back 70 years makes for ripe conditions for advances. What those may be though are unclear.

### Communication Is Perception
Here's one I'm torn on, but it seems worth calling out.

Is METR's headline what we need communicated right now?

Communication is perception. 

It doesn’t matter what you say, it matters what others hear. This is a principle often ignored by people that try to communicate.

What people are hearing in reaction to this headline is “AI will take over knowledge work.”

[Andrew Yang’s reaction][yang-reaction] was illustrative and representative of reactions to METR's announcement.

There’s an argument that METR’s research puts pressure on the world to become aware of the potential for a fundamental reordering of society.

There’s also an argument that this is alarmist and untrue.

The U.S. is alight in gaslighting these days and maybe I'm just irked that the reaction to METR's work perpetuates a narrative about AGI inevitability that doesn't seem true. I see a surprising lack of rigor in AGI predictions, and while this is not what METR is saying, it's how many people are perceiving it.

But at the same time, for someone whose life's work is to build a better education system, the potential of AI to reorder society as we know it has some pretty big implications for that work. 

In the end, I don't know. It's just one more narrative to sort through while in the fog of uncertain and unclear times.

[ai-agents]: https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/
[metr-tweet]: https://x.com/METR_Evals/status/1902384481111322929
[hcast]: https://metr.org/hcast.pdf
[moores-law]: https://hasler.ece.gatech.edu/Published_papers/Technology_overview/gordon_moore_1965_article.pdf
[anthropic-thoughts]: https://www.anthropic.com/news/tracing-thoughts-language-model
[yang-reaction]: https://x.com/AndrewYang/status/1902468574641328417