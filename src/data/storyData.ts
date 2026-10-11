import { Story } from '../types/story';

import coverImg from '../assets/images/fluentia_cover_crocodile_1791704235868.jpg';
import trunkyImg from '../assets/images/fluentia_trunky_elephant_1791704256170.jpg';
import seesawImg from '../assets/images/fluentia_seesaw_playground_1791704265016.jpg';
import coconutImg from '../assets/images/fluentia_coconut_tree_1791704287254.jpg';
import celebrationImg from '../assets/images/fluentia_celebration_1791704298020.jpg';

export const ENORMOUS_CROCODILE_STORY: Story = {
  id: 'enormous-crocodile',
  title: 'The Enormous Crocodile',
  subtitle: 'An Exciting Jungle Adventure for Grade 3-4',
  authorNote: 'Adapted for Elementary Grade 3-4 (CEFR Pre-A1 to A1)',
  targetGrade: 'Grade 3-4 (Ages 9-10)',
  targetLevel: 'CEFR Pre-A1 / A1 (300 sight words)',
  totalPages: 10,
  coverImage: coverImg,
  coverSummary: 'In the deep, muddy river, a huge green crocodile has a secret plan. Will the clever jungle animals stop him?',
  pages: [
    {
      pageNumber: 1,
      title: 'In the Muddy River',
      text: 'In the biggest, brownest mud river in Africa, an enormous crocodile rests in the warm water. He is very hungry.',
      sightWords: ['in', 'the', 'is', 'very', 'water'],
      image: coverImg,
      imageAlt: 'The enormous crocodile floating in the muddy river with water lilies and jungle trees',
      fallbackGradient: 'from-emerald-700 via-teal-800 to-amber-900',
      hotspots: [
        { id: 'h1', title: 'Crocodile', xPercent: 52, yPercent: 62, description: 'A big green reptile with sharp teeth!', vocabularyId: 'crocodile', icon: '🐊' },
        { id: 'h2', title: 'River Water', xPercent: 35, yPercent: 78, description: 'Muddy brown river in Africa.', vocabularyId: 'river', icon: '🌊' },
        { id: 'h3', title: 'Warm Sun', xPercent: 64, yPercent: 12, description: 'Bright yellow sun shining in the sky.', vocabularyId: 'warm', icon: '☀️' },
        { id: 'h4', title: 'Little Birds', xPercent: 41, yPercent: 53, description: 'Birds resting safely on his back.', vocabularyId: 'birds', icon: '🐦' }
      ],
      vocabulary: {
        enormous: {
          id: 'enormous',
          word: 'enormous',
          phonetic: '/ɪˈnɔːrməs/',
          simpleMeaning: 'Extremely big, huge!',
          koreanMeaning: '거대한, 엄청나게 큰',
          emoji: '🐘',
          exampleSentence: 'The enormous crocodile is bigger than a boat!'
        },
        crocodile: {
          id: 'crocodile',
          word: 'crocodile',
          phonetic: '/ˈkrɑːkədaɪl/',
          simpleMeaning: 'A large green animal with scales and sharp teeth that lives in water.',
          koreanMeaning: '악어',
          emoji: '🐊',
          exampleSentence: 'The crocodile swims quietly in the river.'
        },
        muddy: {
          id: 'muddy',
          word: 'muddy',
          phonetic: '/ˈmʌdi/',
          simpleMeaning: 'Full of wet dirt and brown water.',
          koreanMeaning: '진흙투성이의, 탁한',
          emoji: '🟤',
          exampleSentence: 'His boots were muddy after playing outside.'
        },
        hungry: {
          id: 'hungry',
          word: 'hungry',
          phonetic: '/ˈhʌŋɡri/',
          simpleMeaning: 'Wanting to eat food right now.',
          koreanMeaning: '배고픈',
          emoji: '🍽️',
          exampleSentence: 'The hungry crocodile looks for lunch.'
        },
        africa: {
          id: 'africa',
          word: 'Africa',
          phonetic: '/ˈæfrɪkə/',
          simpleMeaning: 'A great continent with wild animals and warm sunshine.',
          koreanMeaning: '아프리카',
          emoji: '🌍',
          exampleSentence: 'Lions and crocodiles live in Africa.'
        }
      },
      question: {
        id: 'q1',
        question: 'Where does the enormous crocodile live?',
        choices: [
          { id: 'c1', text: 'In a muddy river', emoji: '🌊' },
          { id: 'c2', text: 'On a snowy mountain', emoji: '🏔️' },
          { id: 'c3', text: 'In a cozy house', emoji: '🏠' }
        ],
        correctChoiceId: 'c1',
        hint: 'Look at the brown water around the crocodile!',
        explanation: 'The story says he rests in the biggest mud river in Africa!'
      }
    },
    {
      pageNumber: 2,
      title: 'The Greedy Secret Plan',
      text: 'The crocodile smiles with his sharp white teeth. "Today, I will catch something sweet to eat!" he laughs.',
      sightWords: ['the', 'with', 'his', 'white', 'to', 'eat'],
      image: coverImg,
      imageAlt: 'The crocodile grinning with a big smile of sharp white teeth',
      fallbackGradient: 'from-teal-800 to-emerald-900',
      hotspots: [
        { id: 'h2-1', title: 'Sharp Teeth', xPercent: 68, yPercent: 64, description: 'Dozens of pointy white teeth!', vocabularyId: 'teeth', icon: '🦷' },
        { id: 'h2-2', title: 'Mischievous Smile', xPercent: 60, yPercent: 58, description: 'He thinks he has a clever trick.', vocabularyId: 'smile', icon: '😏' }
      ],
      vocabulary: {
        teeth: {
          id: 'teeth',
          word: 'teeth',
          phonetic: '/tiːθ/',
          simpleMeaning: 'Hard white parts in your mouth used to bite food.',
          koreanMeaning: '이빨, 치아',
          emoji: '🦷',
          exampleSentence: 'The crocodile has very sharp white teeth.'
        },
        sharp: {
          id: 'sharp',
          word: 'sharp',
          phonetic: '/ʃɑːrp/',
          simpleMeaning: 'Pointy, can cut or bite easily.',
          koreanMeaning: '날카로운, 뾰족한',
          emoji: '🗡️',
          exampleSentence: 'Be careful! The pencil is sharp.'
        },
        sweet: {
          id: 'sweet',
          word: 'sweet',
          phonetic: '/swiːt/',
          simpleMeaning: 'Delicious taste like candy or sugar.',
          koreanMeaning: '달콤한, 맛있는',
          emoji: '🍬',
          exampleSentence: 'Strawberries taste sweet and juicy.'
        },
        secret: {
          id: 'secret',
          word: 'secret',
          phonetic: '/ˈsiːkrət/',
          simpleMeaning: 'Something you keep hidden from others.',
          koreanMeaning: '비밀의, 비밀',
          emoji: '🤫',
          exampleSentence: 'He whispered a secret into my ear.'
        }
      },
      question: {
        id: 'q2',
        question: 'What does the crocodile want to catch today?',
        choices: [
          { id: 'c1', text: 'Something sweet to eat', emoji: '🍬' },
          { id: 'c2', text: 'A wooden pencil', emoji: '✏️' },
          { id: 'c3', text: 'A cold ice cream', emoji: '🍦' }
        ],
        correctChoiceId: 'c1',
        hint: 'He is hungry and talks about eating!',
        explanation: 'He says: "Today, I will catch something sweet to eat!"'
      }
    },
    {
      pageNumber: 3,
      title: 'Meeting Humpy-Rumpy the Hippo',
      text: 'He meets Humpy-Rumpy the Hippopotamus. "You are nasty and greedy!" snorts the big hippo into the water.',
      sightWords: ['he', 'meets', 'you', 'are', 'and', 'into'],
      image: celebrationImg,
      imageAlt: 'The big hippo Humpy-Rumpy splashing in the jungle river',
      fallbackGradient: 'from-blue-700 via-indigo-800 to-slate-900',
      hotspots: [
        { id: 'h3-1', title: 'Humpy-Rumpy', xPercent: 70, yPercent: 55, description: 'The big blue hippopotamus.', vocabularyId: 'hippo', icon: '🦛' },
        { id: 'h3-2', title: 'Water Splash', xPercent: 60, yPercent: 65, description: 'Cool river splashes everywhere.', vocabularyId: 'snorts', icon: '💦' }
      ],
      vocabulary: {
        hippopotamus: {
          id: 'hippopotamus',
          word: 'hippopotamus',
          phonetic: '/ˌhɪpəˈpɑːtəməs/',
          simpleMeaning: 'A very heavy animal that loves to soak in rivers.',
          koreanMeaning: '하마',
          emoji: '🦛',
          exampleSentence: 'The hippopotamus has a round body and short legs.'
        },
        greedy: {
          id: 'greedy',
          word: 'greedy',
          phonetic: '/ˈɡriːdi/',
          simpleMeaning: 'Wanting too much food or things just for yourself.',
          koreanMeaning: '욕심 많은, 탐욕스러운',
          emoji: '🐷',
          exampleSentence: 'Do not be greedy, share your toys!'
        },
        nasty: {
          id: 'nasty',
          word: 'nasty',
          phonetic: '/ˈnæsti/',
          simpleMeaning: 'Mean, unkind, or unpleasant.',
          koreanMeaning: '못된, 심술궂은',
          emoji: '😠',
          exampleSentence: 'It is not nice to say nasty words.'
        },
        snorts: {
          id: 'snorts',
          word: 'snorts',
          phonetic: '/snɔːrts/',
          simpleMeaning: 'Blows air loudly out of the nose.',
          koreanMeaning: '콧김을 뿜다',
          emoji: '😤',
          exampleSentence: 'The angry bull snorts loudly.'
        }
      },
      question: {
        id: 'q3',
        question: 'What does the hippo say about the crocodile?',
        choices: [
          { id: 'c1', text: 'You are nasty and greedy!', emoji: '😠' },
          { id: 'c2', text: 'You are kind and cute!', emoji: '🥰' },
          { id: 'c3', text: 'You are very sleepy!', emoji: '😴' }
        ],
        correctChoiceId: 'c1',
        hint: 'The hippo is angry at the naughty crocodile.',
        explanation: 'Humpy-Rumpy the hippo shouts: "You are nasty and greedy!"'
      }
    },
    {
      pageNumber: 4,
      title: 'Meeting Trunky the Elephant',
      text: 'Next, he meets Trunky the Elephant. "Go away, wicked crocodile!" trumpets Trunky with his grand grey ears.',
      sightWords: ['next', 'go', 'away', 'with', 'his'],
      image: trunkyImg,
      imageAlt: 'Trunky the strong and friendly elephant with his long trunk in the jungle',
      fallbackGradient: 'from-slate-700 via-sky-800 to-emerald-800',
      hotspots: [
        { id: 'h4-1', title: 'Trunky Elephant', xPercent: 65, yPercent: 45, description: 'The giant, kind elephant.', vocabularyId: 'elephant', icon: '🐘' },
        { id: 'h4-2', title: 'Elephant Trunk', xPercent: 48, yPercent: 28, description: 'Strong flexible nose used to grab things.', vocabularyId: 'trunk', icon: '💪' },
        { id: 'h4-3', title: 'Big Ears', xPercent: 72, yPercent: 38, description: 'Grand grey ears waving in the breeze.', vocabularyId: 'ears', icon: '👂' }
      ],
      vocabulary: {
        elephant: {
          id: 'elephant',
          word: 'elephant',
          phonetic: '/ˈelɪfənt/',
          simpleMeaning: 'The largest land animal with big ears and a long trunk.',
          koreanMeaning: '코끼리',
          emoji: '🐘',
          exampleSentence: 'An elephant is strong and very smart.'
        },
        trunk: {
          id: 'trunk',
          word: 'trunk',
          phonetic: '/trʌŋk/',
          simpleMeaning: 'The long, strong nose of an elephant.',
          koreanMeaning: '코끼리의 코',
          emoji: '🐘',
          exampleSentence: 'The elephant sprays water with its trunk.'
        },
        wicked: {
          id: 'wicked',
          word: 'wicked',
          phonetic: '/ˈwɪkɪd/',
          simpleMeaning: 'Very bad, mischievous, or naughty.',
          koreanMeaning: '사악한, 못된',
          emoji: '😈',
          exampleSentence: 'The wicked wolf tricked Little Red Riding Hood.'
        },
        trumpets: {
          id: 'trumpets',
          word: 'trumpets',
          phonetic: '/ˈtrʌmpɪts/',
          simpleMeaning: 'Makes a loud, ringing elephant call.',
          koreanMeaning: '나팔 같은 소리를 내다 (코끼리 울음소리)',
          emoji: '🎺',
          exampleSentence: 'The mother elephant trumpets to her baby.'
        }
      },
      question: {
        id: 'q4',
        question: 'Who tells the crocodile to "Go away!"?',
        choices: [
          { id: 'c1', text: 'Trunky the Elephant', emoji: '🐘' },
          { id: 'c2', text: 'A little mouse', emoji: '🐭' },
          { id: 'c3', text: 'A quiet fish', emoji: '🐟' }
        ],
        correctChoiceId: 'c1',
        hint: 'Look at the big grey animal with a long trunk!',
        explanation: 'Trunky the Elephant trumpets: "Go away, wicked crocodile!"'
      }
    },
    {
      pageNumber: 5,
      title: 'Disguise One: The Coconut Tree',
      text: 'The crocodile grabs coconuts and palm branches. He stands tall like a tree to fool everyone!',
      sightWords: ['and', 'he', 'stands', 'like', 'a', 'to'],
      image: coconutImg,
      imageAlt: 'The crocodile standing upright holding palm leaves and coconuts pretending to be a tree',
      fallbackGradient: 'from-amber-700 via-emerald-800 to-green-900',
      hotspots: [
        { id: 'h5-1', title: 'Round Coconuts', xPercent: 62, yPercent: 40, description: 'Brown round fruit on palm trees.', vocabularyId: 'coconuts', icon: '🥥' },
        { id: 'h5-2', title: 'Green Leaves', xPercent: 55, yPercent: 32, description: 'Palm leaves used as a hat disguise.', vocabularyId: 'branches', icon: '🌴' },
        { id: 'h5-3', title: 'Laughing Monkeys', xPercent: 22, yPercent: 26, description: 'The monkeys see through his funny trick!', vocabularyId: 'monkeys', icon: '🐒' }
      ],
      vocabulary: {
        disguise: {
          id: 'disguise',
          word: 'disguise',
          phonetic: '/dɪsˈɡaɪz/',
          simpleMeaning: 'Clothes or things worn to hide who you really are.',
          koreanMeaning: '변장, 변장하다',
          emoji: '🥸',
          exampleSentence: 'He wore a funny hat as a disguise.'
        },
        coconuts: {
          id: 'coconuts',
          word: 'coconuts',
          phonetic: '/ˈkoʊkənʌts/',
          simpleMeaning: 'Large brown round fruits that grow on palm trees.',
          koreanMeaning: '코코넛',
          emoji: '🥥',
          exampleSentence: 'Coconuts fall from tall palm trees.'
        },
        branches: {
          id: 'branches',
          word: 'branches',
          phonetic: '/ˈbræntʃɪz/',
          simpleMeaning: 'Parts of a tree that grow out from the trunk.',
          koreanMeaning: '나뭇가지들',
          emoji: '🌿',
          exampleSentence: 'Birds build nests high in tree branches.'
        },
        fool: {
          id: 'fool',
          word: 'fool',
          phonetic: '/fuːl/',
          simpleMeaning: 'To trick or make someone believe something false.',
          koreanMeaning: '속이다, 바보로 만들다',
          emoji: '🃏',
          exampleSentence: 'You cannot fool me with that silly trick!'
        }
      },
      question: {
        id: 'q5',
        question: 'What does the crocodile pretend to be first?',
        choices: [
          { id: 'c1', text: 'A tall coconut tree', emoji: '🌴' },
          { id: 'c2', text: 'A speedy airplane', emoji: '✈️' },
          { id: 'c3', text: 'A sweet chocolate cake', emoji: '🎂' }
        ],
        correctChoiceId: 'c1',
        hint: 'He holds coconuts and green palm leaves!',
        explanation: 'He stands tall holding coconuts to look like a coconut tree!'
      }
    },
    {
      pageNumber: 6,
      title: 'Disguise Two: The Wooden Bench',
      text: 'Next, he sneaks into the sunny park. He lies stiff and still like a long wooden bench.',
      sightWords: ['next', 'into', 'and', 'still', 'like', 'a'],
      image: seesawImg,
      imageAlt: 'The crocodile hiding in the sunny playground',
      fallbackGradient: 'from-amber-600 via-emerald-700 to-lime-800',
      hotspots: [
        { id: 'h6-1', title: 'Park Playground', xPercent: 30, yPercent: 42, description: 'Sunny grass with swings and slides.', vocabularyId: 'park', icon: '🛝' },
        { id: 'h6-2', title: 'Hiding Bench', xPercent: 55, yPercent: 70, description: 'He lies flat so nobody notices his claws.', vocabularyId: 'bench', icon: '🪑' }
      ],
      vocabulary: {
        sneaks: {
          id: 'sneaks',
          word: 'sneaks',
          phonetic: '/sniːks/',
          simpleMeaning: 'Moves quietly so nobody can see or hear you.',
          koreanMeaning: '몰래 살금살금 가다',
          emoji: '🤫',
          exampleSentence: 'The cat sneaks softly towards the yarn.'
        },
        bench: {
          id: 'bench',
          word: 'bench',
          phonetic: '/bentʃ/',
          simpleMeaning: 'A long seat made of wood or stone for two or more people.',
          koreanMeaning: '벤치, 긴 의자',
          emoji: '🪑',
          exampleSentence: 'Grandpa sat on the wooden bench to rest.'
        },
        stiff: {
          id: 'stiff',
          word: 'stiff',
          phonetic: '/stɪf/',
          simpleMeaning: 'Firm, straight, not bending easily.',
          koreanMeaning: '뻣뻣한, 굳은',
          emoji: '🪵',
          exampleSentence: 'He stood as stiff as a soldier.'
        },
        park: {
          id: 'park',
          word: 'park',
          phonetic: '/pɑːrk/',
          simpleMeaning: 'A public green place with grass and trees to play.',
          koreanMeaning: '공원',
          emoji: '🌳',
          exampleSentence: 'We ride our bikes in the park on Saturday.'
        }
      },
      question: {
        id: 'q6',
        question: 'How does the crocodile lie in the park?',
        choices: [
          { id: 'c1', text: 'Stiff and still like a bench', emoji: '🪑' },
          { id: 'c2', text: 'Dancing happily to music', emoji: '💃' },
          { id: 'c3', text: 'Swimming fast in a pool', emoji: '🏊' }
        ],
        correctChoiceId: 'c1',
        hint: 'He does not move at all, pretending to be furniture!',
        explanation: 'He lies stiff and still like a long wooden bench.'
      }
    },
    {
      pageNumber: 7,
      title: 'Disguise Three: A Fun Seesaw',
      text: 'In the school yard, he puts a wooden log under his belly. "Look, I am a wonderful seesaw!" he thinks.',
      sightWords: ['in', 'the', 'he', 'under', 'his', 'look', 'I', 'am'],
      image: seesawImg,
      imageAlt: 'The crocodile with a wooden board on his back acting like a playground seesaw',
      fallbackGradient: 'from-lime-600 via-amber-700 to-sky-700',
      hotspots: [
        { id: 'h7-1', title: 'Wooden Plank', xPercent: 50, yPercent: 48, description: 'A long board balanced on his back.', vocabularyId: 'plank', icon: '🪵' },
        { id: 'h7-2', title: 'Happy Children', xPercent: 36, yPercent: 34, description: 'Children playing on the swings nearby.', vocabularyId: 'children', icon: '👧' },
        { id: 'h7-3', title: 'Crocodile Back', xPercent: 44, yPercent: 68, description: 'His scaly green back holding the seesaw.', vocabularyId: 'seesaw', icon: '🐊' }
      ],
      vocabulary: {
        seesaw: {
          id: 'seesaw',
          word: 'seesaw',
          phonetic: '/ˈsiːsɔː/',
          simpleMeaning: 'A playground toy: a long board that goes up and down.',
          koreanMeaning: '시소',
          emoji: '⚖️',
          exampleSentence: 'Up and down we go on the playground seesaw!'
        },
        wooden: {
          id: 'wooden',
          word: 'wooden',
          phonetic: '/ˈwʊdn/',
          simpleMeaning: 'Made of wood from trees.',
          koreanMeaning: '나무로 된, 목제의',
          emoji: '🪵',
          exampleSentence: 'This toy boat is made of wooden blocks.'
        },
        belly: {
          id: 'belly',
          word: 'belly',
          phonetic: '/ˈbɛli/',
          simpleMeaning: 'The front or bottom stomach part of the body.',
          koreanMeaning: '배, 복부',
          emoji: '🤰',
          exampleSentence: 'Rub the puppy on its soft belly.'
        },
        wonderful: {
          id: 'wonderful',
          word: 'wonderful',
          phonetic: '/ˈwʌndərfəl/',
          simpleMeaning: 'Extremely good, marvelous, fantastic.',
          koreanMeaning: '아주 멋진, 훌륭한',
          emoji: '✨',
          exampleSentence: 'We had a wonderful sunny day at the zoo.'
        }
      },
      question: {
        id: 'q7',
        question: 'What playground toy does the crocodile pretend to be?',
        choices: [
          { id: 'c1', text: 'A seesaw', emoji: '⚖️' },
          { id: 'c2', text: 'A swing', emoji: '🪢' },
          { id: 'c3', text: 'A merry-go-round', emoji: '🎠' }
        ],
        correctChoiceId: 'c1',
        hint: 'A board that moves up and down!',
        explanation: 'He puts a log under his belly to look like a fun seesaw!'
      }
    },
    {
      pageNumber: 8,
      title: 'The Children Come to Play',
      text: 'Two children run out to play. "Look at that lovely new seesaw!" shouts the boy happily.',
      sightWords: ['two', 'run', 'out', 'to', 'play', 'that', 'new'],
      image: seesawImg,
      imageAlt: 'Two smiling elementary school children running to the playground',
      fallbackGradient: 'from-amber-500 via-sky-600 to-emerald-700',
      hotspots: [
        { id: 'h8-1', title: 'Boy Running', xPercent: 78, yPercent: 62, description: 'A cheerful boy excited to play.', vocabularyId: 'children', icon: '👦' },
        { id: 'h8-2', title: 'Girl Smiling', xPercent: 36, yPercent: 34, description: 'A happy girl ready to hop on the seesaw.', vocabularyId: 'play', icon: '👧' }
      ],
      vocabulary: {
        children: {
          id: 'children',
          word: 'children',
          phonetic: '/ˈtʃɪldrən/',
          simpleMeaning: 'Young boys and girls.',
          koreanMeaning: '아이들, 어린이들',
          emoji: '👧👦',
          exampleSentence: 'The children play games during recess.'
        },
        lovely: {
          id: 'lovely',
          word: 'lovely',
          phonetic: '/ˈlʌvli/',
          simpleMeaning: 'Very pretty, attractive, or pleasant.',
          koreanMeaning: '사랑스러운, 멋진',
          emoji: '🌸',
          exampleSentence: 'She wears a lovely yellow dress.'
        },
        shouts: {
          id: 'shouts',
          word: 'shouts',
          phonetic: '/ʃaʊts/',
          simpleMeaning: 'Says something with a very loud voice.',
          koreanMeaning: '외치다, 소리치다',
          emoji: '🗣️',
          exampleSentence: 'The crowd shouts when their team scores a goal.'
        },
        happily: {
          id: 'happily',
          word: 'happily',
          phonetic: '/ˈhæpɪli/',
          simpleMeaning: 'In a cheerful, smiling, joyful way.',
          koreanMeaning: '행복하게, 즐겁게',
          emoji: '😄',
          exampleSentence: 'They sang happily together on the bus.'
        }
      },
      question: {
        id: 'q8',
        question: 'Who comes out into the playground?',
        choices: [
          { id: 'c1', text: 'Two children to play', emoji: '👧👦' },
          { id: 'c2', text: 'Three little kittens', emoji: '🐱' },
          { id: 'c3', text: 'An angry giant', emoji: '👹' }
        ],
        correctChoiceId: 'c1',
        hint: 'The boys and girls at school!',
        explanation: 'Two children run out to play and see the seesaw!'
      }
    },
    {
      pageNumber: 9,
      title: 'Trunky Saves the Day!',
      text: 'Suddenly, Trunky the Elephant rushes in! "Stop! That is the wicked crocodile!" Trunky wraps his trunk around his tail.',
      sightWords: ['the', 'in', 'stop', 'that', 'is', 'his', 'around'],
      image: trunkyImg,
      imageAlt: 'Trunky the Elephant grabbing the crocodile by the tail with his strong trunk',
      fallbackGradient: 'from-sky-700 via-indigo-800 to-emerald-800',
      hotspots: [
        { id: 'h9-1', title: 'Strong Trunk', xPercent: 42, yPercent: 20, description: 'Trunky firmly wraps his trunk around the tail.', vocabularyId: 'wraps', icon: '🐘' },
        { id: 'h9-2', title: 'Surprised Crocodile', xPercent: 32, yPercent: 48, description: 'The crocodile is caught in mid-air!', vocabularyId: 'tail', icon: '🐊' }
      ],
      vocabulary: {
        suddenly: {
          id: 'suddenly',
          word: 'suddenly',
          phonetic: '/ˈsʌdənli/',
          simpleMeaning: 'Quickly, without any warning.',
          koreanMeaning: '갑자기, 불현듯',
          emoji: '⚡',
          exampleSentence: 'Suddenly, it started to rain heavily.'
        },
        rushes: {
          id: 'rushes',
          word: 'rushes',
          phonetic: '/ˈrʌʃɪz/',
          simpleMeaning: 'Runs or moves very fast with urgency.',
          koreanMeaning: '돌진하다, 급히 달려오다',
          emoji: '🏃‍♂️',
          exampleSentence: 'The fire truck rushes to the building.'
        },
        wraps: {
          id: 'wraps',
          word: 'wraps',
          phonetic: '/ræps/',
          simpleMeaning: 'Curls or winds around tightly.',
          koreanMeaning: '감싸다, 휘감다',
          emoji: '🧣',
          exampleSentence: 'She wraps a warm scarf around her neck.'
        },
        tail: {
          id: 'tail',
          word: 'tail',
          phonetic: '/teɪl/',
          simpleMeaning: 'The back end part of an animal body.',
          koreanMeaning: '꼬리',
          emoji: '🐕',
          exampleSentence: 'The happy dog wags its tail.'
        }
      },
      question: {
        id: 'q9',
        question: 'How does Trunky catch the crocodile?',
        choices: [
          { id: 'c1', text: 'With his strong trunk', emoji: '🐘' },
          { id: 'c2', text: 'With a butterfly net', emoji: '🦋' },
          { id: 'c3', text: 'With a fishing rod', emoji: '🎣' }
        ],
        correctChoiceId: 'c1',
        hint: 'Elephants have a famous long nose!',
        explanation: 'Trunky wraps his long trunk around the crocodile’s tail!'
      }
    },
    {
      pageNumber: 10,
      title: 'Whirling into the Sky!',
      text: 'Trunky whirls the crocodile round and round—WHOOSH! The crocodile flies high into the sky, and all the children cheer!',
      sightWords: ['the', 'round', 'and', 'into', 'all', 'cheer'],
      image: celebrationImg,
      imageAlt: 'The children, Trunky the Elephant, and the hippo cheering under the golden sun',
      fallbackGradient: 'from-amber-400 via-yellow-500 to-rose-600',
      hotspots: [
        { id: 'h10-1', title: 'Golden Sun', xPercent: 50, yPercent: 18, description: 'Smiling warm sun in the bright blue sky.', vocabularyId: 'sky', icon: '☀️' },
        { id: 'h10-2', title: 'Cheering Children', xPercent: 55, yPercent: 66, description: 'Safe and happy children jumping for joy!', vocabularyId: 'cheer', icon: '🎉' },
        { id: 'h10-3', title: 'Trunky & Hippo', xPercent: 35, yPercent: 50, description: 'The jungle heroes who protected the children.', vocabularyId: 'whirls', icon: '🐘' }
      ],
      vocabulary: {
        whirls: {
          id: 'whirls',
          word: 'whirls',
          phonetic: '/wɜːrlz/',
          simpleMeaning: 'Spins around and around in circles very fast.',
          koreanMeaning: '빙빙 돌리다, 회전시키다',
          emoji: '🌀',
          exampleSentence: 'The dancer whirls across the shiny stage.'
        },
        sky: {
          id: 'sky',
          word: 'sky',
          phonetic: '/skaɪ/',
          simpleMeaning: 'The big open air above the earth where clouds float.',
          koreanMeaning: '하늘',
          emoji: '☁️',
          exampleSentence: 'Kites fly high in the blue sky.'
        },
        cheer: {
          id: 'cheer',
          word: 'cheer',
          phonetic: '/tʃɪr/',
          simpleMeaning: 'To shout loudly with joy, excitement, and praise.',
          koreanMeaning: '환호하다, 응원하다',
          emoji: '🥳',
          exampleSentence: 'We cheer loudly when our friends cross the finish line!'
        },
        whoosh: {
          id: 'whoosh',
          word: 'whoosh',
          phonetic: '/wʊʃ/',
          simpleMeaning: 'A swift rushing sound of something flying fast.',
          koreanMeaning: '쉭! (빠르게 날아가는 소리)',
          emoji: '💨',
          exampleSentence: 'Whoosh! The paper airplane zoomed past.'
        }
      },
      question: {
        id: 'q10',
        question: 'What do all the children do at the end?',
        choices: [
          { id: 'c1', text: 'They cheer happily!', emoji: '🎉' },
          { id: 'c2', text: 'They start to cry', emoji: '😢' },
          { id: 'c3', text: 'They fall fast asleep', emoji: '😴' }
        ],
        correctChoiceId: 'c1',
        hint: 'They are safe and overjoyed!',
        explanation: 'All the children cheer because Trunky saved them!'
      }
    }
  ]
};
