import "./MyProjects.css";
import Paragraph from "../../components/Paragraph";

const projects = [
  {
    id: "project-01",
    number: "PROJECT 01",
    title: "MoodHacker",
    description:
      "Aims to help individuals that struggle to cope with difficult feelings.",
    image: "/my-projects-images/MoodHacker.png",
    url: "https://github.com/girlswhocodeUCF/Mood-Hacker",
  },
  {
    id: "project-02",
    number: "PROJECT 02",
    title: "Etch-a-Sketch",
    description:
      "Wanted to practice DOM manipulation so I built a drawing app.",
    image: "/my-projects-images/EtchASketch.png",
    url: "https://eggtoasts.github.io/Etch-a-Sketch/",
  },
  {
    id: "project-03",
    number: "PROJECT 03",
    title: "Calculator",
    description: "A simple calculator inspired by Apple's own UI.",
    image: "/my-projects-images/Calculator.png",
    url: "https://eggtoasts.github.io/calculator/",
  },
  {
    id: "project-04",
    number: "PROJECT 04",
    title: "Todo-list",
    description: "Todo-list built entirely with vanilla JS.",
    image: "/my-projects-images/to-do.png",
    url: "https://github.com/eggtoasts/todo-list",
  },
  {
    id: "project-05",
    number: "PROJECT 05",
    title: "Weather App",
    description: "Visualization app using VisualCrossing's Weather API.",
    image: "/my-projects-images/weather-app.png",
    url: "https://eggtoasts.github.io/weather-app/",
  },
  {
    id: "project-06",
    number: "PROJECT 06",
    title: "Manga Tracker",
    description: "Full Stack manga tracker, inspired by MyAnimeList (MAL).",
    image: "/my-projects-images/manga-list.png",
    url: "https://github.com/eggtoasts/Manga-Tracker",
  },
  {
    id: "project-07",
    number: "PROJECT 07",
    title: "EventKnight",
    description:
      "A web + mobile platform designed for discovering and managing UCF campus events.",
    image: "/my-projects-images/EventKnightThumbnail.png",
    url: "https://github.com/DanielJEfres/large-project",
  },
  {
    id: "project-08",
    number: "PROJECT 08",
    title: "CookQuest",
    description: " AI-powered kitchen companion for the Meta Quest.",
    image: "/my-projects-images/CookQuest.gif",
    url: "https://devpost.com/software/cookquest",
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
                photo={project.image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function LearningProject({ number, title, description, url, photo }) {
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

        <img
          className="project-photo"
          src={photo}
          alt={photo ? title : ""}
        ></img>
      </div>
    </div>
  );
}
