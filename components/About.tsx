"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import urlFor from "../lib/urlFor";

import { labels } from "../utils/labels";
import { colors } from "../utils/typeConstants";

type Props = {
  pageInfo: PageInfo;
};

export const About = ({ pageInfo }: Props) => {
  const { primary } = colors;
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col md:flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="mb-0 uppercase tracking-[20px] text-gray-500 text-2xl">
        {labels.about}
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="md:mb-0 flex-shrink-0 w-56 h-50 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      >
        <Image
          src={urlFor(pageInfo?.profilePicture).url()}
          width={400}
          height={550}
          className="rounded-2xl"
          alt={pageInfo?.name}
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          {labels.hereIsA}{" "}
          <span className={`underline decoration-[${primary}]`}>
            {labels.little}
          </span>{" "}
          {labels.background}
        </h4>
        <p className="text-base">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
};
