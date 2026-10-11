export interface VocabularyItem {
  id: string;
  word: string;
  phonetic: string;
  simpleMeaning: string;
  koreanMeaning: string;
  emoji: string;
  exampleSentence: string;
}

export interface Hotspot {
  id: string;
  title: string;
  xPercent: number; // 0 to 100
  yPercent: number; // 0 to 100
  description: string;
  vocabularyId?: string;
  icon?: string;
}

export interface QuestionChoice {
  id: string;
  text: string;
  emoji?: string;
  icon?: string;
}

export interface ComprehensionQuestion {
  id: string;
  question: string;
  choices: QuestionChoice[];
  correctChoiceId: string;
  hint: string;
  explanation: string;
}

export interface StoryPage {
  pageNumber: number;
  title: string;
  text: string;
  sightWords: string[]; // key target sight words
  image: string;
  imageAlt: string;
  fallbackGradient: string;
  hotspots: Hotspot[];
  vocabulary: Record<string, VocabularyItem>;
  question: ComprehensionQuestion;
}

export interface Story {
  id: string;
  title: string;
  subtitle: string;
  authorNote: string;
  targetGrade: string;
  targetLevel: string;
  totalPages: number;
  coverImage: string;
  coverSummary: string;
  pages: StoryPage[];
}

export type ScreenType = 'cover' | 'story' | 'question' | 'result';
