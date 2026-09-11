import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

function Social() {}

function App() {
  // We'll have main, project1, project2
  const [currentPage, setCurrentPage] = useState("Projects");

  const [currentAnimation, setCurrentAnimation] = useState("Cursor");

  const speechText = [
    "welcome to my portfolio!",
    "i'm a software engineer! (top 3)",
    "i'm a designer!",
    "i'm a motion animator!",
    "i'm a co-founder of a UI/UX community!",
  ];

  const positions = {
    Cursor: 0,
    Code: 1,
    Pencil: 2,
    Star: 3,
    Motion: 4,
  };

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
                <h1 className="hey-its-sam main-font">Hello! I'm Sam,</h1>
                <h2 className="my-description main-font">
                  <span className="no-break">
                    {" "}
                    A developer who translates user needs into
                  </span>{" "}
                  <br></br>
                  <span className="no-break">
                    universal{" "}
                    <img
                      className="design-box"
                      src="/Design Box.svg"
                      alt="design"
                    />
                  </span>
                </h2>

                <p className="main-font">
                  Ex-Product Designer & SWE Intern at Limbitless Solutions
                </p>
              </div>

              {/* image of me  */}
              <div className="animation-of-me">
                <img
                  className="my-avatar"
                  src={`animations/ANIMATION_${positions[currentAnimation]}.svg`}
                ></img>

                {/* speechbubble */}
                <p className="speech-bubble main-font">
                  {speechText[positions[currentAnimation]]}
                </p>

                {/* toolbox */}
                <div className="toolbox-row">
                  <div
                    className="toolbox-blue-box"
                    style={{
                      transform: `translateX(${positions[currentAnimation] * 116}%)`,
                    }}
                  ></div>
                  <img
                    onClick={() => setCurrentAnimation("Cursor")}
                    src="/toolbox/Cursor.svg"
                  ></img>
                  <img
                    onClick={() => setCurrentAnimation("Code")}
                    src="/toolbox/Code.svg"
                  ></img>
                  <img
                    onClick={() => setCurrentAnimation("Pencil")}
                    src="/toolbox/Pencil.svg"
                  ></img>
                  <img
                    onClick={() => setCurrentAnimation("Star")}
                    src="/toolbox/Star.svg"
                  ></img>
                  <img
                    onClick={() => setCurrentAnimation("Motion")}
                    src="/toolbox/Motion.svg"
                  ></img>
                </div>
              </div>
            </div>

            {/* projects below */}

            <div className="projects-grid">
              <div className="project1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
