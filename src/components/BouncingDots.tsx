import React from "react";

const BouncingDots: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-64 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
      <div className="flex flex-col items-center space-y-8">
        <h3 className="text-white text-2xl font-bold">Loading...</h3>

        <div className="flex space-x-3">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="w-4 h-4 bg-white rounded-full"
              style={{
                animation: `bounce-dot 1.4s ease-in-out infinite`,
                animationDelay: `${index * 0.16}s`,
              }}
            />
          ))}
        </div>

        <div className="flex space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-6 h-6 border-4 border-white rounded-full"
              style={{
                animation: `scale-pulse 1.5s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bounce-dot {
          0%, 80%, 100% {
            transform: scale(0.8) translateY(0);
            opacity: 0.5;
          }
          40% {
            transform: scale(1.2) translateY(-30px);
            opacity: 1;
          }
        }

        @keyframes scale-pulse {
          0%, 100% {
            transform: scale(0.8);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.3);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default BouncingDots;
