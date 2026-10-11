/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenType, VocabularyItem } from './types/story';
import { ENORMOUS_CROCODILE_STORY } from './data/storyData';
import { TopBar } from './components/TopBar';
import { CoverScreen } from './components/CoverScreen';
import { StoryScreen } from './components/StoryScreen';
import { QuestionScreen } from './components/QuestionScreen';
import { ResultScreen } from './components/ResultScreen';
import { VocabularyHelpModal } from './components/VocabularyHelpModal';
import { StorySelectorModal } from './components/StorySelectorModal';
import { speechReader } from './utils/speechReader';
import { sounds } from './utils/soundEffects';

export default function App() {
  const [screen, setScreen] = useState<ScreenType>('cover');
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [activeVocabulary, setActiveVocabulary] = useState<VocabularyItem | null>(null);
  const [isLibraryOpen, setIsLibraryOpen] = useState<boolean>(false);

  const story = ENORMOUS_CROCODILE_STORY;
  const currentPage = story.pages[currentPageIndex];
  const totalPages = story.totalPages;

  const handleStartStory = () => {
    speechReader.stop();
    setCurrentPageIndex(0);
    setScore(0);
    setScreen('story');
  };

  const handleGoToQuestion = () => {
    speechReader.stop();
    setScreen('question');
  };

  const handleAnswerCorrect = () => {
    setScore((prev) => prev + 1);
  };

  const handleNextPage = () => {
    speechReader.stop();
    if (currentPageIndex < totalPages - 1) {
      setCurrentPageIndex((prev) => prev + 1);
      setScreen('story');
      sounds.playPageTurn();
    } else {
      setScreen('result');
    }
  };

  const handleBackToStory = () => {
    setScreen('story');
  };

  const handleReadAgain = () => {
    speechReader.stop();
    setCurrentPageIndex(0);
    setScore(0);
    setScreen('story');
  };

  const handleGoHome = () => {
    speechReader.stop();
    setScreen('cover');
  };

  const handleSelectStory = (storyId: string) => {
    if (storyId === 'enormous-crocodile') {
      setCurrentPageIndex(0);
      setScore(0);
      setScreen('story');
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-slate-900 flex flex-col font-sans selection:bg-pink-200">
      {/* Top Bar with Top Bar Contract */}
      <TopBar
        currentPage={currentPageIndex + 1}
        totalPages={totalPages}
        onGoHome={handleGoHome}
        showProgress={screen === 'story' || screen === 'question'}
      />

      {/* Main Screen Stage */}
      <main className="flex-1 flex flex-col items-center justify-center p-2 sm:p-4 md:p-6">
        {screen === 'cover' && (
          <CoverScreen
            story={story}
            onStartStory={handleStartStory}
            onOpenLibrary={() => setIsLibraryOpen(true)}
          />
        )}

        {screen === 'story' && currentPage && (
          <StoryScreen
            page={currentPage}
            totalPages={totalPages}
            onOpenVocabulary={(vocab) => setActiveVocabulary(vocab)}
            onGoToQuestion={handleGoToQuestion}
          />
        )}

        {screen === 'question' && currentPage && (
          <QuestionScreen
            question={currentPage.question}
            pageNumber={currentPage.pageNumber}
            totalPages={totalPages}
            onAnswerCorrect={handleAnswerCorrect}
            onNextPage={handleNextPage}
            onBackToStory={handleBackToStory}
          />
        )}

        {screen === 'result' && (
          <ResultScreen
            score={score}
            totalPages={totalPages}
            onReadAgain={handleReadAgain}
            onChooseAnotherStory={() => setIsLibraryOpen(true)}
          />
        )}
      </main>

      {/* Tap-for-help Vocabulary Modal */}
      <VocabularyHelpModal
        item={activeVocabulary}
        onClose={() => setActiveVocabulary(null)}
      />

      {/* Library Selector Modal */}
      <StorySelectorModal
        isOpen={isLibraryOpen}
        onClose={() => setIsLibraryOpen(false)}
        onSelectStory={handleSelectStory}
        currentStoryId={story.id}
      />
    </div>
  );
}
