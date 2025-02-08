import mainBanner from "../assets/main_banner.jpg";
import mainBannerMobile from "../assets/Home_page_banner_mobile.jpeg";
import hoodies from "../assets/hoodies.jpg";
import phoneCases from "../assets/phone_cases.jpg";
import tshirts from "../assets/t_shirt.jpg";
import nodeOne from "../assets/node_1.svg";
import nodeTwo from "../assets/node_2.svg";
import nodeThree from "../assets/node_3.svg";
import nodeFourt from "../assets/node_4.svg";

import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { NavigateBtn } from "./NavigateBtn";
import { MainMotionSection } from "./MainMotionSection";

export const Home = () => {
  return (
    <>
      <MainMotionSection>
        <div className="relative h-full">
          <img
            src={mainBanner}
            alt="Main Banner"
            className="hidden md:block w-full object-cover"
          />
          <img
            src={mainBannerMobile}
            alt="Main Banner"
            className="block md:hidden w-full object-cover"
          />
          <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-[36px] md:text-[56px] leading-[64px] max-w-[500px] font-bold text-center mb-6">
              Special 50% Off Sitewide
            </h1>
            <p className="max-w-[480px] text-[20px] md:text-[24px] text-center mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              corrupti nobis nesciunt
            </p>
            <NavigateBtn to="/shop">Shop now</NavigateBtn>
          </div>
          <div className="absolute inset-0 w-full h-full z-10 bg-black opacity-40"></div>
        </div>
        <div className="flex relative justify-center">
          <div className="w-[95vw]">
            <h1 className="text-[24px] text-[#19124F] mt-4 mb-2">
              Shop Product Range
            </h1>
            <div className="flex flex-wrap md:flex-nowrap gap-4">
              <div className="flex flex-col md:flex-row justify-center items-center md:items-end w-full relative">
                <div className="off_card_img md:h-[400px] rounded overflow-hidden">
                  <img className="h-full" src={hoodies} alt="hoodies" />
                </div>
                <div className="md:absolute mt-4 md:mt-0 md:mb-8">
                  <NavigateBtn to="/shop">Shop Hoodies</NavigateBtn>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center md:items-end w-full relative">
                <div className="off_card_img md:h-[400px] rounded overflow-hidden">
                  <img className="h-full" src={phoneCases} alt="hoodies" />
                </div>
                <div className="md:absolute mt-4 md:mt-0 md:mb-8">
                  <NavigateBtn to="/shop">Shop Phone Cases</NavigateBtn>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center md:items-end w-full relative">
                <div className="off_card_img md:h-[400px] rounded overflow-hidden">
                  <img className="h-full" src={tshirts} alt="hoodies" />
                </div>
                <div className="md:absolute mt-4 md:mt-0 md:mb-8">
                  <NavigateBtn to="/shop">Shop T-Shirts</NavigateBtn>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-between text-[#19124F] mt-8">
              <div className="flex p-4">
                <TravelExploreIcon className="!text-[32px]" />
                <div className="ml-8">
                  <h1 className="font-bold">Weirdly meaningful art</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur.
                  </p>
                </div>
              </div>
              <div className="flex p-4">
                <ThumbUpIcon className="!text-[32px]" />
                <div className="ml-8">
                  <h1 className="font-bold">Purchases pay artists</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur.
                  </p>
                </div>
              </div>
              <div className="flex p-4">
                <AccountTreeIcon className="!text-[32px]" />
                <div className="ml-8">
                  <h1 className="font-bold">Socially responsible production</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[852px] md:h-[372px]">
          <div className="flex justify-center absolute left-0 bg-[#f2f2f6] w-[100vw] h-[772px] md:h-[372px] rounded">
            <div className="max-w-[1440px] w-full flex justify-center py-[64px]">
              <div className="md:flex md:justify-center w-full md:w-[95vw] bg-white shadow-[0_1px_1px_-1px_rgba(0,0,0,0.15),0_1px_2px_0_rgba(0,0,0,0.1),0_1px_4px_0_rgba(0,0,0,0.1)]">
                <div className="flex items-center justify-between md:border-b-0 border-b border-[#D6DADF] py-4">
                  <div className="flex items-center p-[32px] md:flex-col">
                    <img
                      className="w-[calc(4px*16)]"
                      src={nodeOne}
                      alt="node 1"
                    />
                    <div className="ml-4 md:ml-0 md:flex md:flex-col md:items-center">
                      <h2 className="text-base md:text-center font-bold text-[#19124F]">
                        Worldwide Shipping
                      </h2>
                      <p className="text-[#757195] text-sm text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <p className="text-[#19124F] text-sm cursor-pointer hover:underline">
                        Learn More
                      </p>
                    </div>
                  </div>
                  <div className="mr-4 block md:hidden">
                    <ChevronRightIcon />
                  </div>
                </div>
                <div className="flex items-center justify-between md:border-b-0 border-b border-[#D6DADF] py-4">
                  <div className="flex items-center p-[32px] md:flex-col">
                    <img
                      className="w-[calc(4px*16)]"
                      src={nodeTwo}
                      alt="node 1"
                    />
                    <div className="ml-4 md:ml-0 md:flex md:flex-col md:items-center">
                      <h2 className="text-base md:text-center font-bold text-[#19124F]">
                        Worldwide Shipping
                      </h2>
                      <p className="text-[#757195] text-sm text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <p className="text-[#19124F] text-sm cursor-pointer hover:underline">
                        Learn More
                      </p>
                    </div>
                  </div>
                  <div className="mr-4 block md:hidden">
                    <ChevronRightIcon />
                  </div>
                </div>
                <div className="flex items-center justify-between md:border-b-0 border-b border-[#D6DADF] py-4">
                  <div className="flex items-center p-[32px] md:flex-col">
                    <img
                      className="w-[calc(4px*16)]"
                      src={nodeThree}
                      alt="node 1"
                    />
                    <div className="ml-4 md:ml-0 md:flex md:flex-col md:items-center">
                      <h2 className="text-base md:text-center font-bold text-[#19124F]">
                        Worldwide Shipping
                      </h2>
                      <p className="text-[#757195] text-sm text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <p className="text-[#19124F] text-sm cursor-pointer hover:underline">
                        Learn More
                      </p>
                    </div>
                  </div>
                  <div className="mr-4 block md:hidden">
                    <ChevronRightIcon />
                  </div>
                </div>
                <div className="flex items-center justify-between md:border-b-0 border-b border-[#D6DADF] py-4">
                  <div className="flex items-center p-[32px] md:flex-col">
                    <img
                      className="w-[calc(4px*16)]"
                      src={nodeFourt}
                      alt="node 1"
                    />
                    <div className="ml-4 md:ml-0 md:flex md:flex-col md:items-center">
                      <h2 className="text-base md:text-center font-bold text-[#19124F]">
                        Worldwide Shipping
                      </h2>
                      <p className="text-[#757195] text-sm text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <p className="text-[#19124F] text-sm cursor-pointer hover:underline">
                        Learn More
                      </p>
                    </div>
                  </div>
                  <div className="mr-4 block md:hidden">
                    <ChevronRightIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainMotionSection>
    </>
  );
};
