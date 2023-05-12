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
    question:
      'How much wood would a wood chuck chuck if a wood chuck could chuck wood?',
    answers: ['111', '222', '333', '444'],
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
