import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const journals = [
  "Bulletin of Electrical Engineering and Informatics (BEEI)",
  "International Journal of Informatics and Communication Technology (IJ-ICT)",
  "Indonesian Journal of Electrical Engineering and Computer Science (IJEECS)",
  "Telecommunication, Computing, Electronics and Control (TELKOMNIKA)",
  "IAES International Journal of Robotics and Automation (IJRA)",
];
const conferences = [
  "International Conference on Electrical, Computer, Communications and Mechatronics Engineering (ICECCME)",
  "International Conference on Artificial Intelligence, Computer, Data Sciences, and Applications (ACDSA)",
  "International Conference on Electrical and Computer Engineering Researches (ICECER)",
  "IEEE Symposium on Computer Applications & Industrial Electronics (ISCAIE)",
  "IEEE Symposium on Computers & Informatics (ISCI)",
  "IEEE Symposium on Industrial Electronics & Applications (ISIEA)",
  "Uttar Pradesh Section International Conference on Electrical, Electronics and Computer Engineering (UPCON)",
];

export default function AcademicService() {
  return <SectionWrapper id="academic-service">
    <SectionHeading title="Editorial and academic service" subtitle="Helping assess research and support academic conferences." />
    <div className="academic-roles">
      <article><h3>Associate Editor</h3><p>Information Processing in Agriculture · Elsevier</p><p>September 19, 2026 – September 19, 2028</p><p>I help with the journal’s research review process.</p></article>
      <article><h3>Technical Program Committee Member</h3><p>Semantic Web Technologies Track</p><p>International Conference on Emerging Ubiquitous Systems and Pervasive Networks (EUSPN)</p></article>
    </div>
    <div className="academic-review-lists">
      <section aria-labelledby="journal-review-title"><h3 id="journal-review-title">Journal reviewer</h3><ul>{journals.map(name => <li key={name}>{name}</li>)}</ul></section>
      <section aria-labelledby="conference-review-title"><h3 id="conference-review-title">Conference reviewer</h3><ul>{conferences.map(name => <li key={name}>{name}</li>)}</ul></section>
    </div>
  </SectionWrapper>;
}
