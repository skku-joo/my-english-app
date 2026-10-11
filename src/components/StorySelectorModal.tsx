import React from 'react';
import { X, BookOpen, CheckCircle, Lock, Play } from 'lucide-react';
import { STORY_CATALOG, StoryOverview } from '../data/storyLibrary';
import { sounds } from '../utils/soundEffects';

interface StorySelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectStory: (storyId: string) => void;
  currentStoryId: string;
}

export const StorySelectorModal: React.FC<StorySelectorModalProps> = ({
  isOpen,
  onClose,
  onSelectStory,
  currentStoryId
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-lg bg-white rounded-3xl p-6 shadow-2xl border-4 border-amber-300 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-pink-500" />
            <h2 className="text-2xl font-bold text-slate-900 font-story">
              Story Library
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            aria-label="Close story library"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
          Grade 3-4 Guided English Readers (CEFR Pre-A1 / A1)
        </p>

        <div className="space-y-3.5">
          {STORY_CATALOG.map((story: StoryOverview) => {
            const isCurrent = story.id === currentStoryId;

            return (
              <div
                key={story.id}
                className={`p-3.5 rounded-2xl border-2 transition-all flex items-center gap-3.5 ${
                  isCurrent
                    ? 'border-pink-500 bg-pink-50/50'
                    : story.isAvailable
                    ? 'border-slate-200 hover:border-amber-400 bg-white'
                    : 'border-slate-200 bg-slate-50 opacity-80'
                }`}
              >
                <img
                  src={story.coverImage}
                  alt={story.title}
                  className="w-20 h-16 object-cover rounded-xl border border-slate-200 shrink-0"
                  referrerPolicy="no-referrer"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900 font-story truncate">
                      {story.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 truncate mb-1">
                    {story.subtitle}
                  </p>
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                    <span>{story.grade}</span>
                    <span aria-hidden="true">·</span>
                    <span>{story.pageCount} Pages</span>
                    <span aria-hidden="true">·</span>
                    <span>{story.readTime}</span>
                  </div>
                </div>

                <div className="shrink-0">
                  {story.isAvailable ? (
                    <button
                      type="button"
                      onClick={() => {
                        sounds.playTap();
                        onSelectStory(story.id);
                        onClose();
                      }}
                      className="min-h-[44px] px-3.5 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-story text-sm font-bold shadow-xs active:scale-95 transition-all flex items-center gap-1.5"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>{isCurrent ? 'Play' : 'Read'}</span>
                    </button>
                  ) : (
                    <span className="flex items-center gap-1 text-xs font-semibold text-slate-400 py-1.5 px-3 rounded-lg bg-slate-200/70">
                      <Lock className="w-3.5 h-3.5" /> Coming Soon
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
