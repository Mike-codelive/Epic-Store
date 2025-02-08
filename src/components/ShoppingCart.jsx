import { useState } from "react";
import { MainMotionSection } from "./MainMotionSection";
import shoppingCart from "../assets/shopping/shopping_cart.svg";
import { Link } from "react-router-dom";
import { useCart } from "../context/Cart";
import { BoxStylesCart } from "./BoxStylesCart";
import { formatPrice } from "../utils/helpers";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";

import { motion } from "framer-motion";
import { NavigateBtn } from "./NavigateBtn";

export const ShoppingCart = () => {
  const { cartItems, removeItem, changeQuantity, totalQuantity } = useCart();
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [selectedShipping, setSelectedShipping] = useState("standard");

  const shippingPrices = {
    standard: 2294,
    express: 4094,
  };

  return (
    <MainMotionSection>
      <div className="text-[#19124F]">
        <div className="flex items-center flex-col md:flex-row py-4 px-2 md:px-8 md:py-8 mb-8 md:mb-0">
          <h1 className="text-[24px] text-center md:mr-4 md:text-start font-semibold">
            Shopping Cart
          </h1>
          {cartItems.length === 0 ? null : (
            <div className="flex items-center text-[#757195] text-[16px] font-normal">
              <p>
                {totalQuantity} {totalQuantity > 1 ? "items" : "item"}
              </p>
              <div className="w-[1px] h-[20px] bg-[#D6DADF] mx-[12px]"></div>
              <p>{formatPrice(totalPrice)}</p>
            </div>
          )}
        </div>

        <div className="bg-[#D6DADF] w-full h-[1px] mb-4"></div>

        {cartItems.length === 0 ? (
          <div className="py-4 px-2 md:px-8 md:py-8 flex flex-col items-center">
            <img
              className="w-[140px] h-[177px] mb-4"
              src={shoppingCart}
              alt="shopping"
            />
            <p className="text-base mb-4">
              You don’t have any items in your cart.
            </p>
            <Link to="/shop">
              <h2 className="text-[#FF596F] font-semibold text-base">
                Explore Epic Store
              </h2>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row md:justify-between px-2 md:px-8 mb-10">
            <div className="flex-1">
              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.color}`}
                  className="flex md:justify-between py-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[128px] h-[128px] object-cover mr-4"
                    />
                    <div className="">
                      <h2 className="font-semibold uppercase">{item.name}</h2>
                      <p className="text-sm">Company: {item.company}</p>
                      <p className="text-sm flex items-center mb-4 md:mb-0">
                        color:{" "}
                        <span
                          className="block w-4 h-4 rounded-full border ml-2"
                          style={{ backgroundColor: item.color }}
                        ></span>
                      </p>
                      <div className="md:hidden flex items-center">
                        <motion.button
                          whileTap={{ translateY: 2.0, borderColor: "#ff0000" }}
                          onClick={() =>
                            changeQuantity(item.id, -1, item.color)
                          }
                          className="bg-[#e9e9f099] border-4 rounded-full"
                        >
                          <RemoveIcon />
                        </motion.button>
                        <span className="mx-5">{item.quantity}</span>
                        <motion.button
                          whileTap={{ translateY: 2.0, borderColor: "#ff0000" }}
                          onClick={() => changeQuantity(item.id, 1, item.color)}
                          className="bg-[#e9e9f099] border-4 rounded-full"
                        >
                          <AddIcon />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex ml-20 items-center">
                    <motion.button
                      whileTap={{ translateY: 2.0, borderColor: "#ff0000" }}
                      onClick={() => changeQuantity(item.id, -1, item.color)}
                      className="bg-[#e9e9f099] border-4 rounded-full"
                    >
                      <RemoveIcon />
                    </motion.button>
                    <span className="mx-5">{item.quantity}</span>
                    <motion.button
                      whileTap={{ translateY: 2.0, borderColor: "#ff0000" }}
                      onClick={() => changeQuantity(item.id, 1, item.color)}
                      className="bg-[#e9e9f099] border-4 rounded-full"
                    >
                      <AddIcon />
                    </motion.button>
                  </div>
                  <div className="flex flex-1 justify-end items-start md:justify-between md:items-center lg:mr-40">
                    <div className="ml-10 hidden md:block">
                      <p>{formatPrice(item.price * item.quantity)}</p>
                    </div>
                    <button onClick={() => removeItem(item.id, item.color)}>
                      <CancelIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#D6DADF] w-full h-[1px] my-8 md:hidden"></div>

            <div>
              <div className="flex flex-col md:flex-row items-center md:justify-between my-4">
                <div className="flex flex-col w-full gap-4">
                  <motion.button
                    onClick={() => setSelectedShipping("standard")}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex items-center p-4 rounded-sm transition-colors ${
                      selectedShipping === "standard"
                        ? "border-2 border-[#19124F] text-[#19124F]"
                        : "border-2 border-gray-300 text-gray-600"
                    }`}
                  >
                    <span className="relative mr-4">
                      <div
                        className={`w-[20px] h-[20px] rounded-full 
                        ${
                          selectedShipping === "standard"
                            ? "bg-[#19124F]"
                            : "border-2 border-gray-300"
                        }
                        `}
                      ></div>
                      <div className="absolute inset-0 m-auto w-[8px] h-[8px] bg-white rounded-full"></div>
                    </span>
                    <div>
                      <p className="font-semibold">Standard Shipping</p>
                      <p className="text-sm text-start font-normal">
                        Delivery{" "}
                        {new Date(
                          Date.now() + 27 * 24 * 60 * 60 * 1000
                        ).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                        })}
                      </p>
                    </div>
                    <div
                      className={`absolute top-4 right-4
                      ${selectedShipping === "standard" ? "hidden" : "block"}
                      `}
                    >
                      <b>- $22.94</b>
                    </div>
                  </motion.button>

                  <motion.button
                    onClick={() => setSelectedShipping("express")}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex items-center p-4 rounded-sm transition-colors ${
                      selectedShipping === "express"
                        ? "border-2 border-[#19124F] text-[#19124F]"
                        : "border-2 border-gray-300 text-gray-600"
                    }`}
                  >
                    <span className="relative mr-4">
                      <div
                        className={`w-[20px] h-[20px] rounded-full 
                        ${
                          selectedShipping === "express"
                            ? "bg-[#19124F]"
                            : "border-2 border-gray-300"
                        }
                        `}
                      ></div>
                      <div className="absolute inset-0 m-auto w-[8px] h-[8px] bg-white rounded-full"></div>
                    </span>
                    <div>
                      <p className="font-semibold">Express Shipping</p>
                      <p className="text-sm text-start font-normal">
                        Delivery{" "}
                        {new Date(
                          Date.now() + 7 * 24 * 60 * 60 * 1000
                        ).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                        })}
                      </p>
                    </div>
                    <div
                      className={`absolute top-4 right-4
                      ${selectedShipping === "express" ? "hidden" : "block"}
                      `}
                    >
                      <b>- $40.94</b>
                    </div>
                  </motion.button>
                </div>
              </div>

              <div className="bg-[#D6DADF] w-full h-[1px] my-4"></div>

              <div>
                <h1 className="mb-3">Order Summary</h1>
                <div className="flex justify-between mb-3">
                  <p>
                    {totalQuantity} {totalQuantity > 1 ? "items" : "item"}
                  </p>
                  <p>{formatPrice(totalPrice)}</p>
                </div>
                <div className="flex justify-between mb-3">
                  <p>
                    {selectedShipping === "express" ? "Express" : "Standar"}{" "}
                    Shipping
                  </p>
                  <p>
                    {formatPrice(
                      shippingPrices[
                        selectedShipping === "standard" ? "standard" : "express"
                      ]
                    )}
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <h1>Order Summary</h1>
                <p className="font-semibold">
                  {formatPrice(
                    totalPrice +
                      shippingPrices[
                        selectedShipping === "standard" ? "standard" : "express"
                      ]
                  )}
                </p>
              </div>

              <div className="mb-[16px]">
                <p className="text-[12px] text-[#757195]">
                  Tax will be calculated at checkout
                </p>
              </div>

              <div className="mb-5">
                <NavigateBtn
                  classesBtn="w-full !text-white !font-semibold !text-[16px] !bg-[#FF596F] !border-0"
                  classes="w-full"
                >
                  Checkout
                </NavigateBtn>
              </div>

              <div className="text-center mb-5">
                <p>By proceeding to checkout, I agree to Redbubble’s</p>
                <p className="cursor-pointer text-[#FF596F]">User Agreement</p>
              </div>
            </div>

            <div className="bg-[#D6DADF] w-full h-[1px] my-4 md:hidden"></div>
          </div>
        )}
        <BoxStylesCart />
      </div>
    </MainMotionSection>
  );
};
