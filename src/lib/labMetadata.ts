import { laboratory, thesisGroups } from "@/data/laboratory";
import { profile } from "./profile";

export function labPageMetadata(path: string) {
  const suffix = " | Edge Intelligence & AIoT Laboratory";
  const pages: Record<string, [string, string]> = {
    "/lab": [laboratory.name, "Explore our thesis research, meet co-heads Paul Castor and Apple Rose Alce, and contact the laboratory at MSU-IIT."],
    "/lab/research": ["Research" + suffix, "Browse BS and MS thesis groups, graduate cohorts, advisers, and accepted research outputs."],
    "/lab/people": ["People" + suffix, "Meet the lab co-heads and the researchers in our Computer Applications thesis groups."],
    "/lab/contact": ["Contact" + suffix, "Contact Paul Rodolf P. Castor or Apple Rose B. Alce at the Edge Intelligence and AIoT Research Laboratory."],
    "/": ["Paul Rodolf P. Castor | Engineer, Researcher & Educator", "Get to know Paul Rodolf P. Castor, an engineer, researcher, and educator at MSU-IIT in the Philippines. Explore his projects and get in touch."],
  };
  const group = thesisGroups.find(item => path === `/lab/research/${item.slug}`);
  const [title, description] = group ? [group.shortTitle + suffix, group.summary] : pages[path] || ["Page not found | Paul Castor", "Return to Paul Castor’s portfolio or browse the laboratory’s research."];
  return { title, description, canonical: profile.siteUrl + (path === "/" ? "/" : path) };
}
