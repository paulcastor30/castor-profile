import { Link } from "react-router-dom";
import { laboratory, labHeads, thesisGroups, groupStatus } from "@/data/laboratory";
import { ResearcherCard } from "@/components/LabShared";

export default function LabPeople() {
  return (
    <section className="portfolio-container lab-page">
      <p className="eyebrow">The people behind the work</p><h1>People</h1>
      <p className="lab-lede">Meet the co-heads and the researchers associated with the laboratory’s thesis groups.</p>
      <h2 className="people-section-title">Lab co-heads</h2>
      <div className="lab-head-grid">{labHeads.map(head => <article className="lab-head" key={head.name}><h3>{head.name}</h3><p>Co-head · Master of Science</p><a className="text-link" href={`mailto:${head.email}`}>Email {head.name}</a></article>)}</div>
      <p className="lab-note">Based in the {laboratory.department}, {laboratory.college}.</p>
      {thesisGroups.map(group => <section className="people-group" aria-labelledby={`people-${group.slug}`} key={group.slug}><h2 id={`people-${group.slug}`}><Link to={`/lab/research/${group.slug}`}>{group.shortTitle}</Link></h2><p className="work-role">{groupStatus(group)}</p><div className="researcher-grid">{group.researchers.map(name => <ResearcherCard key={name} name={name} program={group.program} year={group.graduationYear} />)}</div></section>)}
    </section>
  );
}
