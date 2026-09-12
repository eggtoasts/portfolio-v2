import "./LimbitlessPage.css";
export default function LimbitlessPage() {
  return (
    <>
      <div className="page">
        <p className="sub-font">INTERNSHIP</p>
        <h1 className="main-font">Limbitless Solutions</h1>

        {/* info abt limb, should  make it into a component  in the future for other pages*/}
        <div className="info-row">
          <p className="info-col sub-font">
            <p>ROLE</p>

            <div className="info-block text-font">
              <p>Product Designer</p>
              <p>Software Engineer Intern</p>
            </div>
          </p>

          <p className="info-col sub-font">
            <p>ORG</p>

            <div className="info-block">
              <p>Health</p>
              <p>Technology</p>
            </div>
          </p>

          <p className="info-col sub-font">
            <p>TEAMS</p>

            <div className="info-block text-font">
              <p>Web Development & Design</p>
              <p>Computer Science</p>
            </div>
          </p>

          <p className="info-col sub-font">
            <p>TIMELINE</p>

            <div className="info-block text-font">
              <p>Jan 2026 - Current</p>
            </div>
          </p>
        </div>

        {/* mission */}

        <div className="paragraph">
          <div className="title-block">
            <p className="sub-header">THE MISSION</p>
            <h2 className="header">
              <span className="blue">Empowering</span> children with limb
              differences through expressive and affordable 3D-printed bionic
              arms.
            </h2>
          </div>

          <div className="text-block">
            <p>
              Limbitless Solutions was my first ever tech internship, and the
              place where I learned to be a designer and an engineer at the same
              time. I started on the web team, coding designs and learning Figma
              along the way, before moving over to the CS side.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
