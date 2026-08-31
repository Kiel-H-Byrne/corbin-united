import { UrlImagePreviewInput } from "../components/UrlImagePreviewInput";

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
      name: "imageFile",
      title: "Image Upload",
      type: "image",
      options: { hotspot: true, accept: "image/*" },
      validation: (Rule: any) =>
        Rule.custom((value: any, context: any) => {
          const imgUrl = context?.parent?.img;
          if (value || imgUrl) {
            return true;
          }
          return "Add an image upload or an image URL.";
        }),
    },
    {
      name: "img",
      title: "Image URL (Fallback)",
      type: "url",
      description: "Optional external image URL if no image is uploaded.",
      components: {
        input: UrlImagePreviewInput,
      },
    },
  ],
};
