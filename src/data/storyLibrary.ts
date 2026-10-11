import { Story } from '../types/story';
import { ENORMOUS_CROCODILE_STORY } from './storyData';
import coconutImg from '../assets/images/fluentia_coconut_tree_1791704287254.jpg';
import trunkyImg from '../assets/images/fluentia_trunky_elephant_1791704256170.jpg';

export interface StoryOverview {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  grade: string;
  cefr: string;
  readTime: string;
  pageCount: number;
  tags: string[];
  isAvailable: boolean;
  storyData?: Story;
}

export const STORY_CATALOG: StoryOverview[] = [
  {
    id: 'enormous-crocodile',
    title: 'The Enormous Crocodile',
    subtitle: 'A thrilling jungle story with clever disguises and animal friends',
    coverImage: ENORMOUS_CROCODILE_STORY.coverImage,
    grade: 'Grade 3-4',
    cefr: 'Pre-A1 to A1',
    readTime: '10-15 min',
    pageCount: 10,
    tags: ['Animals', 'Adventure', 'Humor'],
    isAvailable: true,
    storyData: ENORMOUS_CROCODILE_STORY
  },
  {
    id: 'clever-monkey',
    title: 'The Clever Monkey & The River',
    subtitle: 'How a quick-thinking monkey outsmarts a hungry river beast',
    coverImage: coconutImg,
    grade: 'Grade 3-4',
    cefr: 'A1',
    readTime: '12 min',
    pageCount: 8,
    tags: ['Cleverness', 'Fable', 'Friendship'],
    isAvailable: false
  },
  {
    id: 'elephant-secret',
    title: 'Trunky’s Big Jungle March',
    subtitle: 'The great elephant helps everyone find water in the dry season',
    coverImage: trunkyImg,
    grade: 'Grade 3-4',
    cefr: 'A1',
    readTime: '10 min',
    pageCount: 8,
    tags: ['Kindness', 'Helping Others'],
    isAvailable: false
  }
];
