import { useMegnetic } from "../hooks/useMegnetic";

const MagneticButton = () => {
  const { btnRef, handleMouseMove, handleMouseLeave } = useMegnetic();
  return (
    <div
      className="p-[2px] rounded-3xl bg-gradient-to-r 
      from-pink-500 via-purple-500 to-blue-500"
    >
      <div className="bg-white rounded-3xl p-12">
        <button
          ref={btnRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="px-8 py-4 rounded-xl text-white 
          font-semibold bg-gradient-to-r from-pink-500
          to-purple-600 shadow-lg transition-transform 
          duration-150 ease-out"
        >
          Hover me 🧲
        </button>
      </div>
    </div>
  );
};

export default MagneticButton;
