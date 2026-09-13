import "./TOCSidebar.css";

export default function TOCSidebar({
  sections,
  activeIndex = 0,
  setCurrentPage,
}) {
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="sidebar">
      {/* go back arrow */}
      <button className="home" onClick={() => setCurrentPage("Projects")}>
        <img src="/home-arrow.svg" alt="back" />
        <span className="sub-font">HOME</span>
      </button>

      {/* navigation goes here */}
      <div className="explore">
        <p className="sub-font">TABLE OF CONTENTS</p>

        <div className="sidebar-nav main-font">
          {sections.map((section, i) => (
            <div
              key={i}
              className={`toc-item ${i === activeIndex ? "active" : ""}`}
              onClick={() => scrollToSection(section.id)}
            >
              <span className="number sub-font">{i + 1}.</span>
              <span className="label text-font">{section.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* back to top */}
      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src="/top-arrow.svg" alt="up" />
        <span className="sub-font">BACK TO THE TOP</span>
      </button>
    </div>
  );
}
