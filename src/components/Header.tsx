'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="relative flex h-16 w-auto items-center justify-between bg-black bg-opacity-75 px-8 text-sm text-gray-400 md:px-8">
      {/* Logo */}
      <Link href="/" className="lg:m-0">
        quiz-maker-ai
      </Link>

      {/* Routing Links */}
      <ul
        className={`lg:visible lg:flex lg:items-center lg:space-x-6 ${
          openMenu
            ? 'absolute left-0 right-0 top-16 z-10 w-screen w-screen space-y-6 bg-black bg-opacity-95 p-8'
            : 'hidden'
        }`}
      >
        <li>
          <Link href="/" className="transition-all hover:text-gray-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/#about" className="transition-all hover:text-gray-500">
            About
          </Link>
        </li>
        <li>
          <Link href="/#contact" className="transition-all hover:text-gray-500">
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            className="rounded-md bg-gray-800 p-3 text-sm text-gray-400 transition-all hover:bg-gray-700 hover:text-gray-300 active:scale-95"
          >
            Start new quiz
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Open/Close Button */}
      <button onClick={() => setOpenMenu(!openMenu)} className="lg:hidden">
        {openMenu ? (
          <XMarkIcon className="h-6 w-6 text-gray-400" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-gray-400" />
        )}
      </button>
    </header>
  );
};

export default Header;
