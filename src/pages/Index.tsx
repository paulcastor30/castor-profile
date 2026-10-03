import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { profile } from "@/lib/profile";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: profile.siteUrl,
  mainEntity: {
    "@type": "Person",
    name: profile.name,
    jobTitle: "Engineer, Researcher, Assistant Professor",
    image: `${profile.siteUrl}/images/portraits/paul-rodolf-p-castor.webp`,
    url: profile.siteUrl,
    sameAs: [profile.github, profile.orcid, profile.scopus],
    affiliation: {
      "@type": "Organization",
      name: "Mindanao State University – Iligan Institute of Technology",
    },
  },
};

export default function Index() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <a className="skip-link" href="#contact">Skip to contact</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero /><About /><Projects /><Contact />
      </main>
      <Footer />
    </>
  );
}
