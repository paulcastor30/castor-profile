import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
}

export default function SectionWrapper({ id, children, className = "", alt }: Props) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${alt ? "bg-section-alt" : "bg-background"} ${className}`}
    >
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
