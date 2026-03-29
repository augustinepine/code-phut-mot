import { motion } from "framer-motion";
import { useSmoothTilt } from "../hooks/useSmoothTilt";

export default function SmoothTiltCard() {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } =
    useSmoothTilt();
  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="w-86 h-72 bg-gradient-to-br from-pink-500 
      to-purple-600 rounded-2xl shadow-2xl cursor-pointer p-6 
      flex flex-col items-center justify-center text-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h2
        style={{ transform: "translateZ(50px)" }}
        className="text-2xl font-bold mb-2"
      >
        Hover Me
      </h2>
      <p
        style={{ transform: "translateZ(30px)" }}
        className="text-center text-lg"
      >
        Smooth 3D tilt with Framer Motion ✨
      </p>
    </motion.div>
  );
}
