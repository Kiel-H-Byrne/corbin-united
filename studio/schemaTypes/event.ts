export default {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
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
    },
    {
      name: "thumbnailUrl",
      title: "Thumbnail URL",
      type: "url",
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
