'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="bg-black bg-opacity-75 py-6 text-gray-400">
      <div className="container relative mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="ml-6 lg:m-0">
          quiz.maker.ai
        </Link>

        {/* Routing Links */}
        <ul
          className={`lg:visible lg:flex lg:items-center lg:space-x-6 ${
            openMenu
              ? 'absolute top-12 w-screen space-y-6 bg-black bg-opacity-75 px-6 py-4'
              : 'hidden'
          }`}
        >
          <li>
            <Link href="/" className="transition-all hover:text-gray-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="transition-all hover:text-gray-500">
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="transition-all hover:text-gray-500"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/quiz"
              className="rounded-md bg-gray-800 p-3 text-sm text-gray-400 transition-all hover:bg-gray-700 hover:text-gray-300 active:scale-95"
            >
              Start new quiz
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Open/Close Button */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="mr-6 lg:hidden"
        >
          {openMenu ? (
            <Image
              src="/close.svg"
              width={10}
              height={10}
              alt="Open menu"
            ></Image>
          ) : (
            <Image
              src="/menu.svg"
              width={10}
              height={10}
              alt="Close menu"
            ></Image>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
