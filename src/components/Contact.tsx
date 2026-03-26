import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { Mail, MapPin, Phone, FileText } from "lucide-react";

const links = [
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "Google Scholar", href: "https://scholar.google.com/" },
  { label: "ORCID", href: "https://orcid.org/" },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" alt>
      <SectionHeading title="Contact & Collaboration" />
      <div className="max-w-2xl">
        <p className="text-text-secondary leading-relaxed mb-8">
          Open to academic collaborations, engineering projects, embedded systems development, AIoT initiatives, research partnerships, and technical consulting opportunities.
        </p>

        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 text-sm text-text-secondary">
            <Mail size={16} className="text-teal" />
            <a href="mailto:paulrodolf.castor@g.msuiit.edu.ph" className="hover:text-foreground transition-colors">paulrodolf.castor@g.msuiit.edu.ph</a>
          </div>
          <div className="flex items-center gap-3 text-sm text-text-secondary">
            <Phone size={16} className="text-teal" />
            <span>Available upon request</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-text-secondary">
            <MapPin size={16} className="text-teal" />
            <span>Tukuran, Zamboanga del Sur, Philippines</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm font-medium hover:border-teal/30 hover:shadow-sm transition-all"
            >
              {l.label} ↗
            </a>
          ))}
        </div>

        <a
          href="/Paul_Rodolf_Castor_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal text-accent-foreground font-medium text-sm hover:bg-teal-light transition-colors"
        >
          <FileText size={16} /> Download Resume (PDF)
        </a>
      </div>
    </SectionWrapper>
  );
}
