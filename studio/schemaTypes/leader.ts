import { UrlImagePreviewInput } from "../components/UrlImagePreviewInput";

export default {
  name: "leader",
  title: "Leader",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule: any) => Rule.required(),
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
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
  ],
};
