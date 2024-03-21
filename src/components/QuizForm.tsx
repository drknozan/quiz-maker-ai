'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import QuizItem from './QuizItem';
import { useFetch } from '../hooks/useFetch';
import { useSearchParams } from 'next/navigation';
import Loading from './Loading';
import { useTimer } from '../hooks/useTimer';
import ErrorCard from './ErrorCard';
import { ClockIcon, BoltIcon, NewspaperIcon } from '@heroicons/react/24/solid';
import {
  PaperAirplaneIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { calculateScore } from '../utils/calculateScore';
import { shuffleOptions } from '../utils/shuffleOptions';
import Link from 'next/link';

export interface Question {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface Answer {
  question: string;
  answer: string;
}

const Quiz = () => {
  const params = useSearchParams();
  const language = params.get('language') || '';
  const difficulty = params.get('difficulty') || '';
  const [selectedOptions, setSelectedOptions] = useState<Answer[]>([]);
  const [startTimer, setStartTimer] = useState(false);
  const { timeLeft, finished, setFinished } = useTimer(300, startTimer);

  const payload = useMemo(
    () => ({
      language,
      difficulty,
    }),
    [language, difficulty]
  );

  const {
    data: questions,
    loading,
    error,
  } = useFetch<Question[]>('/quiz/api', payload);

  const shuffledQuestions = useMemo(
    () =>
      questions?.map((q) => ({
        ...q,
        options: shuffleOptions(q.options),
      })),
    [questions]
  );

  const handleSelectOption = useCallback((question: string, option: string) => {
    setSelectedOptions((prevSelectedOptions) => {
      const existingItemIndex = prevSelectedOptions.findIndex(
        (i) => i.question === question
      );

      if (existingItemIndex !== -1) {
        const updatedAnswer = [...prevSelectedOptions];
        updatedAnswer[existingItemIndex] = { question, answer: option };

        return updatedAnswer;
      } else {
        return [...prevSelectedOptions, { question, answer: option }];
      }
    });
  }, []);

  useEffect(() => {
    if (questions && !loading) {
      setStartTimer(true);
    }
  }, [questions, loading]);

  useEffect(() => {
    if (finished) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [finished]);

  return (
    <>
      {loading && <Loading />}
      {error && <ErrorCard error={error} />}
      {shuffledQuestions && (
        <div className="flex flex-col items-center gap-4 p-6 md:gap-8">
          {finished ? (
            <div className="mx-4 flex max-w-lg flex-col gap-4 rounded-md bg-black bg-opacity-80 p-6 text-gray-300 md:gap-8">
              <div className="flex justify-center gap-2">
                <BoltIcon className="h-6 w-6" />
                <h1 className="text-center text-xl">Congratulations!</h1>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="inline border border-gray-300 p-2 text-center text-xl tracking-widest"
              >
                {calculateScore(shuffledQuestions, selectedOptions)} POINTS
              </motion.div>
              <p className="text-sm">
                You finished the quiz with
                {calculateScore(shuffledQuestions, selectedOptions)}
                points. You can check your answers and review the explanations
                of the questions. To create a different quiz, please click the
                button below!
              </p>
              <Link
                className="mx-auto flex items-center gap-1 rounded-md bg-white px-8 py-3 text-xs font-medium text-black transition-all active:scale-95"
                href={'/settings'}
              >
                <NewspaperIcon className="h-5 w-5" />
                New quiz!
              </Link>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="mx-4 flex max-w-lg flex-col gap-4 rounded-md bg-black bg-opacity-80 p-6 text-gray-300 md:gap-8 "
            >
              <div className="flex justify-center gap-2">
                <RocketLaunchIcon className="h-6 w-6" />
                <h1 className="text-center text-xl">Quiz has started!</h1>
              </div>
              <div className="h-px bg-gray-800"></div>
              <p className="text-sm">
                Choose the correct answers. You can track your remaining time on
                the counter. When you finish the quiz you can press the finish
                button. On the next page you will be able to view the correct
                answers with their explanations.
              </p>
              {/* Timer - Mobile */}
              <motion.div
                className="block flex items-center justify-center gap-2 rounded-lg bg-white py-3 text-sm font-medium text-black md:hidden"
                initial={{ opacity: 0, scale: 1.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <ClockIcon className="h-6 w-6 md:h-8 md:w-8" />
                {Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}
              </motion.div>
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
            className="flex flex-col rounded-md bg-black bg-opacity-90"
          >
            {shuffledQuestions.map((q) => (
              <QuizItem
                key={q.question}
                question={q.question}
                options={q.options}
                onSelectOption={handleSelectOption}
                explanation={q.explanation}
                correctOption={q.answer}
                showResult={finished}
              />
            ))}
            <button
              className="mx-auto my-8 flex items-center gap-1 rounded-md bg-white px-8 py-3 text-xs font-medium text-black transition-all active:scale-95"
              onClick={() => setFinished(true)}
            >
              <PaperAirplaneIcon className="h-5 w-5" />
              Finish quiz!
            </button>

            {/* Timer */}
            <motion.div
              className="absolute right-6 top-6 flex hidden flex-col items-center justify-center rounded-lg bg-black bg-opacity-80 px-8 py-4 font-medium text-white md:block"
              initial={{ opacity: 0, scale: 2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.2 }}
            >
              <ClockIcon className="h-6 w-6 md:h-8 md:w-8" />
              {Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}
            </motion.div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Quiz;
