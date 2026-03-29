import React from "react";

const colors = [
  "#FF6B6B",
  "#FFD93D",
  "#6BCB77",
  "#4D96FF",
  "#FF4DFF",
  "#FF914D",
  "#00FFE7",
  "#FF00C8",
];

const ParticleExplosion: React.FC = () => {
  const [particles, setParticles] = React.useState<
    {
      id: number;
      x: number;
      y: number;
      color: string;
    }[]
  >([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newParticles = Array.from({ length: colors.length }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setParticles((prev) => [...prev, ...newParticles]);

    setTimeout(() => {
      setParticles((prev) =>
        prev.filter(
          (particle) => !newParticles.find((p) => p.id === particle.id)
        )
      );
    }, 1000);
  };

  return (
    <div
      className="relative cursor-pointer pt-[100px] h-screen w-full 
      flex justify-center overflow-hidden"
      onClick={handleClick}
    >
      <h1 className="text-3xl font-bold text-white">Happy new year!</h1>

      {particles.map((particle, index) => {
        return (
          <div
            key={particle.id}
            className="absolute w-3 h-3 rounded-full pointer-events-none"
            style={{
              left: particle.x,
              top: particle.y,
              backgroundColor: particle.color,
              boxShadow: `0 0 10px ${particle.color}`,
              animation: `particle-explode-${
                index % colors.length
              } 1s ease-out forwards`,
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticleExplosion;
