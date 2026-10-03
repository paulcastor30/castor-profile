import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Index() {
  return (
    <>
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
