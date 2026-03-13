const press = [
  {
    year: "2017",
    items: [
      {
        publication: "La Nueva España",
        title: "Los coches del futuro se comunicarán entre ellos para organizar el tráfico",
        date: "Dec 2017",
        href: "https://www.lne.es/gijon/2017/12/16/coches-futuro-comunicaran-organizar-trafico-19141058.html",
      },
      {
        publication: "El Comercio",
        title: "El 30% del tiempo que pasamos en el coche es para buscar aparcamiento",
        date: "Dec 2017",
        href: "https://www.elcomercio.es/gijon/tiempo-pasamos-coche-20171216002314-ntvo.html",
      },
    ],
  },
  {
    year: "2012",
    items: [
      {
        publication: "Revista EPI Gijón",
        title: "Ingenieros de la EPI en el mundo",
        date: "Jun 2012",
        href: "https://www.scribd.com/document/314797615/Revista-N%C2%BA2-de-EPI-Gijon",
      },
    ],
  },
  {
    year: "2009",
    items: [
      {
        publication: "La Nueva España",
        title: "En Silicon Valley la motivación y el desarrollo personal son enormes",
        date: "Dec 2009",
        href: "https://www.lne.es/gijon/2009/12/23/silicon-valley-motivacion-desarrollo-personal-21419346.html",
      },
    ],
  },
];

export default function Press() {
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
        Press
      </h1>

      <p style={{ fontSize: "14px", color: "#777", marginBottom: "40px", lineHeight: 1.65 }}>
        A few times I ended up in print.
      </p>

      {press.map(({ year, items }) => (
        <div key={year} style={{ marginBottom: "36px" }}>
          <p
            style={{
              fontSize: "12px",
              color: "#bbb",
              marginBottom: "14px",
              letterSpacing: "0.03em",
            }}
          >
            {year}
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {items.map(({ publication, title, date, href }) => (
              <li
                key={title}
                style={{
                  paddingBottom: "12px",
                  borderBottom: "1px solid #f0f0f0",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <a
                    href={href}
                    className="entry-link"
                    style={{ fontSize: "14px", color: "#1a1a1a" }}
                  >
                    {title}
                  </a>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#bbb",
                      marginLeft: "16px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {date}
                  </span>
                </div>
                <span style={{ fontSize: "12px", color: "#bbb" }}>
                  {publication}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
