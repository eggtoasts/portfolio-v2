import "./Sidebar.css";

export default function Sidebar({ currentPage, setCurrentPage }) {
  //YIPEE

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

          <div className="sidebar-nav">
            <button
              onClick={() => setCurrentPage("Projects")}
              className={`text-font ${currentPage == "Projects" ? "selected" : ""}`}
            >
              Projects
            </button>
            <button
              onClick={() => setCurrentPage("About")}
              className={`text-font ${currentPage == "About" ? "selected" : ""}`}
            >
              About
              {currentPage == "About" && (
                <div className="about-section">
                  <div className="about-titles">
                    <div className="line"></div>
                    <button className="text-font">Hi!</button>
                  </div>

                  <div className="about-titles">
                    <div className="line"></div>
                    <button className="text-font">Experience</button>
                  </div>
                  <div className="about-titles">
                    <div className="line"></div>
                    <button className="text-font">Community</button>
                  </div>
                  <div className="about-titles">
                    <div className="line"></div>
                    <button className="text-font">Gallery</button>
                  </div>
                </div>
              )}
            </button>

            {/* Only appears if about is selected! */}

            <button
              onClick={() => setCurrentPage("Playground")}
              className={`text-font ${currentPage == "Playground" ? "selected" : ""}`}
            >
              Playground
            </button>
            <button
              onClick={() => setCurrentPage("Resume")}
              className={`text-font ${currentPage == "Resume" ? "selected" : ""}`}
            >
              Resume
            </button>
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
