import { formatPrice } from "../utils/helpers";
import { motion } from "framer-motion";
import CheckIcon from "@mui/icons-material/Check";
import { NavigateBtn } from "./NavigateBtn";

import CloseIcon from "@mui/icons-material/Close";

export const CartModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null; // Ensure product exists and modal is open

  return (
    <motion.div
      className="fixed h-full inset-0 flex items-center justify-end bg-black bg-opacity-50 z-[9999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose} // Close when clicking background
    >
      <motion.div
        initial={{ x: 400 }}
        animate={{ x: 0 }}
        exit={{ x: 400 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-lg w-[400px] text-center h-full"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
      >
        <button
          className="absolute top-2 rounded-full p-1 right-2 text-gray-800 bg-[#e7e6ed] hover:bg-gray-300"
          onClick={onClose}
        >
          <CloseIcon />
        </button>
        <h2 className="text-2xl mt-4 font-bold text-[#19124F]">
          It's in the cart!
        </h2>

        <div className="flex items-center gap-4 mt-4">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 rounded-md"
            />
            <CheckIcon className="absolute left-[-5px] top-[-5px] text-white bg-green-500 rounded-full" />
          </div>
          <div className="text-left">
            <p className="font-semibold">{product.name}</p>
            <p className="text-gray-600">{product.category}</p>
            <p className="text-gray-600">{product.variant}</p>
            <p className="font-bold text-lg">{formatPrice(product.price)}</p>
          </div>
        </div>

        <div className="my-4">
          <NavigateBtn
            to="/shopping"
            classes="w-full mb-2"
            classesBtn="w-full !bg-[#ff596f] !text-white hover:!bg-[#b94050]"
          >
            View cart
          </NavigateBtn>
          <NavigateBtn to="/shop" classes="w-full" classesBtn="w-full">
            Keep Shopping
          </NavigateBtn>
        </div>
      </motion.div>
    </motion.div>
  );
};
