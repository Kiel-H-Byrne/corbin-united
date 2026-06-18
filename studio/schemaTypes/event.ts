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
    {
      name: "images",
      title: "Event Images (Multiple)",
      type: "array",
      description: "Upload multiple images (e.g., front and back of a flyer).",
      of: [
        { type: "image", options: { hotspot: true, accept: "image/*" } },
        { type: "url", name: "imageUrl", title: "Image URL", components: { input: UrlImagePreviewInput } }
      ],
    },
    {
      name: "thumbnailFile",
      title: "Thumbnail Upload",
      type: "image",
      options: { hotspot: true, accept: "image/*" },
    },
    {
      name: "thumbnailUrl",
      title: "Thumbnail URL (Fallback)",
      type: "url",
      description: "Optional external thumbnail URL if no thumbnail is uploaded.",
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
