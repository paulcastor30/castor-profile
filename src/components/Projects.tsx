import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { ChevronDown, ChevronUp } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  stack: string[];
  role: string;
  tags: string[];
  details?: string;
};

const projects: Project[] = [
  {
    title: "Outdoor Air Quality Monitoring System using WAN",
    desc: "Multi-node environmental monitoring system with wide-area communication for university campus deployment.",
    stack: ["ESP32", "LoRa", "MQTT", "Python", "Sensors"],
    role: "Lead developer",
    tags: ["IoT", "Monitoring", "Edge"],
    details: "Designed and deployed sensor nodes across campus with LoRa-based communication, server-side data aggregation, and a web dashboard for real-time air quality visualization.",
  },
  {
    title: "Automated Water Irrigation System for Rice Fields",
    desc: "Sensor-driven automated irrigation system for agricultural use with microcontroller-based control logic.",
    stack: ["Microcontroller", "Sensors", "Embedded C"],
    role: "Lead developer",
    tags: ["Embedded", "Control"],
  },
  {
    title: "Closed Loop Position Control System for 4-axis SCARA Robot",
    desc: "Precision motion control system for a 4-axis robotic arm using PID feedback control.",
    stack: ["Microcontroller", "PID", "MATLAB"],
    role: "Developer",
    tags: ["Control", "Embedded"],
  },
  {
    title: "Wi-Fi Voice Activated Control 2WD Robot",
    desc: "Voice-controlled mobile robot with Wi-Fi connectivity for remote command processing.",
    stack: ["ESP8266", "Wi-Fi", "Embedded C"],
    role: "Developer",
    tags: ["IoT", "Embedded"],
  },
  {
    title: "Indoor Air Quality Monitoring System using RT-Thread OS",
    desc: "Real-time embedded monitoring system built on RT-Thread RTOS for responsive sensor data processing.",
    stack: ["CH32V208", "RT-Thread", "C", "Sensors"],
    role: "Developer",
    tags: ["RTOS", "Monitoring", "Embedded"],
  },
  {
    title: "Indoor Air Quality Harvester GUI",
    desc: "Desktop application for collecting and visualizing indoor air quality data from embedded sensor nodes.",
    stack: ["Python", "GUI", "Serial"],
    role: "Developer",
    tags: ["Monitoring", "IoT"],
  },
  {
    title: "Carbon Dioxide Quality Monitoring System",
    desc: "Dedicated CO₂ monitoring device for indoor environments with alert thresholds.",
    stack: ["Microcontroller", "CO₂ Sensor", "Embedded C"],
    role: "Developer",
    tags: ["Monitoring", "Embedded", "Edge"],
  },
];

function ProjectCard({ p }: { p: Project }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="p-5 rounded-xl border border-border bg-card hover:border-teal/30 hover:shadow-sm transition-all">
      <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
      <p className="text-sm text-text-secondary mt-2 leading-relaxed">{p.desc}</p>
      {p.details && expanded && (
        <p className="text-sm text-text-secondary mt-2 leading-relaxed">{p.details}</p>
      )}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span key={s} className="text-xs px-2 py-0.5 rounded bg-teal-muted text-teal font-medium">{s}</span>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        {p.tags.map((t) => (
          <span key={t} className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground">{t}</span>
        ))}
        <span className="text-xs text-text-secondary ml-auto">{p.role}</span>
      </div>
      {p.details && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-xs text-teal hover:text-teal-light font-medium flex items-center gap-1 transition-colors"
        >
          {expanded ? "Less" : "More details"} {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading title="Featured Projects" subtitle="Selected engineering and research projects." />
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={i} p={p} />
        ))}
      </div>
    </SectionWrapper>
  );
}
