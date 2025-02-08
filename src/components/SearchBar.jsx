import SearchIcon from "@mui/icons-material/Search";

import { motion } from "framer-motion";

export const SearchBar = ({ isMobile = false }) => {
  return (
    <div
      className={`h-full w-full flex items-center border-2 border-cyan-400 bg-slate-100 rounded ${
        isMobile ? "flex md:hidden" : "mr-14 hidden md:flex"
      }`}
    >
      <input
        className="appearance-none border-none outline-none bg-transparent text-indigo-900 leading-[1.5em] w-full p-4 pr-0"
        type="text"
        placeholder="Search for products or designs"
      />
      <motion.div
        whileTap={{
          translateY: 2.0,
        }}
        className="mx-2 cursor-pointer p-1 rounded-[50%] hover:bg-slate-200"
      >
        <SearchIcon className="!text-3xl" />
      </motion.div>
    </div>
  );
};
