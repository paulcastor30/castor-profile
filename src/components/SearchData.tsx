import { useLocation } from "react-router-dom";
import { profile } from "@/lib/profile";
import { labPageMetadata } from "@/lib/labMetadata";
import { laboratory, thesisGroups, labHeads } from "@/data/laboratory";
import { people } from "@/data/people";
import { portraits } from "@/data/portraits";

const labId = `${profile.siteUrl}/lab#laboratory`;
function headPerson(head: typeof labHeads[number], index: number) {
  return { "@type": "Person", "@id": index === 0 ? `${profile.siteUrl}/#person` : `${profile.siteUrl}/lab#apple-rose-alce`, name: head.name, url: index === 0 ? `${profile.siteUrl}/` : `${profile.siteUrl}/lab/people`, image: `${profile.siteUrl}${portraits[head.name].src}`, jobTitle: index === 0 ? "Assistant Professor III" : "Lab co-head", affiliation: { "@id": labId }, ...(index === 0 ? { sameAs: [profile.github, profile.orcid, profile.scopus] } : {}) };
}
export default function SearchData() {
  const { pathname, search } = useLocation();
  const meta = labPageMetadata(pathname);
  if (meta.robots.startsWith("noindex")) return null;
  const group = thesisGroups.find(item => pathname === `/lab/research/${item.slug}`);
  const lab = { "@type": "Organization", "@id": labId, name: laboratory.name, url: `${profile.siteUrl}/lab`, location: { "@type": "Place", name: `${laboratory.department}, ${laboratory.college}, ${laboratory.university}` } };
  const page = { "@type": pathname === "/" ? "ProfilePage" : "WebPage", "@id": `${meta.canonical}#webpage`, url: meta.canonical, name: meta.title, description: meta.description, isPartOf: { "@id": `${profile.siteUrl}/#website` }, ...(pathname === "/" ? { mainEntity: { "@id": headPerson(labHeads[0], 0)["@id"] } } : { about: { "@id": labId } }), ...(group ? { mentions: group.researchers.map(name => ({ "@type": "Person", name })) } : {}) };
  const crumbs = pathname === "/" ? [] : [{ name: "Paul Castor", item: `${profile.siteUrl}/` }, { name: "Laboratory", item: `${profile.siteUrl}/lab` }, ...(pathname !== "/lab" ? [{ name: group ? "Research" : meta.title.split(" | ")[0], item: group ? `${profile.siteUrl}/lab/research` : meta.canonical }] : []), ...(group ? [{ name: group!.shortTitle, item: meta.canonical }] : [])];
  const graph: object[] = [ { "@type": "WebSite", "@id": `${profile.siteUrl}/#website`, name: "Paul Rodolf P. Castor", url: `${profile.siteUrl}/` }, lab, ...labHeads.map(headPerson), page ];
  if (crumbs.length) graph.push({ "@type": "BreadcrumbList", itemListElement: crumbs.map((crumb, i) => ({ "@type": "ListItem", position: i + 1, ...crumb })) });
  if (pathname === "/lab/people" && !search) graph.push({ "@type": "ItemList", name: "Laboratory researchers", itemListElement: people.map((person, i) => ({ "@type": "ListItem", position: i + 1, item: { "@type": "Person", name: person.name } })) });
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c") }} />;
}
