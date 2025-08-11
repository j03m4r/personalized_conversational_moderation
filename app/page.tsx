"use client";
import ChatInterface from "@/components/ChatInterface";
import InitialResponsePhase, { loadInitialResponse } from "@/components/InitialResponsePhase";
import OpinionFarmingPhase from "@/components/OpinionFarmingPhase";
import { useEffect, useState } from "react";

export enum EXPERIMENT_PHASES {
    OPINION_FARMING = 0,
    INITIAL_RESPONSE = 1,
    DIALOGUE = 2,
    REWRITE_RESPONSE = 3
};

export function savePhase(phase: EXPERIMENT_PHASES) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('current-phase', phase.toString());
  }
}

export function loadPhase(): EXPERIMENT_PHASES {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('current-phase');
    if (saved) {
      try {
        return Number(saved) as EXPERIMENT_PHASES;
      } catch (error) {
        console.error('Failed to fetch current phase:', error);
        return EXPERIMENT_PHASES.OPINION_FARMING;
      }
    }
  }
  return EXPERIMENT_PHASES.OPINION_FARMING;
}

export default function Home() {
    const [phase, setPhase] = useState<EXPERIMENT_PHASES>(EXPERIMENT_PHASES.OPINION_FARMING);
    const [lastSavedPhase, setLastSavedPhase] = useState<EXPERIMENT_PHASES>(EXPERIMENT_PHASES.OPINION_FARMING)
    const [phasesComplete, setPhasesComplete] = useState<boolean[]>([false, false, false, false]);

    const onPhaseCompletionChange = (_phase: EXPERIMENT_PHASES, isComplete: boolean) => {
        let temp = [...phasesComplete]
        temp[_phase] = isComplete;
        setPhasesComplete(temp);

        if (isComplete && _phase > lastSavedPhase) {
            savePhase(_phase);
            setLastSavedPhase(_phase);
        }
    }

    useEffect(() => {
        const currentPhase = loadPhase();
        setLastSavedPhase(currentPhase);
        setPhase(currentPhase);
        savePhase(currentPhase);
    }, [])

    const goToNextPhase = () => {
        const nextPhase = phase + 1;
        if (nextPhase === EXPERIMENT_PHASES.DIALOGUE) {
            const initialResponse = loadInitialResponse()
            const isUnproductive = isUnproductiveMessage(initialResponse);
            if (!isUnproductive) return
        }

        setPhase(nextPhase);
        
        if (nextPhase > lastSavedPhase) {
            savePhase(nextPhase);
            setLastSavedPhase(nextPhase);
        }

    };

    const isUnproductiveMessage = (message: string) => {
        // implement at some point
        return true;
    }

    return (
        <div className="flex flex-col h-full py-[10vh]">
            <div className="flex h-full w-full pb-[1vh]">
                {phase === EXPERIMENT_PHASES.OPINION_FARMING ? (
                    <OpinionFarmingPhase onPhaseCompletionChange={onPhaseCompletionChange} />                    
                ) : phase === EXPERIMENT_PHASES.INITIAL_RESPONSE ? (
                    <InitialResponsePhase onPhaseCompletionChange={onPhaseCompletionChange} />
                ) : phase === EXPERIMENT_PHASES.DIALOGUE ? (
                    <ChatInterface />
                ) : phase === EXPERIMENT_PHASES.REWRITE_RESPONSE ? (
                    <div>Rewrite Response Phase</div>
                ) : null}
            </div>
            <div
                className="flex justify-between gap-x-[1rem] max-w-[calc(1280px+1rem)] py-[.5rem] rounded-md px-[.5rem] fixed bottom-[1vh] left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-md border border-white/10">
                <button onClick={goToNextPhase} disabled={!phasesComplete[phase] ||
                    phase === EXPERIMENT_PHASES.REWRITE_RESPONSE} className="disabled:opacity-25
                        disabled:pointer-events-none cursor-pointer w-[20vh] h-[10vh] flex justify-center items-center rounded-md border border-black
                        hover:bg-black transition-all duration-200 ease-in-out hover:text-white">next</button>
            </div>
        </div>
    );
}
                // <button onClick={() => setPhase((prev) => prev - 1)}
                //     disabled={phase === EXPERIMENT_PHASES.OPINION_FARMING} className="disabled:opacity-25
                //         disabled:pointer-events-none cursor-pointer px-10 py-5 rounded-md border border-black
                //         hover:bg-black transition-all duration-200 ease-in-out hover:text-white">prev</button>
