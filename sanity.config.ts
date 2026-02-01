import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schemaTypes } from "./app/studio/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Corbin United CMS",

  projectId: "zxiksswa",
  dataset: "production",

  // Embedded Studio route base path
  basePath: "/studio",

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
