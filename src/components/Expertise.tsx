import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    title: "Embedded & Systems Engineering",
    items: ["Embedded Systems", "Firmware Development", "Microcontrollers", "Sensor Integration", "Low Power Systems", "Communication Protocols"],
  },
  {
    title: "AI & Intelligent Computing",
    items: ["Artificial Intelligence of Things", "Computer Vision", "Edge AI", "Intelligent Monitoring", "Applied Machine Learning"],
  },
  {
    title: "Networks & Deployment",
    items: ["Internet of Things", "Wireless Sensor Networks", "LoRa & Wireless Communication", "Edge Computing", "Real-world Prototyping & Deployment"],
  },
];

export default function Expertise() {
  return (
    <SectionWrapper id="expertise" alt>
      <SectionHeading title="Expertise" subtitle="Core competencies across embedded systems, AI, and connected devices." />
      <div className="grid md:grid-cols-3 gap-8">
        {groups.map((g) => (
          <div key={g.title}>
            <h3 className="text-lg font-semibold text-foreground mb-4">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-sm rounded-md bg-card border border-border text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
