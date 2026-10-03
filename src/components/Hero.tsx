import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/profile";

export default function Hero() {
  return (
    <section id="home" tabIndex={-1} className="hero portfolio-container" aria-labelledby="intro-title">
      <div className="hero-copy">
        <p className="eyebrow">Engineer · Researcher · Educator</p>
        <h1 id="intro-title">Hi, I’m Paul<span aria-hidden="true">.</span></h1>
        <p className="full-name">Paul Rodolf P. Castor</p>
        <p className="hero-description">I build connected sensors and practical tools for environmental monitoring, agriculture, and assistive technology.</p>
        <p className="hero-affiliation">Assistant Professor at Mindanao State University – Iligan Institute of Technology (MSU-IIT), Philippines.</p>
        <div className="actions">
          <a className="primary-action" href={`mailto:${profile.email}`}>Email me <ArrowUpRight size={18} aria-hidden="true" /></a>
          <a className="text-action" href="#projects">Explore my work <ArrowDown size={17} aria-hidden="true" /></a>
        </div>
        <p className="contact-help hero-contact-help">“Email me” opens your email app. <a className="text-link" href="#contact">View or copy my email address</a></p>
      </div>
    </section>
  );
}
