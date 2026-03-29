import { useMotionValue, useSpring } from "framer-motion";

export const useSmoothTilt = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(x, { stiffness: 100, damping: 20 });
  const rotateY = useSpring(y, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateAmountX = ((mouseY - midY) / midY) * 30;
    const rotateAmountY = ((mouseX - midX) / midX) * -30;

    x.set(rotateAmountX);
    y.set(rotateAmountY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { rotateX, rotateY, handleMouseMove, handleMouseLeave };
};
