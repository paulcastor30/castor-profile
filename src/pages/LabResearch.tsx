import { Link, useSearchParams } from "react-router-dom";
import { thesisGroups } from "@/data/laboratory";
import { compareMemberships, membershipHeading, normalizeSearch } from "@/data/people";
import { ResearchCard } from "@/components/LabShared";

const sectionId = (heading: string) => `research-${heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

export default function LabResearch() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") || "";
  const program = ["BS", "MS"].includes(params.get("program") || "") ? params.get("program") || "" : "";
  const cohort = ["2023", "2024", "2025", "2026", "current"].includes(params.get("group") || "") ? params.get("group") || "" : "";
  const visible = thesisGroups.filter(group => (!program || group.program === program) && (!cohort || (cohort === "current" ? group.graduationYear === null : String(group.graduationYear) === cohort)) && normalizeSearch([group.title, group.shortTitle, group.summary, ...group.researchers].join(" ")).includes(normalizeSearch(query.trim()))).sort((a, b) => compareMemberships(a, b) || a.shortTitle.localeCompare(b.shortTitle));
  const sections = [...new Set(visible.map(group => membershipHeading(group)))];
  function updateFilter(key: string, value: string) {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value); else next.delete(key);
    setParams(next, { replace: true });
  }
  return (
    <section className="portfolio-container lab-page research-directory">
      <p className="eyebrow">Thesis groups</p><h1>Research</h1>
      <p className="lab-lede" id="research-directory-title" tabIndex={-1}>Find thesis groups by topic, researcher, program, or graduation class.</p>
      <details className="disclosure directory-guide"><summary>Programs, ordering, and project status</summary><p className="lab-explanation">BSCA means Bachelor of Science in Computer Applications; MSCA means Master of Science in Computer Applications. Ongoing groups appear first, then graduates by newest class. Projects are alphabetical within each program and class.</p><p className="lab-explanation">Graduation years describe the researchers. They do not confirm that a system is complete, deployed, or maintained. Research outputs list their own acceptance or publication status.</p></details>
      <div className="research-filters" role="group" aria-label="Optional research filters">
        <div className="research-search"><label htmlFor="research-search">Search by topic or researcher name</label><input id="research-search" type="search" value={query} onChange={event => updateFilter("q", event.target.value)} /></div>
        <div><label htmlFor="research-program">Program</label><select id="research-program" value={program} onChange={event => updateFilter("program", event.target.value)}><option value="">All programs</option><option value="BS">BS in Computer Applications</option><option value="MS">MS in Computer Applications</option></select></div>
        <div><label htmlFor="research-group">Status / graduation class</label><select id="research-group" value={cohort} onChange={event => updateFilter("group", event.target.value)}><option value="">All groups</option><option value="current">Current researchers</option><option value="2026">Graduates · Class of 2026</option><option value="2025">Graduates · Class of 2025</option><option value="2024">Graduates · Class of 2024</option><option value="2023">Graduates · Class of 2023</option></select></div>
        <button className="text-action" type="button" onClick={() => setParams({}, { replace: true })}>Show all research</button>
      </div>
      <p className="research-count" role="status" aria-live="polite" aria-atomic="true">{visible.length} {visible.length === 1 ? "thesis group" : "thesis groups"}</p>
      {sections.length > 1 && <nav className="research-section-links" aria-label="Jump to a research section"><p>Jump to a section:</p>{sections.map(heading => <Link className="text-link" key={heading} to={`/lab/research${params.size ? `?${params.toString()}` : ""}#${sectionId(heading)}`}>{heading.replace("Current researchers", "Ongoing research")}</Link>)}</nav>}
      {visible.length ? <>{sections.map(heading => <section className="research-category" key={heading} aria-labelledby={sectionId(heading)}><h2 id={sectionId(heading)} tabIndex={-1}>{heading.replace("Current researchers", "Ongoing research")}</h2><div className="research-grid">{visible.filter(group => membershipHeading(group) === heading).map(group => <ResearchCard key={group.slug} group={group} />)}</div></section>)}</> : <div className="empty-results"><h2>No groups match these filters</h2><p>Try another topic or name, change the filters, or select “Show all research”.</p></div>}
      <section className="project-contact" aria-labelledby="research-contact-title">
        <h2 id="research-contact-title">Interested in our research?</h2>
        <p>Ask about a thesis group, research collaboration, or an idea you would like to discuss.</p>
        <Link className="primary-action" to="/lab/contact">Contact the lab heads</Link>
      </section>
      <div className="actions"><Link className="text-link" to={`/lab/research${params.size ? `?${params.toString()}` : ""}#research-directory-title`}>Back to research search</Link></div>
    </section>
  );
}
