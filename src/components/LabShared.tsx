import { Link } from "react-router-dom";
import { groupStatus, programName, ThesisGroup, laboratory } from "@/data/laboratory";

export function LabAddress() {
  return <address className="lab-address">{laboratory.department}<br />{laboratory.college}<br />{laboratory.university}</address>;
}

export function ResearchCard({ group }: { group: ThesisGroup }) {
  return (
    <article className="work-card research-card">
      <p className="work-role">{programName(group.program)}</p>
      <h2><Link to={`/lab/research/${group.slug}`}>{group.shortTitle}</Link></h2>
      <p className="work-description">{group.summary}</p>
      <p className="work-role">{groupStatus(group)}</p>
      <p>{group.researchers.length === 1 ? group.researchers[0] : `${group.researchers.length} researchers`}</p>
      {group.outputs.length > 0 && <p className="output-note">{group.outputs.length} research {group.outputs.length === 1 ? "output" : "outputs"} · {[...new Set(group.outputs.map(output => output.status))].join(", ")}</p>}
    </article>
  );
}

export function ResearcherCard({ name, program, year }: { name: string; program: ThesisGroup["program"]; year: number | null }) {
  return (
    <article className="researcher-card">
      <div className="portrait-placeholder" aria-hidden="true" />
      <h3>{name}</h3>
      <p>{programName(program)}</p>
      <p>{year ? `Graduated · Class of ${year}` : "Current researcher"}</p>
    </article>
  );
}
