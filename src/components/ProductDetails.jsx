import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { fetchProductById } from "../api/products";
import { MainMotionSection } from "./MainMotionSection";
import { LoadinSpinner } from "./LoadinSpinner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/zoom";
import { Pagination, Zoom } from "swiper/modules";
import { FavoriteBtn } from "./FavoriteBtn";
import { formatPrice } from "../utils/helpers";
import { NavigateBtn } from "./NavigateBtn";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { StarRating } from "./StarRating";
import { CartModal } from "./CartModal";

import { AnimatePresence } from "framer-motion";

import { useCart } from "../context/Cart";

export const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [showError, setShowError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  const swiperRef = useRef(null);
  const dropdownRef = useRef(null);

  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const fetchData = async () => {
      try {
        const data = await fetchProductById(productId);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchData();
  }, [productId]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current) {
        if (dropdownRef.current.contains(event.target)) {
          return;
        }
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  if (!product) {
    return <LoadinSpinner />;
  }

  const images = product.images || [];

  const pagination = {
    clickable: true,
    el: ".swiper-pagination",
    renderBullet: (index, className) => `
      <span class="${className} swiper-custom-bullet">
        <img 
          src="${images[index].url}" 
          alt="Thumbnail ${index + 1}" 
          class="pagination-image"
        />
      </span>
    `,
  };

  const handleColorChange = (color, event) => {
    event.stopPropagation();
    setShowError(false);
    setSelectedColor(color);
    setIsDropdownOpen(false);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!selectedColor) {
      setShowError(true);
      return;
    }
    setShowError(false);

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      color: selectedColor,
      category: product.category,
      image: product.images?.[0]?.url || "",
      company: product.company,
      quantity: 1,
    };

    addToCart(cartItem);

    setAddedProduct(cartItem);
    setIsModalOpen(true);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <MainMotionSection>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-10 my-8">
        <div className="relative block md:flex">
          <div className="swiper-pagination-left  !select-none"></div>

          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            zoom={true}
            direction="horizontal"
            pagination={{
              ...pagination,
              el: ".swiper-pagination-left",
            }}
            modules={[Pagination, Zoom]}
            className="product_swiper cursor-zoom-in !md:max-w-[90%] !select-none"
            ref={swiperRef}
            onClick={() => {
              if (swiperRef.current && swiperRef.current.swiper.zoom) {
                const zoomInstance = swiperRef.current.swiper.zoom;
                if (zoomInstance.scale > 1) {
                  zoomInstance.out();
                } else {
                  zoomInstance.in();
                }
              }
            }}
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="swiper-zoom-container">
                  <img
                    src={image.url}
                    alt={product.name}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <FavoriteBtn className="!right-4 " />
        </div>

        <div className="product_info text-[#19124F]">
          <h1 className="text-3xl font-semibold mb-2 capitalize">
            {product.name}
          </h1>
          <h2 className="mb-4">
            Designed and sold by{" "}
            <span className="cursor-pointer font-semibold">
              {product.company}
            </span>
          </h2>
          <p className="text-xl mb-4 font-semibold">
            {formatPrice(product.price)}
          </p>

          {product.colors && product.colors.length > 0 && (
            <div className="custom_dropdown mb-4 relative">
              <div
                className={`relative w-48 p-2 border rounded-md flex items-center cursor-pointer bg-white ${
                  showError ? "border-red-500" : "border-gray-300"
                }`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                ref={dropdownRef}
              >
                {selectedColor ? (
                  <>
                    <span
                      className="w-6 h-6 rounded-full border mr-2"
                      style={{ backgroundColor: selectedColor }}
                    ></span>
                    <span>{selectedColor}</span>
                  </>
                ) : (
                  <span className="text-gray-400 select-none">
                    Choose a color
                  </span>
                )}
                <span className="ml-auto">&#9662;</span>
              </div>

              <p
                className={`text-red-500 text-sm mt-1 select-none ${
                  showError ? "opacity-100" : "opacity-0"
                }`}
              >
                Please choose an option first.
              </p>

              {isDropdownOpen && (
                <div
                  className="absolute top-16 left-0 w-48 bg-white border rounded-md shadow-md z-10"
                  ref={dropdownRef}
                >
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={(event) => handleColorChange(color, event)}
                    >
                      <span
                        className="w-6 h-6 rounded-full border mr-2"
                        style={{ backgroundColor: color }}
                      ></span>
                      <span>{color}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <h3>
            <span className="font-semibold">In Stock:</span> {product.stock}
          </h3>

          <h4 className="mb-4">
            <span className="font-semibold">Category:</span> {product.category}
          </h4>

          <div className="w-full mb-8">
            <NavigateBtn
              classes="!w-full"
              classesBtn="!bg-[#ff596f] !text-white"
              onClick={(e) => handleAddToCart(e)}
            >
              <AddShoppingCartIcon /> <span className="ml-3">Add to cart</span>
            </NavigateBtn>
          </div>

          <div className="w-full bg-[#D6DADF] h-[1px] mb-8"></div>

          <div className="flex items-center mb-8">
            <PublicIcon />
            <div className="ml-4">
              <p className="font-semibold ">
                Delivery:{" "}
                <span
                  className={`font-normal ${
                    product.shipping ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {product.shipping ? "Available" : "Not Available"}
                </span>
              </p>
              <p>
                <span className="font-semibold">Express by</span>{" "}
                {new Date(
                  Date.now() + 7 * 24 * 60 * 60 * 1000
                ).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                })}
              </p>
              <p>
                <span className="font-semibold">Standard</span>{" "}
                {new Date(
                  Date.now() + 27 * 24 * 60 * 60 * 1000
                ).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                })}
              </p>
              <p className="mt-2">
                Not soon enough?{" "}
                <span className="cursor-pointer text-[#FF596F] hover:underline">
                  Give a digital gift card.
                </span>
              </p>
            </div>
          </div>

          <div className="w-full bg-[#D6DADF] h-[1px] mb-8"></div>

          <div className="flex items-center cursor-pointer mb-8">
            <ThumbUpAltIcon />
            <div className="flex-1 ml-4">
              <p className="font-semibold">Super-easy returns</p>
              <p>Problem? No problem. We’ll fix it, fast.</p>
            </div>
            <ArrowForwardIosIcon />
          </div>

          <div className="w-full bg-[#D6DADF] h-[1px] mb-8"></div>

          <div className="flex justify-between mb-4">
            <p className="font-semibold text-[20px]">Product Description</p>
            <div className="flex font-semibold group cursor-pointer">
              <StarRating rating={product.stars} />
              <p className="group-hover:underline ">
                {product.stars} ({product.reviews} reviews)
              </p>
            </div>
          </div>

          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isModalOpen && (
          <CartModal
            product={addedProduct}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </MainMotionSection>
  );
};
