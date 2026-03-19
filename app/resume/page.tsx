const experience = [
  {
    role: "Staff Software Engineer",
    company: "Ford Motor Company",
    location: "Palo Alto, CA",
    period: "Mar 2022 – Present",
    bullets: [
      "Co-led development of FordKit SDK alongside a Principal — a COVESA-based vehicle services abstraction SDK built with C/C++, Python, gRPC, and SOME/IP, delivered by a 7-person team via GitHub CI/CD and automation.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Ford Motor Company",
    location: "Palo Alto, CA",
    period: "Mar 2017 – Mar 2022",
    bullets: [
      "Co-led Ford's technical partnership evaluation as the Amazon workstream lead, building a joint vehicle prototype and directly advising C-level executives during the final executive review.",
      "Integrated a Computer Vision Intrusion Detection System PoC (Raspberry Pi, Coral TPU), building the full demo infrastructure that directly led to the creation of Ford subsidiary Canopy Security.",
      "Architected a cloud platform PoC for vehicle-to-smart-home connectivity (Python, Docker, OpenShift, K8s, Knative).",
      "Built Go-based microservices infrastructure (AWS) for a consumer electronics PoC.",
      "Implemented a Body Control ECU embedded software stack (C/C++, CAN bus, AUTOSAR, ISO-26262, NXP S32).",
      "Championed internal talent development: co-led the 2020 Virtual Hackathon (mentored winning team, received MVP Award), coordinated the Summer Interns program, and chaired the University Research Program funding committee.",
    ],
  },
  {
    role: "Android Dev Lead",
    company: "BlackBerry Ltd",
    location: "Redwood City, CA",
    period: "Jan 2015 – Mar 2017",
    bullets: [
      "Technical lead of a global team of seven engineers across four time zones while maintaining individual technical responsibilities.",
      "Oversaw product quality and market readiness, collaborating with Product Management and BlackBerry 10 platform leads for strategic releases.",
      "Owned Agile ceremonies and sprint coordination as SCRUM Master, aligning engineering delivery with product release schedules.",
    ],
  },
  {
    role: "Android Framework Engineer",
    company: "BlackBerry Ltd",
    location: "Redwood City, CA",
    period: "Nov 2012 – Jan 2015",
    bullets: [
      "Led the BlackBerry/Amazon partnership integration, preloading the Amazon Appstore onto BB10 devices, expanding the app ecosystem and establishing a new revenue-sharing stream.",
      "Developed and maintained critical Android Runtime components (Push Notifications, CTS, In-App Billing, Package Manager, security) across all levels from OS to UI.",
      "Collaborated with external premium partners (Waze, Skype, eBay, Amazon) to ensure seamless Android app integration within the BlackBerry 10 ecosystem.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Real Time Innovations Inc",
    location: "Sunnyvale, CA",
    period: "Mar 2008 – Nov 2012",
    bullets: [
      "Advanced core RTI middleware development, implementing C/C++ and Ada features (Builtin Types, code generation) and leading the performance initiative to automate weekly results via C++ tests and Perl scripts.",
      "Served as resident Integrity RTOS expert and led RTI Connext ports to diverse embedded and custom Linux platforms (Integrity OS, VxWorks, and others).",
      "Streamlined release process, reducing platform porting time by 50%.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Real Time Innovations Inc",
    location: "Sunnyvale, CA",
    period: "Jul 2007 – Mar 2008",
    bullets: [
      "Contributed to core RTI middleware development, providing customer technical support and assisting presales engineering efforts.",
    ],
  },
  {
    role: "Visiting Researcher, Mobile Ad-Hoc Networks",
    company: "University of Oslo",
    location: "Oslo, Norway",
    period: "Aug 2006 – Jul 2007",
    bullets: [
      "Engineered Java prototype for real-time video streaming over Mobile Ad-Hoc Networks, securing project funding.",
    ],
  },
  {
    role: "Systems Administrator",
    company: "University of Oviedo",
    location: "Asturias, Spain",
    period: "Oct 2004 – Oct 2006",
    bullets: [
      "Managed university IT infrastructure, network operations, and user support for the School of Engineering.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Altabox S.L.",
    location: "Asturias, Spain",
    period: "Feb 2004 – Dec 2004",
    bullets: [
      "Designed and developed an Audio Marketing product that became Altabox S.L.'s core offering.",
    ],
  },
];

const skills = [
  { label: "Languages & Frameworks", value: "C/C++, Python; Learning: Rust" },
  { label: "Middleware & Protocols", value: "DDS, gRPC, SOME/IP, CAN bus; Learning: Redis" },
  { label: "Methodologies", value: "Agile, SCRUM, Lean Engineering, TDD, Clean Code" },
  { label: "Cloud & Containerization", value: "AWS, Docker, OpenShift, Kubernetes (k8)" },
  { label: "Operating Systems", value: "Linux, Android (Runtime & Framework), Real-Time OS (Integrity, QNX)" },
  { label: "Tools & Platforms", value: "DevOps, CI/CD through GitHub Actions, Conan, JFrog Artifactory, Raspberry Pi, Coral TPU" },
];

const sideProjects = [
  {
    name: "Loon",
    description: "Headers-only C++ library optimized for low-latency, high-performance use cases.",
    href: "https://github.com/jsrivaya/loon",
  },
  {
    name: "Command Shell Interpreter",
    description: "Unix shell built from scratch in C/C++ (CodeCrafters).",
  },
  {
    name: "Redis server",
    description: "Redis-compatible server built in C/C++ (CodeCrafters).",
  },
];

const education = [
  {
    institution: "Universidad de Oviedo",
    location: "Gijón, Spain",
    items: [
      "MS Computer Science, Distributed Systems",
      "BS Computer Science, Major in Systems Programming and Real-Time Systems",
    ],
  },
];

const continuingEducation = [
  {
    institution: "Stanford University Continuing Studies",
    location: "Palo Alto, CA",
    period: "Jan 2008 – Mar 2011",
    items: [
      "Product Management in High Tech Products and Innovation",
      "Finance for Entrepreneurship, Strategic Marketing and Engineering",
      "How to Start Your Business: From Idea to Business Plan",
      "Starting and Growing Technology Ventures",
    ],
  },
  {
    institution: "Udacity",
    location: "Online",
    period: "Jan 2017 – Jun 2017",
    items: ["Self-Driving Car Engineer"],
  },
];

const certifications = [
  { name: "Claude Code in Action", issuer: "Anthropic", date: "2026" },
  { name: "Clean Code Green Belt (highest level)", issuer: "Ford Motor Company", date: "Feb 2024" },
  { name: "gRPC [Golang] Master Class", issuer: "Udemy", date: "Feb 2024" },
];

const patents = [
  { id: "US10933994B2", title: "System and methods for delivering a package from a drone to a vehicle" },
  { id: "DE102019110429A1", title: "Control of airbag activation status on a motor vehicle" },
  { id: "US20200032560A1", title: "Selectively concealed door handle" },
];

const affiliations = [
  "Volunteer — Palisades Tahoe | Alpine Meadows Ski Patrol Lead Instructor",
  "Mentor — BUILD.org (empowering at-risk youth through entrepreneurship)",
];

const label: React.CSSProperties = {
  fontSize: "12px",
  color: "#bbb",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  marginBottom: "16px",
};

const section: React.CSSProperties = {
  marginBottom: "48px",
};

export default function Resume() {
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
        Resume
      </h1>

      {/* Header */}
      <div style={{ marginBottom: "40px" }}>
        <p style={{ fontSize: "22px", color: "#1a1a1a", marginBottom: "6px" }}>Jorge Suárez-Rivaya</p>
        <p style={{ fontSize: "13px", color: "#aaa" }}>
          <a href="https://www.linkedin.com/in/jsrivaya/" target="_blank" rel="noopener noreferrer" className="entry-link" style={{ color: "#aaa" }}>linkedin.com/in/jsrivaya</a>
          <span style={{ margin: "0 8px", color: "#ddd" }}>|</span>
          <a href="https://jsrivaya.github.io/" target="_blank" rel="noopener noreferrer" className="entry-link" style={{ color: "#aaa" }}>jsrivaya.github.io</a>
        </p>
      </div>

      {/* Summary */}
      <div style={section}>
        <p style={{ fontSize: "15px", color: "#444", lineHeight: 1.7 }}>
          Staff Software Engineer and Technical Lead with 17+ years of experience across embedded systems,
          cloud infrastructure, and computer vision — from bare-metal ECUs to Kubernetes-based platforms.
          At Ford, led development of the FordKit SDK and a computer vision PoC that spun off into a standalone
          subsidiary. Deep expertise in C/C++, Python, gRPC, CI/CD, and real-time systems, with a track record
          of shipping production software, mentoring engineers, and influencing technical direction at the C-level.
        </p>
      </div>

      {/* Skills */}
      <div style={section}>
        <p style={label}>Technical Skills</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {skills.map(({ label: l, value }) => (
            <div key={l} style={{ display: "flex", gap: "16px" }}>
              <span style={{ fontSize: "13px", color: "#aaa", minWidth: "170px", flexShrink: 0 }}>{l}</span>
              <span style={{ fontSize: "13px", color: "#555" }}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div style={section}>
        <p style={label}>Work Experience</p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {experience.map((job, i) => (
            <div
              key={job.role + job.company}
              style={{
                paddingBottom: "28px",
                marginBottom: "28px",
                borderBottom: i < experience.length - 1 ? "1px solid #f0f0f0" : "none",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", flexWrap: "wrap", marginBottom: "2px" }}>
                <span style={{ fontSize: "15px", color: "#1a1a1a" }}>{job.role}</span>
                <span style={{ fontSize: "12px", color: "#bbb", whiteSpace: "nowrap" }}>{job.period}</span>
              </div>
              <p style={{ fontSize: "13px", color: "#aaa", marginBottom: "10px" }}>{job.company} — {job.location}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                {job.bullets.map((b) => (
                  <li key={b} style={{ fontSize: "14px", color: "#555", paddingLeft: "12px", lineHeight: 1.65, display: "flex", gap: "8px" }}>
                    <span style={{ color: "#ccc", flexShrink: 0 }}>–</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Side Projects */}
      <div style={section}>
        <p style={label}>Side Projects</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {sideProjects.map(({ name, description, href }) => (
            <div key={name}>
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className="entry-link" style={{ fontSize: "14px", color: "#1a1a1a" }}>
                  {name}
                </a>
              ) : (
                <span style={{ fontSize: "14px", color: "#1a1a1a" }}>{name}</span>
              )}
              <span style={{ fontSize: "14px", color: "#777" }}> — {description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div style={section}>
        <p style={label}>Education</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {education.map((e) => (
            <div key={e.institution}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", flexWrap: "wrap", marginBottom: "4px" }}>
                <span style={{ fontSize: "15px", color: "#1a1a1a" }}>{e.institution}</span>
                <span style={{ fontSize: "12px", color: "#bbb" }}>{e.location}</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
                {e.items.map((d) => (
                  <li key={d} style={{ fontSize: "14px", color: "#555" }}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Continuing Education */}
      <div style={section}>
        <p style={label}>Continuing Education</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {continuingEducation.map((e) => (
            <div key={e.institution}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", flexWrap: "wrap", marginBottom: "4px" }}>
                <span style={{ fontSize: "15px", color: "#1a1a1a" }}>{e.institution}</span>
                <span style={{ fontSize: "12px", color: "#bbb" }}>{e.period}</span>
              </div>
              <p style={{ fontSize: "13px", color: "#aaa", marginBottom: "6px" }}>{e.location}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
                {e.items.map((d) => (
                  <li key={d} style={{ fontSize: "14px", color: "#555" }}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div style={section}>
        <p style={label}>Certifications</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {certifications.map(({ name, issuer, date }) => (
            <div key={name} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "14px", color: "#555" }}>
                {name} <span style={{ color: "#aaa" }}>— {issuer}</span>
              </span>
              <span style={{ fontSize: "12px", color: "#bbb", whiteSpace: "nowrap" }}>{date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Patents */}
      <div style={section}>
        <p style={label}>Patents</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {patents.map(({ id, title }) => (
            <div key={id} style={{ display: "flex", gap: "12px" }}>
              <span style={{ fontSize: "12px", color: "#bbb", whiteSpace: "nowrap", paddingTop: "2px", flexShrink: 0 }}>{id}</span>
              <span style={{ fontSize: "14px", color: "#555" }}>{title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Affiliations */}
      <div style={section}>
        <p style={label}>Affiliations</p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
          {affiliations.map((a) => (
            <li key={a} style={{ fontSize: "14px", color: "#555" }}>{a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
