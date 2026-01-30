export default {
  name: "descList",
  title: "Description List",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
