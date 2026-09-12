import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ProjectPage from "./pages/ProjectPage";
import LimbitlessPage from "./pages/LimbitlessPage";

import AboutPage from "./pages/AboutPage";

function Social() {}

function App() {
  // We'll have main, project1, project2
  const [currentPage, setCurrentPage] = useState("Limbitless");

  return (
    <>
      <div className="app-layout">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* main page will be here */}
        <div className="main-content">
          {console.log("so our current page is --> " + currentPage)}

          {currentPage == "Projects" && <ProjectPage />}
          {currentPage == "About" && <AboutPage />}

          {currentPage == "Limbitless" && <LimbitlessPage />}
        </div>
      </div>
    </>
  );
}

export default App;
