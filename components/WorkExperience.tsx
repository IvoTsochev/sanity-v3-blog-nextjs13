import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  const sortedByDateExperiences = experiences.sort(
    (a, b) => b.orderNumber - a.orderNumber
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative mt-10 overflow-hidden flex-col text-left md:flex-row md:flex-col max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="uppercase tracking-[20px] mb-10 text-gray-500 text-2xl">
        Experience
      </h3>

      <div className=" w-full flex space-x-5 overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {sortedByDateExperiences.map((experience) => (
            <SwiperSlide key={experience._id}>
              <ExperienceCard experience={experience} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}

export default WorkExperience;
