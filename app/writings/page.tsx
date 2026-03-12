const writings = [
  {
    year: "2025",
    items: [
      { title: "On the patience of stones", date: "Nov 2025", href: "#" },
      { title: "What cities remember", date: "Aug 2025", href: "#" },
      { title: "A brief history of waiting", date: "Mar 2025", href: "#" },
    ],
  },
  {
    year: "2024",
    items: [
      { title: "The language of small hours", date: "Dec 2024", href: "#" },
      { title: "Notes on translation", date: "Jun 2024", href: "#" },
    ],
  },
];

export default function Writings() {
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
        Writings
      </h1>

      {writings.map(({ year, items }) => (
        <div key={year} style={{ marginBottom: "36px" }}>
          <p
            style={{
              fontSize: "12px",
              color: "#bbb",
              marginBottom: "12px",
              letterSpacing: "0.05em",
            }}
          >
            {year}
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {items.map(({ title, date, href }) => (
              <li
                key={title}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  paddingBottom: "10px",
                  borderBottom: "1px solid #f0f0f0",
                  marginBottom: "10px",
                }}
              >
                <a href={href} className="entry-link" style={{ fontSize: "14px", color: "#1a1a1a" }}>
                  {title}
                </a>
                <span style={{ fontSize: "12px", color: "#bbb", marginLeft: "16px", whiteSpace: "nowrap" }}>
                  {date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
