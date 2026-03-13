"use client";

import { useState } from "react";

const photos = [
  {
    src: "/photos/train-window.jpg",
    description: "On the train, somewhere in Norway.",
  },
  {
    src: "/photos/golden-gate.jpg",
    description: "Golden Gate Bridge, San Francisco.",
  },
  {
    src: "/photos/zion.jpg",
    description: "Angel's Landing trail, Zion National Park.",
  },
  {
    src: "/photos/biarritz-sunset.jpg",
    description: "Sunset at the Rocher de la Vierge, Biarritz.",
  },
];

export default function Photos() {
  const [index, setIndex] = useState(0);
  const photo = photos[index];

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: "32px",
        }}
      >
        <h1
          style={{
            fontSize: "13px",
            fontWeight: "normal",
            color: "#888",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Photos
        </h1>
        <a
          href="https://www.flickr.com/photos/jsrivaya/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "12px",
            color: "#bbb",
            borderBottom: "1px solid #e0e0e0",
            paddingBottom: "1px",
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#888")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#bbb")}
        >
          All photos on Flickr →
        </a>
      </div>

      {/* Intro note */}
      <p style={{ fontSize: "14px", color: "#777", marginBottom: "32px", lineHeight: 1.65, maxWidth: "600px" }}>
        I liked capturing moments in photos since I was a kid. Here are some I like the most. Some shot with old digital compact cameras — like the Casio Exilim EX-Z4 or the Canon EOS 50D — or just whatever phone I had in hand. Currently shooting with a Sony a7C II with the FE 40mm F2.5 G.
      </p>

      {/* Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={photo.src}
        src={photo.src}
        alt={photo.description}
        style={{
          width: "100%",
          maxWidth: "600px",
          height: "auto",
          display: "block",
          aspectRatio: "4/3",
          objectFit: "cover",
          backgroundColor: "#f0f0f0",
        }}
      />

      {/* Caption + nav row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: "16px",
          maxWidth: "600px",
          gap: "24px",
        }}
      >
        <p style={{ fontSize: "14px", color: "#555", flex: 1 }}>
          {photo.description}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexShrink: 0,
          }}
        >
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            style={{
              background: "none",
              border: "none",
              cursor: index === 0 ? "default" : "pointer",
              fontSize: "13px",
              color: index === 0 ? "#ccc" : "#888",
              padding: 0,
              fontFamily: "inherit",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => {
              if (index > 0) (e.target as HTMLElement).style.color = "#1a1a1a";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color =
                index === 0 ? "#ccc" : "#888";
            }}
          >
            ← prev
          </button>

          <span style={{ fontSize: "12px", color: "#ccc" }}>
            {index + 1} / {photos.length}
          </span>

          <button
            onClick={() => setIndex((i) => Math.min(photos.length - 1, i + 1))}
            disabled={index === photos.length - 1}
            style={{
              background: "none",
              border: "none",
              cursor: index === photos.length - 1 ? "default" : "pointer",
              fontSize: "13px",
              color: index === photos.length - 1 ? "#ccc" : "#888",
              padding: 0,
              fontFamily: "inherit",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => {
              if (index < photos.length - 1)
                (e.target as HTMLElement).style.color = "#1a1a1a";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color =
                index === photos.length - 1 ? "#ccc" : "#888";
            }}
          >
            next →
          </button>
        </div>
      </div>
    </div>
  );
}
