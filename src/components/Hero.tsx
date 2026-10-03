import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/profile";

export default function Hero() {
  return (
    <section id="home" tabIndex={-1} className="hero portfolio-container" aria-labelledby="intro-title">
      <div className="hero-copy">
        <p className="eyebrow">Engineer · Researcher · Educator</p>
        <h1 id="intro-title">Hi, I’m Paul<span aria-hidden="true">.</span></h1>
        <p className="full-name">Paul Rodolf P. Castor</p>
        <p className="hero-description">I build devices that sense the world, connect with each other, and help people make better decisions.</p>
        <p className="hero-affiliation">Assistant Professor at Mindanao State University – Iligan Institute of Technology (MSU-IIT), Philippines.</p>
        <div className="actions">
          <a className="primary-action" href={`mailto:${profile.email}`}>Email me <ArrowUpRight size={18} aria-hidden="true" /></a>
          <a className="text-action" href="#projects">Explore my work <ArrowDown size={17} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="hero-aside">
        <p className="eyebrow">Where my work comes together</p>
        <div><span className="aside-number" aria-hidden="true">01</span><p><strong>Engineering</strong><span>Turning ideas into working devices.</span></p></div>
        <div><span className="aside-number" aria-hidden="true">02</span><p><strong>Research</strong><span>Exploring how technology can help.</span></p></div>
        <div><span className="aside-number" aria-hidden="true">03</span><p><strong>Teaching</strong><span>Helping others learn by building.</span></p></div>
      </div>
    </section>
  );
}
