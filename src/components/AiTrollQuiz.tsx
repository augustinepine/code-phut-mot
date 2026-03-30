import React, { useEffect, useRef, useState } from "react";

type Question = {
  question: string;
  options: string[];
  correctIndex: number;
};

type ShuffledQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
};

type OptionMap = {
  value: string;
  isCorrect: boolean;
};

// ===== DATA =====
const QUESTIONS: Question[] = [
  {
    question: "Ngôn ngữ nào chạy trên trình duyệt?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correctIndex: 2,
  },
  {
    question: "React là gì?",
    options: ["Framework", "Library", "Database", "OS"],
    correctIndex: 1,
  },
  {
    question: "CSS dùng để làm gì?",
    options: ["Logic", "Style UI", "Server", "Database"],
    correctIndex: 1,
  },
];

// ===== UTILS =====
const randomPick = <T,>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

const shuffle = <T,>(arr: T[]): T[] =>
  [...arr].sort(() => Math.random() - 0.5);

const shuffleQuestion = (q: Question): ShuffledQuestion => {
  const mapped: OptionMap[] = q.options.map((opt, i) => ({
    value: opt,
    isCorrect: i === q.correctIndex,
  }));

  const shuffled = shuffle(mapped);
  const correctIndex = shuffled.findIndex((o) => o.isCorrect);

  return {
    question: q.question,
    options: shuffled.map((o) => o.value),
    correctIndex,
  };
};

// ===== COMPONENT =====
const AiTrollQuiz: React.FC = () => {
  const [question, setQuestion] = useState<ShuffledQuestion | null>(null);
  const [visibleOptions, setVisibleOptions] = useState<number[]>([]);
  const [message, setMessage] = useState("AI đang phân tích...");
  const [reduceCount, setReduceCount] = useState(0);
  const [optionPos, setOptionPos] = useState({ x: 0, y: 0 });

  const [countdown, setCountdown] = useState<number | null>(null);
  const [complaintClicked, setComplaintClicked] = useState(false);

  const [modal, setModal] = useState<{
    type: "warning" | "roast" | "timeout" | null;
    text: string;
  }>({ type: null, text: "" });

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    initQuestion();
  }, []);

  // ===== COUNTDOWN =====
  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      setModal({
        type: "timeout",
        text: "Hết thời gian rồi 🤡 Bạn vẫn chưa chọn được à?",
      });
      setCountdown(null);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => (prev ? prev - 1 : null));
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  // ===== INIT =====
  const initQuestion = () => {
    const q = shuffleQuestion(randomPick(QUESTIONS));
    setQuestion(q);
    setVisibleOptions([0, 1, 2, 3]);
    setReduceCount(0);
    setOptionPos({ x: 0, y: 0 });
    setCountdown(null);
    setComplaintClicked(false);
    setMessage("AI đang theo dõi bạn 👀");
    setModal({ type: null, text: "" });
  };

  // ===== HOVER =====
  const handleHover = (index: number, e?: React.MouseEvent) => {
  if (!question) return;

  const isCorrect = index === question.correctIndex;

  // ===== chạy trốn =====
  if (visibleOptions.length === 1 && isCorrect && e && containerRef.current) {
    const rect = containerRef.current.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    let newX = 0;
    let newY = 0;

    for (let i = 0; i < 10; i++) {
      const x = Math.random() * (rect.width - 150) - rect.width / 2;
      const y = Math.random() * (rect.height - 60) - rect.height / 2;

      const dist = Math.hypot(
        mouseX - (rect.width / 2 + x),
        mouseY - (rect.height / 2 + y)
      );

      if (dist > 120) {
        newX = x;
        newY = y;
        break;
      }
    }

    setOptionPos({ x: newX, y: newY });
  }

  // ===== vẫn giữ logic troll =====
  const msgsCorrect = [
    "Cái này sai đấy 😏",
    "Đừng chọn cái này...",
    "Bạn chắc chưa? 👀",
    "Tôi không khuyên bạn chọn đâu...",
  ];

  const msgsWrong = [
    "Cái này đúng đấy 😎",
    "Chọn cái này đi 🤔",
    "Hợp lý phết",
  ];

  setTimeout(() => {
    setMessage(randomPick(isCorrect ? msgsCorrect : msgsWrong));
  }, 120);
};

  // ===== CLICK =====
  const handleClickOption = (index: number) => {
    if (!question) return;

    const isCorrect = index === question.correctIndex;

    if (isCorrect) {
      setModal({
        type: "warning",
        text: "Bạn sắp đúng rồi... nhưng hãy dùng AI gợi ý😏",
      });
    } else {
      const roastMsgs = [
        "Sai rồi 🤡",
        "Tin AI chi vậy 😂",
        "Thua rồi bro 🥲",
      ];

      setModal({
        type: "roast",
        text: randomPick(roastMsgs),
      });
    }
  };

  // ===== REDUCE =====
  const handleReduce = () => {
    if (!question) return;

    if (reduceCount === 0) {
      const wrong = visibleOptions.filter(
        (i) => i !== question.correctIndex
      );
      const randomWrong = randomPick(wrong);
      setVisibleOptions([question.correctIndex, randomWrong]);
    }

    if (reduceCount === 1) {
      setVisibleOptions([question.correctIndex]);
      setCountdown(5);
    }

    setReduceCount((prev) => prev + 1);
    setModal({ type: null, text: "" });
  };

  if (!question) return null;

  return (
    <div className="h-screen bg-black flex items-center justify-center text-white">
      <div
        ref={containerRef}
        className="w-[440px] h-[550px] bg-zinc-900 rounded-2xl p-6 flex flex-col relative overflow-hidden"
      >
        {/* Question */}
        <div className="text-lg font-semibold mb-4">
          {question.question}
        </div>

        {/* AI message */}
        <div className="flex gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
            🤖
          </div>
          <div className="bg-zinc-800 px-3 py-2 rounded-lg text-sm text-zinc-300 min-h-[40px]">
            {message}
          </div>
        </div>

        {/* Countdown */}
        {countdown !== null && (
          <div className="text-center text-red-400 mb-2 font-bold">
            ⏳ {countdown}s
          </div>
        )}

        {/* Options */}
        <div className="flex flex-col gap-3 flex-1">
          {visibleOptions.map((i) => {
            const isLast =
              visibleOptions.length === 1 &&
              i === question.correctIndex;

            return (
              <button
                key={i}
                onMouseEnter={(e) => handleHover(i, e)}
                onClick={() => handleClickOption(i)}
                className="px-4 py-3 bg-white text-black rounded-lg font-medium cursor-pointer transition transform hover:scale-105 active:scale-95"
                style={
                  isLast
                    ? {
                        transform: `translate(${optionPos.x}px, ${optionPos.y}px)`,
                        transition: "transform 0.2s ease-out",
                      }
                    : {}
                }
              >
                {question.options[i]}
              </button>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={handleReduce}
            className="flex-1 px-4 py-2 bg-indigo-500 rounded-lg font-semibold cursor-pointer hover:scale-105 active:scale-95 transition"
          >
            AI gợi ý
          </button>

          <button
            onClick={initQuestion}
            className="flex-1 px-4 py-2 bg-zinc-700 rounded-lg cursor-pointer hover:scale-105 active:scale-95 transition"
          >
            Next
          </button>
        </div>

        {/* Modal */}
        {modal.type && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <div className="bg-zinc-800 p-4 rounded-xl text-center w-[80%]">
              <div className="text-lg mb-2">
                {modal.type === "timeout"
                  ? "⏳ Hết giờ"
                  : modal.type === "warning"
                  ? "🤖 AI cảnh báo"
                  : "💀 Kết quả"}
              </div>

              <div className="text-sm text-zinc-300 mb-4">
                {modal.text}
              </div>

              {/* 👉 phản ánh */}
              {modal.type === "timeout" && (
                <div className="mb-4">
                  {!complaintClicked ? (
                    <button
                      onClick={() => setComplaintClicked(true)}
                      className="px-3 py-2 bg-zinc-700 rounded cursor-pointer hover:scale-105 transition text-sm"
                    >
                      Click vào đây để phản ánh 😤
                    </button>
                  ) : (
                    <div className="text-red-400 text-sm">
                      {`vẫn bị lừa, cùi :)))`}
                    </div>
                  )}
                </div>
              )}

              <button
                onClick={() => {
                  setModal({ type: null, text: "" });
                  setComplaintClicked(false);
                }}
                className="px-4 py-2 bg-indigo-500 rounded cursor-pointer hover:scale-105 transition"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiTrollQuiz;