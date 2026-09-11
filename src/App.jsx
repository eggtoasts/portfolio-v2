import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

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
          <div className="projects">
            {/* information about me */}
            <div className="hero-row">
              <div className="info-column">
                <h1 className="main-font">Hello! I'm Sam,</h1>
                <h2 className="main-font">
                  A developer who translates user needs into universal design
                </h2>

                <p>Ex-Product Designer & SWE Intern at Limbitless Solutions</p>
              </div>

              {/* image of me  */}

              <img src="animations/ANIMATION_1.svg"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
