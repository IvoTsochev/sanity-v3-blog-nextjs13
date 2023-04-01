import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import BlogPreviewSuspense from "../../../components/BlogPreviewSuspense";
import { colors } from "../../../utils/typeConstants";

import BlogPreviewList from "../../../components/BlogPreviewList";
import BlogList from "../../../components/BlogList";

const query = groq`
  *[_type == "post"] {
    ...,
    author->, 
    categories[]->
  } | order(_createdAt desc)
`;

export default async function Homepage() {
  if (previewData()) {
    return (
      <BlogPreviewSuspense
        fallback={
          <div role="status">
            <p
              className={`text-center text-lg animate-pulse text-[${colors.primary}]`}
            >
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <h2 className="font-bold m-5 ml-0 text-2xl">Preview Mode!</h2>
        <BlogPreviewList query={query} />
      </BlogPreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
}
