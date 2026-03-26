import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { FlaskConical, Cpu, GraduationCap, Layers } from "lucide-react";

const cards = [
  {
    icon: FlaskConical,
    title: "Research grounded in deployment",
    desc: "Published work backed by working prototypes, real data, and tested systems—not just simulations.",
  },
  {
    icon: Cpu,
    title: "Strong embedded & firmware foundation",
    desc: "Hands-on experience with microcontrollers, SBCs, sensor integration, and communication protocols from concept to PCB.",
  },
  {
    icon: GraduationCap,
    title: "Teaches, builds, and evaluates systems",
    desc: "Academic instruction in electronics, control systems, and embedded programming combined with engineering practice.",
  },
  {
    icon: Layers,
    title: "Capable across hardware, software, and applied AI",
    desc: "Integrates firmware, edge computing, computer vision, and IoT across multiple platforms and languages.",
  },
];

export default function WhyPaul() {
  return (
    <SectionWrapper id="why-paul">
      <SectionHeading title="Why Paul" subtitle="What makes this profile distinct." />
      <div className="grid sm:grid-cols-2 gap-6">
        {cards.map((c) => (
          <div
            key={c.title}
            className="group p-6 rounded-xl border border-border bg-card hover:border-teal/30 hover:shadow-md transition-all duration-300"
          >
            <c.icon size={24} className="text-teal mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">{c.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
