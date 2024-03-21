'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="flex h-[calc(100vh-64px)] flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center gap-10 rounded-md bg-black bg-opacity-70 p-10">
        <h1 className="text-xl tracking-widest text-gray-300">LOADING</h1>
        <h2 className="text-sm text-gray-400">
          Your quiz is currently being created. It takes approximately 5-10
          seconds.
        </h2>
        <div className="mt-6 flex items-center justify-center gap-2">
          <motion.span
            className="h-8 w-8 rounded-full border-2 border-gray-300"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          ></motion.span>
          <motion.span
            className="h-8 w-8 rounded-full border-2 border-gray-300"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, delay: 0.1 }}
          ></motion.span>
          <motion.span
            className="h-8 w-8 rounded-full border-2 border-gray-300"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
          ></motion.span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
