import React, { useState } from "react";

export interface RedditPostProps {
    title: string;
    content: string;
    postId: number;
    selectedRank?: number;
    availableRanks: number[];
    onRankSelect: (postId: number, rank: number) => void;
}

const RedditPost: React.FC<RedditPostProps> = ({ 
    title, 
    content, 
    postId, 
    selectedRank, 
    availableRanks, 
    onRankSelect 
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col w-full rounded-lg p-4">
            <div className="flex justify-between items-center gap-8">
                {/* Ranking Selection */}
                <div className="flex justify-center h-full w-[15%] relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`
                            px-4 py-2 rounded-md border min-w-[80px] font-semibold
                            transition-all duration-200 ease-in-out cursor-pointer
                            ${selectedRank 
                                ? 'border-blue-500 bg-blue-50 text-blue-700' 
                                : 'border-gray-300 bg-gray-50 text-gray-600 hover:border-black'
                            }
                        `}
                    >
                        {selectedRank ? `Rank ${selectedRank}` : 'Select Rank'}
                    </button>
                    
                    {isOpen && (
                        <div className="absolute top-full mt-1 right-0 border border-gray-200 rounded-md shadow-lg z-10 min-w-[80px]">
                            {selectedRank && (
                                <button
                                    onClick={() => {
                                        onRankSelect(postId, 0); // 0 means unselect
                                        setIsOpen(false);
                                    }}
                                    className="cursor-pointer w-full px-4 py-2 text-left hover:bg-red-50 text-red-600 border-b border-gray-100"
                                >
                                    Clear
                                </button>
                            )}
                            {availableRanks.map(rank => (
                                <button
                                    key={rank}
                                    onClick={() => {
                                        onRankSelect(postId, rank);
                                        setIsOpen(false);
                                    }}
                                    className="w-full cursor-pointer px-4 py-2 text-left hover:bg-blue-50 hover:text-blue-700"
                                >
                                    Rank {rank}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex-1 border border-gray-200 rounded-md px-8 py-4 w-full flex flex-col gap-y-2">
                    <h2 className="font-semibold text-lg mb-2">{title}</h2>
                    <p className="text-gray-700 text-sm leading-relaxed">{content}</p>
                </div>
                
            </div>
        </div>
    );
};

export default RedditPost;
