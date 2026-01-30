export default {
  name: "heroTextContent",
  title: "Hero Text Content",
  type: "object",
  fields: [
    {
      name: "greeting",
      title: "Greeting",
      type: "string",
    },
    {
      name: "message",
      title: "Message",
      type: "text",
      rows: 4,
    },
    {
      name: "closing",
      title: "Closing",
      type: "text",
      rows: 2,
    },
    {
      name: "signature",
      title: "Signature",
      type: "heroSignature",
    },
  ],
};
