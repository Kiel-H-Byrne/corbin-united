export default {
  name: "payment",
  title: "Payment",
  type: "object",
  fields: [
    {
      name: "amount",
      title: "Amount",
      type: "paymentAmount",
    },
    {
      name: "options",
      title: "Options",
      type: "array",
      of: [{ type: "paymentOption" }],
    },
    {
      name: "note",
      title: "Note",
      type: "string",
    },
  ],
};
