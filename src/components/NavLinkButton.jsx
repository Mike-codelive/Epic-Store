import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export const NavLinkButton = ({ to, children, padding = "p-2 px-4" }) => {
  const location = useLocation();

  return (
    <motion.span
      whileTap={{
        translateY: 2.0,
      }}
    >
      <Link
        to={to}
        className={`block whitespace-nowrap font-semibold hover:bg-slate-200 ${padding} rounded-3xl border-4 ${
          location.pathname === to ? "border-[#afa3f2]" : "border-transparent"
        }`}
      >
        {children}
      </Link>
    </motion.span>
  );
};
