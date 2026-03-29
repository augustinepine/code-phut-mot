import React from "react";

const ShimmerButton: React.FC = () => {
  return (
    <button
      className="
        relative px-8 py-3 rounded-xl font-semibold
        text-white bg-gradient-to-r shadow-lg 
        overflow-hidden 
        from-pink-500 via-rose-500 to-purple-500
      "
    >
      <span className="relative z-10">Get Started 🚀</span>

      <span
        className="
          absolute top-0 left-[-150%] w-[150%] 
          bg-gradient-to-r from-transparent 
          via-white/60 to-transparent
          transform skew-x-[-20deg] h-full
          animate-shimmer
        "
      />
    </button>
  );
};

export default ShimmerButton;
