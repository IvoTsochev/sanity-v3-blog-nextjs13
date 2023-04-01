"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { labels } from "../utils/labels";
import { colors } from "../utils/typeConstants";

import NewsletterPopUp from "./NewsletterPopUp";

export const BlogHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentClass, setContentClass] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
    setContentClass("blur");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setContentClass("");
  };

  return (
    <header
      className={`flex items-center justify-between space-x-2 font-bold px-10 py-5 `}
    >
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
        <div
          // href=""
          className={`px-5 py-3 tetxt-sm md:text-base bg-gray-900 text-[${colors.primary}] flex items-center rounded-full`}
          onClick={openModal}
        >
          {labels.signUpForMyNewsletter}
        </div>
      </div>
      {isModalOpen ? (
        <NewsletterPopUp
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      ) : null}
    </header>
  );
};
