import React, { useState } from 'react';
import { Volume2, ArrowRight, Lightbulb, CheckCircle2, RotateCcw, ArrowLeft } from 'lucide-react';
import { ComprehensionQuestion } from '../types/story';
import { sounds } from '../utils/soundEffects';
import { speechReader } from '../utils/speechReader';

interface QuestionScreenProps {
  question: ComprehensionQuestion;
  pageNumber: number;
  totalPages: number;
  onAnswerCorrect: () => void;
  onNextPage: () => void;
  onBackToStory: () => void;
}

export const QuestionScreen: React.FC<QuestionScreenProps> = ({
  question,
  pageNumber,
  totalPages,
  onAnswerCorrect,
  onNextPage,
  onBackToStory
}) => {
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [attempts, setAttempts] = useState<number>(0);
  const [revealed, setRevealed] = useState<boolean>(false);

  const handleReadQuestion = () => {
    sounds.playTap();
    speechReader.speakSingleWord(question.question, 0.9);
  };

  const handleSelectChoice = (choiceId: string) => {
    if (status === 'correct' || revealed) return;

    setSelectedChoiceId(choiceId);
    const isCorrect = choiceId === question.correctChoiceId;

    if (isCorrect) {
      setStatus('correct');
      sounds.playCorrect();
      if (attempts === 0) {
        onAnswerCorrect();
      }
    } else {
      setStatus('wrong');
      sounds.playTryAgain();
      setAttempts((prev) => prev + 1);

      // If failed twice, reveal the answer
      if (attempts >= 1) {
        setRevealed(true);
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-4 flex flex-col gap-5">
      {/* Top Page Progress Indicator */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => {
            sounds.playTap();
            onBackToStory();
          }}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 py-1 px-2.5 rounded-lg hover:bg-slate-100 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Review Story Page</span>
        </button>

        <span className="font-story text-sm font-bold text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full">
          Quiz for Page {pageNumber} of {totalPages}
        </span>
      </div>

      {/* Question Card Box */}
      <div className="w-full bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-3 border-amber-200/90 text-center flex flex-col items-center">
        {/* Category Pill Tag Replacement: clean editorial unboxed kicker */}
        <div className="flex items-center gap-2 text-xs font-bold text-pink-600 uppercase tracking-wider mb-2 font-story">
          <span>Question Check</span>
          <span aria-hidden="true">·</span>
          <span>Grade 3-4 Comprehension</span>
        </div>

        {/* Question text: top, large font */}
        <div className="flex items-center justify-center gap-2.5 mb-6 max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-story text-balance">
            {question.question}
          </h2>
          <button
            type="button"
            onClick={handleReadQuestion}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-amber-100 hover:bg-amber-200 text-amber-800 transition-colors shrink-0 active:scale-95"
            title="Read question aloud"
            aria-label="Read question aloud"
          >
            <Volume2 className="w-5 h-5" />
          </button>
        </div>

        {/* 2-3 Answer choices as picture/word buttons, arranged in a row */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
          {question.choices.map((choice) => {
            const isSelected = selectedChoiceId === choice.id;
            const isAnswer = choice.id === question.correctChoiceId;

            let buttonStyle = 'bg-amber-50/70 border-2 border-amber-200 hover:border-amber-400 text-slate-800 hover:bg-amber-100/50';

            if (status === 'correct' && isAnswer) {
              buttonStyle = 'bg-emerald-100 border-3 border-emerald-500 text-emerald-950 shadow-md scale-102';
            } else if (revealed && isAnswer) {
              buttonStyle = 'bg-emerald-100 border-3 border-emerald-500 text-emerald-950 animate-pulse';
            } else if (isSelected && status === 'wrong') {
              buttonStyle = 'bg-rose-100 border-3 border-rose-400 text-rose-950';
            }

            return (
              <button
                key={choice.id}
                type="button"
                onClick={() => handleSelectChoice(choice.id)}
                disabled={status === 'correct' || revealed}
                className={`min-h-[100px] p-4 rounded-2xl flex flex-col items-center justify-center gap-2 text-center transition-all duration-200 active:scale-95 cursor-pointer shadow-sm ${buttonStyle}`}
              >
                {choice.emoji && (
                  <span className="text-3xl sm:text-4xl select-none" role="img" aria-label={choice.text}>
                    {choice.emoji}
                  </span>
                )}
                <span className="font-story text-base sm:text-lg font-bold leading-tight">
                  {choice.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* Simple instant feedback:
            "Nice!" for correct,
            "Try again!" for a wrong answer with one hint, then reveal the answer
        */}
        {status === 'correct' && (
          <div className="w-full bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-4 mb-6 flex flex-col items-center gap-2 animate-in zoom-in-95 duration-200">
            <div className="flex items-center gap-2 text-emerald-700 font-story text-2xl font-bold">
              <CheckCircle2 className="w-7 h-7" />
              <span>Nice! 🎉</span>
            </div>
            <p className="text-sm text-emerald-900 font-medium">
              {question.explanation}
            </p>
          </div>
        )}

        {status === 'wrong' && !revealed && (
          <div className="w-full bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 mb-6 flex flex-col items-center gap-2 animate-in shake duration-200">
            <div className="flex items-center gap-2 text-amber-900 font-story text-xl font-bold">
              <RotateCcw className="w-5 h-5 text-amber-600 animate-spin" />
              <span>Try again!</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-amber-800 font-medium">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Hint: {question.hint}</span>
            </div>
          </div>
        )}

        {revealed && status !== 'correct' && (
          <div className="w-full bg-blue-50 border-2 border-blue-300 rounded-2xl p-4 mb-6 flex flex-col items-center gap-2 animate-in zoom-in-95 duration-200">
            <div className="text-blue-900 font-story text-lg font-bold">
              Here is the answer:
            </div>
            <p className="text-sm text-blue-950 font-medium">
              {question.explanation}
            </p>
          </div>
        )}

        {/* Action Button: Next Page (or Next to Final Result) */}
        {(status === 'correct' || revealed) && (
          <button
            type="button"
            onClick={() => {
              sounds.playTap();
              onNextPage();
            }}
            className="w-full sm:w-72 min-h-[54px] py-3.5 px-8 rounded-2xl bg-[#FF1493] hover:bg-[#e01282] text-white font-story text-xl font-bold shadow-lg shadow-pink-500/25 active:scale-95 transition-all flex items-center justify-center gap-2.5 animate-bounce-subtle"
          >
            <span>{pageNumber === totalPages ? 'Finish Story ⭐' : 'Next Page'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};
