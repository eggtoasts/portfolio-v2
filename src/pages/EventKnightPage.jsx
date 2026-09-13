import "./EventKnightPage.css";
export default function EventKnightPage() {
  return (
    <>
      {/* banner! */}
      <img
        className="project-banner"
        src="/project-banners/EventKnightPlaceholder.svg"
      ></img>

      <div className="page">
        <p className="sub-font">PROJECT</p>
        <h1 className="main-font main-title">EventKnight</h1>

        {/* reminder to turn this into a component since this is used in limb page too */}
        <div className="info-row">
          <p className="info-col sub-font">
            <p>ROLE</p>

            <div className="info-block text-font">
              <p>Product Designer</p>
              <p>Frontend Engineer</p>
              <p>Backend Engineer</p>
            </div>
          </p>

          <p className="info-col sub-font">
            <p>TECH & TOOLS USED</p>

            <div className="info-block">
              <p>MongoDB, Express & Node.js, React</p>
              <p>TypeScript</p>
              <p>Figma</p>
            </div>
          </p>

          <p className="info-col sub-font">
            <p>TEAM</p>

            <div className="info-block text-font">
              <p>1 PM</p>
              <p>1 Designer (me)</p>
              <p>6 Engineers (also me!)</p>
            </div>
          </p>

          <p className="info-col sub-font">
            <p>TIMELINE</p>

            <div className="info-block text-font">
              <p>Spring 2026 (~4 months)</p>
            </div>
          </p>
        </div>

        {/* mission */}
      </div>
    </>
  );
}
