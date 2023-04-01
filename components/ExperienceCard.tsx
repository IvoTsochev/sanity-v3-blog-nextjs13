import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import urlFor from "../lib/urlFor";
import { colors } from "../utils/typeConstants";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article
      className={`flex flex-col rounded-lg items-center justify-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[700px] xl:min-h-[832px] snap-center bg-[${colors.primaryGray}] p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mx-auto`}
    >
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      >
        <Image
          src={urlFor(experience?.companyImage).url()}
          width={200}
          height={200}
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          alt={experience?.company}
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex justify-start gap-4 space-x-2 my-2 mt-4">
          {experience?.technologies?.map((technology) => (
            <Image
              key={technology._id}
              className=" rounded-full"
              src={urlFor(technology.image).url()}
              width={40}
              height={40}
              alt={technology.title}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg h-80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
