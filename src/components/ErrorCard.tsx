'use client';

import { useRouter } from 'next/router';

const ErrorCard = ({ error }: { error: string }) => {
  const router = useRouter();

  return (
    <div className="flex h-[calc(100vh-64px)] items-center justify-center">
      <div className="flex flex-col gap-6 rounded-md bg-black bg-opacity-80 p-12 shadow-md">
        <p>{error}</p>
        <button
          className="mx-auto rounded-md  bg-white px-8 py-3 text-xs text-black transition-all active:scale-95"
          onClick={() => router.push('/settings')}
        >
          Go to settings
        </button>
      </div>
    </div>
  );
};

export default ErrorCard;
