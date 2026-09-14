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
        <div id="context">
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
        </div>

        <div id="problem">
          <Paragraph
            subheader={"THE PROBLEM"}
            header={"Finding events at UCF is harder than it should be."}
            arr={[
              "Campus events are spread across so many platforms that most students miss out simply because they didn't know where to look.",
              "The core issue isn't a lack of engagement but a lack of discovery.  To find out what's happening, a student has to already be in each RSO's Discord, follow their Instagram, dig through KnightConnect, or catch it by word of mouth. For event organizers, this forces them to become full-time marketers just to get a room of twenty people. ",
            ]}
            color={"orange"}
            coloredText={"harder"}
          />
        </div>

        <div id="solution">
          <Paragraph
            subheader={"THE SOLUTION"}
            header={"One hub for everything happening on campus."}
            arr={[
              "EventKnight combines campus events into a single, searchable platform. Students browse, filter, and RSVP; organizers post and promote; everyone stops relying on scattered group chats.",
            ]}
            color={""}
            coloredText={""}
          />
        </div>

        <div id="design">
          <Paragraph
            subheader={"THE DESIGN PROCESS"}
            header={"idk"}
            arr={["..."]}
            color={""}
            coloredText={""}
          />
        </div>
      </div>
    </>
  );
}
