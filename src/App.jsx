import "./globalstyles.css"
import "./Reset.css"
import "./App.css"
import { Header } from "../components/Header"
import { PresentationCardSection } from "../components/Section/PresentationCardSection"
import { AboutMeSection } from "../components/Section/AboutMeSection"
import { TecnologiesSection } from "../components/Section/TecnologiesSection"
import { ProjectSection } from "../components/Section/ProjectSection/Index"
import { Footer } from "../components/Footer"
import { useRef } from "react"

function App() {

  const aboutRef = useRef(null);
  const stackRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  const handleScrollTo = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      < Header 
        onScrollToAbout={() => handleScrollTo(aboutRef)}
        onScrollToStack={() => handleScrollTo(stackRef)}
        onScrollToProjects={() => handleScrollTo(projectsRef)}
        onScrollToContacts={() => handleScrollTo(contactsRef)}/>
      <main>
        <PresentationCardSection />
        <div ref={aboutRef}>
          <AboutMeSection />
        </div>
        <div ref={stackRef}>
          <TecnologiesSection />
        </div>
        <div ref={projectsRef}>
          <ProjectSection />
        </div>
      </main>
      <div ref={contactsRef}>
         <Footer />
      </div>
    </>
  )
}

export default App
