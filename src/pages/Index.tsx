import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyPaul from "@/components/WhyPaul";
import Expertise from "@/components/Expertise";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import AcademicService from "@/components/AcademicService";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Paul Rodolf P. Castor",
    jobTitle: "Embedded Systems Engineer, AIoT Researcher, Assistant Professor",
    affiliation: {
      "@type": "Organization",
      name: "Mindanao State University – Iligan Institute of Technology",
    },
    knowsAbout: [
      "Embedded Systems", "AIoT", "Edge Computing", "Computer Vision",
      "Internet of Things", "Wireless Sensor Networks", "Firmware Development",
    ],
    url: "https://paulrodolfcastor.com",
    sameAs: [
      "https://orcid.org/",
      "https://scholar.google.com/",
      "https://github.com/",
      "https://linkedin.com/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tukuran",
      addressRegion: "Zamboanga del Sur",
      addressCountry: "PH",
    },
  },
};

export default function Index() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyPaul />
        <Expertise />
        <Education />
        <Experience />
        <Research />
        <Publications />
        <Projects />
        <Skills />
        <AcademicService />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
