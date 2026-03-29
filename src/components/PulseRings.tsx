import React from "react";

const PulseRings: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-96 bg-gray-900 rounded-xl relative overflow-hidden">
      {/* Center dot */}
      <div className="relative z-10">
        <div className="w-8 h-8 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
      </div>

      {/* Pulsing rings */}
      {[0, 1, 2, 3, 4].map((index) => (
        <div
          key={index}
          className="absolute w-16 h-16 border-4 border-cyan-400 rounded-full"
          style={{
            animation: `pulse-ring 3s ease-out infinite`,
            animationDelay: `${index * 0.6}s`,
          }}
        />
      ))}

      {/* Rotating gradient rings */}
      <div className="absolute w-64 h-64 rounded-full opacity-30 animate-spin-slow">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-transparent" />
      </div>

      <div className="absolute w-96 h-96 rounded-full opacity-20 animate-spin-reverse">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-transparent" />
      </div>

      <style>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(8);
            opacity: 0;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PulseRings;
