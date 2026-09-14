import "./MyProjects.css";
import Paragraph from "../../components/Paragraph";

const projects = [
  {
    id: "project-01",
    number: "PROJECT 01",
    title: "MoodHacker",
    description:
      "Aims to help individuals that struggle to cope with difficult feelings.",
    url: "#",
  },
  {
    id: "project-02",
    number: "PROJECT 02",
    title: "Etch-a-Sketch",
    description:
      "Wanted to practice DOM manipulation so I built a drawing app.",
    url: "#",
  },
  {
    id: "project-03",
    number: "PROJECT 03",
    title: "Calculator",
    description: "A simple calculator inspired by Apple's own UI.",
    url: "#",
  },
  {
    id: "project-04",
    number: "PROJECT 04",
    title: "Todo-list",
    description: "Todo-list built entirely with vanilla JS.",
    url: "#",
  },
  {
    id: "project-05",
    number: "PROJECT 05",
    title: "Weather App",
    description: "Visualization app using VisualCrossing's Weather API.",
    url: "#",
  },
  {
    id: "project-06",
    number: "PROJECT 06",
    title: "Manga Tracker",
    description: "Full Stack manga racker, inspired by MyAnimeList (MAL).",
    url: "#",
  },
  {
    id: "project-07",
    number: "PROJECT 07",
    title: "EventKnight",
    description:
      "A web + mobile platform designed for discovering and managing UCF campus events.",
    url: "#",
  },
  {
    id: "project-08",
    number: "PROJECT 08",
    title: "CookQuest",
    description: " AI-powered kitchen companion for the Meta Quest.",
    url: "#",
  },
];

export default function MyProjects() {
  return (
    <>
      {/* banner! */}
      <img
        className="project-banner"
        src="/project-banners/EventKnightPlaceholder.svg"
      ></img>

      <div className="page myprojects">
        <p className="sub-font">LEARNING</p>
        <h1 className="main-font main-title">I’m Always Learning!</h1>

        <Paragraph
          subheader={"THE CONTEXT"}
          header={""}
          arr={["Projects throughout my learning journey."]}
          color={""}
          coloredText={""}
        />

        <div className="project-container">
          {projects.map((project) => (
            <div id={project.id} key={project.id}>
              <LearningProject
                number={project.number}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function LearningProject({ number, title, description, url }) {
  return (
    <div className="project-item">
      <div className="project-block">
        <a
          className="project-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="project-link-arrow"
            src="/arrowDiagonal.svg"
            alt={`Open ${title}`}
          />
        </a>
        <div className="project-info">
          <div className="project-subheader-row">
            <p className="project-subheader">{number}</p>
          </div>
          <p className="title">{title}</p>
          <p className="description">{description}</p>
        </div>

        <img className="project-photo"></img>
      </div>
    </div>
  );
}
