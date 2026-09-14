import { useEffect, useState } from "react";
import "./SidebarDrawer.css";

export default function SidebarDrawer({ className = "", children }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => setIsOpen(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1200) setIsOpen(false);
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="sidebar-hamburger"
        aria-label="Open navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`sidebar-backdrop ${isOpen ? "open" : ""}`}
        onClick={closeDrawer}
      ></div>

      <div className={`sidebar-shell ${className} ${isOpen ? "open" : ""}`}>
        <button
          type="button"
          className="sidebar-close"
          aria-label="Close navigation"
          onClick={closeDrawer}
        >
          <span></span>
          <span></span>
        </button>

        {children(closeDrawer)}
      </div>
    </>
  );
}
