const HoverCards = () => {
  return (
    <ul className="grid grid-cols-3 gap-6 group mx-auto">
      {Array.from({ length: 3 }).map((_, index) => {
        return (
          <li
            key={index}
            className="
            group-hover:[&:not(:hover)]:blur-xs
            group-hover:[&:hover]:scale-105
            transition-all bg-amber-300 rounded-2xl ease-in-out 
            duration-500 flex items-center justify-center p-10"
          >
            Card {index + 1}
          </li>
        );
      })}
    </ul>
  );
};

export default HoverCards;
