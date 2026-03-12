export default function Home() {
  return (
    <div
      style={{
        paddingTop: "4px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
        maxWidth: "620px",
      }}
    >
      {["cut-01", "cut-02", "cut-03"].map((name) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={name}
          src={`/${name}.svg`}
          alt=""
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      ))}
    </div>
  );
}
