export default {
  name: "section",
  title: "Section",
  type: "document",
  fields: [
    {
      name: "key",
      title: "Key",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "iconName",
      title: "Icon Name",
      type: "string",
      description: "Icon identifier used in the app.",
      options: {
        list: [
          { title: "Heart", value: "heart" },
          { title: "Finance", value: "finance" },
          { title: "Education", value: "education" },
          { title: "Events", value: "events" },
          { title: "People", value: "people" },
          { title: "Album", value: "album" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "desc",
      title: "Description",
      type: "text",
      rows: 2,
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
