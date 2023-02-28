import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "jobTitle",
      title: "Job Title",
      type: "string",
    }),
    defineField({
      name: "companyImage",
      title: "Company Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "dateStarted",
      title: "Date Started",
      type: "date",
      options: {
        dateFormat: "MM-YYYY",
      },
    }),
    defineField({
      name: "dateEnded",
      title: "Date Ended",
      type: "date",
      options: {
        dateFormat: "MM-YYYY",
      },
    }),
    defineField({
      name: "isCurrentlyWorkingHere",
      title: "Is Currently Working Here",
      type: "boolean",
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    }),
    defineField({
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "orderNumber",
      title: "Order Number",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Date Ended, Desc",
      name: "dateEndedDesc",
      by: [{ field: "dateEnded", direction: "desc" }],
    },
    {
      title: "Date Ended, Asc",
      name: "dateEndedAsc",
      by: [{ field: "dateEnded", direction: "asc" }],
    },
    {
      title: "Order Number, Asc",
      name: "orderNumberAsc",
      by: [{ field: "orderNumber", direction: "asc" }],
    },
    {
      title: "Order Number, Desc",
      name: "orderNumberAsc",
      by: [{ field: "orderNumber", direction: "desc" }],
    },
  ],
});
