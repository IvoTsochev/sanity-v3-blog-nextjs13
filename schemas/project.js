import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Title of the project",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    }),
    defineField({
      name: "linkToWebsite",
      title: "Link To Website",
      type: "url",
    }),
    defineField({
      name: "linkToGithub",
      title: "Link To GitHub",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
  ],
  ordedings: [
    {
      title: "Order Number, Asc",
      name: "orderNumberAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Order Number, Desc",
      name: "orderNumberDesc",
      by: [{ field: "order", direction: "desc" }],
    },
  ],
});
