import React from "react";

const NeonText: React.FC = () => {
  return (
    <h1
      className="
        text-5xl font-extrabold text-pink2 
        drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]
        animate-flicker
      "
    >
      Code with Neon Glow! 💖
    </h1>
  );
};

export default NeonText;
