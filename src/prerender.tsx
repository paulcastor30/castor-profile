import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes } from "./App";
import { thesisGroups } from "./data/laboratory";
import { labPageMetadata } from "./lib/labMetadata";

export const paths = ["/", "/lab", "/lab/research", "/lab/people", "/lab/contact", ...thesisGroups.map(group => `/lab/research/${group.slug}`)];
export function renderPage(path: string) {
  return { html: renderToString(<StaticRouter location={path}><AppRoutes /></StaticRouter>), metadata: labPageMetadata(path) };
}
