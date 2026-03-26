const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-serif font-bold text-lg text-foreground">Paul Rodolf P. Castor</p>
            <p className="text-sm text-text-secondary mt-1">
              Embedded Systems Engineer · AIoT Researcher · Assistant Professor
            </p>
            <p className="text-xs text-text-secondary mt-4 italic">
              Built for research, engineering, and collaboration.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">Quick Links</p>
            <ul className="space-y-1">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-text-secondary hover:text-foreground transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-xs text-text-secondary">
          © {new Date().getFullYear()} Paul Rodolf P. Castor. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
