"use client";
import type { FC } from 'react';
import RedditPost from "@/components/RedditPost";
import { useEffect, useState } from "react";
import { EXPERIMENT_PHASES } from '@/app/page';

interface OpinionFarmingPhaseProps {
    onPhaseCompletionChange: (_phase: EXPERIMENT_PHASES, isComplete: boolean) => void;
};

export const redditPosts = [
    {
        title: "Maybe an unpopular opinion. But I feel like if you still support trump and his policies at this point. Your an active traitor to the US and US democracy",
        content: "At this point. Everything the dude in office has said and done has itself done nothing but actively go against everything this country was built on and supposedly stands for. And if you still support him. Then how are you not a traitor? The guy has said himself he WANTS to be a dictator. That’s literally against everything the founding fathers stood for. And his actions with LA right now and actions before that are UNCONSTITUTIONAL. The highest law of the land and he just ignores it. That’s traitorous behavior. And if you support that still. You are too. And I don’t mean republicans that hate trump either. I mean people that SUPPORT TRUMP even now. I predict that in the future. History books will reference the day he got elected as the day democracy died. And that he and his cult are traitors against The United States Of America and its Democracy. And sure, I recognize the argument that they are just easily manipulated people. But the fact is that they choose to be. Everyone knows Fox News is trump propaganda. But they watch it anyway. They create every excuse they can for the big man. That’s a choice. A choice for an undemocratic United States. And sure, I’ll give the benefit of the doubt for the marines and guard deployed in la right now. But if they choose to continue to follow his orders blindly, unconstitutionally, I see them as traitors as well. Are the ones that blindly follow the wannabe dictator any better than the German soldiers in the nazi regime? “They are just following orders” I can see people saying. And that’s what they said too. Now I’m no political expert or scientist. But I just feel like the people that actively fight against everything The United States Of America is supposed to stand for are traitors against The United States themselves."
    },
    {
        title: "I don’t think white privilege is a useful concept in today’s society - class and economics matter more. ",
        content: `I want to be clear from the start: I’m not saying racism doesn’t exist. I’m not denying that many people of color face challenges. But I’ve come to believe that the concept of “white privilege” oversimplifies a much more complex reality, especially in 2025.

Here are a few reasons why I think this way:

- Class and income inequality seem to be much stronger predictors of life outcomes than race. A poor white person from a broken home in a rural area may face more real-world disadvantages than a wealthy Black or Latino person.

- Demographics and power structures have shifted. In many cities, workplaces, and universities, being a minority can sometimes come with institutional support like diversity hiring or scholarships. In some cases, these can tilt the scale against white candidates.

- Legal equality already exists. Discrimination is illegal, and most institutions actively try to be inclusive. If anything, many companies and schools go out of their way to promote diversity.

- The term “white privilege” generalizes unfairly. Not all white people are born into privilege. Many struggle with generational poverty, addiction, mental health issues, or lack of opportunity and feel dismissed when they’re told they benefit from “privilege.”

I’m open to being wrong and I’d genuinely like to hear opposing views.

Maybe there’s a nuance I’m missing. Maybe there are types of privilege I’m overlooking (cultural, systemic, subconscious). I just feel like framing everything through “white privilege” often shuts down meaningful discussion instead of opening it up.`
    },
    {
        title: "The rise of racial affinity groups (like Black-only spaces, AAPI-only clubs, etc.) is creating more division than solidarity. ",
        content: `So this is something that's been on my mind for a while and I’m honestly a little nervous to post this, but I’m here in good faith and genuinely open to changing my mind.

Lately I’ve been seeing more and more spaces that are race-specific like “Black-only healing spaces,” “Latinx-only events,” or “AAPI-only support groups.” And while I totally get the intention behind it (safe spaces, shared experience, etc.), I can’t help but feel like it’s starting to divide people more than bring us together.

I’m not saying these groups shouldn’t exist. I’m more wondering if they are actually helping in the way we hope? Or are they unintentionally making things feel more separate?

I’ve been in situations where I couldn’t join a convo or event because I wasn’t the “right” ethnicity, and it felt... kinda off? Like I respect the goal, but if we’re talking about inclusion and solidarity, shouldn’t there be more cross-race dialogue together , not in separate rooms?

Also what about people who are mixed race? Or people who feel connected to multiple cultures? Where do they fit in?

To be clear: I’m not trying to downplay anyone’s experiences or say “all lives matter” or anything like that. I just genuinely worry that we’re unintentionally building echo chambers, even within progressive spaces.

Anyway, curious what others think. Happy to be proven wrong, change my view.`
    },
    {
        title: "There is systemic discrimination against men ",
        content: `It is often claimed that misandry exists but is not systemic. However, laws and policies that exclude male victims of domestic violence demonstrate systemic bias. While some argue these policies are justified to prioritize female victims, they ignore the reality that men are also victims, at only a slightly lower rate. Laws that equitably support all victims, regardless of gender, would be a fairer solution.

Examples of Discriminatory Policies:

    Australian Judicial Bench Book (Section 5.4.5 - Responding to Men Who Claim to Be Victims of Family Violence): This guide, used in Australian courts, outlines how to question men claiming to be victims of family violence. A key question in the "Establishing Whether a Man Is a Victim" section is: “Were you at fault, in any way in causing her violence? This question serves two purposes. First, to assess whether he did anything that caused her to act in self-defence, or to retaliate. Second, people who are genuinely the victims often excuse the perpetrator to some degree and blame themselves for the violence.” - This question, not asked of female claimants, creates a double standard that makes it nearly impossible for men to be recognized as victims, as it assumes male provocation or questions their victimhood.

    Duluth Model Implementation in the U.S.: Widely adopted in U.S. domestic violence laws, the Duluth Model prioritizes women as victims and marginalizes male victims. In cases where no clear victim is identified, it mandates removing the man from the home, presuming male culpability.

These policies distort crime statistics by underreporting male victims of intimate partner violence (IPV). The skewed data is then used to justify further policies based on the false premise that men are rarely victims. U.S. data shows 41% of women and 26% of men report experiencing IPV. Given these rates, arrest rates for IPV should reflect a similar gender distribution. Instead, men account for 91% of arrests in domestic violence cases, a disparity driven by biased laws and policies.`
    },
    {
        title: "Rich people pay too much in taxes. Period. ",
        content: `I’m tired of hearing the same nonsense: “The rich don’t pay taxes because of loopholes.” That’s just not true. It’s lazy thinking and, frankly, intellectually dishonest.

Let’s break this down.

First off: when a company earns money, it pays taxes on those earnings, we’re talking 21% federal tax before a dollar goes to shareholders. Then, if that company pays a dividend, guess what? You (the shareholder) pay tax again on that same dollar you already indirectly paid tax on. That’s double taxation. And it doesn’t stop there.

Let’s say you reinvest those earnings, grow your portfolio over time, and now you want to leave it to your kids. You’ve already paid taxes at the corporate level, then personal dividend/capital gains level… and now your kids get taxed again when they inherit it? That’s triple taxation. Insane.

And capital gains? You’re only taxed when you sell. So sure, some people defer that. But they still pay. And when they do, it’s often on decades of compounding. That’s not a “loophole.” That’s smart investing and delayed gratification, the opposite of what most people do.

I’m not saying the system’s perfect. But don’t buy into the lazy narrative that wealthy people are somehow dodging everything. Most high earners do pay an enormous amount, not just in income taxes, but on investment returns, estates, and more.

If you want to argue about fairness, fine. But let’s at least get the facts straight first.`
    }
]

export function saveRankings(rankings: Record<number, number>) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('post-rankings', JSON.stringify(rankings));
  }
}

export function loadRankings(): Record<number, number> {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('post-rankings');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (error) {
        console.error('Failed to parse saved rankings:', error);
        return {};
      }
    }
  }
  return {};
}

const OpinionFarmingPhase: FC<OpinionFarmingPhaseProps> = ({ onPhaseCompletionChange }) => {
    const [postRankings, setPostRankings] = useState<Record<number, number>>({});
    const [rankingsLoaded, setRankingsLoaded] = useState(false);

    const getAvailableRanks = (excludePostId?: number) => {
        const allRanks = [1, 2, 3, 4, 5];
        const usedRanks = Object.entries(postRankings)
            .filter(([postId, rank]) =>
                rank > 0 && (excludePostId === undefined || parseInt(postId) !== excludePostId)
            )
            .map(([, rank]) => rank);

        return allRanks.filter(rank => !usedRanks.includes(rank));
    };

    const handleRankSelect = (postId: number, rank: number) => {
        const newRankings = {
            ...postRankings,
            [postId]: rank
        };
        setPostRankings(newRankings);
        
        // Check completion with the new state
        const allPostsRanked = Object.keys(newRankings).length === redditPosts.length &&
            Object.values(newRankings).every(r => r > 0);
            
        onPhaseCompletionChange(EXPERIMENT_PHASES.OPINION_FARMING, allPostsRanked);
    };

    useEffect(() => {
        const savedRankings = loadRankings();
        setPostRankings(savedRankings);
        setRankingsLoaded(true);

        const allPostsRanked = Object.keys(savedRankings).length === redditPosts.length &&
            Object.values(savedRankings).every(r => r > 0);
            
        onPhaseCompletionChange(EXPERIMENT_PHASES.OPINION_FARMING, allPostsRanked);
    }, []);

    // Save rankings whenever they change (but only after initial load)
    useEffect(() => {
        if (rankingsLoaded) {
            saveRankings(postRankings);
        }
    }, [postRankings, rankingsLoaded]);


    return (
        <div className="flex flex-col gap-y-8 w-full h-full">
            <h1 className="text-2xl font-bold">For the following Reddit opinion posts, rank them according
                to how much you disagree with the view of the original poster (OP). The first post in your
                ranking should be the one that you disagree with the most and the last post should be the
                one you agree with the most.</h1>
            <div className="flex flex-col gap-y-4 w-full h-full">
                {
                    <div className="space-y-6">
                        {redditPosts.map((post, idx) => (
                            <RedditPost key={idx} {...post} postId={idx} selectedRank={postRankings[idx] || undefined}
                                availableRanks={getAvailableRanks(idx)} onRankSelect={handleRankSelect} />
                        ))}
                    </div>
                }
            </div>
        </div>
    );
}
export default OpinionFarmingPhase;
