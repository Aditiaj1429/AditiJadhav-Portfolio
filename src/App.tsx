import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { DownloadResumeFab } from "./components/DownloadResumeFab";
import { Education, Certifications } from "./components/Education";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { navLinks } from "./data/portfolio";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", ...navLinks.map((link) => link.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.3, 0.6] },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <DownloadResumeFab />
    </>
  );
}

export default App;
