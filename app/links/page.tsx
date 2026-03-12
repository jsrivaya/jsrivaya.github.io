const links = [
  {
    month: "March 2026",
    items: [
      {
        title: "The unreasonable effectiveness of just showing up",
        source: "The Atlantic",
        href: "#",
      },
      {
        title: "A cartography of silence",
        source: "Lapham's Quarterly",
        href: "#",
      },
      {
        title: "How to read a building",
        source: "Places Journal",
        href: "#",
      },
    ],
  },
  {
    month: "February 2026",
    items: [
      {
        title: "In praise of the amateur",
        source: "The Hedgehog Review",
        href: "#",
      },
      {
        title: "What we talk about when we talk about slowness",
        source: "Aeon",
        href: "#",
      },
    ],
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

      {links.map(({ month, items }) => (
        <div key={month} style={{ marginBottom: "36px" }}>
          <p
            style={{
              fontSize: "12px",
              color: "#bbb",
              marginBottom: "14px",
              letterSpacing: "0.03em",
            }}
          >
            {month}
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {items.map(({ title, source, href }) => (
              <li
                key={title}
                style={{
                  paddingBottom: "12px",
                  borderBottom: "1px solid #f0f0f0",
                  marginBottom: "12px",
                }}
              >
                <a
                  href={href}
                  className="entry-link"
                  style={{ fontSize: "14px", color: "#1a1a1a", display: "block" }}
                >
                  {title}
                </a>
                <span style={{ fontSize: "12px", color: "#bbb" }}>
                  {source}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
