const FloatingBalls = () => {
  return (
    <div
      className="h-[400px] p-5 flex items-center 
    justify-center bg-gray-900 overflow-hidden relative"
    >
      <div
        className="absolute w-32 h-32 bg-pink-500 
      rounded-full opacity-70 blur-xl animate-float1"
      ></div>
      <div
        className="absolute w-32 h-32 bg-green-500 
      rounded-full opacity-70 blur-xl animate-float2"
      ></div>

      <div
        className="absolute w-32 h-32 bg-blue-500 
      rounded-full opacity-70 blur-xl animate-float3"
      ></div>

      <h1 className="text-white text-4xl font-bold relative z-10">
        Floating Neon ✨
      </h1>
    </div>
  );
};

export default FloatingBalls;
