import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import { LinkIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { labels } from "../utils/labels";

type Props = {
  index: number;
  project: any;
  projects: any;
};

export default function SingleProject({ projects, project, index }: Props) {
  return (
    <div className="w-screen flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-5 md:p-30 ">
      <div>
        <Image
          width={1000}
          height={500}
          style={{ objectFit: "cover" }}
          src={urlFor(project.image).url()}
          alt={project.title}
        />
      </div>

      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">
          <span className={`underline decoration-[#F7aB0a]/50`}>
            {labels.caseStudy} {index + 1} {labels.of} {projects.length}:
          </span>{" "}
          {project?.title}
          {project.linkToWebsite ? (
            <>
              <Link
                href={project.linkToWebsite}
                target="_blank"
              >
                <LinkIcon
                  data-tooltip-id="website"
                  data-tooltip-content="Website"
                  data-tooltip-variant="dark"
                  className="w-7 h-7 text-gray-400 inline mx-5 cursor-pointer"
                />
              </Link>
              <Tooltip id="website" />
            </>
          ) : null}
          {project.linkToBuild ? (
            <>
              <Link href="https://goole.com">
                <CodeBracketIcon
                  data-tooltip-id="github"
                  data-tooltip-content="GitHub"
                  data-tooltip-variant="dark"
                  className="w-7 h-7 text-gray-400 inline cursor-pointer"
                />
              </Link>
              <Tooltip id="github" />
            </>
          ) : null}
        </h4>

        <div className="flex items-center justify-center">
          {project?.technologies.map((technology: any) => {
            return (
              <div
                key={technology._id}
                className="mx-2"
              >
                <Image
                  className="h-10 w-10"
                  width={35}
                  height={35}
                  src={urlFor(technology.image).url()}
                  alt={technology.title}
                />
              </div>
            );
          })}
        </div>

        <p className="text-lg text-center md:text-left">{project?.summary}</p>
      </div>
    </div>
  );
}
