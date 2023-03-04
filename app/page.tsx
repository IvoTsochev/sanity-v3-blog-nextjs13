import React from "react";
import Image from "next/image";
import Link from "next/link";

import { client } from "../lib/sanity.client";
import { groq } from "next-sanity";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WorkExperience } from "@/components/WorkExperience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { ContactMe } from "@/components/ContactMe";

import { Experience, PageInfo, Project, Skill, Social } from "../typings";

const querySocial = groq`
  *[_type == "social"]
`;

const queryPageInfo = groq`
  *[_type == "pageInfo"][0]
`;

const queryExperiences = groq`
      *[_type == "experience"] {
      ...,
      technologies[] ->
    }
`;

const querySkills = groq`
  *[_type == "skill"]
`;

const queryProjects = groq`
    *[_type == "project"] {
      ...,
      technologies[] ->
    }
`;

export default async function Homepage() {
  const socials: Social[] = await client.fetch(querySocial);
  const pageInfo: PageInfo = await client.fetch(queryPageInfo);
  const experiences: Experience[] = await client.fetch(queryExperiences);
  const skills: Skill[] = await client.fetch(querySkills);
  const projects: Project[] = await client.fetch(queryProjects);

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen overflow-y-scroll overflow-x-hidden z-0  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      <Header socials={socials} />

      <section id="hero">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills">
        <Skills skills={skills} />
      </section>

      <section id="projects">
        <Projects projects={projects} />
      </section>

      <section id="contact">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://ivaylotsochev.com/headless.team_logo_orange_transparent.png"
              alt=""
              width={40}
              height={40}
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
