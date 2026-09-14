import SidebarDrawer from "./SidebarDrawer";
import { scrollToSection } from "../utils/scrollToSection";
import "./TOCSidebar.css";

export default function TOCSidebar({
  sections = [],
  activeIndex = 0,
  setCurrentPage,
}) {
  return (
    <SidebarDrawer className="toc-sidebar">
      {(closeDrawer) => {
        function goToSection(id) {
          scrollToSection(id);
          closeDrawer();
        }

        return (
          <>
            <button
              className="home"
              onClick={() => {
                setCurrentPage("Projects");
                closeDrawer();
              }}
            >
              <img src="/home-arrow.svg" alt="back" />
              <span className="sub-font">HOME</span>
            </button>

            <div className="toc-explore">
              <p className="sub-font">TABLE OF CONTENTS</p>

              <div className="toc-sidebar-nav main-font">
                {sections.map((section, i) => (
                  <div
                    key={section.id}
                    className={`toc-item ${i === activeIndex ? "active" : ""}`}
                    onClick={() => goToSection(section.id)}
                  >
                    <span className="number sub-font">{i + 1}.</span>
                    <span className="label text-font">{section.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="back-to-top"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                closeDrawer();
              }}
            >
              <img src="/top-arrow.svg" alt="up" />
              <span className="sub-font">BACK TO THE TOP</span>
            </button>
          </>
        );
      }}
    </SidebarDrawer>
  );
}
