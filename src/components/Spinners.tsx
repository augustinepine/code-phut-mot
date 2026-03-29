export default function Spinners() {
  return (
    <div className="flex gap-5">
      <div
        className="w-16 h-16 border-4 border-amber-300
    border-t-transparent rounded-full animate-spin
    "
      ></div>

      <div className="relative w-16 h-16">
        <div
          className="absolute inset-0 border-4
        border-indigo-500 border-t-transparent
        rounded-full animate-spin"
        ></div>

        <div
          className="absolute inset-1 border-4
        border-purple-500 border-t-transparent
        rounded-full 
        animate-[spin_1.5s_linear_reverse_infinite]"
        ></div>
      </div>

      <div className="relative w-16 h-16 animate-spin">
        <div
          className="absolute w-3 h-3 bg-pink-500
        rounded-full top-0 left-1/2 -translate-x-1/2"
        ></div>
      </div>
    </div>
  );
}
