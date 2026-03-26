import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const journalReviewer = [
  "Bulletin of Electrical Engineering and Informatics",
  "TELKOMNIKA",
  "Indonesian Journal of Electrical Engineering and Computer Science",
  "International Journal of Information and Communication Technology",
];

const conferenceReviewer = ["ACDSA", "ICECER", "ICECCME"];

export default function AcademicService() {
  return (
    <SectionWrapper id="academic-service">
      <SectionHeading title="Academic Service & Review" subtitle="Peer review contributions to journals and conferences." />
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
        <div>
          <h3 className="text-base font-semibold text-foreground mb-3">Journal Reviewer</h3>
          <ul className="space-y-2">
            {journalReviewer.map((j) => (
              <li key={j} className="text-sm text-text-secondary flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                {j}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold text-foreground mb-3">Conference Reviewer</h3>
          <ul className="space-y-2">
            {conferenceReviewer.map((c) => (
              <li key={c} className="text-sm text-text-secondary flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
