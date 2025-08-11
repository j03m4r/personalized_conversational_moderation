import { EXPERIMENT_PHASES } from '@/app/page';
import { useEffect, useState, type FC } from 'react';
import { loadRankings, redditPosts  } from './OpinionFarmingPhase';

interface InitialResponsePhaseProps {
    onPhaseCompletionChange: (_phase: EXPERIMENT_PHASES, isComplete: boolean) => void;
}

export function saveInitialResponse(response: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('initial-response', response);
  }
}

export function loadInitialResponse(): string {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('initial-response');
    if (saved) {
      try {
        return saved;
      } catch (error) {
        console.error('Failed to fetch initial response:', error);
        return "";
      }
    }
  }
  return "";
}

const InitialResponsePhase: FC<InitialResponsePhaseProps> = ({ onPhaseCompletionChange }) => {
    const [mostDisagreed, setMostDisagreed] = useState<{ title: string; content: string; }|null>(null);
    const [initialResponse, setInitialResponse] = useState("");

    useEffect(() => {
        const savedRankings = loadRankings();
        
        const mostDisagreedEntry = Object.entries(savedRankings).find(([_, rank]) => rank === 1);
    
        if (mostDisagreedEntry) {
            const postId = parseInt(mostDisagreedEntry[0]);
            const post = redditPosts[postId];
            setMostDisagreed(post);
        } else {
            setMostDisagreed(null);
        }
    },[])

    useEffect(() => {
        const _wordCount = initialResponse.split(" ").length;

        if (_wordCount > 0) {
            onPhaseCompletionChange(EXPERIMENT_PHASES.INITIAL_RESPONSE, true);
            saveInitialResponse(initialResponse);
        } else {
            onPhaseCompletionChange(EXPERIMENT_PHASES.INITIAL_RESPONSE, false);
        }
    }, [initialResponse])

    return (
        <div className="flex flex-col gap-y-8 w-full h-full justify-between">
            <h1 className="text-2xl font-bold">On the previous question, you marked this post as the one you disagreed with the most:</h1>
            <div className="mx-auto max-w-[50vw] border border-gray-200 rounded-md px-8 py-4 w-full flex flex-col gap-y-2">
                <h2 className="font-semibold text-lg mb-2">{mostDisagreed?.title}</h2>
                <p className="text-gray-700 leading-relaxed text-sm">{mostDisagreed?.content}</p>
            </div>
            <div className="flex flex-col gap-y-2">
                <h1 className="text-lg">What would you want to say to someone that holds this view point in an online discussion setting like Reddit?</h1>
                <textarea value={initialResponse} onChange={(e) => setInitialResponse(e.target.value)} rows={5} className="px-2 py-1 w-full border border-black rounded-md" placeholder="Enter your reponse here" />
            </div>
        </div>
    );
}
export default InitialResponsePhase;
