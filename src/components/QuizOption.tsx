'use client';

import { memo } from 'react';

interface QuizOptionProps {
  options: string[];
  onSelectOption: (option: string) => void;
  correctOption?: string;
  showResult: boolean;
  selectedOption: string | null;
}

const QuizOption = ({
  options,
  onSelectOption,
  correctOption,
  showResult,
  selectedOption,
}: QuizOptionProps) => {
  const handleOptionSelect = (option: string) => {
    onSelectOption(option);
  };

  return (
    <>
      {options.map((option) => (
        <div
          key={option}
          onClick={() => {
            !showResult && handleOptionSelect(option);
          }}
          className={`rounded-md ${
            showResult ? 'cursor-default' : 'cursor-pointer'
          } border border-gray-800 p-4 ${
            !showResult && 'hover:border-green-400'
          } md:p-6 ${selectedOption === option && 'border-green-400'} ${
            showResult &&
            correctOption !== option &&
            selectedOption === option &&
            'border-red-400'
          } ${showResult && correctOption === option && 'border-green-400'}`}
        >
          <p>{option}</p>
        </div>
      ))}
    </>
  );
};

export default memo(QuizOption);
