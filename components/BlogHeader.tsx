"use client";

import Image from "next/image";
import Link from "next/link";

import { labels } from "../utils/labels";
import { colors } from "../utils/typeConstants";

import { useDispatch } from "react-redux";
import { open } from "../store/slices/subModalSlice";

export const BlogHeader = () => {
  const dispatch = useDispatch();

  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://ivaylotsochev.com/headless_new_logo.png"
            width={50}
            height={50}
            className="rounded-full"
            alt="Headless Logo"
          />
        </Link>
        <h1>{labels.headlessTeam}</h1>
      </div>

      <div>
        <button
          className={`px-5 py-3 tetxt-sm md:text-base bg-gray-900 text-[${colors.primary}] flex items-center rounded-full`}
          onClick={() => dispatch(open())}
        >
          {labels.signUpForMyNewsletter}
        </button>
      </div>
    </header>
  );
};
