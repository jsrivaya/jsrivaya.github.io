const mustRead: {
  title: string;
  source: string;
  href: string;
  note?: string;
}[] = [
  {
    title: "The 18 Mistakes That Kill Startups",
    source: "Paul Graham",
    href: "https://www.paulgraham.com/startupmistakes.html",
    note: "",
  },
];

const worthListening: {
  title: string;
  type: string;
  href: string;
  note?: string;
}[] = [
  {
    title: "Head of Claude Code: What happens after coding is solved",
    type: "interview",
    href: "https://www.youtube.com/watch?v=We7BZVKbCVw",
    note: "Boris Cherny is the creator and head of Claude Code at Anthropic. What began as a simple terminal-based prototype just a year ago has transformed the role of software engineering and is increasingly transforming all professional work.",
  },
];

const mustWatch: {
  title: string;
  type: string;
  href: string;
  note?: string;
}[] = [
  {
    title: "Deep Learning for Computer Vision",
    type: "lecture",
    href: "https://www.youtube.com/watch?v=u6aEYuemt0M",
    note: "",
  },
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

      <p style={{ fontSize: "14px", color: "#777", marginBottom: "40px", lineHeight: 1.65 }}>
        Things I&apos;ve found worth reading, watching, or listening to.
      </p>

      {/* Worth Reading */}
      <div style={{ marginBottom: "40px" }}>
        <p style={{ fontSize: "12px", color: "#bbb", marginBottom: "14px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          Worth Reading
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {mustRead.map(({ title, source, href, note }) => (
            <li key={title} style={{ paddingBottom: "16px", borderBottom: "1px solid #f0f0f0", marginBottom: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px" }}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="entry-link" style={{ fontSize: "15px", color: "#1a1a1a" }}>
                  {title}
                </a>
                <span style={{ fontSize: "12px", color: "#bbb", whiteSpace: "nowrap", flexShrink: 0 }}>{source}</span>
              </div>
              {note && <p style={{ fontSize: "13px", color: "#777", marginTop: "6px", lineHeight: 1.6 }}>{note}</p>}
            </li>
          ))}
        </ul>
      </div>

      {/* Worth Listening */}
      <div style={{ marginBottom: "40px" }}>
        <p style={{ fontSize: "12px", color: "#bbb", marginBottom: "14px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          Worth Listening
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {worthListening.map(({ title, type, href, note }) => (
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

      {/* Worth Watching */}
      <div style={{ marginBottom: "40px" }}>
        <p style={{ fontSize: "12px", color: "#bbb", marginBottom: "14px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          Worth Watching
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
