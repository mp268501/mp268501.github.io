---
layout: post
title:  'AI Benchmarks: Are We Just "Teaching to the Test"?'
date:   2025-02-20 11:55:42 -0500
categories: blog post
---

I've been thinking about AI benchmarks lately. As someone with a background in both tech and K-12 education, but not machine learning, the constant barrage of "New SOTA Model Crushes \[Insert Benchmark Here\]!" headlines started to feel familiar. Too familiar. It reminded me of the endless cycle of standardized testing in schools, and that's _not_ a good thing.

Are we making the same mistakes with AI that we've been making for decades in education? Let's dive in.

**The Allure (and Illusion) of Measurement**

The core idea behind both AI benchmarks and standardized tests is understandable. We want to measure progress. We want to know if our AI models are getting "smarter," just like we want to know if our students are learning. Sounds reasonable, right?

In education, we use standardized tests to supposedly measure student learning and, by extension, teacher effectiveness. Phrases like "quality teachers make the difference" are hard to dispute. What's implied, of course, is that "quality" needs to be measured and managed. The chosen yardstick? Standardized tests, often coupled with "Value-Added Measures" (VAM) based on those tests. The theory is: measure quality, then improve it.

Bill Gates, a smart guy with deep pockets, bought into this wholeheartedly. He poured $575 million into an initiative based on this premise. The result? A resounding, expensive failure. It didn't improve student outcomes; in many cases, it actively _harmed_ them. 

Gates’ interest in teacher quality must have taken root sometime in the late 2000’s, becoming public with an op-ed he published in 2010. Bill Gates was still Chairman of MSFT at this time and had a great seat to see the company he founded miss out on two of the biggest new paradigms of the day (mobile and social) and be late to the third (cloud). Did Gates not understand what caused Microsoft to “lose a decade” as Kurt Eichenwald would describe in his infamous 2012 piece? For anyone who is unfamiliar, Microsoft’s performance evaluation system stack ranked employees. If I was a CIA agent trying to sabotage a company to make them slow, distrustful, etc I would do everything I could to get stack ranking implemented in that company. The system that turned Gates’ company into an incapable sloth is what he proposed as the antidote for America’s education woes. 

To have gone down this path, at this time, Bill Gates must know something I don’t. What that is, I truly do not know.

The parallels to the AI world are striking. We see headlines like, "New SOTA model is top of the coding leaderboard!" But then, when you actually _use_ the model, you might find yourself, like me, repeatedly using \`git reset\` because it's breaking your codebase. The benchmark says one thing–reality says another.

**Goodhart's Law: When the Measure Becomes the Target**

This brings us to a crucial concept: Goodhart's Law. It essentially states that when a measure becomes a target, it ceases to be a good measure. Think of it like this: if you tell a factory manager her variable compensation is tied to a reduction in scrap, then she will encourage her shift managers to push every piece produced out the door, quality be damned. Rejected pieces returned by customers will languish in the warehouse because processing them would hit her scrap numbers. The system gets gamed, the company loses goodwill with customers, but the manager earns her variable comp.

In education, this plays out tragically. Picture this scenario (which is, sadly, _standard practice_ in many districts):

1.  **Low Test Scores:** A school district's standardized test scores are below par.
    
2.  **State Threatens Takeover:** The state warns of intervention if scores don't improve within a set timeframe.
    
3.  **Curriculum Narrows:** Subjects like social studies and science get sidelined. The focus shifts almost entirely to the subjects tested – usually math and reading.
    
4.  **"Teaching to the Test":** Instruction becomes laser-focused on the specific content and format of the standardized test.
    
5.  **Short-Cycle Assessments (SCAs):** Schools create mini-tests that mimic the big standardized test, administering them throughout the year.
    
6.  **Teacher Evaluations Tied to SCAs:** Teachers' performance reviews are tied to student performance on these mini-tests.
    
7.  **Teaching to the** _**Mini**_**\-Test:** The cycle intensifies, with instruction now geared towards the _mini-tests_, which were designed to prepare for the _main test_.
    

The result? 

A miserable experience for students and teachers, a narrowed curriculum, and, often, outright cheating. It's like that scene from _The Wire_ when Prezbo realizes the school is "[juking the stats](https://www.youtube.com/watch?v=_ogxZxu6cjM)"– manipulating the numbers without actually improving the underlying reality, just like the police force did when he was a cop. 

There is decades of documented evidence of this in education. Go back further and look into a different domain, manufacturing, and you’ll see guys like W. Edwards Deming had been talking about ‘tampering’ for short-term or fleeting improvements instead of doing things that actually improve the system before some of us were even born (me included).

And the worst part? These standardized tests, in their current form, are largely _useless_ for improving actual teaching and learning. Analyzing scores months after the fact, when the students have moved on, provides little to no actionable information for educators.

**Formative Assessment vs. Summative Assessment: The Key Difference**

Here's where we get to a critical distinction: formative vs. summative assessment.

*   **Summative Assessment:** This is the "big" test at the end – the standardized test, the final exam, the AI benchmark. It's designed to provide a _summary_ of performance. Short-cycle assessments or quarterly mini-tests also fall into this category.
    
*   **Formative Assessment:** This is the ongoing, day-to-day assessment that happens _during_ the learning process. It's about understanding _how_ students are thinking, identifying misconceptions, and adjusting instruction accordingly.
    

As a teacher, formative assessment is my bread and butter. It’s about having a mental model of how students progress in a subject, in my case a pipeline of arithmetic to algebraic understanding (number sense > additive reasoning > multiplicative reasoning > properties of operations > fractional reasoning > ratios/proportions > algebraic reasoning). I’m looking for and eliciting student thinking. When a student struggles, I have a good idea how to help. It's about giving students immediate, specific feedback.

For example, I might give a student a four-digit subtraction problem like 4,324 - 749. They may employ the standard subtraction algorithm and have the correct answer on their paper. However, by observing their work and asking them to explain their process I might discover that they understand place value up to the tens place, but struggle with beyond that. A simple "right" or "wrong" answer on a standardized test would miss this crucial nuance. Teaching without this kind of assessment is why too many students end up building a mathematical House of Cards that is bound to fall down.

**Evals vs. Benchmarks: The AI Analogy**

In the AI world, I see a similar dichotomy:

*   **Benchmarks:** These look like the broad, standardized tests designed to compare different models across a range of capabilities.
    
*   **Evals:** I think these are more like formative assessments. They're customizable, task-specific evaluations used to guide the development of a _particular_ model or feature. The kind of thing that is, and should be, a moving target.
    

I used to lump benchmarks and evals together, thinking they were all just…well, noise. But after listening to a podcast with someone from OpenAI discussing reinforcement learning, I had a lightbulb moment. Evals, like formative assessments, are actually _crucial_ for progress.

My current mental model? **Evals and formative assessment rule; benchmarks and standardized tests drool.**

**The "Vibe" Check: When Intuition Matters**

There's a fascinating concept gaining traction in the AI community: the "vibe" check. François Chollet, a prominent AI researcher, put it perfectly: "When a human-facing system becomes sufficiently complex, 'vibes' become a perfectly valid evaluation methodology."

This might sound unscientific, but it resonates deeply with my experience as a teacher. I can often get a good sense of a student's understanding simply by talking to them and listening to their explanations–even if they don't get the "right" answer on a formal assessment.

The same applies to AI. You can spend hours wrestling with a coding problem, getting nowhere with even the "top-performing" models, and realize that, despite the impressive benchmark scores, the "vibes" are off. It just _doesn't work_ in a practical, real-world setting.

**The Problem with Proxies**

The fundamental issue with AI benchmarks, standardized tests, and even many corporate performance evaluations, is that they rely on _proxies_. We can't directly measure intelligence, learning, or the complex value of knowledge work. So we create these stand-ins, these metrics, that we _hope_ will correlate with the real thing.

But these proxies often become distorted. They incentivize narrow optimization, "teaching to the test," and gaming the system. They create a disconnect between the measured performance and the actual capability.

**So, Where Does This Leave Us?**

The obsession with benchmarks in AI feels eerily similar to the education system's obsession with standardized tests. Both are:

*   **Time-Consuming:** They suck up a lot of resources and attention.
    
*   **Prone to Perverse Incentives:** They encourage optimizing for the test, not the underlying goal.
    
*   **Ultimately, Not That Useful:** They provide a limited, often misleading, picture of actual capability.
    

Just like Scale AI's "Humanity's Last Exam" benchmark will likely fade into obscurity, many of today's AI benchmarks will become irrelevant as the technology evolves. When generative AI (or whatever comes next) truly reaches a level of general intelligence, we won't need benchmarks to tell us. We'll _know_.

In the meantime, the best approach might be a combination of:

*   **Targeted Evals:** Continuously refining our models based on specific, real-world tasks.
    
*   **The "Vibe" Check:** Using our intuition and experience to assess how well these systems actually _work_ in practice that matters to us.
    
*   **Focusing on Formative:** Prioritizing the ongoing, iterative process of improvement over the snapshot provided by a summative assessment.
    

We need to remember that the goal isn't to win a game of benchmark whack-a-mole. It's to build AI systems that are genuinely useful, reliable, and capable–just like the goal of education isn't to get high test scores, but to cultivate genuine understanding of knowledge that’s transferable outside of the narrow scope it was learned in. We should be wary of any system that prioritizes the metric over the meaning.

