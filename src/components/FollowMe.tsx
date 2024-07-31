import React from "react";
import * as ReactIcons from "react-icons";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const FollowMe = () => {
  
  return (
    <div
      className=" text-white flex-1 items-center justify-center mx-5"
      style={{ backgroundColor: "#5e1ff2" }}
    >
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-3xl font-semibold text-center py-5">
          NEVER MISS A THING
        </h1>
        <ul className="flex items-center justify-center gap-6 py-3">
          <Link href="/">
            <FaYoutube />
          </Link>
          <Link href="/">
            <FaSnapchatGhost />
          </Link>
          <Link href="/">
            <FaInstagram />
          </Link>
          <Link href="/">
            <FaXTwitter />
          </Link>
          <Link href="/">
            <FaFacebookF />
          </Link>
        </ul>
      </div>
      <div className=" flex items-center justify-between flex-row gap-2 my-3 mx-5">
        <div className=" flex items-center justify-between flex-col">
          <p className="text-2xl font-semibold text-center py-5">
            LOVE TO HEAR FROM YOU
          </p>
          <div className="flex-1 ">
            <p className="text-1xl font-bold text-center py-3">
              PR & MANAGEMENT
            </p>
            <p className="text-1xl font-semibold text-center py-3">
              info@mysite.com
            </p>
            <p className="text-1xl font-bold text-center py-3">
              FOR & BUSINESS INQUIRIES
            </p>
            <p className=" font-semibold text-center py-3">info@mysite.com</p>
          </div>
          <p className="text-1xl">
            @ 2024 by Vargas. Powered and secured by Vg
          </p>
        </div>
        <div className="flex items-center justify-center p-4">
          <form className="flex gap-4 flex-col w-full max-w-lg">
            <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-evenly">
              <p className="text-lg text-center w-full md:w-auto">
                First Name *
              </p>
              <p className="text-lg text-center w-full md:w-auto">
                Last Name *
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-evenly">
              <input
                type="text"
                className="border bg-blue-700 text-white text-sm text-center w-full md:w-auto p-2"
                placeholder="First Name"
              />
              <input
                type="text"
                className="border bg-blue-700 text-white text-sm text-center w-full md:w-auto p-2"
                placeholder="Last Name"
              />
            </div>
            <p className="text-left text-lg mt-4">Email *</p>
            <input
              type="email"
              className="border bg-blue-700 text-white text-sm text-center p-2"
              placeholder="Email"
            />
            <p className="mt-4">Type your comment here...*</p>
            <input
              type='text'
              id="add-comment"
              className="text-white border bg-blue-700 text-sm text-center p-2"
              placeholder="Your message"
            />
            <button
              type="submit"
              className="rounded-sm border-white w-full md:w-20 h-10 text-center bg-white text-blue-700 mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FollowMe;
