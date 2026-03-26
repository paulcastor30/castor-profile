import { FileText, BookOpen, Mail } from "lucide-react";

const focusItems = [
  "Edge AI for real-world monitoring",
  "Embedded and IoT systems design",
  "Intelligent sensing and communication systems",
  "Research, prototyping, and technical instruction",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      {/* Accent glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="container relative pt-24 pb-16">
        <div className="max-w-3xl">
          <p className="text-teal font-mono text-sm tracking-wider mb-4">He / Him</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
            Paul Rodolf P. Castor
          </h1>
          <p className="mt-5 text-xl md:text-2xl font-serif text-navy-light dark:text-muted-foreground leading-relaxed">
            Embedded Systems Engineer, AIoT Researcher, and Assistant Professor
          </p>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-relaxed">
            Building intelligent embedded and edge systems across sensing, communication, computer vision, and applied research.
          </p>
          <p className="mt-3 text-text-secondary max-w-2xl leading-relaxed">
            Academic and engineering experience spanning embedded systems, firmware, IoT, edge computing, intelligent monitoring, teaching, and real-world prototyping.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal text-accent-foreground font-medium text-sm hover:bg-teal-light transition-colors"
            >
              <Mail size={16} /> Contact Me
            </a>
            <a
              href="#publications"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              <BookOpen size={16} /> View Publications
            </a>
            <a
              href="/Paul_Rodolf_Castor_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              <FileText size={16} /> View Resume
            </a>
          </div>

          {/* Social links */}
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            {[
              { label: "ORCID", href: "https://orcid.org/" },
              { label: "Google Scholar", href: "https://scholar.google.com/" },
              { label: "GitHub", href: "https://github.com/" },
              { label: "LinkedIn", href: "https://linkedin.com/" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal-light transition-colors font-medium"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Focus strip */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs font-mono uppercase tracking-widest text-text-secondary mb-4">Currently focused on</p>
          <div className="flex flex-wrap gap-3">
            {focusItems.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full text-sm bg-teal-muted text-teal font-medium border border-teal/10"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
