const projects: {
  title: string;
  description: string;
  year: string;
  url?: string;
  tags: string[];
}[] = [
  {
    title: "loon",
    description:
      "A lightweight, header-only C++ library designed for low memory footprint, low latency, and maximum performance. Provides optimized data structures that outperform standard STL counterparts while maintaining familiar interfaces. Built for HFT, gaming, embedded systems, and real-time processing.",
    year: "2026",
    url: "https://www.loonlib.dev",
    tags: ["C++", "header-only", "performance", "HFT", "embedded"],
  },
  {
    title: "Build Your Own Shell",
    description:
      "Unix shell built from scratch in C/C++ — parsing, builtins, piping, redirection, and quoting. CodeCrafters challenge.",
    year: "2025",
    url: "https://app.codecrafters.io/courses/shell/overview",
    tags: ["C/C++", "systems", "CodeCrafters"],
  },
  {
    title: "Build Your Own Redis",
    description:
      "Redis-compatible server built in C/C++ — RESP protocol, event loop, persistence, and replication. CodeCrafters challenge.",
    year: "2025",
    url: "https://app.codecrafters.io/courses/redis/overview",
    tags: ["C/C++", "networking", "CodeCrafters"],
  },
  {
    title: "Build Your Own Claude Code",
    description:
      "Reimplementing Claude Code from the ground up — agent loop, tool use, and terminal UX. CodeCrafters challenge.",
    year: "2026",
    url: "https://app.codecrafters.io/courses/claude-code/overview",
    tags: ["agents", "LLM", "CodeCrafters"],
  },
];

export default function Projects() {
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
        Projects
      </h1>

      <p style={{ fontSize: "14px", color: "#777", marginBottom: "40px", lineHeight: 1.65 }}>
        A mix of personal projects, experiments, and things I've built.
      </p>

      {projects.length === 0 ? (
        <p style={{ fontSize: "14px", color: "#999" }}>Coming soon.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {projects.map(({ title, description, year, url, tags }) => (
            <li
              key={title}
              style={{
                paddingBottom: "24px",
                borderBottom: "1px solid #f0f0f0",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: "16px",
                  marginBottom: "6px",
                }}
              >
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="entry-link"
                    style={{ fontSize: "15px", color: "#1a1a1a" }}
                  >
                    {title}
                  </a>
                ) : (
                  <span style={{ fontSize: "15px", color: "#1a1a1a" }}>
                    {title}
                  </span>
                )}
                <span style={{ fontSize: "12px", color: "#bbb", whiteSpace: "nowrap", flexShrink: 0 }}>
                  {year}
                </span>
              </div>

              <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.65, marginBottom: "10px" }}>
                {description}
              </p>

              {tags.length > 0 && (
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "11px",
                        color: "#aaa",
                        border: "1px solid #e8e8e8",
                        borderRadius: "2px",
                        padding: "2px 7px",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
