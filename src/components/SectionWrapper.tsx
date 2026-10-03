import { ReactNode } from "react";

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
}

export default function SectionWrapper({ id, children, className = "", alt }: Props) {
  return (
    <section id={id} className={`py-12 ${alt ? "bg-section-alt" : "bg-background"} ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}
