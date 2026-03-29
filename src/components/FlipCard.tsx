import React, { useState } from "react";

const FlipCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex items-center justify-center p-8">
      <div
        className="relative w-80 h-96 cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className="relative w-full h-full transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front Side */}
          <div
            className="absolute w-full h-full rounded-2xl shadow-2xl flex flex-col items-center justify-center p-8
              bg-gradient-to-br from-blue-500 to-purple-600"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🎴</div>
              <h2 className="text-3xl font-bold text-white mb-3">Front Side</h2>
              <p className="text-white/90 text-lg">Click to flip me!</p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-12 h-12 border-4 border-white/30 rounded-full animate-spin-slow" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-4 border-white/20 rounded-full animate-pulse" />
          </div>

          {/* Back Side */}
          <div
            className="absolute w-full h-full rounded-2xl shadow-2xl flex flex-col items-center justify-center p-8
              bg-gradient-to-br from-pink-500 to-orange-500"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">✨</div>
              <h2 className="text-3xl font-bold text-white mb-3">Back Side</h2>
              <p className="text-white/90 text-lg">Click to flip back!</p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-lg animate-bounce" />
            <div className="absolute bottom-4 left-4 w-16 h-1 bg-white/30 animate-pulse" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FlipCard;
