import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Corbin United CMS",
  basePath: "/studio",
  projectId: "zxiksswa",
  dataset: "production",
  deployment: {
    appId: "nbqxhs104vc95fsj5q4evykd",
  },

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
