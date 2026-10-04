import { Analytics, type BeforeSend } from "@vercel/analytics/react";
import { useLocation } from "react-router-dom";

// Directory searches and filter values are not needed to count page views.
const removeSearchAndHash: BeforeSend = event => {
  const url = new URL(event.url);
  url.search = "";
  url.hash = "";
  return { ...event, url: url.toString() };
};

export default function WebAnalytics() {
  const { pathname } = useLocation();
  return <Analytics route={pathname} path={pathname} beforeSend={removeSearchAndHash} />;
}
