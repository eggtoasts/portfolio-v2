import InfoRow from "../components/InfoRow";
import "./LimbitlessPage.css";
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

        <Paragraph
          subheader={"TEST"}
          header={"woahhh"}
          arr={arr}
          color={""}
          coloredText={""}
        />

        {/* projects i've worked on */}

        <div className="project-container">
          <div className="project-block">
            <img className="project-arrow" src="/arrow.svg" alt="toggle" />
            <div className="project-info">
              <div className="project-subheader-row">
                <p className="project-subheader">PROJECT 01</p>
              </div>

              <p className="title">WCAG Compliance</p>
              <p className="description">
                Making the main website more accessible, and fixing visual bugs.
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
            />
          </div>
        </div>
      </div>
    </>
  );
}

// component for paragraphs
function Paragraph({ subheader, header, arr, color, coloredText }) {
  // only color the 'colored' text if exists
  const parts = coloredText ? header.split(coloredText) : [header];

  return (
    <>
      <div className="paragraph">
        <div className="title-block">
          <p className="sub-header">{subheader}</p>
          <h2 className="header">
            {coloredText ? (
              <>
                {parts[0]}
                <span className={color}>{coloredText}</span>
                {parts[1]}
              </>
            ) : (
              header
            )}
          </h2>
        </div>

        <div className="text-block">
          {arr.map((a, i) => (
            <p key={i}>{a}</p>
          ))}
        </div>
      </div>
    </>
  );
}
