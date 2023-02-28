import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Skill as singleSkill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: singleSkill;
  directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="rounded-full border border-gray-500 object-cover w-[70px] h-[70px] md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <Image
          width={150}
          height={150}
          src={urlFor(skill.image).url()}
          // objectFit="cover"
          alt={skill.title}
          className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
      </motion.div>

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
