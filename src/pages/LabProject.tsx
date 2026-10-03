import { Link, useParams } from "react-router-dom";
import { thesisGroups, groupStatus, programName, labHeads } from "@/data/laboratory";
import { ResearcherCard } from "@/components/LabShared";

export default function LabProject() {
  const { slug } = useParams();
  const group = thesisGroups.find(item => item.slug === slug);
  if (!group) return <section className="portfolio-container lab-page"><h1>Research group not found</h1><p>This address does not match a thesis group in our directory.</p><Link className="primary-action" to="/lab/research">Browse all research</Link></section>;
  const coAdvisers = [group.coAdviser, ...(group.additionalCoAdvisers || [])].filter((name): name is string => Boolean(name));
  const contact = labHeads.find(head => head.name === group.adviser) || labHeads.find(head => coAdvisers.includes(head.name));
  return (
    <section className="portfolio-container lab-page">
      <Link className="text-link" to="/lab/research">Back to all research</Link>
      <p className="eyebrow project-program">{programName(group.program)}</p><h1>{group.shortTitle}</h1>
      <p className="lab-lede">{group.summary}</p>
      <p className="group-status">{groupStatus(group)}</p>
      <div className="thesis-record"><h2>Official thesis title</h2><p>{group.title}</p><dl className="supervision"><div><dt>Thesis adviser</dt><dd>{group.adviser}</dd></div><div><dt>{coAdvisers.length > 1 ? "Co-advisers" : "Co-adviser"}</dt><dd>{coAdvisers.length ? <ul className="co-adviser-list">{coAdvisers.map(name => <li key={name}>{name}</li>)}</ul> : "No co-adviser listed"}</dd></div></dl></div>
      <h2 className="people-section-title">Researchers</h2>
      <div className="researcher-grid">{group.researchers.map(name => <ResearcherCard key={name} name={name} program={group.program} year={group.graduationYear} />)}</div>
      {group.outputs.length > 0 && <section className="research-outputs" aria-labelledby="outputs-title"><h2 id="outputs-title">Research outputs</h2><p>Related papers include original studies and reviews of earlier research. Linked titles open the publisher’s page. Conference papers without a confirmed acceptance or publication are labeled “Conference paper”.</p>{group.outputs.map(output => <article key={output.title}><p className="output-status">{output.status} · {output.year}</p><h3>{output.url ? <a href={output.url}>{output.title}</a> : output.title}</h3><p>{output.authors}</p><p>{output.venue}</p></article>)}</section>}
      <div className="project-contact"><h2>Questions about this research?</h2><p>You can contact {contact?.name || "either lab head"} to ask about the project or its research outputs.</p><a className="primary-action" href={`mailto:${contact?.email || labHeads[0].email}?subject=${encodeURIComponent(`Question about ${group.shortTitle}`)}`}>Email about {group.shortTitle}</a><Link className="text-link" to="/lab/contact">View or copy lab email addresses</Link></div>
    </section>
  );
}
