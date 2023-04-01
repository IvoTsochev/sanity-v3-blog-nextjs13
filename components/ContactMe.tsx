"use client";

import React from "react";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";
import { labels } from "../utils/labels";
import { colors } from "../utils/typeConstants";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

export const ContactMe = ({ pageInfo }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto: ivaylo@headless.team?subject=${formData.subject}&body=Hi,my name is ${formData.name}. \r ${formData.message} (${formData.email})`;
  };

  return (
    <div className="lx:h-screen flex flex-col mb-10 text-center md:text-left md:flex-col max-w-7xl px-10 justify-evenly mx-auto items-center xl:mt-10">
      <h3 className="mb-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        {labels.contact}
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          {labels.sendMeaMsgIfYoureNotSureAboutSomething}{" "}
          <span className={`decoration-[#F7AB0A] underline`}>
            {labels.letsTalk}
          </span>
        </h4>

        <div className="space-y-10">
          {/* <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo?.phoneNumber}</p>
          </div> */}

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon
              className={`text-[${colors.primary}] h-7 w-7 animate-pulse`}
            />
            <p className="text-2xl">{pageInfo?.email}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon
              className={`text-[${colors.primary}] h-7 w-7 animate-pulse`}
            />
            <p className="text-2xl">{pageInfo?.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto flex-wrap"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-full xl:w-1/2"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-full xl:w-1/2"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />

          <button
            type="submit"
            className={`bg-[${colors.primary}] py-5 px-10 rounded-md text-black font-bold text-lg`}
          >
            {labels.submit}
          </button>
        </form>
      </div>
    </div>
  );
};
