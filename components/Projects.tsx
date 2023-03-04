"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import SingleProject from "./SingleProject";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  projects: Project[];
};

export const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex overflow-hidden flex-col text-left max-w-full justify-center mx-auto items-center mt-20 z-0 md:flex-col xl:h-screen"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className=" w-full flex overflow-y-hidden z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {projects?.map((project, index) => (
            <SwiperSlide key={project._id}>
              <SingleProject
                projects={projects}
                project={project}
                index={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};
