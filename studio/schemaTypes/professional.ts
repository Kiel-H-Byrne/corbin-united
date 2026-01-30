export default {
  name: "professional",
  title: "Professional",
  type: "document",
  fields: [
    {
      name: "area",
      title: "Area",
      type: "string",
      options: {
        list: [
          { title: "Health", value: "health" },
          { title: "Education", value: "education" },
          { title: "Finances", value: "finances" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "img",
      title: "Image URL",
      type: "url",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
  ],
};
