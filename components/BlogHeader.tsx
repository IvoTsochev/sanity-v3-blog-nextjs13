"use client";

import Image from "next/image";
import Link from "next/link";

import { labels } from "../utils/labels";
import { colors } from "../utils/typeConstants";

import NewsletterModal from "./NewsletterModal";

import { useSelector, useDispatch } from "react-redux";
import { open, close } from "../store/slices/subModalSlice";
import type { RootState } from "../store/store";

export const BlogHeader = () => {
  const modal = useSelector((state: RootState) => state.subModal.value);
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

      {modal ? (
        <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center z-50">
          <div
            className="absolute bg-gray-700/90 top-0 left-0 bottom-0 right-0"
            onClick={() => dispatch(close())}
          ></div>
          <div className="p-6 bg-slate-900 max-w-[580px] z-10">
            <NewsletterModal />
          </div>
        </div>
      ) : null}
    </header>
  );
};
