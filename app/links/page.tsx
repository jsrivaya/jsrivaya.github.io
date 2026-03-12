const mustWatch: {
  title: string;
  type: string;
  href: string;
  note?: string;
}[] = [
  {
    title: "General Magic",
    type: "documentary",
    href: "https://www.imdb.com/title/tt6849786",
    note: "The untold story of the most important company to ever come out of Silicon Valley — and why you've never heard of it.",
  },
];

export default function Links() {
  return (
    <div>
      <h1
        style={{
          fontSize: "13px",
          fontWeight: "normal",
          color: "#888",
          marginBottom: "40px",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
      >
        Links
      </h1>

      {/* Must Watch */}
      <div style={{ marginBottom: "40px" }}>
        <p style={{ fontSize: "12px", color: "#bbb", marginBottom: "14px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          Must Watch
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {mustWatch.map(({ title, type, href, note }) => (
            <li key={title} style={{ paddingBottom: "16px", borderBottom: "1px solid #f0f0f0", marginBottom: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px" }}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="entry-link" style={{ fontSize: "15px", color: "#1a1a1a" }}>
                  {title}
                </a>
                <span style={{ fontSize: "12px", color: "#bbb", whiteSpace: "nowrap", flexShrink: 0 }}>{type}</span>
              </div>
              {note && <p style={{ fontSize: "13px", color: "#777", marginTop: "6px", lineHeight: 1.6 }}>{note}</p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
