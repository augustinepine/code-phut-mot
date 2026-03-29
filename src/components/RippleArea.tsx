import React from "react";

const RippleArea = () => {
  const [ripples, setRipples] = React.useState<
    { x: number; y: number; id: number }[]
  >([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

  return (
    <div
      onClick={handleClick}
      className="relative select-none w-full h-screen px-8 py-3 flex 
      items-center justify-center text-lg font-bold text-white 
      rounded-lg overflow-hidden"
    >
      Click Me
      {ripples.map((r) => {
        return (
          <span
            key={r.id}
            className="absolute bg-white rounded-full animate-ripple
        "
            style={{
              left: r.x,
              top: r.y,
              transform: "translate(-50%, -50%)",
              width: "20px",
              height: "20px",
            }}
          ></span>
        );
      })}
    </div>
  );
};

export default RippleArea;
