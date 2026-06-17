export default {
  name: "paymentOption",
  title: "Payment Option",
  type: "object",
  fields: [
    {
      name: "service",
      title: "Service",
      type: "string",
    },
    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "iconName",
      title: "Icon Name",
      type: "string",
      options: {
        list: [
          { title: "CashApp", value: "cashapp" },
          { title: "Zelle", value: "zelle" },
        ],
      },
    },
  ],
};
