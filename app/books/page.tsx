const currentlyReading = [
  {
    title: "Vibe Coding",
    author: "Gene Kim",
    href: "https://www.goodreads.com/book/show/228438060-vibe-coding",
  },
];

const groups = [
  {
    label: "Technology",
    books: [
      {
        title: "The Phoenix Project",
        author: "Gene Kim",
        href: "https://www.goodreads.com/book/show/17255186-the-phoenix-project",
        lesson: "",
      },
      {
        title: "Software Engineering at Google",
        author: "Titus Winters et al.",
        href: "https://www.goodreads.com/book/show/48816586-software-engineering-at-google",
        lesson: "",
      },
      {
        title: "Peopleware: Productive Projects and Teams",
        author: "Tom DeMarco & Timothy Lister",
        href: "https://www.goodreads.com/book/show/67825.Peopleware",
        lesson: "",
      },
    ],
  },
  {
    label: "Leadership & Business",
    books: [
      {
        title: "Build",
        author: "Tony Fadell",
        href: "https://www.goodreads.com/book/show/59696349-build",
        lesson: "",
      },
      {
        title: "Quiet Leadership",
        author: "Carlo Ancelotti",
        href: "https://www.goodreads.com/book/show/28264501-quiet-leadership",
        lesson: "",
      },
      {
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        href: "https://www.goodreads.com/book/show/4865.How_to_Win_Friends_and_Influence_People",
        lesson: "",
      },
      {
        title: "Good to Great",
        author: "Jim Collins",
        href: "https://www.goodreads.com/book/show/76865.Good_to_Great",
        lesson: "",
      },
      {
        title: "Organized for Success",
        author: "Stephanie Winston",
        href: "https://www.goodreads.com/book/show/8675843-organized-for-success",
        lesson: "",
      },
      {
        title: "Never Eat Alone",
        author: "Keith Ferrazzi",
        href: "https://www.goodreads.com/book/show/84699.Never_Eat_Alone",
        lesson: "",
      },
      {
        title: "Winners Take All",
        author: "Tony Seba",
        href: "https://www.goodreads.com/book/show/2609132-winners-take-all---the-9-fundamental-rules-of-high-tech-strategy",
        lesson: "",
      },
    ],
  },
  {
    label: "Ideas & Society",
    books: [
      {
        title: "The Road to Serfdom",
        author: "F.A. Hayek",
        href: "https://www.goodreads.com/book/show/299215.The_Road_to_Serfdom",
        lesson: "",
      },
      {
        title: "Man's Search for Meaning",
        author: "Viktor Frankl",
        href: "https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning",
        lesson: "",
      },
      {
        title: "Next Year in Cuba",
        author: "Gustavo Pérez Firmat",
        href: "https://www.goodreads.com/book/show/205372.Next_Year_in_Cuba",
        lesson: "",
      },
    ],
  },
  {
    label: "Fiction",
    books: [
      {
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        href: "https://www.goodreads.com/book/show/157993.The_Little_Prince",
        lesson: "",
      },
      {
        title: "A gyertyák csonkig égnek (Embers)",
        author: "Sándor Márai",
        href: "https://www.goodreads.com/book/show/783505.Embers",
        lesson: "",
      },
      {
        title: "El Alquimista (The Alchemist)",
        author: "Paulo Coelho",
        href: "https://www.goodreads.com/book/show/865.The_Alchemist",
        lesson: "",
      },
    ],
  },
  {
    label: "History",
    books: [
      {
        title: "Hispanos",
        author: "Fernando Díaz Villanueva",
        href: "https://www.goodreads.com/book/show/122975786-hispanos",
        lesson: "",
      },
      {
        title: "La gran aventura del Reino de Asturias",
        author: "José Javier Esparza",
        href: "https://www.goodreads.com/book/show/9799626-la-gran-aventura-del-reino-de-asturias",
        lesson: "",
      },
      {
        title: "Los que le llamábamos Adolfo",
        author: "Luis Herrero",
        href: "https://www.goodreads.com/book/show/8682710",
        lesson: "",
      },
      {
        title: "Lincoln",
        author: "César Vidal",
        href: "https://www.goodreads.com/book/show/17285980",
        lesson: "",
      },
    ],
  },
];

export default function Books() {
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
        Books I recommend
      </h1>

      <p style={{ fontSize: "14px", color: "#777", marginBottom: "40px", lineHeight: 1.65 }}>
        A list of books I have enjoyed and would recommend. Some changed how I think; others just stuck with me.
      </p>

      {/* Currently reading */}
      <div style={{ marginBottom: "48px" }}>
        <p
          style={{
            fontSize: "12px",
            color: "#bbb",
            marginBottom: "14px",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Currently reading
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {currentlyReading.map(({ title, author, href }) => (
            <li
              key={title}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: "16px",
                paddingBottom: "16px",
                borderBottom: "1px solid #f0f0f0",
                marginBottom: "16px",
              }}
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="entry-link"
                style={{ fontSize: "15px", color: "#1a1a1a" }}
              >
                {title}
              </a>
              <span style={{ fontSize: "12px", color: "#bbb", whiteSpace: "nowrap", flexShrink: 0 }}>
                {author}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {groups.map(({ label, books }) => (
        <div key={label} style={{ marginBottom: "40px" }}>
          <p
            style={{
              fontSize: "12px",
              color: "#bbb",
              marginBottom: "14px",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {label}
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {books.map(({ title, author, href, lesson }) => (
              <li
                key={title}
                style={{
                  paddingBottom: "16px",
                  borderBottom: "1px solid #f0f0f0",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: "16px",
                  }}
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="entry-link"
                    style={{ fontSize: "15px", color: "#1a1a1a" }}
                  >
                    {title}
                  </a>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#bbb",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {author}
                  </span>
                </div>
                {lesson && (
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#777",
                      marginTop: "6px",
                      lineHeight: 1.6,
                    }}
                  >
                    {lesson}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
