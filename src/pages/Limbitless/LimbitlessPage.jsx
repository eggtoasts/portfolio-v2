import InfoRow from "../../components/InfoRow";
import Paragraph from "../../components/Paragraph";
import "./LimbitlessPage.css";
import { useState } from "react";

export default function LimbitlessPage() {
  const header1 = `Empowering children with limb
            differences through expressive and affordable 3D-printed bionic
            arms.`;

  const arr = [
    "Limbitless Solutions was my first ever tech internship, and the place where I learned to be a designer and an engineer at the same time. I started on the web team, coding designs and learning Figma along the way, before moving over to the CS side.",
  ];
  return (
    <>
      {/* banner! */}
      <img
        className="project-banner"
        src="/project-banners/limbitless_banner.png"
      ></img>

      <div className="page">
        <p className="sub-font">INTERNSHIP</p>
        <h1 className="main-font main-title">Limbitless Solutions</h1>

        {/* info abt limb*/}
        <InfoRow
          columns={[
            {
              label: "ROLE",
              values: ["Product Designer", "Software Engineer Intern"],
            },
            { label: "ORG", values: ["Health", "Technology"] },
            {
              label: "TEAMS",
              values: ["Web Development & Design", "Computer Science"],
            },
            { label: "TIMELINE", values: ["Jan 2026 - Current"] },
          ]}
        />

        {/* mission */}

        <Paragraph
          subheader={"THE MISSION"}
          header={header1}
          arr={arr}
          color={"blue"}
          coloredText={"Empowering"}
        />

        {/* projects i've worked on */}

        <div className="project-container">
          {/* project 1 */}
          <div className="project-item">
            <div className="project-block">
              <img className="project-arrow" src="/arrow.svg" alt="toggle" />
              <div className="project-info">
                <div className="project-subheader-row">
                  <p className="project-subheader">PROJECT 01</p>
                </div>

                <p className="title">WCAG Compliance</p>
                <p className="description">
                  Making the main website more accessible, and fixing visual
                  bugs.
                </p>
              </div>

              <img className="project-photo"></img>
            </div>

            {/* Below this block should only show when user presses the arrow!! */}

            <div className="project-toggle">
              {/* project info */}
              <InfoRow
                columns={[
                  { label: "TEAM", values: ["Web Development & Design"] },
                  { label: "WORKED W/", values: ["Sabrina N."] },
                  { label: "TOOLS", values: ["HTML/CSS/JS"] },
                  { label: "TIMELINE", values: ["Jan 2026 - Current"] },
                ]}
              />

              {/* text */}

              <Paragraph
                subheader={"TASK"}
                header={""}
                arr={["example1"]}
                color={""}
                coloredText={""}
                images={["LifeIsRoblox.png", "LifeIsRoblox.png"]}
              />

              <Paragraph
                subheader={"WHAT I LEARNED"}
                header={""}
                arr={["example1"]}
                color={""}
                coloredText={""}
              />
            </div>
          </div>

          {/* project 1 */}
          <ProjectItem
            number="PROJECT 01"
            title="WCAG Compliance"
            description="Making the main website more accessible, and fixing visual bugs."
          >
            <InfoRow
              columns={[
                { label: "TEAM", values: ["Web Development & Design"] },
                { label: "WORKED W/", values: ["Sabrina N."] },
                { label: "TOOLS", values: ["HTML/CSS/JS"] },
                { label: "TIMELINE", values: ["Jan 2026 - Current"] },
              ]}
            />
            <Paragraph
              subheader="TASK"
              header=""
              arr={["example1"]}
              images={["LifeIsRoblox.png", "LifeIsRoblox.png"]}
            />
            <Paragraph
              subheader="WHAT I LEARNED"
              header=""
              arr={["example1"]}
            />
          </ProjectItem>
        </div>
      </div>
    </>
  );
}

function ProjectItem({ number, title, description, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project-item">
      {/* this info will always show */}
      <div className="project-block">
        <img
          className={`project-arrow ${isOpen ? "open" : ""}`}
          src="/arrow.svg"
          alt="toggle"
          onClick={() => setIsOpen(!isOpen)}
        />
        <div className="project-info">
          <div className="project-subheader-row">
            <p className="project-subheader">{number}</p>
          </div>
          <p className="title">{title}</p>
          <p className="description">{description}</p>
        </div>

        <img className="project-photo"></img>
      </div>

      {/* toggleable content */}
      <div className={`project-toggle ${isOpen ? "open" : ""}`}>
        <div className="project-toggle-inner">{children}</div>
      </div>
    </div>
  );
}
