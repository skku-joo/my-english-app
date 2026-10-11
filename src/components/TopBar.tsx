import React from 'react';
import { BookOpen, Volume2, VolumeX, Home } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface TopBarProps {
  currentPage?: number;
  totalPages?: number;
  onGoHome: () => void;
  showProgress?: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentPage = 1,
  totalPages = 10,
  onGoHome,
  showProgress = false
}) => {
  const [soundOn, setSoundOn] = React.useState(true);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    sounds.setEnabled(next);
    if (next) sounds.playTap();
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-amber-200/80 px-4 py-2.5 shadow-xs">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        {/* Zone 1: Brand wordmark */}
        <button
          type="button"
          onClick={() => {
            sounds.playTap();
            onGoHome();
          }}
          className="flex items-center gap-2 group text-left cursor-pointer focus:outline-hidden"
          aria-label="Return to Fluentia Home"
        >
          <div className="w-9 h-9 rounded-xl bg-pink-500 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-story text-xl font-bold tracking-tight text-slate-900 leading-none">
              Fluentia<span className="text-pink-500">!</span>
            </span>
            <span className="text-[11px] font-medium text-slate-500 leading-none mt-0.5">
              Grade 3-4 Guided Reader
            </span>
          </div>
        </button>

        {/* Zone 2: Middle Page Indicator */}
        {showProgress && (
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-pink-600 tracking-wide font-story uppercase">
                Page {currentPage} / {totalPages}
              </span>
              {/* Mini progress bar */}
              <div className="w-24 sm:w-36 h-2 bg-slate-100 rounded-full overflow-hidden mt-1 border border-slate-200">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 to-pink-500 transition-all duration-300 rounded-full"
                  style={{ width: `${(currentPage / totalPages) * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggleSound}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 transition-colors"
            title={soundOn ? 'Sound effects on' : 'Sound effects muted'}
            aria-label={soundOn ? 'Mute sound' : 'Unmute sound'}
          >
            {soundOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5 text-slate-400" />}
          </button>

          {showProgress && (
            <button
              type="button"
              onClick={() => {
                sounds.playTap();
                onGoHome();
              }}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              title="Story Home"
              aria-label="Story Home"
            >
              <Home className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
