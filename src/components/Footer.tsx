'use client';

const Footer = () => {
  return (
    <div className="flex h-32 flex-col items-center justify-center bg-gray-900 text-center text-xs text-gray-400 lg:text-sm">
      <div>This platform uses OpenAI GPT-3.5 Turbo API to create quizzes.</div>
      <div>You can reach me at the addresses in the contact section.</div>
      <div>
        Made by{' '}
        <a
          href="https://github.com/drknozan"
          className="text-gray-300 hover:text-gray-200"
        >
          drknozan
        </a>{' '}
        in 2024.
      </div>
    </div>
  );
};

export default Footer;
