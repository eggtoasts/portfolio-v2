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
import PlaygroundPage from "./pages/Playground/PlaygroundPage";

function App() {
  const [currentPage, setCurrentPage] = useState("Projects");
  const [activeIndex, setActiveIndex] = useState(0);

  const isTocPage = ["Limbitless", "EventKnight", "MyProjects"].includes(
    currentPage,
  );

  const sections = pageSections[currentPage] || [];

  useEffect(() => {
    // reset when switching pages
    setActiveIndex(0);

    const pageItems = pageSections[currentPage] || [];

    function handleScroll() {
      pageItems.forEach((section, i) => {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top < 300) setActiveIndex(i);
      });
    }

    window.addEventListener("scroll", handleScroll);
    // run once on load/page switch
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  // console.log("currentPage:", currentPage, "activeIndex:", activeIndex);

  return (
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

      <div className="main-content">
        {currentPage == "Projects" && (
          <ProjectPage setCurrentPage={setCurrentPage} />
        )}
        {currentPage == "About" && <AboutPage />}
        {currentPage == "Limbitless" && <LimbitlessPage />}
        {currentPage == "EventKnight" && <EventKnightPage />}
        {currentPage == "MyProjects" && <MyProjects />}
        {currentPage == "Playground" && <PlaygroundPage />}
      </div>
    </div>
  );
}

export default App;
