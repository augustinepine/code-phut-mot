import React, { useState, useRef, useEffect, useCallback } from "react";
import { calculateValidPosition } from "../helpers/escape-button";

const EscapeButton: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [viewport, setViewport] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });

  useEffect(() => {
    let timeoutId: number;

    const handleResize = () => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setViewport({ w: window.innerWidth, h: window.innerHeight });
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.clearTimeout(timeoutId);
    };
  }, []);

  const moveButton = useCallback(() => {
    if (!buttonRef.current) return;

    const btnWidth = buttonRef.current.offsetWidth;
    const btnHeight = buttonRef.current.offsetHeight;

    const newPosition = calculateValidPosition(
      viewport,
      position.x,
      position.y,
      btnWidth,
      btnHeight
    );

    setPosition(newPosition);
  }, [position, viewport]);

  return (
    <div className="flex items-center justify-center h-screen overflow-hidden relative">
      <button
        ref={buttonRef}
        onMouseEnter={moveButton}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        className="
          px-6 py-3 rounded-xl font-semibold text-white
          bg-gradient-to-r from-blue-500 to-purple-600
          shadow-lg transition-transform duration-300 ease-in-out absolute
        "
      >
        Bấm thử đi 😏
      </button>
    </div>
  );
};

export default EscapeButton;
