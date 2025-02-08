import { useEffect, useState } from "react";
import { ShopModal } from "./ShopModal";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const FavoriteBtn = ({ className = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFavoriteClick = (event) => {
    event.stopPropagation();
    setIsModalOpen(true);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (isModalOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      <div
        className={`rounded-[50%] p-1 bg-slate-50 absolute cursor-pointer top-2 right-2 z-[45] ${className}`}
        style={{
          boxShadow:
            "0 1px 1px -1px rgba(0,0,0,.15), 0 1px 2px 0 rgba(0,0,0,.1), 0 1px 4px 0 rgba(0,0,0,.1)",
        }}
        onClick={(event) => handleFavoriteClick(event)}
      >
        <FavoriteBorderIcon />
      </div>
      <ShopModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
