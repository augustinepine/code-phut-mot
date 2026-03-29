export default function Rotating3DText() {
  const text = "FOLLOW✨FOR✨MORE✨";

  return (
    <div className="relative w-40 h-40 perspective-[800px]">
      <div
        className="absolute inset-0 text-white text-2xl font-bold
          [transform-style:preserve-3d] bg-amber-300 
          animate-[spin_8s_linear_infinite]"
      >
        {Array.from(text).map((char, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 origin-[0_100px]"
            style={{
              transform: `rotateY(${
                i * (360 / text.length)
              }deg) translateZ(100px) translateY(-1/2)`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
