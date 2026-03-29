import React from "react";

const RevealText: React.FC = () => {
  return (
    <h1
      className="
          text-5xl font-extrabold 
          bg-clip-text text-transparent 
          bg-gradient-to-r from-pink-500 
          via-purple-500 to-indigo-500
          animate-reveal
        "
    >
      Frontend Magic ✨
    </h1>
  );
};

export default RevealText;
