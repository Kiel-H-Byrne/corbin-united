export default {
  name: "footerText",
  title: "Footer Text",
  type: "document",
  fields: [
    {
      name: "aboutTitle",
      title: "About Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "aboutBody",
      title: "About Body",
      type: "text",
      rows: 5,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "missionText",
      title: "Mission Text",
      type: "string",
    },
    {
      name: "copyrightText",
      title: "Copyright Text",
      type: "string",
      description: "Use {year} to insert the current year.",
    },
  ],
};
