import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <SectionWrapper id="about" alt>
      <SectionHeading title="About" subtitle="Researcher. Engineer. Educator." />
      <div className="max-w-3xl space-y-5 text-text-secondary leading-relaxed">
        <p>
          Paul Rodolf P. Castor is an academic, embedded systems engineer, and AIoT researcher whose work spans edge computing, intelligent sensing, microcontroller-based systems, communication architectures, and applied artificial intelligence. He combines research, teaching, prototyping, and system implementation across hardware and software domains.
        </p>
        <p>
          Currently serving as <strong className="text-foreground">Assistant Professor III</strong> at{" "}
          <strong className="text-foreground">Mindanao State University – Iligan Institute of Technology</strong>, his research interests include Edge Computing, Artificial Intelligence, Internet of Things, Mechatronics, and Wireless Sensor Networks.
        </p>
        <p>
          His background supports both academic collaboration and industry-facing engineering work—bridging research thinking with practical engineering implementation.
        </p>
      </div>
    </SectionWrapper>
  );
}
