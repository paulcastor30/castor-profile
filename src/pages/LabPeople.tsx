import Portrait from "@/components/Portrait";
import { Link, useSearchParams } from "react-router-dom";
import { laboratory, labHeads } from "@/data/laboratory";
import { people, normalizeSearch, compareMemberships, membershipHeading, surname } from "@/data/people";

const sectionId = (heading: string) => `people-${heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

export default function LabPeople() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") || "";
  const program = ["BS", "MS"].includes(params.get("program") || "") ? params.get("program") || "" : "";
  const cohort = ["2024", "2025", "2026", "current"].includes(params.get("group") || "") ? params.get("group") || "" : "";
  const matches = people.map(person => ({ ...person, memberships: person.memberships.filter(group => (!program || group.program === program) && (!cohort || (cohort === "current" ? group.graduationYear === null : String(group.graduationYear) === cohort))) })).filter(person => person.memberships.length > 0 && normalizeSearch([person.name, ...person.memberships.flatMap(group => [group.title, group.shortTitle])].join(" ")).includes(normalizeSearch(query.trim()))).sort((a, b) => compareMemberships(a.memberships[0], b.memberships[0]) || surname(a.name).localeCompare(surname(b.name), "en", { sensitivity: "base" }) || a.name.localeCompare(b.name));
  const visible = matches;
  const sections = [...new Set(visible.map(person => membershipHeading(person.memberships[0])))];
  function updateFilter(key: string, value: string) {
    const next = new URLSearchParams(params);
    next.delete("page");
    if (value) next.set(key, value); else next.delete(key);
    setParams(next, { replace: true });
  }
  return (
    <section className="portfolio-container lab-page">
      <p className="eyebrow">The people behind the work</p><h1>People</h1>
      <p className="lab-lede">Meet the people behind our undergraduate and master’s research in Computer Applications.</p>
      <h2 className="people-section-title">Lab co-heads</h2>
      <div className="lab-head-grid">{labHeads.map(head => <article className="lab-head" key={head.name}><Portrait name={head.name} className="head-portrait" optional /><h3>{head.name}</h3><p>Co-head · Master of Science</p><a className="text-link" href={`mailto:${head.email}`}>Email {head.name}</a></article>)}</div>
      <p className="lab-note">Based in the {laboratory.department}, {laboratory.college}.</p>
      <h2 className="people-section-title directory-title" id="people-directory-title" tabIndex={-1}>Find researchers</h2>
      <p>Browse Bachelor of Science in Computer Applications (BSCA) and Master of Science in Computer Applications (MSCA) researchers by name, topic, or graduation class.</p>
      <div className="research-filters people-filters" role="group" aria-label="Optional people filters">
        <div className="people-search"><label htmlFor="people-search">Search people by name or research topic</label><input id="people-search" type="search" value={query} onChange={event => updateFilter("q", event.target.value)} /></div>
        <div><label htmlFor="people-program">Program</label><select id="people-program" value={program} onChange={event => updateFilter("program", event.target.value)}><option value="">All programs</option><option value="BS">BSCA · Bachelor of Science</option><option value="MS">MSCA · Master of Science</option></select></div>
        <div><label htmlFor="people-group">Status / graduation class</label><select id="people-group" value={cohort} onChange={event => updateFilter("group", event.target.value)}><option value="">Everyone</option><option value="2026">Graduates · Class of 2026</option><option value="2025">Graduates · Class of 2025</option><option value="2024">Graduates · Class of 2024</option><option value="current">Current researchers</option></select></div>
        <button className="text-action" type="button" onClick={() => setParams({}, { replace: true })}>Clear filters</button>
      </div>
      <p className="research-count" role="status" aria-live="polite" aria-atomic="true">{matches.length} {matches.length === 1 ? "researcher" : "researchers"} · {program ? `${program}CA` : "All programs"} · {cohort === "current" ? "Current research" : cohort ? `Class of ${cohort}` : "Everyone"}</p>
      <p className="lab-note">Current researchers first, then newest graduating class. Names are alphabetical by surname within each section.</p>
      {sections.length > 1 && <nav className="people-section-links" aria-label="Jump to a people section"><p>Jump to a section:</p>{sections.map(heading => <Link className="text-link" key={heading} to={`/lab/people${params.size ? `?${params.toString()}` : ""}#${sectionId(heading)}`}>{heading}</Link>)}</nav>}
      {visible.length ? sections.map(heading => <section className="people-category" key={heading} aria-label={heading}><h2 id={sectionId(heading)} tabIndex={-1}>{heading}</h2><ul className="people-list">{visible.filter(person => membershipHeading(person.memberships[0]) === heading).map(person => <li className="person-entry" key={person.name} data-person={person.name}><Portrait name={person.name} className="directory-portrait" /><div><h3>{person.name}</h3>{person.memberships.map(group => <div className="person-membership" key={group.slug} data-group={group.slug}><p>{group.program}CA — {group.graduationYear ? `Graduated, Class of ${group.graduationYear}` : "Ongoing thesis research"}</p><Link className="text-link" to={`/lab/research/${group.slug}`}>Research: {group.shortTitle}</Link></div>)}</div></li>)}</ul></section>) : <div className="empty-results"><h2>No researchers match these filters</h2><p>Try another name or select “Clear filters”.</p></div>}
      <section className="project-contact" aria-labelledby="people-contact-title"><h2 id="people-contact-title">Interested in collaborating?</h2><p>Contact Paul about research collaboration or the laboratory.</p><a className="primary-action" href={`mailto:${labHeads[0].email}`}>Email Paul Castor</a><Link className="text-link" to="/lab/contact">View and copy lab email addresses</Link></section>
      <div className="actions"><Link className="text-link" to="/lab/people#people-directory-title">Back to researcher search</Link><Link className="text-link" to="/lab/research">Browse all research groups</Link></div>
    </section>
  );
}
