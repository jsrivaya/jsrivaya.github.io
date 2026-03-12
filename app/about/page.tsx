export default function About() {
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
        About
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          color: "#444",
          fontSize: "15px",
        }}
      >
        <p>
          I am a software engineer and engineering leader from Avilés, Spain, now based in the Bay Area.
        </p>
        <p>
          I believe that investing in how teams build software — through lean engineering,
          modern architectures, and a relentless focus on developer experience — is one of
          the highest-leverage things a technologist can do.
        </p>
        <p>
          I am also deeply fascinated by robotics — the idea of machines that sense, reason,
          and act in the physical world sits at the intersection of everything I find
          compelling about engineering.
        </p>

        <div style={{ marginTop: "8px" }}>
          <p style={{ fontSize: "12px", color: "#bbb", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "12px" }}>
            Believe
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "That tools shape thinking — the way teams build software determines what they can even imagine building.",
              "That systems have leverage points — a small change in infrastructure or process can unlock disproportionate progress.",
              "That the physical world meeting logic is the most interesting frontier — robotics especially, where code has real consequences.",
              "That engineering is a form of advocacy — the how of building things matters as much as the what.",
            ].map((belief) => (
              <li key={belief} style={{ fontSize: "14px", color: "#555", paddingLeft: "12px", borderLeft: "2px solid #f0f0f0" }}>
                {belief}
              </li>
            ))}
          </ul>
        </div>

        <p>
          I ski patrol at Palisades Tahoe, mentor high school students, and spend time
          outdoors on a bike or in the mountains.
        </p>

        <p style={{ fontSize: "13px", color: "#aaa" }}>
          <a
            href="https://www.linkedin.com/in/jsrivaya/"
            target="_blank"
            rel="noopener noreferrer"
            className="entry-link"
            style={{ color: "#aaa" }}
          >
            LinkedIn
          </a>
        </p>

        <blockquote
          style={{
            margin: "8px 0 0 0",
            paddingLeft: "16px",
            borderLeft: "2px solid #e0e0e0",
          }}
        >
          <p style={{ color: "#888", fontStyle: "italic", fontSize: "14px", marginBottom: "6px" }}>
            "I do not fear computers. I fear the lack of them."
          </p>
          <p style={{ color: "#bbb", fontSize: "12px" }}>— Isaac Asimov</p>
        </blockquote>
      </div>
    </div>
  );
}
