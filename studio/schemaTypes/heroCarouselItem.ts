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
      name: "aspect",
      title: "Aspect",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "url",
      title: "Media URL",
      type: "url",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
