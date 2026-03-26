import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const positions = [
  { title: "Assistant Professor III", org: "Mindanao State University – Iligan Institute of Technology", period: "May 2024 – Present" },
  { title: "Instructor III", org: "Mindanao State University – Iligan Institute of Technology", period: "February 2024 – April 2024" },
  { title: "Assistant Lecturer", org: "Mindanao State University – Iligan Institute of Technology", period: "January 2022 – January 2024" },
];

const teachingAreas = [
  "Embedded Systems", "Electronics", "Industrial Electronics", "Feedback Control Systems",
  "Computer Organization & Architecture", "Assembly Programming", "Verilog HDL",
  "Embedded C", "Operating Systems", "Digital Signal Processing (MATLAB & Python)",
  "Real-Time Operating Systems",
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" alt>
      <SectionHeading title="Experience" />
      <div className="space-y-6 max-w-2xl mb-12">
        {positions.map((p, i) => (
          <div key={i} className="p-5 rounded-xl border border-border bg-card">
            <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
            <p className="text-sm text-text-secondary mt-1">{p.org}</p>
            <p className="text-xs font-mono text-teal mt-2">{p.period}</p>
          </div>
        ))}
      </div>

      <div className="max-w-2xl">
        <h3 className="text-xl font-semibold text-foreground mb-3">Teaching & Technical Instruction</h3>
        <p className="text-text-secondary text-sm mb-4 leading-relaxed">
          Extensive instruction across core electrical, electronics, and computing disciplines—preparing students and engineers for embedded systems design, firmware development, and real-time system implementation.
        </p>
        <div className="flex flex-wrap gap-2">
          {teachingAreas.map((a) => (
            <span key={a} className="px-3 py-1.5 text-sm rounded-md bg-card border border-border text-foreground">{a}</span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
