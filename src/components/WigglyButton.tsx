const WigglyButton = () => {
  return (
    <button
      className="
        px-6 py-3 rounded-xl font-semibold
        shadow-lg bg-gradient-to-r from-pink-500
        to-purple-500 text-white
        hover:animate-wiggle
      "
    >
      Wiggly Button
    </button>
  );
};

export default WigglyButton;
