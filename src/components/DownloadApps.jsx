import { motion } from "framer-motion";
import { MainMotionSection } from "./MainMotionSection";

import appleApp from "../assets/dw_apple.png";
import androidApp from "../assets/dw_android.png";

export const DownloadApps = () => {
  return (
    <MainMotionSection>
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:justify-center items-center">
          <div className="card md:mr-16 flex flex-col justify-center items-center my-16">
            <h1 className="text-4xl leading-[initial] whitespace-nowrap max-h-[59px] min-h-[59px] max-w-[180px]">
              <span className="text-cyan-400">E</span>pic{" "}
              <span className="text-cyan-400">S</span>tore
            </h1>
            <motion.div
              className="mt-4 h-[40px] w-[40px] border-4 border-t-cyan-400 border-r-cyan-400 border-b-transparent border-l-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "linear",
              }}
            ></motion.div>
          </div>
          <div className="content flex flex-col items-center">
            <h1 className="text-[36px] font-bold mb-16">Download the App</h1>
            <div className="relative h-[2px] z-[-50] bg-[#E0E6EC] w-full">
              <span className="absolute inset-0 m-auto w-max h-max text-[12px] p-1 bg-white">
                or
              </span>
            </div>
            <div className="mb-16 mt-8 flex justify-between w-full">
              <span className="decorat_tag w-[133px] !inline-block">
                <img src={appleApp} alt="Apple Store" />
              </span>
              <span className="decorat_tag w-[133px] !inline-block">
                <img src={androidApp} alt="Android Store" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </MainMotionSection>
  );
};
