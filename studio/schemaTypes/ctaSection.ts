export default {
  name: "ctaSection",
  title: "CTA Section",
  type: "document",
  fields: [
    {
      name: "key",
      title: "Key",
      type: "string",
      description: "Identifier used by the app (e.g. suggestion-box).",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "buttonLabel",
      title: "Button Label",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "modalTitle",
      title: "Modal Title",
      type: "string",
    },
    {
      name: "modalBody",
      title: "Modal Body",
      type: "text",
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "active",
      title: "Active",
      type: "boolean",
      initialValue: true,
    },
  ],
};
