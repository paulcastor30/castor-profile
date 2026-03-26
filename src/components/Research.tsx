import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { FlaskConical, Wrench } from "lucide-react";

const research = [
  "Intelligent monitoring systems",
  "Environmental and air quality sensing",
  "Embedded and IoT architectures",
  "Edge computing",
  "Human-centered assistive systems",
  "Computer vision in embedded applications",
];

const engineering = [
  "Sensor-driven systems",
  "Communication-integrated embedded devices",
  "Microcontroller and SBC based prototypes",
  "Low power and real-time aware design",
  "Applied AI for detection and monitoring",
  "End-to-end prototyping from concept to testing",
];

export default function Research() {
  return (
    <SectionWrapper id="research">
      <SectionHeading title="Research & Engineering Focus" />
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FlaskConical size={20} className="text-teal" />
            <h3 className="text-lg font-semibold text-foreground">Research Focus</h3>
          </div>
          <ul className="space-y-2">
            {research.map((r) => (
              <li key={r} className="text-sm text-text-secondary flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Wrench size={20} className="text-teal" />
            <h3 className="text-lg font-semibold text-foreground">Engineering Focus</h3>
          </div>
          <ul className="space-y-2">
            {engineering.map((e) => (
              <li key={e} className="text-sm text-text-secondary flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
