import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SearchBar = ({ isMobile = false }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const cleanValue = e.target.value.replace(/<[^>]*>?/gm, "").trim();
    setSearchTerm(cleanValue);
  };

  const handleSearch = () => {
    if (searchTerm.length > 0) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      className={`h-full w-full flex items-center border-2 border-cyan-400 bg-slate-100 rounded ${
        isMobile ? "flex md:hidden" : "mr-14 hidden md:flex"
      }`}
    >
      <input
        type="text"
        placeholder="Search for products or designs"
        className="appearance-none border-none outline-none bg-transparent text-indigo-900 leading-[1.5em] w-full p-4 pr-0"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <motion.div
        whileTap={{ translateY: 2 }}
        onClick={handleSearch}
        className="mx-2 cursor-pointer p-1 rounded-[50%] hover:bg-slate-200"
      >
        <SearchIcon className="!text-3xl" />
      </motion.div>
    </div>
  );
};
