export default {
  name: "pastEvent",
  title: "Past Event",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "img",
      title: "Image URL",
      type: "url",
    },
  ],
};
