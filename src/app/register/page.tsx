import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Register = () => {
  return (
    <div className="flex items-center w-full h-full bg-blue-600 py-2 flex-row justify-evenly">
      <div className="flex items-start mx-5 py-5">
        <Link href="/">
          <FaArrowLeft color="indigo" size={25} className=" cursor-pointer" />
        </Link>
      </div>
      <div className="flex items-center justify-center p-4">
        <form className="flex gap-4 flex-col w-full max-w-lg">
        <p className="text-left text-lg mt-4">Name *</p>
          <input
            type="text"
            className="border bg-blue-700 text-white text-sm text-center p-2"
            placeholder="User Name"
          />
          <p className="text-left text-lg mt-4">Email *</p>
          <input
            type="email"
            className="border bg-blue-700 text-white text-sm text-center p-2"
            placeholder="Email"
          />
          <p className="text-left text-lg mt-4">Location *</p>
          <input
            type="text"
            className="border bg-blue-700 text-white text-sm text-center p-2"
            placeholder="Location"
          />
          <p className="text-left text-lg mt-4">Enter Password *</p>
          <input
            type="password"
            className="border bg-blue-700 text-white text-sm text-center p-2"
            placeholder="Password"
          />
           <p className="text-left text-lg mt-4">Re-Enter Password *</p>
          <input
            type="password"
            className="border bg-blue-700 text-white text-sm text-center p-2"
            placeholder="Confirm Password"
          />
          <button
            type="submit"
            className=" flex items-center justify-center gap-3 rounded-sm border-white w-full md:w-18 h-10 text-center bg-white text-blue-700 mt-4"
          >
            Register
            <FaArrowRight />
          </button>
          <Link href="/login">
            <p className=" cursor-pointer text-1xl font-semibold">
              Already have an Account.{" "}
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
