import React, { useState } from "react";

const SlideInCards: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    { title: "Design", icon: "🎨", color: "from-pink-500 to-rose-500" },
    { title: "Develop", icon: "💻", color: "from-blue-500 to-cyan-500" },
    { title: "Deploy", icon: "🚀", color: "from-purple-500 to-indigo-500" },
  ];

  return (
    <div className="flex items-center justify-center p-8 bg-gray-100 rounded-xl min-h-[400px]">
      <div className="flex gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative overflow-hidden"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`
                w-48 h-64 rounded-2xl shadow-xl cursor-pointer
                bg-gradient-to-br ${card.color}
                transition-all duration-500 ease-out
                ${
                  hoveredIndex === index
                    ? "scale-110 -rotate-2"
                    : "scale-100 rotate-0"
                }
              `}
              style={{
                transform:
                  hoveredIndex === index
                    ? "translateY(-10px) scale(1.1) rotate(-2deg)"
                    : "translateY(0px) scale(1) rotate(0deg)",
              }}
            >
              <div className="h-full flex flex-col items-center justify-center p-6 text-white">
                <div
                  className="text-6xl mb-4 transition-transform duration-500"
                  style={{
                    transform:
                      hoveredIndex === index
                        ? "scale(1.3) rotate(10deg)"
                        : "scale(1) rotate(0deg)",
                  }}
                >
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold">{card.title}</h3>

                {/* Sliding panel */}
                <div
                  className="absolute inset-0 bg-black/80 flex items-center justify-center p-6 transition-transform duration-500"
                  style={{
                    transform:
                      hoveredIndex === index
                        ? "translateY(0%)"
                        : "translateY(100%)",
                  }}
                >
                  <div className="text-center">
                    <p className="text-white text-sm">
                      Amazing {card.title.toLowerCase()} experience with modern
                      tools and technologies!
                    </p>
                  </div>
                </div>
              </div>

              {/* Shine effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                style={{
                  transform:
                    hoveredIndex === index
                      ? "translateX(100%)"
                      : "translateX(-100%)",
                  transition: "transform 0.6s ease-in-out",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideInCards;
