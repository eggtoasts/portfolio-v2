import "./AboutPage.css";
export default function AboutPage() {
  return (
    <>
      {/* about page now yipeeee */}
      <div className="page">
        {/* Top Info */}
        <div id="hi">
          <div className="about-grid">
            {/* info about me! */}
            <div className="about-me-info">
              <h1 className="main-font">This is Me!</h1>

              <div className="about-text">
                <p className="main-font">
                  I've loved coding and art ever since I started making{" "}
                  <span className="about-aside">(really bad)</span> Roblox games
                  and silly animations as a kid. Growing up at the intersection
                  of creativity and code expanded my worldview and deepened my
                  love for building, learning, and digital creation.
                </p>
                <p className="main-font">
                  Outside of tech, I’m into drawing, checking out cafes @ orl,
                  anime, playing video games{" "}
                  <span className="about-aside">(especially Persona)</span>, and
                  photography.
                </p>
                <p className="main-font">
                  Whether I’m creating art or software, I’m always exploring,
                  experimenting, and trying to make things a little better.
                </p>
              </div>

              <div className="about-socials">
                <a
                  href="https://github.com/eggtoasts"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <img src="/about-me-icons/github.svg"></img>
                </a>
                <a
                  href="https://www.linkedin.com/in/samanthaamaro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img src="/about-me-icons/linkedin.svg"></img>
                </a>
                <a href="mailto:yuihimari222@gmail.com" aria-label="Email">
                  <img src="/about-me-icons/email.svg"></img>
                </a>
              </div>
            </div>

            <div className="about-me-picture">
              <img
                className="samRoblox"
                src="/LifeIsRoblox.png"
                alt="Picture of me (sam) holding a film camera"
              ></img>

              <p className="sub-font">
                This is me with a film camera, and my Roblox Avatar.
              </p>
            </div>
          </div>
        </div>

        {/* My Experience */}

        <div id="experience">
          <h2 className="main-font">Experience</h2>
          <div className="experiences-container">
            <div className="experience-card">
              <img
                className="experience-icon"
                src="/LimbitlessExperience.svg"
              ></img>

              <div className="experience-info">
                <div className="title-date-row">
                  <p className="title">
                    Assistant Scholar - Computer Science Intern
                  </p>
                  <p className="date">May 2026 - Aug 2026</p>
                </div>

                <p className="location">Limbitless Solutions | Orlando, FL</p>

                <p className="description">
                  Designing and developing the company's internal services such
                  as inventory tracking and arm socket files.
                </p>

                <div className="experience-pictures"></div>
              </div>
            </div>

            <div className="experience-card">
              <img
                className="experience-icon"
                src="/LimbitlessExperience.svg"
              ></img>

              <div className="experience-info">
                <div className="title-date-row">
                  <p className="title">
                    Assistant Scholar - Web Design & Development Intern
                  </p>
                  <p className="date">Jan. 2026 - April 2026</p>
                </div>

                <p className="location">Limbitless Solutions | Orlando, FL</p>

                <p className="description">
                  Translated UI/UX designs into responsive layouts. Improved
                  accessibility to meet WCAG 2.1 guidelines.
                </p>

                <div className="experience-pictures"></div>
              </div>
            </div>
          </div>
        </div>

        <div id="community">
          <h2 className="main-font">Community</h2>

          <p className="text-font">Coming soon...</p>
        </div>

        <div id="gallery">
          <h2 className="main-font">Gallery</h2>
          <p className="text-font">Coming soon...</p>
        </div>
      </div>
    </>
  );
}
