import { UrlImagePreviewInput } from "../components/UrlImagePreviewInput";

export default {
  name: "event",
  title: "Event",
  type: "document",
  initialValue: {
    isActive: true,
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Only active events are shown in the app.",
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "time",
      title: "Time",
      type: "string",
    },
    {
      name: "desc",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "img",
      title: "Image URL",
      type: "url",
      components: {
        input: UrlImagePreviewInput,
      },
    },
    {
      name: "thumbnailUrl",
      title: "Thumbnail URL",
      type: "url",
      components: {
        input: UrlImagePreviewInput,
      },
    },
    {
      name: "descLists",
      title: "Description Lists",
      type: "array",
      of: [{ type: "descList" }],
    },
    {
      name: "payment",
      title: "Payment",
      type: "payment",
    },
    {
      name: "closingWords",
      title: "Closing Words",
      type: "text",
      rows: 3,
    },
  ],
};
