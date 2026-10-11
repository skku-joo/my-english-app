import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Star, RotateCcw, BookOpen, Award, CheckCircle2, MessageSquare, Send, Printer, FileText, X } from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import celebrationImg from '../assets/images/fluentia_celebration_1791704298020.jpg';

interface ResultScreenProps {
  score: number;
  totalPages: number;
  onReadAgain: () => void;
  onChooseAnotherStory: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  score,
  totalPages,
  onReadAgain,
  onChooseAnotherStory
}) => {
  const [selectedEmoji, setSelectedEmoji] = useState<'happy' | 'neutral' | 'sad' | null>('happy');
  const [oneLineResponse, setOneLineResponse] = useState<string>('Trunky the Elephant is my favorite hero! 🐘');
  const [isSavedReflection, setIsSavedReflection] = useState<boolean>(false);
  const [showCertificate, setShowCertificate] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>('Star Reader');

  // Trigger celebration on mount
  useEffect(() => {
    sounds.playFanfare();
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
      }, 350);
    } catch {
      // safe fallback
    }
  }, []);

  const quickPhrases = [
    'Trunky the Elephant is my favorite hero! 🐘',
    'The crocodile disguise was so funny! 🐊',
    'I loved reading this English book! 📚',
    'The children are safe and happy! 🎉'
  ];

  const handleSelectEmoji = (type: 'happy' | 'neutral' | 'sad') => {
    sounds.playTap();
    setSelectedEmoji(type);
  };

  const handleSelectPhrase = (phrase: string) => {
    sounds.playTap();
    setOneLineResponse(phrase);
    setIsSavedReflection(true);
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-6 flex flex-col gap-6">
      <div className="w-full bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-3 border-amber-300 text-center flex flex-col items-center">
        {/* Celebration Image */}
        <div className="w-full max-w-sm aspect-4/3 rounded-2xl overflow-hidden shadow-md border-2 border-amber-200 mb-4">
          <img
            src={celebrationImg}
            alt="Animals and children celebrating together"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Star Badge Icon */}
        <div className="relative mb-2">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 flex items-center justify-center shadow-lg border-4 border-white animate-bounce-subtle">
            <Star className="w-11 h-11 text-amber-950 fill-amber-300" />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-pink-500 text-white rounded-full p-1 shadow-sm">
            <Award className="w-4 h-4" />
          </div>
        </div>

        {/* Title: You finished the story! */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-story mb-2">
          You finished the story!
        </h1>
        <p className="text-sm font-semibold text-emerald-700 mb-4">
          Hooray! You read all 10 pages and explored new English words!
        </p>

        {/* Score line per PRD: format <span style="color: #FF1493;">You answered 9 / 10 correctly</span> */}
        <div className="bg-pink-50 border-2 border-pink-200 rounded-2xl px-5 py-3 mb-6 w-full max-w-md">
          <p className="font-story text-xl sm:text-2xl font-bold text-[#FF1493]">
            You answered {score} / {totalPages} correctly
          </p>
          <p className="text-xs text-slate-600 mt-0.5">
            {score >= 8 ? 'Outstanding reading comprehension! 🌟' : 'Great effort! Keep reading every day! 👏'}
          </p>
        </div>

        {/* Reflection Section per PRD:
            Emoji reaction (😊, 😐, 😢)
            One-line response
        */}
        <div className="w-full bg-amber-50/70 border border-amber-200 rounded-2xl p-4 sm:p-5 mb-6 text-left">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 font-story">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Story Reflection</span>
          </div>

          <p className="text-sm font-medium text-slate-700 mb-2">
            How was this story for you?
          </p>

          {/* Emoji Reaction: (😊, 😐, 😢) */}
          <div className="flex items-center justify-around gap-2 mb-4 bg-white rounded-xl p-2 border border-amber-200">
            <button
              type="button"
              onClick={() => handleSelectEmoji('happy')}
              className={`flex-1 py-2 px-3 rounded-lg flex flex-col items-center gap-1 transition-all min-h-[50px] ${
                selectedEmoji === 'happy'
                  ? 'bg-amber-100 ring-2 ring-amber-400 scale-105'
                  : 'hover:bg-slate-50 text-slate-400'
              }`}
            >
              <span className="text-3xl">😊</span>
              <span className="text-[11px] font-bold text-slate-700">Fun & Good!</span>
            </button>

            <button
              type="button"
              onClick={() => handleSelectEmoji('neutral')}
              className={`flex-1 py-2 px-3 rounded-lg flex flex-col items-center gap-1 transition-all min-h-[50px] ${
                selectedEmoji === 'neutral'
                  ? 'bg-amber-100 ring-2 ring-amber-400 scale-105'
                  : 'hover:bg-slate-50 text-slate-400'
              }`}
            >
              <span className="text-3xl">😐</span>
              <span className="text-[11px] font-bold text-slate-700">Just OK</span>
            </button>

            <button
              type="button"
              onClick={() => handleSelectEmoji('sad')}
              className={`flex-1 py-2 px-3 rounded-lg flex flex-col items-center gap-1 transition-all min-h-[50px] ${
                selectedEmoji === 'sad'
                  ? 'bg-amber-100 ring-2 ring-amber-400 scale-105'
                  : 'hover:bg-slate-50 text-slate-400'
              }`}
            >
              <span className="text-3xl">😢</span>
              <span className="text-[11px] font-bold text-slate-700">A bit hard</span>
            </button>
          </div>

          {/* One-Line Response per PRD */}
          <p className="text-sm font-medium text-slate-700 mb-2">
            Pick or write your one-line thought:
          </p>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {quickPhrases.map((phrase, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectPhrase(phrase)}
                className={`text-xs font-semibold py-1.5 px-3 rounded-xl transition-all border text-left ${
                  oneLineResponse === phrase
                    ? 'bg-pink-100 border-pink-400 text-pink-900 shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-pink-300'
                }`}
              >
                {phrase}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              value={oneLineResponse}
              onChange={(e) => {
                setOneLineResponse(e.target.value);
                setIsSavedReflection(false);
              }}
              placeholder="Write your one-line reaction..."
              className="w-full bg-white border border-slate-300 rounded-xl py-2.5 px-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-pink-400"
            />
            {isSavedReflection && (
              <span className="absolute right-3 top-2.5 text-xs font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Saved!
              </span>
            )}
          </div>
        </div>

        {/* Certificate / Exportable Output Button */}
        <div className="w-full mb-3">
          <button
            type="button"
            onClick={() => {
              sounds.playTap();
              setShowCertificate(true);
            }}
            className="w-full min-h-[48px] py-2.5 px-4 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 font-story text-base font-bold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
          >
            <FileText className="w-4 h-4 text-amber-700" />
            <span>View & Print Completion Certificate 📜</span>
          </button>
        </div>

        {/* Buttons side by side on bottom third per PRD:
            [Read Again] and [Choose Another Story]
        */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {/* [Read Again] button */}
          <button
            type="button"
            onClick={() => {
              sounds.playTap();
              onReadAgain();
            }}
            className="w-full min-h-[52px] py-3.5 px-4 rounded-2xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-story text-lg font-bold shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Read Again</span>
          </button>

          {/* [Choose Another Story] button */}
          <button
            type="button"
            onClick={() => {
              sounds.playTap();
              onChooseAnotherStory();
            }}
            className="w-full min-h-[52px] py-3.5 px-4 rounded-2xl bg-[#FF1493] hover:bg-[#e01282] text-white font-story text-lg font-bold shadow-lg shadow-pink-500/25 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-5 h-5" />
            <span>Choose Another Story</span>
          </button>
        </div>
      </div>

      {/* Printable Certificate Modal (Deployable learning output) */}
      {showCertificate && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in"
          onClick={() => setShowCertificate(false)}
        >
          <div 
            className="w-full max-w-lg bg-white rounded-3xl p-6 shadow-2xl border-4 border-amber-400 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowCertificate(false)}
              className="absolute top-4 right-4 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              aria-label="Close certificate"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate Header */}
            <div className="text-center border-b-2 border-dashed border-amber-200 pb-4 mb-4">
              <div className="flex items-center justify-center gap-1.5 text-pink-600 font-story font-bold text-xs uppercase tracking-wider mb-1">
                <Award className="w-4 h-4" /> Fluentia! English Reader
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-story">
                Certificate of Completion
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Elementary Grade 3-4 Guided Reading Program
              </p>
            </div>

            {/* Certificate Content */}
            <div className="bg-amber-50/60 rounded-2xl p-4 border border-amber-200 mb-4 text-center space-y-3">
              <p className="text-xs text-slate-600 font-semibold uppercase tracking-wider">
                This certifies that
              </p>
              <div className="max-w-xs mx-auto">
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Enter Student Name"
                  className="w-full text-center text-xl font-bold font-story text-slate-900 border-b-2 border-amber-400 bg-transparent py-1 focus:outline-hidden"
                />
                <span className="text-[10px] text-slate-400 block mt-0.5">Click to customize student name</span>
              </div>
              <p className="text-xs text-slate-700 font-medium">
                has successfully read and understood the story:
              </p>
              <p className="text-lg font-bold font-story text-slate-900 text-pink-600">
                "The Enormous Crocodile"
              </p>
              <div className="flex items-center justify-center gap-4 text-xs font-semibold text-slate-700 pt-2 border-t border-amber-200/80">
                <span>Score: <strong className="text-slate-900">{score} / {totalPages}</strong></span>
                <span>·</span>
                <span>CEFR: <strong className="text-slate-900">Pre-A1 / A1</strong></span>
                <span>·</span>
                <span>Date: <strong className="text-slate-900">{new Date().toLocaleDateString()}</strong></span>
              </div>
              {oneLineResponse && (
                <div className="pt-2 text-xs text-slate-600 italic">
                  Student's reflection: "{oneLineResponse}"
                </div>
              )}
            </div>

            {/* Print & Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  sounds.playTap();
                  window.print();
                }}
                className="flex-1 min-h-[48px] py-2.5 px-4 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-story text-base font-bold shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save Certificate</span>
              </button>
              <button
                type="button"
                onClick={() => setShowCertificate(false)}
                className="min-h-[48px] py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-story text-sm font-bold transition-all"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
