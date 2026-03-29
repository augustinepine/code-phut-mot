import React, { useState } from "react";

export default function WaveText() {
  const [offset, setOffset] = useState(0);

  const handleMove = (e: React.MouseEvent) => {
    setOffset(e.clientX);
  };

  const text = "FOLLOW ME";

  return (
    <div
      onMouseMove={handleMove}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: 60 }}>
        {text.split("").map((char, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              transform: `translateY(${Math.sin(offset * 0.01 + i) * 10}px)`,
              transition: "0.1s",
            }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}
