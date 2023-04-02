import React from "react";
import { labels } from "../utils/labels";
import { colors } from "../utils/typeConstants";

export const BlogBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">{labels.ivosDailyBlog}</h1>
        <h2 className="mt-5 md:mt-0">
          {labels.welcomeTo}{" "}
          <span
            className={`underline decoration-4 decoration-[${colors.primary}]`}
          >
            {labels.everyDevelopers}
          </span>{" "}
          {labels.favouriteBlogInTheDevoshpere}
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        {labels.newProductFeatures} | {labels.theLatestInTechnology} |{" "}
        {labels.theWeeklyDebuggingNightmaresAndMore}
      </p>
    </div>
  );
};
