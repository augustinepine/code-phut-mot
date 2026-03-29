export default function SuccessCheckAnimation() {
  return (
    <svg
      viewBox="0 0 52 52"
      className="w-24 h-24 text-green-400 animate-draw-check"
    >
      <circle
        cx="26"
        cy="26"
        r="25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="animate-circle"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 27l7 7 16-16"
        className="animate-check"
      />
    </svg>
  );
}
