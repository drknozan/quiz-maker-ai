'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ProgressLine = () => {
  return (
    <div className=" rounded-xl bg-black bg-opacity-80 px-2 py-4 text-xs shadow-2xl lg:px-8 lg:py-10 lg:text-base">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="400"
        height="410"
        viewBox="0 0 400 410"
      >
        <motion.line
          x1="20"
          y1="0"
          x2="20"
          y2="390"
          stroke="#8b5cf6"
          strokeWidth="2"
          initial={{ y2: 0 }}
          animate={{ y2: 390 }}
          transition={{ duration: 5 }}
        />
        <motion.circle
          cx="20"
          cy="30"
          r="10"
          stroke="#8b5cf6"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
        />
        <motion.text
          x="40"
          y="30"
          fill="#fff"
          textAnchor="start"
          dominantBaseline="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.7,
            duration: 1,
          }}
        >
          ⚡️ Choose a programming language.
        </motion.text>
        <motion.circle
          cx="20"
          cy="120"
          r="10"
          stroke="#8b5cf6"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 0.5,
          }}
        ></motion.circle>
        <motion.text
          x="40"
          y="120"
          fill="#fff"
          textAnchor="start"
          dominantBaseline="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.7,
            duration: 1,
          }}
        >
          🎯 Set a difficulty according to your level.
        </motion.text>
        <motion.circle
          cx="20"
          cy="210"
          r="10"
          stroke="#8b5cf6"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.5,
            duration: 0.5,
          }}
        ></motion.circle>
        <motion.text
          x="40"
          y="210"
          fill="#fff"
          textAnchor="start"
          dominantBaseline="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.7,
            duration: 1,
          }}
        >
          🦾 Let AI create a quiz for you.
        </motion.text>
        <motion.circle
          cx="20"
          cy="300"
          r="10"
          stroke="#8b5cf6"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 3.5,
            duration: 0.5,
          }}
        ></motion.circle>
        <motion.text
          x="40"
          y="300"
          fill="#fff"
          textAnchor="start"
          dominantBaseline="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 3.7,
            duration: 1,
          }}
        >
          🔱 Answer the questions.
        </motion.text>
        <motion.circle
          cx="20"
          cy="390"
          r="10"
          stroke="#8b5cf6"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 4.5,
            duration: 0.5,
          }}
        ></motion.circle>
        <motion.text
          x="40"
          y="390"
          fill="#fff"
          textAnchor="start"
          dominantBaseline="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 4.7,
            duration: 1,
          }}
        >
          🚀 Review the explanations of the solutions.
        </motion.text>
      </motion.svg>
    </div>
  );
};

export default ProgressLine;
