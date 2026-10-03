import { useRef } from "react";
import Portrait from "@/components/Portrait";
import { Link, useSearchParams } from "react-router-dom";
import { laboratory, labHeads, thesisGroups, groupStatus, programName } from "@/data/laboratory";
import { ResearcherCard } from "@/components/LabShared";

const pageSize = 6;
const normalize = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export default function LabPeople() {
  const [params, setParams] = useSearchParams();
  const directoryTitle = useRef<HTMLHeadingElement>(null);
  const query = params.get("q") || "";
  const program = ["BS", "MS"].includes(params.get("program") || "") ? params.get("program") || "" : "";
  const cohort = ["2025", "2026", "current"].includes(params.get("group") || "") ? params.get("group") || "" : "";
  const matches = thesisGroups.filter(group => (!program || group.program === program) && (!cohort || (cohort === "current" ? group.graduationYear === null : String(group.graduationYear) === cohort)) && normalize([group.title, group.shortTitle, ...group.researchers].join(" ")).includes(normalize(query.trim())));
  const pages = Math.max(1, Math.ceil(matches.length / pageSize));
  const requestedPage = Number(params.get("page"));
  const page = Number.isInteger(requestedPage) && requestedPage > 0 ? Math.min(requestedPage, pages) : 1;
  const visible = matches.slice((page - 1) * pageSize, page * pageSize);
  const people = new Set(matches.flatMap(group => group.researchers)).size;
  function updateFilter(key: string, value: string) {
    const next = new URLSearchParams(params);
    next.delete("page");
    if (value) next.set(key, value); else next.delete(key);
    setParams(next, { replace: true });
  }
  function changePage(nextPage: number) {
    const next = new URLSearchParams(params);
    if (nextPage > 1) next.set("page", String(nextPage)); else next.delete("page");
    setParams(next);
    directoryTitle.current?.focus({ preventScroll: true });
    directoryTitle.current?.scrollIntoView({ block: "start" });
  }
  return (
    <section className="portfolio-container lab-page">
      <p className="eyebrow">The people behind the work</p><h1>People</h1>
      <p className="lab-lede">Meet the co-heads and researchers in our thesis groups.</p>
      <h2 className="people-section-title">Lab co-heads</h2>
      <div className="lab-head-grid">{labHeads.map(head => <article className="lab-head" key={head.name}><Portrait name={head.name} className="head-portrait" optional /><h3>{head.name}</h3><p>Co-head · Master of Science</p><a className="text-link" href={`mailto:${head.email}`}>Email {head.name}</a></article>)}</div>
      <p className="lab-note">Based in the {laboratory.department}, {laboratory.college}.</p>
      <h2 className="people-section-title directory-title" id="people-directory-title" tabIndex={-1} ref={directoryTitle}>Find researchers</h2>
      <p>Search by name or browse six groups at a time. Select a group’s title for its research, or open its portraits below.</p>
      <div className="research-filters people-filters" role="group" aria-label="Optional people filters">
        <div className="people-search"><label htmlFor="people-search">Person or research group</label><input id="people-search" type="search" value={query} onChange={event => updateFilter("q", event.target.value)} /></div>
        <div><label htmlFor="people-program">Program</label><select id="people-program" value={program} onChange={event => updateFilter("program", event.target.value)}><option value="">All programs</option><option value="BS">Bachelor of Science</option><option value="MS">Master of Science</option></select></div>
        <div><label htmlFor="people-group">Researcher group</label><select id="people-group" value={cohort} onChange={event => updateFilter("group", event.target.value)}><option value="">All groups</option><option value="2026">Graduates · Class of 2026</option><option value="2025">Graduates · Class of 2025</option><option value="current">Current researchers</option></select></div>
        <button className="text-action" type="button" onClick={() => setParams({}, { replace: true })}>Clear filters</button>
      </div>
      <p className="research-count" role="status" aria-live="polite" aria-atomic="true">{matches.length} {matches.length === 1 ? "group" : "groups"} · {people} {people === 1 ? "researcher" : "researchers"}{matches.length > 0 && ` · Showing groups ${(page - 1) * pageSize + 1}–${Math.min(page * pageSize, matches.length)}`}</p>
      <p className="lab-note">Graduation classes identify completed programs. A researcher may appear in two groups when continuing to another program.</p>
      {visible.length ? visible.map(group => <section className="people-group" data-group={group.slug} aria-labelledby={`people-${group.slug}`} key={group.slug}><h2 id={`people-${group.slug}`}><Link to={`/lab/research/${group.slug}`}>{group.shortTitle}</Link></h2><p className="work-role">{programName(group.program)} · {groupStatus(group)}</p><ul className="people-names">{group.researchers.map(name => <li key={name}>{name}</li>)}</ul><details className="people-portraits"><summary>Show portraits for {group.shortTitle}</summary><div className="researcher-grid">{group.researchers.map(name => <ResearcherCard key={name} name={name} program={group.program} year={group.graduationYear} />)}</div></details></section>) : <div className="empty-results"><h2>No researchers match these filters</h2><p>Try another name or select “Clear filters”.</p></div>}
      {matches.length > pageSize && <nav className="people-pagination" aria-label="People directory pages"><button className="text-action" type="button" disabled={page === 1} onClick={() => changePage(page - 1)}>Previous groups</button><p>Page {page} of {pages}</p><button className="text-action" type="button" disabled={page === pages} onClick={() => changePage(page + 1)}>Next groups</button></nav>}
      <Link className="text-link" to="/lab/research">Browse all research groups</Link>
    </section>
  );
}
