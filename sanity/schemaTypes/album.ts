// schemas/album.ts
import { UrlImagePreviewInput } from "../components/UrlImagePreviewInput";
export default {
  name: "album",
  title: "Album",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Album Title",
      type: "string",
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      options: { layout: 'grid' },
      of: [
        {
          type: "image",
          options: { hotspot: true, accept: 'image/*' },
        },
      ],
      validation: (Rule:any) =>
        Rule.custom((value: any, context: any) => {
          const imageUrls = context?.parent?.imageUrls;
          if ((value && value.length) || (imageUrls && imageUrls.length)) {
            return true;
          }
          return "Add at least one image or image link.";
        }),
    },
    {
      name: "imageUrls",
      title: "Image Links",
      type: "array",
      of: [
        {
          type: "url",
          components: {
            input: UrlImagePreviewInput,
          },
        },
      ],
      description: "Optional external image URLs when no images are uploaded.",
    },
    {
      name: "displayPages",
      title: "Display Pages",
      type: "array",
      of: [{ type: "string" }],
      description: "Pages where this album should appear",
    },
  ],
};
