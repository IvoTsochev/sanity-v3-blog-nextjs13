import { defineConfig, WorkspaceOptions } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";

// import StudioNavbar from "./components/StudioNavbar";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! || "rknir2qt";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET! || "production";

export default defineConfig<WorkspaceOptions>({
  basePath: "/studio",
  name: "HEADLESS_Content_Studio",
  title: "HEADLESS Content Studio",
  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  // studio: {
  //   components: {
  //     logo: Logo,
  //     navbar: StudioNavbar,
  //   },
  // },
  theme: myTheme,
});
