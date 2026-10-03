import Portrait from "@/components/Portrait";
import { Link } from "react-router-dom";
import { laboratory, labHeads } from "@/data/laboratory";
import { LabAddress } from "@/components/LabShared";

export default function LabHome() {
  return (
    <>
      <section className="portfolio-container lab-intro">
        <p className="eyebrow">Research · Learning · Collaboration</p>
        <h1>{laboratory.name}</h1>
        <p className="lab-lede">Exploring intelligent devices and connected systems that respond to the world around us.</p>
        <p className="lab-explanation">Edge intelligence means processing information close to where it is collected, such as on a sensor or a small computer. AIoT brings artificial intelligence together with connected devices.</p>
        <div className="actions"><Link className="primary-action" to="/lab/research">Explore the research</Link><Link className="text-action" to="/lab/contact">Contact the lab heads</Link></div>
      </section>
      <section className="portfolio-section" aria-labelledby="heads-title">
        <div className="portfolio-container">
          <p className="eyebrow">Faculty leadership</p><h2 id="heads-title">Lab co-heads</h2>
          <div className="lab-head-grid">
            {labHeads.map(head => <article className="lab-head" key={head.name}><Portrait name={head.name} className="head-portrait" optional /><p className="eyebrow">Lab co-head</p><h3>{head.name}</h3><p>Master of Science</p><a className="text-link" href={`mailto:${head.email}`}>Email {head.name}</a></article>)}
          </div>
          <p className="lab-note">Each thesis group lists its own adviser and co-adviser. Lab leadership and thesis supervision are distinct roles.</p>
        </div>
      </section>
      <section className="portfolio-section" aria-labelledby="location-title"><div className="portfolio-container about-layout"><div><p className="eyebrow">Where we are based</p><h2 id="location-title">Our academic setting</h2></div><div><LabAddress /><p className="lab-note">For research questions, potential collaborations, or information about the group, contact either lab head.</p><Link className="text-link" to="/lab/contact">Get in touch with the laboratory</Link></div></div></section>
    </>
  );
}
