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

  return (
    <>
      <div className="app-layout">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <TOCSidebar
          sections={["Test", "Test1"]}
          activeIndex={0}
          setCurrentPage={setCurrentPage}
        />

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
