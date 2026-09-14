import SidebarDrawer from "./SidebarDrawer";
import { scrollToSection } from "../utils/scrollToSection";
import "./Sidebar.css";

export default function Sidebar({
  currentPage,
  setCurrentPage,
  sections = [],
  activeIndex,
}) {
  return (
    <SidebarDrawer className="main-sidebar">
      {(closeDrawer) => {
        function goToPage(page) {
          setCurrentPage(page);
          closeDrawer();
        }

        function goToSection(id) {
          scrollToSection(id);
          closeDrawer();
        }

        return (
          <>
            <div className="name-row">
              <img
                src="/sams_icon.svg"
                alt="Sam's logo"
                className="name-icon"
              />
              <p className="main-font name">Sam Amaro</p>
            </div>

            <div className="explore">
              <p className="sub-font">EXPLORE</p>

              <div className="main-sidebar-nav">
                <button
                  onClick={() => goToPage("Projects")}
                  className={`text-font ${currentPage == "Projects" ? "selected" : ""}`}
                >
                  Projects
                </button>

                <div
                  className={`about-group ${currentPage == "About" ? "selected" : ""}`}
                >
                  <button
                    onClick={() => goToPage("About")}
                    className="text-font"
                  >
                    About
                  </button>

                  {currentPage == "About" && (
                    <div className="about-section">
                      {sections.map((item, i) => (
                        <div className="about-titles" key={item.id}>
                          <div
                            className={`line ${i === activeIndex ? "line-active" : ""}`}
                          ></div>
                          <button
                            onClick={() => goToSection(item.id)}
                            className={`text-font ${i === activeIndex ? "sub-active" : ""}`}
                          >
                            {item.label}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => goToPage("Playground")}
                  className={`text-font ${currentPage == "Playground" ? "selected" : ""}`}
                >
                  Playground
                </button>
                <button
                  onClick={() => goToPage("Resume")}
                  className={`text-font ${currentPage == "Resume" ? "selected" : ""}`}
                >
                  Resume
                </button>
              </div>
            </div>

            <div className="bottom-socials">
              <p className="sub-font">SOCIALS</p>

              <div className="socials-row">
                <div className="social">
                  <p className="sub-font">LINKEDIN</p>
                  <img
                    src="/ix_arrow-diagonal-bottom-left.svg"
                    alt="left arrow"
                  />
                </div>

                <div className="social">
                  <p className="sub-font">GITHUB</p>
                  <img
                    src="/ix_arrow-diagonal-bottom-left.svg"
                    alt="left arrow"
                  />
                </div>
              </div>
            </div>
          </>
        );
      }}
    </SidebarDrawer>
  );
}
