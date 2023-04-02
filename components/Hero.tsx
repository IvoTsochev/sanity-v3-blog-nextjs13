"use client";

import React from "react";
import Image from "next/image";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "../typings";
import urlFor from "../lib/urlFor";
import { labels } from "../utils/labels";
import { colors } from "../utils/typeConstants";

type Props = {
  pageInfo: PageInfo;
};

export const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, I'm ${pageInfo?.name}`,
      "I'm a React developer",
      "<web3Enthusiast />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <Image
          className="relative rounded-full  h-32 w-32 mx-auto object-cover"
          width={128}
          height={128}
          src={urlFor(pageInfo?.heroImage).url()}
          alt={pageInfo?.name}
        />

        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
            {pageInfo?.role}
          </h2>
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor={`${colors.primary}`} />
          </h1>

          <div className="pt-5">
            <Link href="#about">
              <button className="heroButton m-2">{labels.about}</button>
            </Link>
            <Link href="#experience">
              <button className="heroButton m-2">{labels.experience}</button>
            </Link>
            <Link href="#skills">
              <button className="heroButton m-2">{labels.skills}</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton m-2">{labels.projects}</button>
            </Link>
            <Link href="/blog">
              <button className="heroButton m-2">{labels.blog}</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
