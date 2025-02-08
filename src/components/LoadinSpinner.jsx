import { motion } from "framer-motion";

export const LoadinSpinner = () => {
  return (
    <div className="flex justify-center h-[100vh] ">
      <motion.div
        className="my-60 text-center h-[40px] w-[40px] border-4 border-t-cyan-400 border-r-cyan-400 border-b-transparent border-l-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      ></motion.div>
    </div>
  );
};
