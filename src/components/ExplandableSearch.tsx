import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

export default function ExpandableSearch() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={{ width: open ? 250 : 36 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="flex items-center bg-white rounded-full shadow-lg overflow-hidden"
    >
      <button
        className="p-2 text-gray-600 hover:text-gray-800"
        onClick={() => setOpen(!open)}
      >
        <Search size={20} />
      </button>
      {open && (
        <motion.input
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0 }}
          type="text"
          placeholder="Search..."
          className="flex-1 px-2 py-1 outline-none bg-transparent text-gray-800"
        />
      )}
    </motion.div>
  );
}
