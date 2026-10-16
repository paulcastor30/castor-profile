import { laboratory, thesisGroups } from "@/data/laboratory";
import { profile } from "./profile";

export function labPageMetadata(path: string) {
  const suffix = " | Edge Intelligence & AIoT Laboratory";
  const pages: Record<string, [string, string]> = {
    "/lab": [laboratory.name, "Explore our thesis research, meet co-heads Paul Castor and Apple Rose Alce, and contact the laboratory at MSU-IIT."],
    "/lab/research": ["Research" + suffix, "Explore ongoing BSCA and MSCA research, graduate thesis groups, advisers, publications, and conference papers at MSU-IIT."],
    "/lab/people": ["People" + suffix, "Meet Paul Rodolf P. Castor, Apple Rose B. Alce, and the laboratory’s BSCA and MSCA researchers. Explore their thesis projects and graduating classes."],
    "/lab/contact": ["Contact" + suffix, "Contact Paul Rodolf P. Castor or Apple Rose B. Alce at the Edge Intelligence and AIoT Research Laboratory."],
    "/": ["Paul Rodolf P. Castor | Engineer, Researcher & Educator", "Get to know Paul Rodolf P. Castor, an engineer, researcher, and educator at MSU-IIT in the Philippines. Explore his projects and get in touch."],
  };
  const group = thesisGroups.find(item => path === `/lab/research/${item.slug}`);
  const [title, description] = group ? [group.shortTitle + suffix, `${group.summary} ${group.program}CA research by ${group.researchers.join(", ")}.`] : pages[path] || ["Page not found | Paul Castor", "Return to Paul Castor’s portfolio or browse the laboratory’s research."];
  const hasProjectPreview = group && ["goat-geofencing", "sign-language-headset", "rice-tungro"].includes(group.slug);
  const isLab = path === "/lab" || path.startsWith("/lab/");
  const imagePath = hasProjectPreview ? `/images/social/${group.slug}.png` : isLab ? "/images/social/laboratory.png" : "/og-image.png";
  const imageAlt = hasProjectPreview ? `${group.shortTitle} — ${laboratory.name}` : isLab ? laboratory.name : "Paul Rodolf P. Castor — Engineer, Researcher, Educator";
  return { title, description, image: profile.siteUrl + imagePath, imageAlt, imageWidth: "1200", imageHeight: "630", robots: group || pages[path] ? "index, follow" : "noindex, follow", type: path === "/" ? "profile" : "website", canonical: profile.siteUrl + (path === "/" ? "/" : path) };
}
