import React from "react";
import Image from "next/image";
import { Skill as singleSkill } from "../typings";
import urlFor from "../lib/urlFor";

type Props = {
  skill: singleSkill;
};

export default function Skill({ skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <div className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out">
        <Image
          width={150}
          height={150}
          src={urlFor(skill.image).url()}
          alt={skill.title}
          className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
      </div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
