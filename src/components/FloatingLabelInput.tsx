const FloatingLabelInput = () => {
  return (
    <div className="relative w-64">
      <input
        autoComplete="off"
        type="text"
        id="username"
        className="w-full h-10 border-white 
          outline-none border-b-[2px]
          text-white transition-all px-2
          [&:focus+label]:-top-4
          [&:focus+label]:text-sm
          [&:focus+label]:text-pink-400
          [&:focus]:border-pink-400
         "
      />

      <label
        htmlFor="username"
        className="absolute transition-all 
        left-2 top-2 text-white"
      >
        Username
      </label>
    </div>
  );
};

export default FloatingLabelInput;
