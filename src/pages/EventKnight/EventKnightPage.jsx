import InfoRow from "../../components/InfoRow";
import "./EventKnightPage.css";
export default function EventKnightPage() {
  return (
    <>
      {/* banner! */}
      <img
        className="project-banner"
        src="/project-banners/EventKnightPlaceholder.svg"
      ></img>

      <div className="page eventknight">
        <p className="sub-font">PROJECT</p>
        <h1 className="main-font main-title">EventKnight</h1>

        <InfoRow
          columns={[
            {
              label: "ROLE",
              values: [
                "Product Designer",
                "Frontend Engineer",
                "Backend Engineer",
              ],
            },
            {
              label: "TECH & TOOLS USED",
              values: [
                "MongoDB, Express & Node.js, React",
                "TypeScript",
                "Figma",
              ],
            },
            {
              label: "TEAM",
              values: ["1 PM", "1 Designer (me)", "6 Engineers (also me!)"],
            },
            {
              label: "TIMELINE",
              values: ["Spring 2026 (~4 months)"],
            },
          ]}
        />

        {/* mission */}
      </div>
    </>
  );
}
