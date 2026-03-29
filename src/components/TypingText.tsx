import { useTypingText } from "../hooks/useTypingText";

const TypingText = () => {
  const words = ["Frontend", "React", "TailwindCSS"];
  const { typingText } = useTypingText(words);

  return (
    <h1
      className="text-3xl md:text-5xl font-bold 
    text-pink-500 font-mono"
    >
      {typingText}
    </h1>
  );
};

export default TypingText;
