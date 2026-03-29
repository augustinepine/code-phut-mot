import React from "react";

const BreathingButton: React.FC = () => {
  return (
    <button
      className="
        relative px-6 py-3 rounded-xl font-semibold text-white
        bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
        animate-pulse
        shadow-lg
        hover:scale-105
        transition-transform duration-300
      "
    >
      Click Me ✨
    </button>
  );
};

export default BreathingButton;
