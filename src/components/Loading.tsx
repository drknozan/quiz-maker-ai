import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="flex h-[calc(100vh-64px)] flex-col items-center justify-center gap-12">
      <motion.span className="text-xl tracking-widest text-gray-300">
        LOADING
      </motion.span>
      <div className="flex  items-center justify-center gap-2">
        <motion.span
          className="border-grey-300 h-8 w-8 rounded-full border-4"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        ></motion.span>
        <motion.span
          className="border-grey-300 h-8 w-8 rounded-full border-4"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, delay: 0.1 }}
        ></motion.span>
        <motion.span
          className="border-grey-300 h-8 w-8 rounded-full border-4"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
        ></motion.span>
      </div>
    </div>
  );
};

export default Loading;
