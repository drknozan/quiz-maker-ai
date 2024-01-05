'use client';

import Link from 'next/link';
import React, { useState } from 'react';

interface FormData {
  difficulty: 'easy' | 'medium' | 'hard';
  language: 'python' | 'java' | 'javascript' | 'c' | 'php' | 'swift' | 'ruby';
}

const SettingsForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    difficulty: 'easy',
    language: 'java',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="mx-3 flex max-w-lg flex-col space-y-16 rounded-lg bg-black bg-opacity-90 p-14 md:mx-auto">
      <div className="text-lg text-gray-200 md:text-xl">
        Let the artificial intelligence create a quiz according to your choices.
      </div>
      <div className="space-y-12">
        <div>
          <label
            htmlFor="difficulty"
            className="mb-4 block text-xs text-gray-300"
          >
            Difficulty
          </label>
          <select
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className="w-full cursor-pointer border-b border-t border-b-gray-800 border-t-gray-800 bg-transparent px-1.5 py-4 text-xs text-gray-300 outline-none transition-all hover:border-b-gray-500 hover:border-t-gray-500"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="language"
            className="mb-4 block text-xs text-gray-300"
          >
            Programming Language
          </label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-full cursor-pointer border-b border-t border-b-gray-800 border-t-gray-800 bg-transparent px-1.5 py-4 text-xs text-gray-300 outline-none transition-all hover:border-b-gray-500 hover:border-t-gray-500"
          >
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="javascript">Javascript</option>
            <option value="c">C</option>
            <option value="php">Php</option>
            <option value="swift">Swift</option>
            <option value="ruby">Ruby</option>
          </select>
        </div>
      </div>
      <Link
        href={`/quiz?difficulty=${formData.difficulty}&language=${formData.language}`}
        className="mx-auto rounded-md border border-gray-700 bg-black bg-opacity-80 px-8 py-3 text-xs text-white transition-all hover:border hover:border-gray-500 active:scale-95"
      >
        Start quiz!
      </Link>
    </div>
  );
};

export default SettingsForm;
