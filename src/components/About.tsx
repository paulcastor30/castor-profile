import Education from "./Education";
import Experience from "./Experience";
import AcademicService from "./AcademicService";
import { profile } from "@/lib/profile";

export default function About() {
  return (
    <section id="about" tabIndex={-1} className="portfolio-section" aria-labelledby="about-title">
      <div className="portfolio-container about-layout">
        <div><p className="eyebrow">Who I am</p><h2 id="about-title">About me</h2></div>
        <div className="about-copy">
          <p>I’m an engineer, researcher, and educator based in the Philippines. I work with small computers, sensors, and connected devices—from air quality monitoring to automated irrigation.</p>
          <p>I’m an Assistant Professor III at Mindanao State University – Iligan Institute of Technology (MSU-IIT). My work brings together practical engineering, research, and teaching.</p>
          <p>I’m interested in making devices more useful with artificial intelligence, and helping students turn their ideas into working projects.</p>
          <div className="research-profiles" role="group" aria-label="Research profiles">
            <a className="text-link" href={profile.orcid}>My research profile on ORCID</a>
            <a className="text-link" href={profile.scopus}>My publications on Scopus</a>
          </div>
          <details className="disclosure background-details">
            <summary>My education, experience, and academic service</summary>
            <div className="background-content"><Education /><Experience /><AcademicService /></div>
          </details>
        </div>
      </div>
    </section>
  );
}
