import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";
import { colors } from "../utils/typeConstants";

const { primary } = colors;

export const BlogRichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className={`border-l-[${primary}] border-l-4 pl-5 py-5 my-5`}>
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      return (
        <Link
          href={value.href ? value.href : "/"}
          rel={value.href?.startsWith("/") ? undefined : "noreferrer noopener"}
          className={`underline decoration-[${primary}] hover:decoration-black`}
          target="_blank"
        >
          {children}
        </Link>
      );
    },
  },
};
