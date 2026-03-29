import React from "react";

const ShinyRevealText: React.FC = () => {
  return (
    <h1
      className="relative text-[5rem] font-extrabold 
    text-gray-600 overflow-hidden"
    >
      FRONTEND
      <span
        className="absolute inset-0 bg-gradient-to-r 
      from-transparent via-black to-transparent 
      text-transparent animate-shine"
      ></span>
    </h1>
  );
};

export default ShinyRevealText;
