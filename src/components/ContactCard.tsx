'use client';

import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const ContactCard = () => {
  return (
    <div
      className="mx-6 flex flex-col items-center  space-y-1 p-12 text-xs lg:text-sm"
      id="contact"
    >
      <motion.div
        className="mb-2 flex items-center gap-2 text-xl text-gray-100 lg:text-2xl"
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <EnvelopeIcon className="h-7 w-7 " />
        Contact
      </motion.div>
      <motion.p
        className="text-gray-400"
        initial={{ opacity: 0, x: 75 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        If you want to contact me:
      </motion.p>
      <motion.div
        className="text-gray-400"
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Github:{' '}
        <a
          className="text-gray-400 hover:text-gray-300"
          href="https://github.com/drknozan"
        >
          github.com/drknozan
        </a>
      </motion.div>
      <motion.div
        className="text-gray-400"
        initial={{ opacity: 0, x: 75 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Email:{' '}
        <span className="inline text-gray-400 hover:text-gray-300">
          drknozan@gmail.com
        </span>
      </motion.div>
    </div>
  );
};

export default ContactCard;
