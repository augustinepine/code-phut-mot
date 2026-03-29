export default function Fancy3DButton() {
  return (
    <button
      className="
        relative px-6 py-3 rounded-xl font-semibold 
        text-white bg-gradient-to-r from-indigo-400 
        via-purple-500 to-cyan-400
        active:translate-y-1 active:shadow-[0px_2px_0px_#4c1d95]
        shadow-[0px_6px_0px_#4c1d95]
        transition-all duration-200
    "
    >
      Click Me
    </button>
  );
}
