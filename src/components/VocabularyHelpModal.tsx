import React from 'react';
import { Volume2, X, Sparkles } from 'lucide-react';
import { VocabularyItem } from '../types/story';
import { speechReader } from '../utils/speechReader';
import { sounds } from '../utils/soundEffects';

interface VocabularyHelpModalProps {
  item: VocabularyItem | null;
  onClose: () => void;
}

export const VocabularyHelpModal: React.FC<VocabularyHelpModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const handlePlayWord = () => {
    sounds.playTap();
    speechReader.speakSingleWord(item.word, 0.8);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border-4 border-amber-300 transform transition-all scale-100 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Word & Audio */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl select-none" role="img" aria-label={item.word}>
              {item.emoji}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight font-story">
                  {item.word}
                </h3>
                <button
                  type="button"
                  onClick={handlePlayWord}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-pink-100 hover:bg-pink-200 text-pink-600 transition-colors active:scale-95"
                  title="Listen to pronunciation"
                  aria-label="Listen to pronunciation"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm font-mono text-slate-500 font-medium">
                {item.phonetic}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
            aria-label="Close word help"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Meaning Cards */}
        <div className="space-y-3 mb-5">
          <div className="bg-amber-50/80 rounded-2xl p-3.5 border border-amber-200">
            <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Meaning
            </p>
            <p className="text-base text-slate-800 font-medium leading-snug">
              {item.simpleMeaning}
            </p>
          </div>

          <div className="bg-blue-50/80 rounded-2xl p-3.5 border border-blue-200">
            <p className="text-xs font-semibold text-blue-800 uppercase tracking-wider mb-1">
              한국어 뜻 (Korean)
            </p>
            <p className="text-base font-semibold text-slate-800 leading-snug">
              {item.koreanMeaning}
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Example in Story
            </p>
            <p className="text-sm text-slate-700 italic leading-relaxed">
              "{item.exampleSentence}"
            </p>
          </div>
        </div>

        {/* Big Tap to Close Button */}
        <button
          type="button"
          onClick={() => {
            sounds.playTap();
            onClose();
          }}
          className="w-full min-h-[48px] py-3 px-4 rounded-2xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold text-base shadow-md active:scale-98 transition-all flex items-center justify-center gap-2"
        >
          Got it! 👍
        </button>
      </div>
    </div>
  );
};
