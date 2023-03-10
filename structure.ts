import Iframe from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/desk";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  if (schemaType === "post") {
    return S.document().views([
      S.view.form(),

      S.view
        .component(Iframe)
        .options({
          // required: Accepts an async function
          // OR a string
          url: `${
            process.env.NEXT_PUBLIC_SANITY_VERCEL_URL || "http://localhost:3000"
          }/api/preview`,
          // optional: set the default size
          defaultSize: `desktop`,
          // optional: add a reload button, or reload on new document revisions
          reload: {
            button: true,
          },
          // optional: pass attributes to the underlying `iframe` element:
          // see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
          attributes: {},
        })
        .title("Preview"),
    ]);
  }
};
