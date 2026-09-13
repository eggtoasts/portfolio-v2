import InfoRow from "../../components/InfoRow";
import Paragraph from "../../components/Paragraph";
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

        <Paragraph
          subheader={"THE CONTEXT"}
          header={"70,000 students and a massive campus footprint"}
          arr={[
            "The University of Central Florida is one of the largest universities in the country. On any given week, hundreds of Registered Student Organizations (RSOs) host professional development workshops, social gatherings, volunteering drives, and general body meetings.",
            "The scale of campus life means there is never a shortage of things to do, but it also creates a highly fragmented ecosystem. Students and organizers operate in a massive, decentralized network of communication channels.",
          ]}
          color={""}
          coloredText={""}
        />

        <Paragraph
          subheader={"THE CONTEXT"}
          header={"Finding events at UCF is harder than it should be."}
          arr={[
            "Campus events are spread across so many platforms that most students miss out simply because they didn't know where to look.",
          ]}
          color={"orange"}
          coloredText={"harder"}
        />
      </div>
    </>
  );
}
