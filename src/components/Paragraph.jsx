// component for paragraphs
export default function Paragraph({
  subheader,
  header,
  arr,
  color,
  coloredText,
}) {
  // only color the 'colored' text if exists
  const parts = coloredText ? header.split(coloredText) : [header];

  return (
    <>
      <div className="paragraph">
        <div className="title-block">
          <p className="sub-header">{subheader}</p>
          <h2 className="header">
            {coloredText ? (
              <>
                {parts[0]}
                <span className={color}>{coloredText}</span>
                {parts[1]}
              </>
            ) : (
              header
            )}
          </h2>
        </div>

        <div className="text-block">
          {arr.map((a, i) => (
            <p key={i}>{a}</p>
          ))}
        </div>
      </div>
    </>
  );
}
