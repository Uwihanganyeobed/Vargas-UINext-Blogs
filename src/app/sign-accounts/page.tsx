import Link from "next/link";
import React from "react";
import NextAuth from "next-auth/next";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Sign_Accounts = () => {
  return (
    <div className="flex items-center w-full h-full bg-blue-900 py-2 flex-row justify-evenly">
      <div className="flex items-start mx-5 py-5">
        <Link href="/">
          <FaArrowLeft color="indigo" size={25} className=" cursor-pointer" />
        </Link>
      </div>
      <div className="flex items-center justify-center p-4">
        <form className="flex gap-4 flex-col w-full max-w-lg">
          <p className="text-left text-lg mt-4">Sign in with Accounts *</p>
          <button className="border rounded-xl bg-pink-300 text-white text-sm text-center p-2">
            Sign in with Google
          </button>
          <button className="border rounded-xl bg-black text-white text-sm text-center p-2">
            Sign in with Github
          </button>
          <button className="border rounded-xl bg-blue-700 text-white text-sm text-center p-2">
            Sign in with Facebook
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sign_Accounts;
