import React, { useState } from "react";

const MorphingCard: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex items-center justify-center p-8">
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          cursor-pointer bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500
          rounded-3xl shadow-2xl transition-all duration-700 ease-in-out
          ${isExpanded ? "w-96 h-96" : "w-64 h-64"}
          flex items-center justify-center overflow-hidden relative
        `}
        style={{
          transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
        }}
      >
        <div
          className="absolute inset-0 bg-white/10 backdrop-blur-sm"
          style={{
            transform: isExpanded ? "scale(1)" : "scale(0.8)",
            opacity: isExpanded ? 1 : 0.5,
            transition: "all 0.7s ease-in-out",
          }}
        />

        <div
          className="relative z-10 text-center"
          style={{
            transform: isExpanded
              ? "rotate(180deg) scale(1.2)"
              : "rotate(0deg) scale(1)",
            transition: "all 0.7s ease-in-out",
          }}
        >
          <h3 className="text-white text-3xl font-bold mb-2">
            {isExpanded ? "✨ Expanded!" : "🎨 Click Me"}
          </h3>
          <p className="text-white/90 text-sm">
            {isExpanded ? "Click again to morph back" : "Watch me transform"}
          </p>
        </div>

        {/* Animated circles */}
        <div
          className="absolute w-20 h-20 bg-white/20 rounded-full"
          style={{
            top: isExpanded ? "10%" : "50%",
            left: isExpanded ? "10%" : "50%",
            transform: "translate(-50%, -50%)",
            transition: "all 0.7s ease-in-out",
          }}
        />
        <div
          className="absolute w-16 h-16 bg-white/20 rounded-full"
          style={{
            bottom: isExpanded ? "10%" : "50%",
            right: isExpanded ? "10%" : "50%",
            transform: "translate(50%, 50%)",
            transition: "all 0.7s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

export default MorphingCard;
