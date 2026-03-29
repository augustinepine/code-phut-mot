export default function Rotating3DText() {
  const text = "FOLLOW✨FOR✨MORE✨";

  return (
    <div className="relative w-40 h-40 perspective-[800px]">
      <div
        className="absolute flex justify-center inset-0 text-white 
          text-2xl font-bold [transform-style:preserve-3d]
          animate-[spin_8s_linear_infinite] bg-amber-300
          "
      >
        {Array.from(text).map((char, i) => {
          return (
            <span
              key={i}
              className="
           absolute left-1/2 top-1/2 origin-[0_100px]
          "
              style={{
                transform: `rotateY(${
                  i * (360 / text.length)
                }deg) translateZ(100px) translateY(-50%)`,
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
}
