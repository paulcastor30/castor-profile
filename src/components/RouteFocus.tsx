import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { labPageMetadata } from "@/lib/labMetadata";

export default function RouteFocus() {
  const { pathname, hash } = useLocation();
  const firstLoad = useRef(true);
  useEffect(() => {
    const shouldFocus = !firstLoad.current || Boolean(hash);
    firstLoad.current = false;
    const frame = requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : document.getElementById("main-content");
      if (target && shouldFocus) { target.focus({ preventScroll: true }); if (hash) target.scrollIntoView(); else window.scrollTo(0, 0); }
    });
    const metadata = labPageMetadata(pathname);
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", metadata.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", metadata.canonical);
    for (const [selector, value] of [['meta[property="og:title"]', metadata.title], ['meta[property="og:description"]', metadata.description], ['meta[property="og:url"]', metadata.canonical], ['meta[name="twitter:title"]', metadata.title], ['meta[name="twitter:description"]', metadata.description]]) {
      document.querySelector(selector)?.setAttribute("content", value);
    }
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}
