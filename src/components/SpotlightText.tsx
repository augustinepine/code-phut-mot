import React from "react";

const SpotlightText: React.FC = () => {
  return (
    <h1
      className="relative !text-[5rem] select-none 
          font-extrabold text-white overflow-hidden
          [mask-image:radial-gradient(circle,black_40%,transparent_70%)]
          [mask-position:-40%_0%]
          [mask-size:40%_100%]
          [mask-repeat:no-repeat]
          animate-spotlight
          "
    >
      FRONTEND
    </h1>
  );
};

export default SpotlightText;
