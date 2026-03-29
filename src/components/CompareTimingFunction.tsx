export default function TimingFunctionDemo() {
  const cases = [
    { name: "linear", fn: "linear" },
    { name: "ease", fn: "ease" },
    { name: "ease-in", fn: "ease-in" },
    { name: "ease-out", fn: "ease-out" },
    { name: "ease-in-out", fn: "ease-in-out" },
    { name: "steps(5,end)", fn: "steps(5,end)" },
  ];

  return (
    <div
      className="flex flex-col w-[400px] bg-no-repeat bg-center bg-cover gap-3 p-2 bg-black text-white font-mono"
      style={{
        backgroundImage: "url('/src/assets/sky.jpeg')",
      }}
    >
      {cases.map((c, i) => (
        <div key={i}>
          <div className="text-right mb-10 w-fit">{c.name}</div>
          <div className="relative border-b-2  border-dashed border-gray-600">
            <div
              className={`
                absolute bottom-[-20px] text-2xl animate-drive
              `}
              style={{ animationTimingFunction: c.fn }}
            >
              <img
                src="/src/assets/car.webp"
                alt="car"
                className="h-15 w-15 min-w-15"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
