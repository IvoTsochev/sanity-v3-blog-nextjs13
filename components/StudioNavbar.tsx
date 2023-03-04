import React from "react";
import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { labels } from "../utils/labels";
import { colors } from "../utils/typeConstants";

export default function StudioNavbar(props: any) {
  const { primary } = colors;

  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link
          href="/"
          className={`text-[${primary}] flex items-center`}
        >
          <ArrowUturnLeftIcon className={`h-6 w-6 text-[${primary}] mr-2`} />
          {labels.goToWebsite}
        </Link>

        <div
          className={`hidden md:flex p-5 rounded-lg justify-center border-2 border-[${primary}]`}
        >
          <h1 className="font-bold text-white">
            Want Coding challenges & Solutions sent to your inbox daily? 🔥🔥🚀
          </h1>
          <Link
            href="https://headless.team"
            className={`text-[${primary}] font-bold ml-2`}
          >
            {labels.headlessTeam}
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}
