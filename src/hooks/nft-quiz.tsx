import { useEffect, useState } from 'react';

import { shuffle } from '../utils/helpers';

type IQuizProps = {
  question: string;
  answers: string[];
  status: 'complete' | 'current' | 'upcoming';
};

const quiz: IQuizProps[] = [
  {
    question: 'How many validators will the ZERO network have?',
    answers: ['256', '123', '567', '987'],
    status: 'upcoming',
  },
  {
    question: 'The ZERO Network is what type of Blockchain Network:',
    answers: ['L0', 'L1', 'L2', 'L3'],
    status: 'upcoming',
  },
  {
    question:
      'What type of signatures does the ZERO Network produce to verify transactions?',
    answers: ['Schnorr', 'DSA', 'RSA', 'ECDSA'],
    status: 'upcoming',
  },
  {
    question: 'What does a signer do within the network?',
    answers: ['Signs legal documents', 'Signs arbitrary messages'],
    status: 'upcoming',
  },
  {
    question: 'What does a validator do within the network?',
    answers: [
      'Produces blocks in the network',
      'Verifies when someone sends bitcoin',
    ],
    status: 'upcoming',
  },
  {
    question: 'What does FROST stand for?',
    answers: [
      'Flexible Round-Optimized Schnorr Threshold',
      'Fair Rotating Oriented Signature Threshold',
      'Fault Regulated Optimized Signing Threshold',
      'Fun Running Over Scary Tigers',
    ],
    status: 'upcoming',
  },
  {
    question: 'What do you receive when staking ZERO?',
    answers: ['sZERO', 'aZERO', 'stZERO', 'An NFT'],
    status: 'upcoming',
  },
  {
    question: 'How can you participate in governance?',
    answers: [
      'Staking ZERO',
      'Staking a ZERO HERO',
      "DM'ing the ZERO Devs",
      'Sending 1 ETH to the ZERO Treasury',
    ],
    status: 'upcoming',
  },
  {
    question: 'How will wrapped assets be denoted?',
    answers: ['Assets that start with a 0', 'Assets that start with a Z'],
    status: 'upcoming',
  },
  {
    question: 'Is it good to hold and sit on ZERO wrapped assets?',
    answers: ['Yes', 'No'],
    status: 'upcoming',
  },
  {
    question: 'Do you want to be ZERO’s hero?',
    answers: ['Yes', 'No'],
    status: 'upcoming',
  },
  {
    question: 'What is 2 + 2?',
    answers: ['21', '5', '4', '22'],
    status: 'upcoming',
  },
  {
    question: 'Do you want to be ZERO’s hero?',
    answers: ['Yes', 'No'],
    status: 'upcoming',
  },
  {
    question: 'The lead dev of the ZERO team is a:',
    answers: ['Giga brain', 'Megamind', 'Thug', 'Chad'],
    status: 'upcoming',
  },
];

export const useNftQuiz = (dep: boolean) => {
  const [current, setCurrent] = useState(quiz[0]);
  const [shuffledQuiz, setShuffledQuiz] = useState<IQuizProps[]>([]);

  const getCurrentIndex = () =>
    shuffledQuiz.findIndex((el) => el.status === 'current');

  const next = () => {
    const currentIndex = getCurrentIndex();
    const updated: IQuizProps[] = shuffledQuiz.map((el, i) => {
      if (el.status === 'current') return { ...el, status: 'complete' };
      if (i === currentIndex + 1) return { ...el, status: 'current' };
      return el;
    });
    setShuffledQuiz(updated);
  };

  useEffect(() => {
    if (dep) {
      const shuffled: IQuizProps[] = shuffle(quiz);
      setCurrent(shuffled[0]);
      setShuffledQuiz(
        shuffled.map((el, i) => {
          if (i === 0) {
            return { ...el, status: 'current' };
          }
          return el;
        })
      );
    }
  }, [dep]);

  return {
    quiz: shuffledQuiz,
    current,
    setCurrent,
    next,
    getCurrentIndex,
  };
};
