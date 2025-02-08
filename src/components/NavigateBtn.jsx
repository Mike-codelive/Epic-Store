import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NavigateBtn = ({
  children,
  to = null,
  onClick,
  classes = "",
  classesBtn = "",
}) => {
  return (
    <motion.span
      whileTap={{
        translateY: 2.0,
      }}
      className={`inline-block ${classes}`}
    >
      {to ? (
        <Link
          to={to}
          className={`inline-flex items-center justify-center whitespace-nowrap font-semibold bg-white hover:bg-slate-200 rounded-3xl px-6 h-[calc(4px*12)] text-[#19124f] border-4 ${classesBtn}
        } ${
          location.pathname === to ? "border-[#afa3f2]" : "border-transparent"
        }`}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`inline-flex items-center justify-center whitespace-nowrap font-semibold bg-white hover:bg-slate-200 rounded-3xl px-6 h-[calc(4px*12)] text-[#19124f] border-4 ${classesBtn}`}
        >
          {children}
        </button>
      )}
    </motion.span>
  );
};
