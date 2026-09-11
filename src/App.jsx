import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function Social() {}

function App() {
  // We'll have main, project1, project2
  const [currentPage, setCurrentPage] = useState("Projects");

  return (
    <>
      {/* sidebar here fer now... */}
      <div className="sidebar">
        {/* my name */}
        <div className="name-row">
          <img src="/sams_icon.svg" alt="Sam's logo" className="name-icon" />
          <p className="main-font name">Sam Amaro</p>
        </div>

        {/* navigation goes here */}
        <div className="explore">
          <p className="sub-font">EXPLORE</p>

          <div className="sidebar-nav main-font">
            <button
              className={`${currentPage == "Projects" ? "selected" : ""}`}
            >
              Projects
            </button>
            <button>About</button>
            <button>Playground</button>
            <button>Resume</button>
          </div>
        </div>

        {/* links with my socials */}
        <div className="bottom-socials">
          <p className="sub-font">SOCIALS</p>

          <div className="socials-row">
            <div className="social">
              <p className="sub-font">LINKEDIN</p>
              <img src="/ix_arrow-diagonal-bottom-left.svg" alt="left arrow" />
            </div>

            <div className="social">
              <p className="sub-font">GITHUB</p>
              <img src="/ix_arrow-diagonal-bottom-left.svg" alt="left arrow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
