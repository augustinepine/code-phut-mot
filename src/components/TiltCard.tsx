const TiltCard = ({ color, title }: { color: string; title: string }) => {
  return (
    <div
      className={`
        ${color}
        w-44 h-32 rounded-2xl bg-gradient-to-br
        backdrop-blur-sm ease-[cubic-bezier(0.25,1.25,0.5,1)]
        shadow-[0_8px_20px_rgba(0,0,0,0.15),0_2px_4px_rgba(0,0,0,0.05)]
        rotate-x-45 transition-all duration-700
        hover:-translate-y-2 hover:rotate-x-0
        hover:shadow-[0_25px_50px_rgba(0,0,0,0.25),0_6px_12px_rgba(0,0,0,0.1)]
        `}
    >
      <div
        className="flex justify-center items-center h-full 
      text-white font-semibold text-lg tracking-wide"
      >
        {title}
      </div>
    </div>
  );
};

export default TiltCard;
