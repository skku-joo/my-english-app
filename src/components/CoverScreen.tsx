import React from 'react';
import { Play, Sparkles, BookOpen, Clock, Award, Compass } from 'lucide-react';
import { Story } from '../types/story';
import { sounds } from '../utils/soundEffects';

interface CoverScreenProps {
  story: Story;
  onStartStory: () => void;
  onOpenLibrary: () => void;
}

export const CoverScreen: React.FC<CoverScreenProps> = ({
  story,
  onStartStory,
  onOpenLibrary,
}) => {
  return (
    <div className="w-full max-w-xl mx-auto px-4 py-6 flex flex-col items-center">
      {/* Cover Card Container */}
      <div className="w-full bg-white rounded-3xl p-5 sm:p-7 shadow-xl border-2 border-amber-200/80 text-center flex flex-col items-center">
        {/* Story Metadata Header (Zero-Pill discipline) */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
          <span>{story.targetGrade}</span>
          <span aria-hidden="true">·</span>
          <span>{story.targetLevel}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-500" /> 10-15 min
          </span>
        </div>

        {/* Story Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-story mb-2 text-balance">
          {story.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-medium max-w-md mb-5">
          {story.coverSummary}
        </p>

        {/* Cover Illustration */}
        <div className="relative w-full max-w-md aspect-4/3 rounded-2xl overflow-hidden shadow-lg border-2 border-amber-300 bg-amber-100 group mb-6">
          <img
            src={story.coverImage}
            alt={story.title}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          {/* Subtle badge on image corner */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm text-xs font-bold text-emerald-800 flex items-center gap-1.5 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Original Picture Book
          </div>
        </div>

        {/* Three Step Guide Cards for Young Learners */}
        <div className="w-full grid grid-cols-3 gap-2 sm:gap-3 mb-6">
          <div className="bg-amber-50 rounded-2xl p-2.5 sm:p-3 border border-amber-200 text-center">
            <span className="text-2xl block mb-1">🎧</span>
            <span className="text-xs font-bold text-slate-800 block">Listen</span>
            <span className="text-[11px] text-slate-500 hidden sm:block">Words highlight</span>
          </div>
          <div className="bg-blue-50 rounded-2xl p-2.5 sm:p-3 border border-blue-200 text-center">
            <span className="text-2xl block mb-1">👆</span>
            <span className="text-xs font-bold text-slate-800 block">Tap Help</span>
            <span className="text-[11px] text-slate-500 hidden sm:block">Instant meanings</span>
          </div>
          <div className="bg-pink-50 rounded-2xl p-2.5 sm:p-3 border border-pink-200 text-center">
            <span className="text-2xl block mb-1">⭐</span>
            <span className="text-xs font-bold text-slate-800 block">Quiz & Win</span>
            <span className="text-[11px] text-slate-500 hidden sm:block">Star badge</span>
          </div>
        </div>

        {/* PRIMARY CTA: [Start Story] — Large, Centered, Hot Pink styling per PRD */}
        <button
          type="button"
          onClick={() => {
            sounds.playTap();
            onStartStory();
          }}
          className="w-full sm:w-80 min-h-[58px] py-3.5 px-8 rounded-2xl bg-[#FF1493] hover:bg-[#e01282] text-white font-story text-xl sm:text-2xl font-bold shadow-xl shadow-pink-500/25 active:scale-95 transition-all flex items-center justify-center gap-3 animate-pulse-glow"
          aria-label="Start Story"
        >
          <Play className="w-6 h-6 fill-current" />
          Start Story
        </button>

        {/* Secondary: Choose Another Story */}
        <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
          <button
            type="button"
            onClick={() => {
              sounds.playTap();
              onOpenLibrary();
            }}
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-pink-600 transition-colors py-1 px-3 rounded-lg hover:bg-slate-100 min-h-[44px]"
          >
            <Compass className="w-4 h-4 text-pink-500" />
            Choose Another Story
          </button>
        </div>
      </div>
    </div>
  );
};
