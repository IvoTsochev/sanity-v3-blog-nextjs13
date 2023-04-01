import React from "react";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";
import { labels } from "../utils/labels";

type Props = {
  skills: SkillType[];
};

export const Skills = ({ skills }: Props) => {
  skills.sort((a, b) => b.progress - a.progress);

  return (
    <div className="flex text-center flex-col mt-10 md:text-left xl:flex-col max-w-[2000px] xl:h-screen xl:px-10  justify-center xl:space-y-0 mx-auto items-center">
      <header className="text-center mb-10 xl:mb-10">
        <h3 className="mb-2 uppercase tracking-[20px] text-gray-500 text-2xl">
          {labels.skills}
        </h3>
        <h3 className="uppercase tracking-[3px] text-gray-500 text-sm">
          {labels.hoverOveraSkillForCurrentProficiency}
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
          />
        ))}
      </div>
    </div>
  );
};
