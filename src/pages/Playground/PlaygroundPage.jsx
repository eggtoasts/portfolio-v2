import "./PlaygroundPage.css";

const rows = [
  [
    {
      title: "Jujutsu Kaisen Animation",
      type: "Figma Motion",
      media: [{ src: "/playground-media/MAHORAGA.mp4", ratio: 2064 / 1056 }],
    },
    {
      title: "KDI Mascot Animation",
      type: "Figma Motion",
      media: [{ src: "/playground-media/KDI_Wave.gif", ratio: 1 }],
      credit:
        "Credit to the graphic design team (Lena, Tucker, and Lorenzo) for designing our KDI mascot, Gigi Byte.",
    },
  ],
  [
    {
      title: "Calendar Poster",
      type: "Figma",
      media: [{ src: "/playground-media/Calendar-3.png", ratio: 1218 / 1724 }],
    },
    {
      title: "Cat Painting",
      type: "Gouache Painting",
      media: [{ src: "/playground-media/catpfp.png", ratio: 960 / 806 }],
    },
  ],
  [
    {
      title: "KDI Officer Recruitment Posters",
      type: "Graphic Design",
      media: [
        { src: "/playground-media/14.png", ratio: 1080 / 1350 },
        { src: "/playground-media/15.png", ratio: 1080 / 1350 },
        { src: "/playground-media/16.png", ratio: 1080 / 1350 },
      ],
    },
  ],
  [
    {
      title: "KDI UI/UX Project Program Posters",
      type: "Graphic Design",
      media: [
        { src: "/playground-media/FINAL Project1.png", ratio: 1536 / 2048 },
        { src: "/playground-media/FINAL Workshop1.png", ratio: 1536 / 2048 },
        { src: "/playground-media/FINAL Workshop2.png", ratio: 1536 / 2048 },
        { src: "/playground-media/FINAL Project2.png", ratio: 1536 / 2048 },
      ],
    },
  ],
];

export default function PlaygroundPage() {
  return (
    <div className="page">
      <h1 className="main-font">Playground</h1>
      <p className="playground-intro text-font">
        Here are some things I made for fun!
      </p>

      <div className="playground-rows">
        {rows.map((row, i) => (
          <div className="playground-row" key={i}>
            {row.map((item) => (
              <PlaygroundCard key={item.title} {...item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function PlaygroundCard({ title, type, media, credit }) {
  const totalRatio = media.reduce((sum, item) => sum + item.ratio, 0);

  return (
    <div className="playground-card" style={{ "--ratio": totalRatio }}>
      <div
        className={media.length > 1 ? "playground-set" : "playground-single"}
      >
        {media.map((item, i) =>
          item.src.endsWith(".mp4") ? (
            <video
              key={item.src}
              className="playground-media"
              style={{ "--ratio": item.ratio }}
              src={item.src}
              autoPlay
              muted
              loop
              playsInline
            ></video>
          ) : (
            <img
              key={item.src}
              className="playground-media"
              style={{ "--ratio": item.ratio }}
              src={item.src}
              alt={media.length > 1 ? `${title} ${i + 1}` : title}
            ></img>
          ),
        )}
      </div>

      <div className="playground-info-row">
        <p className="playground-title main-font">{title}</p>
        <p className="playground-type text-font">{type}</p>
      </div>

      {credit && <p className="playground-credit text-font">{credit}</p>}
    </div>
  );
}
