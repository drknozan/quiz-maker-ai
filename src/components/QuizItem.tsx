'use client';

import React, { memo, useCallback, useState } from 'react';
import QuizOption from './QuizOption';
import {
  ChatBubbleBottomCenterTextIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';

interface QuizItemProps {
  question: string;
  options: string[];
  showResult: boolean;
  correctOption: string;
  explanation: string;
  onSelectOption: (question: string, option: string) => void;
}

const QuizItem = ({
  question,
  options,
  showResult,
  correctOption,
  explanation,
  onSelectOption,
}: QuizItemProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelectOption = useCallback(
    (option: string) => {
      setSelectedOption(option);
      onSelectOption(question, option);
    },
    [onSelectOption, question]
  );

  return (
    <div className="mx-4 flex flex-col gap-4 p-4 text-sm text-gray-300 md:w-[900px] md:gap-8 md:p-8">
      <div className="flex gap-2 text-base font-medium md:items-center">
        <CodeBracketIcon className=" h-6 w-6 flex-none md:block md:h-7 md:w-7" />{' '}
        Question: {question}
      </div>
      <div className="flex flex-col space-y-6">
        <QuizOption
          options={options}
          onSelectOption={handleSelectOption}
          showResult={showResult}
          correctOption={correctOption}
          selectedOption={selectedOption}
        />
      </div>
      {showResult && (
        <div className="flex gap-2 text-green-400">
          <ChatBubbleBottomCenterTextIcon className="h-6 w-6 flex-none md:h-7 md:w-7" />{' '}
          <p>Explanation: {explanation}</p>
        </div>
      )}
      <div className="h-[0.5px] bg-gray-800"></div>
    </div>
  );
};

export default memo(QuizItem);
