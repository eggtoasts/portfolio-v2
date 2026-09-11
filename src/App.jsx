import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ProjectPage from "./pages/ProjectPage";

function Social() {}

function App() {
  // We'll have main, project1, project2
  const [currentPage, setCurrentPage] = useState("Projects");

  return (
    <>
      <div className="app-layout">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* main page will be here */}
        <div className="main-content">
          {console.log("so our current page is --> " + currentPage)}

          {/* workin on project page now... GULP! */}

          <ProjectPage />
        </div>
      </div>
    </>
  );
}

export default App;
