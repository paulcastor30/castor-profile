import { useSearchParams } from "react-router-dom";
import { thesisGroups } from "@/data/laboratory";
import { compareMemberships, membershipHeading } from "@/data/people";
import { ResearchCard } from "@/components/LabShared";

export default function LabResearch() {
  const [params, setParams] = useSearchParams();
  const program = ["BS", "MS"].includes(params.get("program") || "") ? params.get("program") || "" : "";
  const cohort = ["2025", "2026", "current"].includes(params.get("group") || "") ? params.get("group") || "" : "";
  const visible = thesisGroups.filter(group => (!program || group.program === program) && (!cohort || (cohort === "current" ? group.graduationYear === null : String(group.graduationYear) === cohort))).sort((a, b) => compareMemberships(a, b) || a.shortTitle.localeCompare(b.shortTitle));
  const sections = [...new Set(visible.map(group => membershipHeading(group)))];
  function updateFilter(key: string, value: string) {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value); else next.delete(key);
    setParams(next, { replace: true });
  }
  return (
    <section className="portfolio-container lab-page">
      <p className="eyebrow">Thesis groups</p><h1>Research</h1>
      <p className="lab-lede">Explore the questions our researchers work on, their teams, and their academic supervision.</p>
      <p className="lab-explanation">BSCA means Bachelor of Science in Computer Applications; MSCA means Master of Science in Computer Applications. Ongoing groups appear first, then graduates by newest class. Projects are alphabetical within each program and class.</p>
      <div className="research-filters" role="group" aria-label="Optional research filters">
        <div><label htmlFor="research-program">Program</label><select id="research-program" value={program} onChange={event => updateFilter("program", event.target.value)}><option value="">All programs</option><option value="BS">BS in Computer Applications</option><option value="MS">MS in Computer Applications</option></select></div>
        <div><label htmlFor="research-group">Status / graduation class</label><select id="research-group" value={cohort} onChange={event => updateFilter("group", event.target.value)}><option value="">All groups</option><option value="2026">Graduates · Class of 2026</option><option value="2025">Graduates · Class of 2025</option><option value="current">Current researchers</option></select></div>
        <button className="text-action" type="button" onClick={() => setParams({}, { replace: true })}>Show all research</button>
      </div>
      <p className="research-count" role="status" aria-live="polite" aria-atomic="true">{visible.length} {visible.length === 1 ? "thesis group" : "thesis groups"}</p>
      {visible.length ? <>{sections.map((heading, index) => <section className="research-category" key={heading} aria-labelledby={`research-category-${index}`}><h2 id={`research-category-${index}`}>{heading.replace("Current researchers", "Ongoing research")}</h2><div className="research-grid">{visible.filter(group => membershipHeading(group) === heading).map(group => <ResearchCard key={group.slug} group={group} />)}</div></section>)}</> : <div className="empty-results"><h2>No groups match these filters</h2><p>Choose another program or graduation class, or select “Show all research”.</p></div>}
    </section>
  );
}
