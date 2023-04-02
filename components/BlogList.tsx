"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import urlFor from "../lib/urlFor";
import { Post } from "../typings";
import ClientSideRoute from "./ClientSideRoute";

import { labels } from "../utils/labels";
import { colors } from "../utils/typeConstants";

import { useSelector, useDispatch } from "react-redux";
import { close } from "../store/slices/subModalSlice";
import type { RootState } from "../store/store";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  const modal = useSelector((state: RootState) => state.subModal.value);
  const dispatch = useDispatch();

  posts.sort((a, b) => {
    const dateA = new Date(a.publishedAt);
    const dateB = new Date(b.publishedAt);

    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div>
      <hr className={`border-[${colors.primary}] mb-10`} />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map((post) => (
          <ClientSideRoute
            key={post._id}
            route={`/blog/post/${post.slug.current}`}
          >
            <div className="flex flex-col group cursor-pointer">
              <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                <Image
                  className="object-cover object-left lg:object-center"
                  src={urlFor(post.mainImage).url() || ""}
                  alt={post.author.name}
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                    {post.categories?.map((category) => (
                      <div
                        key={category._id}
                        className={`bg-[${colors.primary}] text-center text-black px-3 py-1 rounded-full text-sm font-semibold`}
                      >
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1">
                <p className="underline text-lg font-bold">{post.title}</p>
                <p className="line-clamp-2 text-gray-500">{post.description}</p>
              </div>

              <p className="mt-5 font-bold flex items-center group-hover:underline">
                {labels.readPost}
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
      {modal ? (
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-gray-700/90 flex justify-center items-center">
          <div className="p-6 bg-red-400">
            <h1>HELLOOO</h1>
            <button onClick={() => dispatch(close())}>CLOSE</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default BlogList;
