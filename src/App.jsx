import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ProjectPage from "./pages/Projects/ProjectPage";
import LimbitlessPage from "./pages/Limbitless/LimbitlessPage";
import EventKnightPage from "./pages/EventKnight/EventKnightPage";

import AboutPage from "./pages/About/AboutPage";
import TOCSidebar from "./components/TOCSidebar";

function Social() {}

function App() {
  // We'll have main, project1, project2
  const [currentPage, setCurrentPage] = useState("Limbitless");

  const tocSections = {
    Limbitless: [
      "Mission",
      "Project 01",
      "Project 02",
      "Project 03",
      "Project 04",
    ],
    EventKnight: ["Context", "Problem Statement", "Design Process", "Solution"],
  };

  const isTocPage = ["Limbitless", "EventKnight"].includes(currentPage);

  return (
    <>
      <div className="app-layout">
        {isTocPage ? (
          <TOCSidebar
            sections={tocSections[currentPage]}
            setCurrentPage={setCurrentPage}
          />
        ) : (
          <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
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
