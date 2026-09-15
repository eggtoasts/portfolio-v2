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
        alt="EventKnight banner"
      />

      <div className="page eventknight">
        <p className="sub-font">CASE STUDY / PROJECT</p>
        <h1 className="main-font main-title">EventKnight</h1>

        <InfoRow
          columns={[
            {
              label: "ROLE",
              values: [
                "Product Designer",
                "Frontend Engineer Lead",
                "Backend Team Member",
              ],
            },
            {
              label: "TECH & TOOLS USED",
              values: [
                "MongoDB, Express & Node.js, React",
                "TypeScript",
                "Figma",
                "Github",
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

        {/* CONTEXT */}
        <section id="context" className="case-section">
          <Paragraph
            subheader="CONTEXT"
            header="70,000 students and a massive campus footprint"
            arr={[
              "The University of Central Florida is one of the largest universities in the country. On any given week, hundreds of Registered Student Organizations (RSOs) host professional development workshops, social gatherings, volunteering drives, and general body meetings.",
              "The scale of campus life means there is never a shortage of things to do, but it also creates a highly fragmented ecosystem. Students and organizers operate in a massive, decentralized network of communication channels.",
            ]}
          />
        </section>

        {/* PROBLEM */}
        <section id="problem" className="case-section">
          <Paragraph
            subheader="THE PROBLEM STATEMENT"
            header="Finding events at UCF is harder than it should be."
            arr={[
              "Campus events are spread across so many platforms that most students miss out simply because they didn't know where to look.",
              "The core issue isn't a lack of engagement; it's a lack of discovery. To find out what's happening, a student has to already be in each RSO's Discord, follow their Instagram, dig through KnightConnect, or catch it by word of mouth. For event organizers, this fragmentation forces them to become full-time marketers just to get a room of twenty people.",
            ]}
            color="orange"
            coloredText="harder"
          />

          <img
            className="section-image"
            src="/eventknight-images/FirstProblemImage.png"
            alt="Students confused by scattered event platforms"
          />

          {/*  Pain Points */}
          <p className="sub-part-label sub-font">PAIN POINTS</p>
          <p className="sub-part-text text-font">
            To understand why campus engagement drops despite hundreds of active
            RSOs, I focused on mapping how students currently find and attend
            events. Through user feedback and observing how people navigated
            existing channels, three clear priorities guided the design:
          </p>
          <img
            className="section-image"
            src="/eventknight-images/ImportantPoints.png"
            alt="Pain points across KnightConnect, Instagram, Discord, and GroupMe"
          />

          <p className="sub-part-text text-font">
            Because KnightConnect is slow and unengaging, RSO officers stop
            posting on it and head straight to Instagram, Discord, and GroupMe
            instead. This leaves campus events scattered across multiple apps,
            where most of them go completely unseen.
          </p>

          {/*  quote */}
          <div className="pull-quote main-font">
            Campus events are spread across so many platforms that{" "}
            <span className="orange">most go unseen</span>
          </div>

          <p className="sub-part-text text-font">
            We needed a platform that felt as quick and engaging to scroll as
            social media, while maintaining the official RSO verification of
            KnightConnect to centralize campus life in one spot.
          </p>

          {/*  Understanding  */}
          <p className="sub-part-label sub-font">
            UNDERSTANDING WHAT NEEDED ATTENTION
          </p>
          <p className="sub-part-text text-font">
            We looked closely at how students currently find campus events and
            talked directly with users across different levels of involvement.
          </p>
          <img
            className="section-image contained"
            src="/eventknight-images/Analysis.png"
            alt="Three priorities that guided the design"
          />
        </section>

        {/*  SOLUTION*/}
        <section id="solution" className="case-section">
          <Paragraph
            subheader="THE SOLUTION"
            header="One hub for everything happening on campus"
            arr={[
              "EventKnight combines campus events into a single, searchable platform. Students browse, filter, and RSVP; organizers post and promote; everyone stops relying on scattered group chats.",
            ]}
          />

          <p className="sub-part-text text-font">
            Two event types keep the platform inclusive without losing trust:
          </p>
          <ul className="feature-list text-font solution-bullets">
            <li>
              <strong>RSO Events</strong> are posted only by verified RSO
              officers (workshops, GBMs, socials). Verification runs through the
              KnightConnect API so postings stay legitimate.
            </li>
            <li>
              <strong>Student Events</strong> are posted by any student (study
              sessions, pickup sports, volunteering), so campus life that
              happens outside official orgs still has a home.
            </li>
          </ul>

          <p className="sub-part-text text-font">
            Events are organized by tags (Computer Science, Music, Art,
            Business, Volunteering, Engineering, and more) so students can
            filter to exactly what they're into. And in the future, get
            recommendations based on what they've RSVP'd to before.
          </p>

          {/* --- sub-part: Features --- */}
          <p className="sub-part-label sub-font">FEATURES</p>

          <div className="feature-group">
            <p className="feature-heading main-font">For Students</p>
            <ul className="feature-list text-font">
              <li>
                <strong>Centralized Discovery:</strong> Browse events filtered
                by tags like Computer Science, Music, Volunteering, or
                Engineering.
              </li>
              <li>
                <strong>Smart Recommendations:</strong> A customized feed
                suggests events based on a user's selected interests and past
                RSVP history.
              </li>
              <li>
                <strong>Seamless Utility:</strong> One-click RSVPs that
                automatically sync to Google Calendar.
              </li>
              <li>
                <strong>Secure Access:</strong> JWT authentication with
                mandatory university email verification ensures a safe,
                student-only environment.
              </li>
            </ul>
          </div>

          <div className="feature-group">
            <p className="feature-heading main-font">For RSO Officers</p>
            <ul className="feature-list text-font">
              <li>
                <strong>Automated Verification:</strong> The system hooks into
                the KnightConnect API to automatically verify legitimate RSO
                officers.
              </li>
              <li>
                <strong>Event Management:</strong> A dedicated web dashboard to
                upload flyers, set logistics, and track RSVPs and attendance
                data.
              </li>
              <li>
                <strong>Role-Based Security:</strong> Only verified officers can
                post official "RSO Events," preventing spam and fake listings.
              </li>
            </ul>
          </div>

          <div className="feature-group">
            <p className="feature-heading main-font">Event Types</p>
            <ul className="feature-list text-font">
              <li>
                <strong>RSO Events:</strong> Official organization postings
                (workshops, GBMs, socials).
              </li>
              <li>
                <strong>Student Events:</strong> Casual, student-led postings
                (study sessions, pickup sports) keeping the platform inclusive
                for unofficial campus life.
              </li>
            </ul>
          </div>
        </section>

        {/* DESIGN PROCESS*/}
        <section id="design" className="case-section">
          <Paragraph
            subheader="THE DESIGN PROCESS"
            header="Building a visual identity specifically for students"
            arr={[]}
          />

          {/*  sub-part: Low-Fi  */}
          <p className="sub-part-label sub-font">LOW-FI WIREFRAMES</p>
          <p className="sub-part-text text-font">
            We knew the app needed to feel immediately familiar, so we used a
            modern card layout. My early wireframes focused on fixing
            navigation, specifically introducing a two-tab split ("RSO Events"
            vs. "Student Events") to cleanly separate official club posts from
            casual student meetups.
          </p>
          <div className="lowfi-row">
            <img
              className="section-image"
              src="/eventknight-images/lowfi1.png"
              alt="Low-fidelity wireframe 1"
            />
            <img
              className="section-image"
              src="/eventknight-images/lowfi2.png"
              alt="Low-fidelity wireframe 2"
            />
            <img
              className="section-image"
              src="/eventknight-images/lowfi3.png"
              alt="Low-fidelity wireframe 3"
            />
          </div>
          <p className="sub-part-caption sub-font">
            Link to Low-Fi Wireframes here.
          </p>

          {/*  sub-part High-Fi --- */}
          <p className="sub-part-label sub-font">HIGH-FI WIREFRAMES</p>
          <p className="sub-part-text text-font">
            In Figma, I built out high-fidelity screens centered around large
            visual event cards and bold typography. I tailored the views to user
            roles, keeping the student feed engaging and social while giving RSO
            officers a clear management dashboard.
          </p>
          <p className="sub-part-caption sub-font">
            Link to High-Fi Wireframes here.
          </p>

          {/* --- sub-part: Branding --- */}
          <p className="sub-part-label sub-font">BRANDING &amp; IDENTITY</p>
          <p className="sub-part-text text-font">
            To help the app feel native to UCF, I anchored our design system in
            black and gold and created the EventKnight mascot, a friendly knight
            that ties the platform directly to campus culture.
          </p>
          <img
            className="section-image contained"
            src="/eventknight-images/design-system.png"
            alt="EventKnight design system"
          />
        </section>

        {/* arch*/}
        <section id="architecture" className="case-section">
          <Paragraph
            subheader="ARCHITECTURE"
            header="What our Team Built"
            arr={[
              "The clients (React web and Flutter mobile) communicate via HTTPS/REST to a Node.js/Express API. Data is managed through MongoDB, while media assets like event flyers are stored in AWS S3.",
            ]}
          />
          <img
            className="section-image contained"
            src="/eventknight-images/DatabaseDiagram.png"
            alt="System architecture diagram"
          />
          <p className="sub-part-caption sub-font">Link to diagram here.</p>

          <p className="sub-part-text text-font">
            To ensure security and legitimacy, the API utilizes JWT
            authentication with custom role-based middleware, and integrates
            with the external KnightConnect API for automated RSO verification.
          </p>
          <p className="sub-part-text text-font">
            My focus was entirely on the application layer, which was designing
            the UI and building out the frontend components, and writing some
            backend application logic and specific API endpoints. The cloud
            infrastructure, including the AWS EC2 hosting and S3 bucket
            configuration, and CI/CD deployment was engineered by my teammate
            Daniel.
          </p>
          <p className="sub-part-text text-font">
            The core backend architecture, Mongoose data models, and RESTful
            endpoints were entirely engineered by Adam, David, Sophia, and Amy.
            Additionally, Sophia and Alesandra did the entirety of the Flutter
            mobile application. My focus was seamlessly integrating the web
            client with their Node/Express API, ensuring the frontend state
            correctly handled the payloads they delivered.
          </p>
        </section>

        {/*reflections */}
        <section id="reflections" className="case-section">
          <Paragraph
            subheader="REFLECTIONS"
            header="What I Learned"
            arr={[
              "Working on both the design and the engineering sides of EventKnight drastically improved how I build software. Because I designed the wireframes, I knew exactly how the React components needed to be structured. Because I built the frontend, I knew exactly what payload the Node.js API needed to deliver. Designing the app in Figma while writing the actual codebase gave me a completely new perspective on building software.",
            ]}
          />

          {/* key takways*/}
          <p className="sub-part-label sub-font">KEY TAKEAWAYS</p>
          <img
            className="section-image"
            src="/eventknight-images/takeaways.png"
            alt="Key takeaways"
          />
        </section>
      </div>
    </>
  );
}
