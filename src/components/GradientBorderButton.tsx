import React from "react";

const GradientBorderButton: React.FC = () => {
  return (
    <button
      className="
        relative inline-flex items-center justify-center
        px-8 py-3 font-semibold text-white rounded-xl
        overflow-hidden
      "
    >
      {/* Border gradient animated */}
      <span
        className="
          absolute inset-0 rounded-xl p-[3px]
          bg-gradient-to-r from-pink-500 via-purple-500 to-green-500
          animate-gradient bg-[length:200%_200%]
        "
      >
        <span className="block w-full h-full rounded-xl bg-black"></span>
      </span>

      {/* Text */}
      <span className="relative z-10">Sign Up 🚀</span>
    </button>
  );
};

export default GradientBorderButton;
