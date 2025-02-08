import modalImg from "../assets/main_preview.png";

import CloseIcon from "@mui/icons-material/Close";

import { motion } from "framer-motion";
import { NavigateBtn } from "./NavigateBtn";
import { Link } from "react-router-dom";

export const ShopModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="w-full fixed flex-col inset-0 bg-[rgba(140,149,165,0.6)] flex items-center justify-center z-[9999]"
      onClick={onClose}
    >
      <div
        className="shop_modal w-full"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow:
            "0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.1)",
        }}
      >
        <img src={modalImg} alt="Modal shop" className="h-[160px] w-full" />
        <div className="bg-white rounded shadow-lg relative">
          <button
            className="absolute top-2 rounded-full p-1 right-2 text-gray-800 hover:bg-gray-200"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
          <div className="py-8 px-3 text-[#19124F] text-center">
            <h2 className="text-[20px] font-semibold text-center mb-4">
              Sign up to favorite
            </h2>
            <div className="flex justify-center mb-8">
              <p className="max-w-[344px]">
                Make favorites lists, track your order history, and more. Check
                your email for a 20% off coupon after you sign up.
              </p>
            </div>
            <div>
              <Link to="/login">
                <motion.button
                  whileTap={{
                    translateY: 2.0,
                    backgroundColor: "#d9475b",
                  }}
                  className="w-full mb-4 bg-[#ff596f] p-3 text-white rounded-[1.75rem] flex-1"
                >
                  Log In
                </motion.button>
              </Link>
              <NavigateBtn classes="w-full" to="/signup">
                Sign Up
              </NavigateBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
