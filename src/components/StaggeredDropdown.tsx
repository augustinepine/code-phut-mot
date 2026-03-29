import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const options = ["Frontend", "Backend", "Fullstack"];

export default function StaggeredDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center mt-10">
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="px-6 py-3 bg-rose-400 text-white !w-48 rounded-xl shadow-lg"
        >
          Select Role
        </button>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ staggerChildren: 0.08, duration: 0.3 }}
              className="absolute left-0 mt-2 w-48 overflow-hidden"
            >
              {options.map((opt, i) => (
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  key={i}
                  className="px-4 py-3 hover:bg-blue-100 bg-white mb-2 rounded-xl 
                  shadow-xs cursor-pointer"
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  {opt}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
