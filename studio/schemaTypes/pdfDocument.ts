// schemas/pdfDocument.ts
export default {
  name: "pdfDocument",
  title: "PDF Document",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: "pdf",
      title: "PDF File",
      type: "file",
      options: {
        accept: ".pdf",
      },
      validation: (Rule:any) =>
        Rule.custom((value: any, context: any) => {
          const url = context?.parent?.url;
          if (value || url) {
            return true;
          }
          return "Upload a PDF or provide an external link.";
        }),
    },
    {
      name: "url",
      title: "External Link",
      type: "url",
      description: "Optional link when no file is uploaded.",
    },
    {
      name: "displayPages",
      title: "Display Pages",
      type: "array",
      of: [{ type: "string" }],
      description: "Pages where this document should appear",
    },
  ],
};
