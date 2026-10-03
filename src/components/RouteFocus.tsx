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
    document.querySelector('meta[name="robots"]')?.setAttribute("content", metadata.robots);
    document.querySelector('meta[property="og:type"]')?.setAttribute("content", metadata.type);
    document.querySelector('meta[name="description"]')?.setAttribute("content", metadata.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", metadata.canonical);
    for (const [selector, value] of [['meta[property="og:image"]', metadata.image], ['meta[property="og:image:alt"]', metadata.imageAlt], ['meta[property="og:image:width"]', metadata.imageWidth], ['meta[property="og:image:height"]', metadata.imageHeight], ['meta[name="twitter:image"]', metadata.image], ['meta[property="og:title"]', metadata.title], ['meta[property="og:description"]', metadata.description], ['meta[property="og:url"]', metadata.canonical], ['meta[name="twitter:title"]', metadata.title], ['meta[name="twitter:description"]', metadata.description]]) {
      document.querySelector(selector)?.setAttribute("content", value);
    }
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}
