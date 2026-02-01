import { UrlImagePreviewInput } from "../components/UrlImagePreviewInput";

export default {
  name: "heroCarouselItem",
  title: "Hero Carousel Item",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "textContent",
      title: "Text Content",
      type: "heroTextContent",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "type",
      title: "Media Type",
      type: "string",
      options: {
        list: [
          { title: "Video", value: "video" },
          { title: "Image", value: "image" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "mediaFile",
      title: "Media File",
      type: "file",
      description: "Upload a video file (3gp supported). Takes precedence over URL.",
      options: {
        accept: "video/*,.3gp",
      },
    },
    {
      name: "aspect",
      title: "Aspect",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "url",
      title: "Media URL",
      type: "url",
      components: {
        input: UrlImagePreviewInput,
      },
      validation: (Rule: any) =>
        Rule.custom((value: any, context: any) => {
          const mediaFile = context?.parent?.mediaFile;
          if (value || mediaFile) {
            return true;
          }
          return "Provide a media URL or upload a media file.";
        }),
    },
  ],
};
