import "./MyProjects.css";
import Paragraph from "../../components/Paragraph";

const projects = [
  {
    id: "project-01",
    number: "PROJECT 01",
    title: "Project Name 1",
    description: "Lorem ipsum dolor sit amet consectetur one.",
    url: "#",
  },
  {
    id: "project-02",
    number: "PROJECT 02",
    title: "Project Name 2",
    description: "Sed do eiusmod tempor incididunt ut labore two.",
    url: "#",
  },
  {
    id: "project-03",
    number: "PROJECT 03",
    title: "Project Name 3",
    description: "Ut enim ad minim veniam quis nostrud three.",
    url: "#",
  },
  {
    id: "project-04",
    number: "PROJECT 04",
    title: "Project Name 4",
    description: "Duis aute irure dolor in reprehenderit four.",
    url: "#",
  },
  {
    id: "project-05",
    number: "PROJECT 05",
    title: "Project Name 5",
    description: "Excepteur sint occaecat cupidatat non proident five.",
    url: "#",
  },
  {
    id: "project-06",
    number: "PROJECT 06",
    title: "Project Name 6",
    description: "Sunt in culpa qui officia deserunt mollit six.",
    url: "#",
  },
  {
    id: "project-07",
    number: "PROJECT 07",
    title: "Project Name 7",
    description: "Lorem ipsum dolor sit amet consectetur seven.",
    url: "#",
  },
  {
    id: "project-08",
    number: "PROJECT 08",
    title: "Project Name 8",
    description: "Sed do eiusmod tempor incididunt ut eight.",
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
