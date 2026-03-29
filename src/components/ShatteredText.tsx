export default function ShatteredText() {
  const text = "FRONTEND";

  return (
    <h1 className="text-6xl group font-extrabold flex text-white gap-1">
      {text.split("").map((char, i) => {
        const mid = text.length / 2;
        const x = i < mid ? -120 : 120;
        const y = Math.random() * 200 - 100;
        return (
          <span
            style={{ "--x": `${x}px`, "--y": `${y}px` } as React.CSSProperties}
            key={i}
            className="
            inline-block transition-transform duration-700 ease-out
            group-hover:translate-x-[var(--x)]
            group-hover:translate-y-[var(--y)]
            group-hover:rotate-[360deg]
           "
          >
            {char}
          </span>
        );
      })}
    </h1>
  );
}
