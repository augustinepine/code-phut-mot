
export const calculateValidPosition = (
  viewport: { w: number; h: number },
  currentX: number,
  currentY: number,
  btnWidth: number,
  btnHeight: number,
  maxAttempts = 50
) => {
  const minMoveDistance = Math.max(btnWidth, btnHeight) + 50;
  const maxX = viewport.w / 2 - btnWidth / 2;
  const maxY = viewport.h / 2 - btnHeight / 2;
  const minX = -maxX;
  const minY = -maxY;

  for (let attempts = 0; attempts < maxAttempts; attempts++) {
    const randomX = minX + Math.random() * (maxX - minX);
    const randomY = minY + Math.random() * (maxY - minY);

    const distance = Math.sqrt(
      Math.pow(randomX - currentX, 2) + Math.pow(randomY - currentY, 2)
    );

    if (distance >= minMoveDistance) {
      return { x: randomX, y: randomY };
    }
  }

  return {
    x: currentX > 0 ? minX : maxX,
    y: currentY > 0 ? minY : maxY,
  };
};
