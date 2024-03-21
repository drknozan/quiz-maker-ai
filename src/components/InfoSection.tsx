'use client';

import {
  CommandLineIcon,
  PresentationChartLineIcon,
  CubeIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const InfoSection = () => {
  return (
    <div id="about" className="border-b border-gray-800 p-20">
      <motion.h1
        className="mb-16 text-center text-xl font-bold text-gray-100 lg:text-5xl"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Quiz Experience Made By <span className="text-violet-500">AI.</span>
      </motion.h1>
      <div className="mx-6 grid gap-4 p-4 md:container md:mx-auto md:grid-cols-2 lg:grid-cols-4">
        <motion.div
          className="bg-opacity-85 height-auto  flex flex-col rounded-xl border border-gray-800 bg-black p-6"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="flex items-center space-x-2">
            <CubeIcon className="h-8 w-8 text-violet-500" />
            <span className="text-gray-100">Programming Languages</span>
          </div>
          <p className="mt-4 text-left text-xs text-gray-400 lg:text-sm">
            There is support for many programming languages. You can choose the
            programming language you want to learn or improve yourself in from
            the list.
          </p>
        </motion.div>
        <motion.div
          className="bg-opacity-85 height-auto  flex flex-col rounded-xl border border-gray-800 bg-black p-6"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="flex items-center space-x-2">
            <CommandLineIcon className="h-8 w-8 text-violet-500" />
            <span className="text-gray-100">Three Difficulty</span>
          </div>
          <p className="mt-4 text-left text-xs text-gray-400 lg:text-sm">
            You can choose the one that suits you best among three different
            difficulties. AI will prepare questions according to the difficulty
            level you choose.
          </p>
        </motion.div>
        <motion.div
          className="bg-opacity-85 height-auto  flex flex-col rounded-xl border border-gray-800 bg-black p-6"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="flex items-center space-x-2">
            <ClockIcon className="h-8 w-8 text-violet-500" />
            <span className="text-gray-100">Time Limit</span>
          </div>
          <p className="mt-4 text-left text-xs text-gray-400 lg:text-sm">
            You will be expected to examine the questions given to you within
            the specified time and give correct answers.
          </p>
        </motion.div>
        <motion.div
          className="bg-opacity-85 height-auto  flex flex-col rounded-xl border border-gray-800 bg-black p-6"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="flex items-center space-x-2">
            <PresentationChartLineIcon className="h-8 w-8 text-violet-500" />
            <span className="text-gray-100">Review</span>
          </div>
          <p className="mt-4 text-left text-xs text-gray-400 lg:text-sm">
            You can review your answers after the quiz is over. You will be
            presented with correct answers and explanations to the questions.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default InfoSection;
