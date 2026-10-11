export interface ReadToMeOptions {
  rate: number; // 1.0 (normal) or 0.72 (slow)
  pitch?: number;
  onWordHighlight: (wordIndex: number) => void;
  onEnd: () => void;
  onError?: (err: unknown) => void;
}

class SpeechReaderManager {
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private timerFallback: NodeJS.Timeout | null = null;
  private preferredVoice: SpeechSynthesisVoice | null = null;
  private isSpeaking: boolean = false;
  private isPaused: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.initVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        this.initVoices();
      };
    }
  }

  private initVoices() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    // Prioritize natural high quality English voices
    const enVoices = voices.filter(v => v.lang.startsWith('en'));
    const naturalVoice = enVoices.find(v => 
      v.name.includes('Natural') || 
      v.name.includes('Samantha') || 
      v.name.includes('Google US English') ||
      v.name.includes('Daniel') ||
      v.name.includes('Victoria') ||
      v.name.includes('Karen')
    );
    this.preferredVoice = naturalVoice || enVoices[0] || voices[0] || null;
  }

  public readText(text: string, words: string[], options: ReadToMeOptions) {
    this.stop();

    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      // Browser without speech synthesis fallback
      this.simulateReadAlong(words, options);
      return;
    }

    try {
      const utterance = new SpeechSynthesisUtterance(text);
      if (this.preferredVoice) {
        utterance.voice = this.preferredVoice;
      }
      utterance.rate = options.rate;
      utterance.pitch = options.pitch ?? 1.05; // slightly friendly warm pitch for kids
      utterance.lang = 'en-US';

      // Pre-calculate word start char indices for precise mapping
      const wordRanges: { start: number; end: number; word: string }[] = [];
      let searchOffset = 0;
      for (let i = 0; i < words.length; i++) {
        const rawWord = words[i].replace(/[.,!?"'’]/g, '');
        const found = text.indexOf(rawWord, searchOffset);
        if (found !== -1) {
          wordRanges.push({ start: found, end: found + rawWord.length, word: rawWord });
          searchOffset = found + rawWord.length;
        } else {
          wordRanges.push({ start: searchOffset, end: searchOffset + rawWord.length, word: rawWord });
        }
      }

      let boundaryFired = false;

      utterance.onboundary = (event: SpeechSynthesisEvent) => {
        if (event.name === 'word') {
          boundaryFired = true;
          const charIdx = event.charIndex;
          // Find which word index this charIndex corresponds to
          let activeIndex = -1;
          for (let i = 0; i < wordRanges.length; i++) {
            if (charIdx >= wordRanges[i].start && (i === wordRanges.length - 1 || charIdx < wordRanges[i + 1].start)) {
              activeIndex = i;
              break;
            }
          }
          if (activeIndex !== -1) {
            options.onWordHighlight(activeIndex);
          }
        }
      };

      utterance.onstart = () => {
        this.isSpeaking = true;
        this.isPaused = false;
        options.onWordHighlight(0);

        // Fallback safety: If boundary events don't fire within 500ms, start time-based sync
        setTimeout(() => {
          if (!boundaryFired && this.isSpeaking && !this.isPaused) {
            this.startTimeBasedHighlight(words, options);
          }
        }, 500);
      };

      utterance.onend = () => {
        this.clearTimer();
        this.isSpeaking = false;
        this.isPaused = false;
        options.onWordHighlight(-1);
        options.onEnd();
      };

      utterance.onerror = (e) => {
        this.clearTimer();
        this.isSpeaking = false;
        this.isPaused = false;
        options.onWordHighlight(-1);
        if (options.onError) options.onError(e);
      };

      this.currentUtterance = utterance;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    } catch {
      this.simulateReadAlong(words, options);
    }
  }

  private startTimeBasedHighlight(words: string[], options: ReadToMeOptions) {
    this.clearTimer();
    let currentIdx = 0;
    // Word duration scale: base ~320ms per word at 1.0x rate, plus extra for longer words
    const baseDuration = (320 / options.rate);

    const step = () => {
      if (!this.isSpeaking || this.isPaused) return;
      options.onWordHighlight(currentIdx);
      currentIdx++;

      if (currentIdx < words.length) {
        const wordLen = words[currentIdx - 1]?.length || 4;
        const delay = Math.max(200, baseDuration * (0.8 + wordLen * 0.05));
        this.timerFallback = setTimeout(step, delay);
      }
    };

    step();
  }

  private simulateReadAlong(words: string[], options: ReadToMeOptions) {
    this.isSpeaking = true;
    this.startTimeBasedHighlight(words, options);
    const totalEst = words.length * (380 / options.rate);
    setTimeout(() => {
      this.isSpeaking = false;
      options.onWordHighlight(-1);
      options.onEnd();
    }, totalEst);
  }

  public speakSingleWord(word: string, rate: number = 0.85) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      if (this.preferredVoice) {
        utterance.voice = this.preferredVoice;
      }
      utterance.rate = rate;
      utterance.pitch = 1.05;
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    } catch {
      // Safe fallback
    }
  }

  public pause() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window && this.isSpeaking) {
      window.speechSynthesis.pause();
      this.isPaused = true;
    }
  }

  public resume() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window && this.isPaused) {
      window.speechSynthesis.resume();
      this.isPaused = false;
    }
  }

  public stop() {
    this.clearTimer();
    this.isSpeaking = false;
    this.isPaused = false;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // Safe
      }
    }
    this.currentUtterance = null;
  }

  private clearTimer() {
    if (this.timerFallback) {
      clearTimeout(this.timerFallback);
      this.timerFallback = null;
    }
  }

  public isCurrentlySpeaking(): boolean {
    return this.isSpeaking;
  }
}

export const speechReader = new SpeechReaderManager();
