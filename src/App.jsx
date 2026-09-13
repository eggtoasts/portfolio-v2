import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import TOCSidebar from "./components/TOCSidebar";
import ProjectPage from "./pages/Projects/ProjectPage";
import LimbitlessPage from "./pages/Limbitless/LimbitlessPage";
import EventKnightPage from "./pages/EventKnight/EventKnightPage";
import AboutPage from "./pages/About/AboutPage";

// for about scroll
const aboutSectionIds = ["hi", "experience", "community", "gallery"];

// context labels shown in the sidebar
const tocSections = {
  Limbitless: [
    "Mission",
    "Project 01",
    "Project 02",
    "Project 03",
    "Project 04",
  ],
  EventKnight: ["Context", "The Problem"],
};

// context div ids
const tocSectionIds = {
  Limbitless: [
    "mission",
    "project-01",
    "project-02",
    "project-03",
    "project-04",
  ],
  EventKnight: ["context", "problem"],
};

function App() {
  const [currentPage, setCurrentPage] = useState("Limbitless");
  const [activeIndex, setActiveIndex] = useState(0);

  const isTocPage = ["Limbitless", "EventKnight"].includes(currentPage);

  // pick the right section ids
  let sectionIds = [];
  if (isTocPage) sectionIds = tocSectionIds[currentPage] || [];
  else if (currentPage === "About") sectionIds = aboutSectionIds;

  useEffect(() => {
    // reset when switching pages
    setActiveIndex(0);

    function handleScroll() {
      // Find which section is near the top of the screen
      sectionIds.forEach((id, i) => {
        const el = document.getElementById(id);

        // Then set it as the "active" section in sidebar
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top < 300) {
            setActiveIndex(i);
          }
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
            sections={tocSections[currentPage]}
            setCurrentPage={setCurrentPage}
            activeIndex={activeIndex}
          />
        ) : (
          <Sidebar
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
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
        </div>
      </div>
    </>
  );
}

export default App;
