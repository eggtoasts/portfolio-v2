import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import TOCSidebar from "./components/TOCSidebar";
import ProjectPage from "./pages/Projects/ProjectPage";
import LimbitlessPage from "./pages/Limbitless/LimbitlessPage";
import EventKnightPage from "./pages/EventKnight/EventKnightPage";
import AboutPage from "./pages/About/AboutPage";
import { pageSections } from "./data/pageSections";
import MyProjects from "./pages/MyProjects/MyProjects";

function App() {
  const [currentPage, setCurrentPage] = useState("Limbitless");
  const [activeIndex, setActiveIndex] = useState(0);

  const isTocPage = ["Limbitless", "EventKnight"].includes(currentPage);

  const sections = pageSections[currentPage] || [];

  useEffect(() => {
    // reset when switching pages
    setActiveIndex(0);

    function handleScroll() {
      // Find which section is near the top of the screen
      sections.forEach((section, i) => {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top < 300) setActiveIndex(i);
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    // run once on load/page switch
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  console.log("currentPage:", currentPage, "activeIndex:", activeIndex);

  return (
    <>
      <div className="app-layout">
        {isTocPage ? (
          <TOCSidebar
            sections={sections}
            activeIndex={activeIndex}
            setCurrentPage={setCurrentPage}
          />
        ) : (
          <Sidebar
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            sections={sections}
            activeIndex={activeIndex}
          />
        )}

        {/* main page will be here */}
        <div className="main-content">
          {console.log("so our current page is --> " + currentPage)}

          {currentPage == "Projects" && (
            <ProjectPage setCurrentPage={setCurrentPage} />
          )}
          {currentPage == "About" && <AboutPage />}
          {currentPage == "Limbitless" && <LimbitlessPage />}

          {currentPage == "EventKnight" && <EventKnightPage />}
          {currentPage == "MyProjects" && <MyProjects />}
        </div>
      </div>
    </>
  );
}

export default App;
