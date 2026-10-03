import { profile } from "@/lib/profile";
import { publications, conferencePapers, ResearchPaper } from "@/data/research";

function Paper({ paper }: { paper: ResearchPaper }) {
  return <article>
    <h4>{paper.url ? <a href={paper.url}>{paper.title}</a> : paper.title}</h4>
    <p className="paper-status">{paper.status} · {paper.year} · {paper.role}</p>
    <p>{paper.authors}</p><p>{paper.venue}</p>
  </article>;
}

export default function Publications() {
  return <div className="publication-list">
    <p>Publications and conference papers from my research and collaborations. Linked titles open the publisher’s page.</p>
    <section aria-labelledby="published-papers-title"><h3 id="published-papers-title">Published papers</h3>{publications.map(paper => <Paper key={paper.title} paper={paper} />)}</section>
    <details className="disclosure conference-papers">
      <summary>Conference papers · {conferencePapers.length} entries</summary>
      <div><h3>Conference papers</h3><p>“Accepted” marks a confirmed acceptance. Other entries are listed as conference papers; the conference date does not indicate that a paper was presented or published. Publisher links will be added when available.</p>{conferencePapers.map(paper => <Paper key={paper.title} paper={paper} />)}</div>
    </details>
    <a className="text-link" href={`mailto:${profile.email}?subject=Question%20about%20your%20research`}>Email me about a research paper <span aria-hidden="true">↗</span></a>
  </div>;
}
