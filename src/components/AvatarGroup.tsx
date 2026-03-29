import React from "react";
import { avatars } from "../const";

const AvatarGroup: React.FC = () => {
  return (
    <div className="flex items-center h-fit">
      {avatars.map((avatar, index) => (
        <div
          key={avatar.id}
          className="relative group"
          style={{
            zIndex: avatars.length - index,
            marginLeft: index !== 0 ? -12 : 0,
          }}
        >
          <div
            className="
                w-12 h-12 rounded-full border-2 border-white
                overflow-hidden cursor-pointer animate-bounceDown
                group-hover:animate-bounceUp
                "
          >
            <img
              src={avatar.imageUrl}
              alt={avatar.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="absolute -top-18 left-1/2 -translate-x-1/2 
            z-50 transition-all duration-300 ease-out pointer-events-none
            opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100
          "
          >
            <div
              className="bg-white text-gray-900 text-sm 
            px-3 py-1 rounded whitespace-nowrap shadow-lg"
            >
              {avatar.name}
            </div>
            <div
              className="w-2 h-2 bg-white rotate-45 absolute
             left-1/2 -translate-x-1/2 -bottom-1"
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
