import Publications from "./Publications";
import { Link } from "react-router-dom";
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
    title: "Goat location monitoring",
    desc: "A connected collar project designed to monitor goats within a defined area, using long-range wireless communication.",
    stack: ["ESP32", "LoRaWAN", "C/C++"],
    role: "Thesis adviser",
    tags: ["IoT", "Monitoring"],
    group: "goat-geofencing",
    period: "August 2025 – May 2026",
  },
  {
    title: "Wearable sign-language letter recognition",
    desc: "A wearable prototype that recognizes American Sign Language letters. Its pilot study examines feasibility, ease of use, and acceptance.",
    stack: ["Raspberry Pi", "Python", "Machine Learning"],
    role: "Thesis adviser",
    tags: ["Edge", "Assistive"],
    group: "sign-language-headset",
    period: "August 2024 – May 2025",
  },
  {
    title: "Daily and faculty time record generator",
    desc: "A browser app for preparing Daily Time Records (DTR) and Faculty Daily Time Records (FDTR), reviewing monthly entries, and downloading Word or PDF documents. Information stays in the user's browser.",
    stack: ["JavaScript", "Word and PDF export"],
    role: "Developer",
    repository: "https://github.com/paulcastor30/dtr-fdtr-generator",
    website: "https://paulcastor30.github.io/dtr-fdtr-generator/",
    websiteLabel: "Open the time record generator",
  },
  {
    title: "Department of Computer Applications website",
    desc: "A website for MSU-IIT’s Department of Computer Applications, bringing together program information, faculty profiles, news, and a thesis process guide for undergraduate and master’s students.",
    stack: ["React", "TypeScript", "Django"],
    role: "Maintainer",
    repository: "https://github.com/paulcastor30/Department-of-Computer-Applications",
    website: "https://msuiit-comapps.vercel.app",
    websiteLabel: "Visit the department website",
  },
  {
    title: "Calamansi disease detection",
    desc: "A small device uses image recognition to help detect citrus greening, a disease affecting calamansi plants.",
    stack: ["ESP32-S3", "C/C++", "Edge Impulse"],
    role: "Thesis adviser",
    group: "calamansi-disease",
    period: "August 2025 – May 2026",
  },
  {
    title: "Fish transport temperature monitoring",
    desc: "A connected sensor system monitors temperatures in fish containers during distribution.",
    stack: ["ESP32", "C/C++", "Low-power sensor networks"],
    role: "Thesis adviser",
    group: "fish-container-temperature",
    period: "August 2024 – May 2025",
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
              {project.period && <p className="work-role">Research period: {project.period}</p>}
              <p className="work-role">My role: {project.role.toLowerCase()}</p>
              {project.group && <Link className="text-link" to={`/lab/research/${project.group}`}>Meet the {project.group === "goat-geofencing" ? "goat monitoring" : "sign-language"} research team</Link>}
              <a className="text-link" href={`mailto:${profile.email}?subject=${encodeURIComponent(`Question about ${project.title}`)}`} aria-label={`Email me about this project: ${project.title}`}>Email me about this project <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
        <details className="disclosure">
          <summary>More projects, including web apps</summary>
          <div className="additional-work">
            {projects.slice(3).map(project => (
              <article key={project.title}><h3>{project.title}</h3><p>{project.desc}</p><p className="work-role">My role: {project.role.toLowerCase()}</p><p className="technology">Tools and platform: {project.stack.join(", ")}</p>{project.period && <p>Research period: {project.period}</p>}{project.group && <Link className="text-link" to={`/lab/research/${project.group}`}>Meet the {project.title.toLowerCase()} team</Link>}{project.website && <a className="text-link" href={project.website}>{project.websiteLabel}</a>}{project.repository && <a className="text-link" href={project.repository} aria-label={`View source code on GitHub for ${project.title}`}>View source code on GitHub</a>}</article>
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
