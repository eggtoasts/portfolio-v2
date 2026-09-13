export default function InfoRow({ columns }) {
  return (
    <div className="info-row">
      {columns.map((col, i) => (
        <div key={i} className="info-col sub-font">
          <p>{col.label}</p>

          <div className="info-block text-font">
            {col.values.map((value, j) => (
              <p key={j}>{value}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
