'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

const AuthButton = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col md:flex-row items-center justify-around gap-3 w-full p-4">
      {!session ? (
        <>
          <button
            onClick={() => signIn('google')}
            className="rounded-md border border-transparent w-full md:w-40 h-12 text-center bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            Sign in with Google
          </button>
          <button
            onClick={() => signIn('facebook')}
            className="rounded-md border border-transparent w-full md:w-40 h-12 text-center bg-green-700 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            Sign in with Facebook
          </button>
          <button
            onClick={() => signIn('github')}
            className="rounded-md border border-transparent w-full md:w-40 h-12 text-center bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            Sign in with GitHub
          </button>
        </>
      ) : (
        <button
          onClick={() => signOut()}
          className="rounded-md border border-transparent w-full md:w-40 h-12 text-center bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
        >
          Sign out
        </button>
      )}
    </div>
  );
};

export default AuthButton;
