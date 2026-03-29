import React from "react";

const ShinyBorderButton: React.FC = () => {
  return (
    <button
      className="relative px-4 py-3 text-white 
      font-semibold bg-gray-900 rounded-lg 
      overflow-hidden"
    >
      <span
        className="absolute inset-[-2px] rounded-lg p-[2px] 
        bg-[conic-gradient(from_0deg,#ec4899,#facc15,#a855f7,#ec4899)]
        animate-[spin_4s_linear_infinite]
       "
      ></span>

      <span className="relative z-[1]">Shiny Border ✨</span>

      <span className="absolute inset-[2px] bg-black rounded-lg"></span>
    </button>
  );
};

export default ShinyBorderButton;
