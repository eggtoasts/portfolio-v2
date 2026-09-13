import { useState } from "react";
import "./MyProjects.css";
import Paragraph from "../../components/Paragraph";
export default function MyProjects() {
  return (
    <>
      {/* banner! */}
      <img
        className="project-banner"
        src="/project-banners/EventKnightPlaceholder.svg"
      ></img>

      <div className="page">
        <p className="sub-font">LEARNING</p>
        <h1 className="main-font main-title">I’m Always Learning!</h1>

        <div id="context">
          <Paragraph
            subheader={"THE CONTEXT"}
            header={""}
            arr={["Projects throughout my learning journey."]}
            color={""}
            coloredText={""}
          />
        </div>

        {/* projects i've worked on */}

        <div className="project-container">
          {/* project 1 */}
          <div id="project-01"></div>
        </div>
      </div>
    </>
  );
}
