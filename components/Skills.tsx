"use client";

import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

export const Skills = ({ skills }: Props) => {
  skills.sort((a, b) => b.progress - a.progress);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex text-center flex-col mt-10 md:text-left xl:flex-col max-w-[2000px] xl:h-screen xl:px-10  justify-center xl:space-y-0 mx-auto items-center"
    >
      <header className="text-center mb-10 xl:mb-10">
        <h3 className="mb-2 uppercase tracking-[20px] text-gray-500 text-2xl">
          Skills
        </h3>
        <h3 className="uppercase tracking-[3px] text-gray-500 text-sm">
          Hover over a skill for current proficiency
        </h3>
      </header>

      <div className="grid grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill
            key={skill._id}
            skill={skill}
          />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill
            key={skill._id}
            skill={skill}
            directionLeft
          />
        ))}
      </div>
    </motion.div>
  );
};
