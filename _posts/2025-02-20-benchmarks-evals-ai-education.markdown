---
layout: post
title:  "AI Benchmarks"
date:   2025-02-20 11:55:42 -0500
categories: blog post
---
AI: Benchmarks

!["We just need a better benchmark!"](/assets/benchmarks.png)

Do we?

I’m not an ML engineer, but I feel like I’ve seen this movie before.

The scene wasn’t tech though. It was K-12 education in America and standardized tests.

Back under George W. Bush, No Child Left Behind turned an already established testing industry into a testing industrial complex. The dollar cost of testing is relatively low compared to the total national spend on education, but they had and still have a pernicious effect. And they are entrenched. Bill Gates thought “teacher quality” was the key to gains. Well, you have to measure teacher quality. The testing complex becomes more entwined. The results? [Massive failure][gates-rand]. Will testing go away? Unlikely. Vivek’s out there ignorantly calling for more of what Gates’ initiative proved didn’t help after. It only took spending $575 million to figure it out. That's okay though. Schools are doing just fine under Ohio's newest budget.

The unintended consequences and perverse incentives standardized tests create haven’t changed since [this scene in The Wire][the-wire] aired 18 years ago.

What improvements have standardized tests resulted in?

None.

In what I call the modern era of education reform (Sputnik launch in 1957 - Present), the United States has undergone omnipresent reform. We have made zero meaningful progress on the things these standardized tests measure: literacy and math. If you’d like to argue about the data, I encourage you to take a look around and see if reality disputes them.

An education scenario:

A district’s test scores are bad. The state threatens takeover in 3 years if scores don’t improve. Social studies and science teaching are sidelined. Teaching to the test ramps up. Short-cycle assessments (SCAs) that mimic the standardized test are created and used quarterly leading up the spring standardized testing. Teachers are evaluated based on SCA scores. Teaching to the SCAs ramps up. 

That’s standard practice and it’s miserable–for students and teachers. 

There’s also decades of evidence now of the [widespread cheating][cheating] this causes.

The real bitch of it all, is that standardized tests aren’t useful. Doing some annual data analysis after the scores come out in the summer is worthless when it comes to effective teaching. 

I can make math people. Not from a select group of students and not just a few. Anyone. Give me a group of students that match the composition of their local population and I can create a system that can make “math people” out of all of them. They would have no problem showing proficiency on a standardized test, but the test itself would have no influence on the system I would create to make them math people.

What is valuable, and what is critical to helping me make math people is formative assessment. In elementary school teaching, having a mental model of the arithmetic to algebra pipeline (number sense > additive reasoning > multiplicative reasoning > properties of operations > fractional reasoning > ratios/proportions > algebraic reasoning) as I elicit student thinking is critical to helping me make individual corrections and in the moment corrections to my instruction.

Back in the AI world, I see benchmarks released, “New SOTA model is top of the coding leaderboard!” and yet as I use it I still have to employ “git reset” back to a working commit because the new SOTA model that tops the leaderboard can’t make a change to a codebase without breaking things.

Benchmarks show me if a model has made the leap from one of the step function changes we’ve seen in generative AI (o.g. GPT > GPT-4 > reasoning models) but not much else.

In education, a student can appear proficient based on a standardized test score, but if you sit down with them you’ll realize they haven’t really learned. Reality doesn’t match the benchmark. AI seems the same.

Benchmarks, like standardized tests, aren’t easy to ignore. They suck up a lot of oxygen. New benchmark creators get a lot of play. People from well-funded startups that may no longer have a business model in a world where synthetic data works are creating benchmarks to try to look like thought leaders while they make last ditch efforts to save their business by intertwining themselves with national defense.

In short, benchmarks seem not very helpful.

Evals though on the other hand, I owe an apology. I had bunched them in with benchmarks, not really knowing what they were. My ears started burning recently when listening to a podcast with someone from OpenAI about using RL. I realized that evals were not benchmarks. In fact, evals sounded really important and similar to formative assessments that drive great teaching.

My current mental model: evals and formative assessment rule, benchmarks and standardized tests drool. 

[gates-rand]: https://www.rand.org/pubs/research_reports/RR2242.html
[the-wire]: https://www.youtube.com/watch?v=_ogxZxu6cjM
[cheating]: https://www.google.com/search?client=firefox-b-1-d&q=k-12+standardized+test+cheating