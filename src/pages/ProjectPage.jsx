import { useState } from "react";
import "./ProjectPage.css";
export default function ProjectPage() {
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
    <div className="projects">
      {/* information about me */}
      <div className="hero-row">
        <div className="info-column">
          <h1 className="hey-its-sam main-font">Hello! I'm Sam,</h1>
          <h2 className="my-description main-font">
            <span className="no-break">
              {" "}
              A <span className="developer">developer</span> who translates{" "}
              <span className="user-needs">user needs</span> into
            </span>{" "}
            <br></br>
            <span className="no-break">
              <span className="universal">universal</span>{" "}
              <img className="design-box" src="/Design Box.svg" alt="design" />
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
        <div className="project-card">
          <div className="project1"></div>
          <div className="project-info-row">
            <p className="title main-font"> Limbitless Solutions </p>
            <p className="type sub-font"> INTERNSHIP </p>
          </div>

          <p className="description text-font">
            Designing and engineering Limbitless’ internal services.
          </p>
        </div>

        <div className="project-card">
          <div className="project1"></div>
          <div className="project-info-row">
            <p className="title main-font"> EventKnight </p>
            <p className="type sub-font"> PROJECT </p>
          </div>

          <p className="description text-font">
            A platform designed for discovering and managing campus events.
          </p>
        </div>
        <div className="project-card">
          <div className="project1"></div>
          <div className="project-info-row">
            <p className="title main-font"> My Projects </p>
            <p className="type sub-font"> LEARNING </p>
          </div>

          <p className="description text-font">
            Stuff I’ve built throughout my learning journey..
          </p>
        </div>
        <div className="project-card">
          <div className="project1"></div>
          <div className="project-info-row">
            <p className="title main-font">My Portfolio</p>
            <p className="type sub-font"> FIGMA & GITHUB </p>
          </div>

          <p className="description text-font">
            Containing all graphics and pages for this portfolio.
          </p>
        </div>
      </div>
    </div>
  );
}
