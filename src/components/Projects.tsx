import Publications from "./Publications";
import { profile } from "@/lib/profile";

const projects = [
  {
    title: "Outdoor air quality monitoring",
    desc: "Connected sensors collect outdoor air quality readings and bring them together in a dashboard for a university campus.",
    stack: ["ESP32", "LoRa", "MQTT", "Python", "Sensors"],
    role: "Lead developer",
    tags: ["IoT", "Monitoring", "Edge"],
    details: "Designed and deployed sensor nodes across campus with LoRa-based communication, server-side data aggregation, and a web dashboard for real-time air quality visualization.",
  },
  {
    title: "Automated irrigation for rice fields",
    desc: "A system that uses sensors to control irrigation in rice fields, automating when water is delivered.",
    stack: ["Microcontroller", "Sensors", "Embedded C"],
    role: "Lead developer",
    tags: ["Embedded", "Control"],
  },
  {
    title: "Motion control for a robotic arm",
    desc: "A control system that uses feedback to guide the movement of a four-axis robotic arm.",
    stack: ["Microcontroller", "PID", "MATLAB"],
    role: "Developer",
    tags: ["Control", "Embedded"],
  },
  {
    title: "Voice-controlled mobile robot",
    desc: "A small two-wheel robot that receives voice commands over Wi-Fi.",
    stack: ["ESP8266", "Wi-Fi", "Embedded C"],
    role: "Developer",
    tags: ["IoT", "Embedded"],
  },
  {
    title: "Indoor air quality monitoring",
    desc: "A device that collects and processes indoor air quality readings using software designed for timely responses.",
    stack: ["CH32V208", "RT-Thread", "C", "Sensors"],
    role: "Developer",
    tags: ["RTOS", "Monitoring", "Embedded"],
  },
  {
    title: "Air quality data collection app",
    desc: "A desktop app that collects indoor air quality readings from sensors and makes them easier to view.",
    stack: ["Python", "GUI", "Serial"],
    role: "Developer",
    tags: ["Monitoring", "IoT"],
  },
  {
    title: "Carbon dioxide monitoring",
    desc: "A device that measures carbon dioxide indoors and alerts people when a set limit is reached.",
    stack: ["Microcontroller", "CO₂ Sensor", "Embedded C"],
    role: "Developer",
    tags: ["Monitoring", "Embedded", "Edge"],
  },
];


export default function Projects() {
  return (
    <section id="projects" tabIndex={-1} className="portfolio-section" aria-labelledby="work-title">
      <div className="portfolio-container">
        <div className="section-introduction"><div><p className="eyebrow">Ideas put into practice</p><h2 id="work-title">My work</h2></div><p>A few examples of the systems I’ve worked on, and what they’re built to do.</p></div>
        <div className="featured-work">
          {projects.slice(0, 3).map((project, index) => (
            <article className="work-card" key={project.title}>
              <p className="work-number">Project 0{index + 1}</p>
              <h3>{project.title}</h3>
              <p className="work-description">{project.desc}</p>
              <p className="work-role">My role: {project.role.toLowerCase()}</p>
              <a className="text-link" href={`mailto:${profile.email}?subject=${encodeURIComponent(`Question about ${project.title}`)}`} aria-label={`Email me about this project: ${project.title}`}>Email me about this project <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
        <details className="disclosure">
          <summary>More engineering projects</summary>
          <div className="additional-work">
            {projects.slice(3).map(project => (
              <article key={project.title}><h3>{project.title}</h3><p>{project.desc}</p><p className="work-role">My role: {project.role.toLowerCase()}</p><p className="technology">Built with: {project.stack.join(", ")}</p></article>
            ))}
          </div>
        </details>
        <details className="disclosure">
          <summary>Research publications</summary>
          <Publications />
        </details>
      </div>
    </section>
  );
}
