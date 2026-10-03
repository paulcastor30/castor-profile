import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const degrees = [
  {
    degree: "Master of Science in Computer Applications",
    school: "Mindanao State University – Iligan Institute of Technology",
    date: "March 2023",
    details: [
      "Thesis: Design and Development of an Outdoor Air Quality Monitoring System",
      "ERDT Scholar",
    ],
  },
  {
    degree: "Bachelor of Science in Industrial Automation and Mechatronics",
    school: "Mindanao State University – Iligan Institute of Technology",
    date: "June 2019",
    details: [
      "Thesis: Re-Engineering of Laser Printer Canon LBP2900",
    ],
  },
  {
    degree: "Bachelor of Science in Electronics and Computer Technology",
    school: "Mindanao State University – Iligan Institute of Technology",
    date: "January 2018",
    details: [
      "Major in Embedded Systems",
      "Thesis: Design and Development of an Automated Water Irrigation System on Rice Fields",
    ],
  },
];

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading title="Education" />
      <div className="space-y-8 max-w-2xl">
        {degrees.map((d, i) => (
          <div key={i} className="relative pl-6 border-l-2 border-teal/30">
            <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-teal" />
            <p className="text-xs font-mono text-text-secondary mb-1">{d.date}</p>
            <h3 className="text-lg font-semibold text-foreground">{d.degree}</h3>
            <p className="text-sm text-text-secondary mt-1">{d.school}</p>
            <ul className="mt-2 space-y-1">
              {d.details.map((det, j) => (
                <li key={j} className="text-sm text-text-secondary">{det}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
