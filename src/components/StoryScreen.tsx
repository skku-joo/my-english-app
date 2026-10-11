import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Square, Sparkles, HelpCircle, ArrowRight, Turtle, Zap, Info } from 'lucide-react';
import { StoryPage, VocabularyItem, Hotspot } from '../types/story';
import { speechReader } from '../utils/speechReader';
import { sounds } from '../utils/soundEffects';

interface StoryScreenProps {
  page: StoryPage;
  totalPages: number;
  onOpenVocabulary: (item: VocabularyItem) => void;
  onGoToQuestion: () => void;
}

export const StoryScreen: React.FC<StoryScreenProps> = ({
  page,
  totalPages,
  onOpenVocabulary,
  onGoToQuestion
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeWordIndex, setActiveWordIndex] = useState<number>(-1);
  const [isSlowMode, setIsSlowMode] = useState<boolean>(false);
  const [hasListened, setHasListened] = useState<boolean>(false);
  const [showHotspotHints, setShowHotspotHints] = useState<boolean>(true);

  // Split text into words while keeping punctuation
  const words = React.useMemo(() => {
    return page.text.split(/\s+/).filter(Boolean);
  }, [page.text]);

  // Clean word for dictionary lookup
  const cleanWordKey = (rawWord: string) => {
    return rawWord.toLowerCase().replace(/[^a-z]/g, '');
  };

  // Stop audio whenever page changes
  useEffect(() => {
    speechReader.stop();
    setIsPlaying(false);
    setActiveWordIndex(-1);
    setHasListened(false);

    return () => {
      speechReader.stop();
    };
  }, [page.pageNumber]);

  const handleTogglePlay = () => {
    sounds.playTap();

    if (isPlaying) {
      speechReader.stop();
      setIsPlaying(false);
      setActiveWordIndex(-1);
    } else {
      setIsPlaying(true);
      const rate = isSlowMode ? 0.72 : 0.96;
      speechReader.readText(page.text, words, {
        rate,
        onWordHighlight: (idx) => {
          setActiveWordIndex(idx);
        },
        onEnd: () => {
          setIsPlaying(false);
          setActiveWordIndex(-1);
          setHasListened(true);
          sounds.playCorrect();
        },
        onError: () => {
          setIsPlaying(false);
          setActiveWordIndex(-1);
        }
      });
    }
  };

  const handleToggleSlow = () => {
    sounds.playTap();
    const nextSlow = !isSlowMode;
    setIsSlowMode(nextSlow);

    // If currently playing, restart at new speed
    if (isPlaying) {
      speechReader.stop();
      setTimeout(() => {
        setIsPlaying(true);
        const rate = nextSlow ? 0.72 : 0.96;
        speechReader.readText(page.text, words, {
          rate,
          onWordHighlight: (idx) => setActiveWordIndex(idx),
          onEnd: () => {
            setIsPlaying(false);
            setActiveWordIndex(-1);
            setHasListened(true);
          }
        });
      }, 50);
    }
  };

  const handleWordClick = (rawWord: string) => {
    sounds.playTap();
    const key = cleanWordKey(rawWord);
    const vocab = page.vocabulary[key];

    if (vocab) {
      onOpenVocabulary(vocab);
    } else {
      // General word pronunciation + quick definition
      speechReader.speakSingleWord(rawWord, 0.85);
      onOpenVocabulary({
        id: key,
        word: rawWord.replace(/[.,!?"'’]/g, ''),
        phonetic: `/${rawWord.toLowerCase()}/`,
        simpleMeaning: `A sight word in the story!`,
        koreanMeaning: `이야기에 나오는 영어 단어입니다.`,
        emoji: '📖',
        exampleSentence: page.text
      });
    }
  };

  const handleHotspotClick = (hotspot: Hotspot) => {
    sounds.playTap();
    if (hotspot.vocabularyId && page.vocabulary[hotspot.vocabularyId]) {
      onOpenVocabulary(page.vocabulary[hotspot.vocabularyId]);
    } else {
      speechReader.speakSingleWord(hotspot.title, 0.85);
      onOpenVocabulary({
        id: hotspot.id,
        word: hotspot.title,
        phonetic: `/${hotspot.title.toLowerCase()}/`,
        simpleMeaning: hotspot.description,
        koreanMeaning: `그림 속 ${hotspot.title}`,
        emoji: hotspot.icon || '🔍',
        exampleSentence: page.text
      });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-4 flex flex-col gap-4">
      {/* Top Header Row with Page Counter */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-story text-lg sm:text-xl font-bold text-[#FF1493] bg-pink-50 px-3 py-1 rounded-full border border-pink-200 shadow-xs">
            Page {page.pageNumber} / {totalPages}
          </span>
          <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
            · {page.title}
          </span>
        </div>

        {/* Hotspot hints toggle */}
        <button
          type="button"
          onClick={() => setShowHotspotHints(!showHotspotHints)}
          className="text-xs font-medium text-slate-500 hover:text-slate-800 flex items-center gap-1 py-1 px-2.5 rounded-lg hover:bg-slate-100 min-h-[44px]"
        >
          <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
          <span>{showHotspotHints ? 'Hide picture hints' : 'Show picture hints'}</span>
        </button>
      </div>

      {/* Main Illustration Area (Large picture at the top) */}
      <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-xl border-3 border-amber-300 bg-amber-100 select-none">
        <img
          src={page.image}
          alt={page.imageAlt}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        {/* Interactive Picture Hotspots (Tap picture for help!) */}
        {showHotspotHints && page.hotspots.map((spot) => (
          <button
            key={spot.id}
            type="button"
            onClick={() => handleHotspotClick(spot)}
            style={{
              top: `${spot.yPercent}%`,
              left: `${spot.xPercent}%`,
              transform: 'translate(-50%, -50%)'
            }}
            className="absolute z-10 min-h-[44px] min-w-[44px] flex items-center justify-center group focus:outline-hidden"
            title={`Tap for help: ${spot.title}`}
            aria-label={`Tap for help on ${spot.title}`}
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/95 shadow-md border-2 border-pink-400 group-hover:scale-115 active:scale-95 transition-transform duration-200 text-sm">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-40"></span>
              <span>{spot.icon || '👆'}</span>
            </span>
            <span className="hidden sm:group-hover:block absolute bottom-full mb-1 whitespace-nowrap bg-slate-900/90 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-sm pointer-events-none">
              {spot.title}
            </span>
          </button>
        ))}

        {/* Tap picture hint banner at bottom of image */}
        <div className="absolute bottom-2 left-2 right-2 bg-slate-900/60 backdrop-blur-sm px-3 py-1.5 rounded-xl text-white text-xs font-medium flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Tap pictures or words for help!</span>
          </span>
          <span className="text-[10px] text-amber-200">Pre-A1 to A1</span>
        </div>
      </div>

      {/* Story Text Box (Short English text below with tap-any-word support) */}
      <div className="w-full bg-white rounded-3xl p-5 sm:p-6 shadow-lg border-2 border-amber-200/90 flex flex-col gap-4">
        <div className="text-xl sm:text-2xl text-slate-800 leading-relaxed sm:leading-loose font-story tracking-wide">
          {words.map((word, idx) => {
            const isActive = idx === activeWordIndex;
            const key = cleanWordKey(word);
            const hasVocab = Boolean(page.vocabulary[key]);
            
            return (
              <span
                key={`${word}-${idx}`}
                onClick={() => handleWordClick(word)}
                className={`inline-block mx-1 my-0.5 px-1 py-0.5 rounded-lg cursor-pointer transition-all duration-150 select-none ${
                  isActive
                    ? 'word-active'
                    : hasVocab
                    ? 'bg-amber-100/70 hover:bg-amber-200 text-slate-900 border-b-2 border-amber-400 font-medium'
                    : 'hover:bg-slate-100 text-slate-800'
                }`}
                title="Tap for help & pronunciation"
              >
                {word}
              </span>
            );
          })}
        </div>

        {/* Vocabulary Flash Strip: Quick tap-for-help word previews */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1 flex items-center gap-1">
            <Info className="w-3 h-3" /> Words on this page:
          </span>
          {Object.values(page.vocabulary).map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => {
                sounds.playTap();
                onOpenVocabulary(v);
              }}
              className="inline-flex items-center gap-1 text-xs font-semibold py-1 px-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 transition-colors active:scale-95"
            >
              <span>{v.emoji}</span>
              <span>{v.word}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Control Strip per PRD Screen ②:
          Play audio button [🔊 Read to me] — bottom left corner
          with a [🐢 Slow] toggle on the bottom right corner
      */}
      <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
        {/* Bottom Left: [🔊 Read to me] (Hot Pink styling per PRD) */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleTogglePlay}
            className={`min-h-[52px] px-6 py-3 rounded-2xl font-story text-lg font-bold shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 ${
              isPlaying
                ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-amber-500/25'
                : 'bg-[#FF1493] hover:bg-[#e01282] text-white shadow-pink-500/25'
            }`}
            aria-label={isPlaying ? 'Pause reading' : 'Read to me'}
          >
            {isPlaying ? (
              <>
                <Square className="w-5 h-5 fill-current" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Volume2 className="w-5 h-5" />
                <span>🔊 Read to me</span>
              </>
            )}
          </button>
        </div>

        {/* Center / Action: Question Screen Button */}
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={() => {
              speechReader.stop();
              sounds.playTap();
              onGoToQuestion();
            }}
            className="w-full sm:w-auto min-h-[52px] px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-story text-lg font-bold shadow-lg shadow-emerald-600/25 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Question Time</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Right: [🐢 Slow] toggle per PRD */}
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={handleToggleSlow}
            className={`min-h-[52px] px-5 py-3 rounded-2xl font-story text-base font-bold border-2 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
              isSlowMode
                ? 'bg-amber-200 border-amber-400 text-amber-950 shadow-sm'
                : 'bg-white border-slate-200 hover:border-amber-300 text-slate-700 hover:bg-amber-50/50'
            }`}
            title="Toggle between Slow (0.75x) and Normal (1.0x) speed"
            aria-label="Toggle slow reading speed"
          >
            {isSlowMode ? (
              <>
                <Turtle className="w-5 h-5 text-amber-800" />
                <span>🐢 Slow ON</span>
              </>
            ) : (
              <>
                <Zap className="w-5 h-5 text-slate-500" />
                <span>⚡ Normal</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
