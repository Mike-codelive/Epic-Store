import { MainMotionSection } from "./MainMotionSection";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";

import appleStore from "../assets/apple_store.svg";
import androidStore from "../assets/android_store.png";

import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <MainMotionSection>
      <footer>
        <div className="w-[100vw] bg-[#07002f] text-white ">
          <div className="flex justify-center">
            <div className="max-w-[1440px] flex justify-between flex-col md:flex-row w-full p-8">
              <ul className="tag_links flex-grow">
                <li className="font-bold">
                  <h6>Shop</h6>
                </li>
                <li>
                  <p className="decorat_tag">Gift Guides</p>
                </li>
                <li>
                  <p className="decorat_tag">Fan Art</p>
                </li>
                <li>
                  <p className="decorat_tag">New Works</p>
                </li>
                <li>
                  <p className="decorat_tag">Blog</p>
                </li>
                <li>
                  <p className="decorat_tag">Students Discount</p>
                </li>
                <li>
                  <p className="decorat_tag">Login</p>
                </li>
                <li>
                  <p className="decorat_tag">SignUp</p>
                </li>
                <li>
                  <p className="decorat_tag">Bulk Orders</p>
                </li>
              </ul>
              <ul className="tag_links flex-grow">
                <li className="font-bold">
                  <h6>About</h6>
                </li>
                <li>
                  <p className="decorat_tag">About Us</p>
                </li>
                <li>
                  <p className="decorat_tag">Social Responsability</p>
                </li>
                <li>
                  <p className="decorat_tag">Partner Program</p>
                </li>
                <li>
                  <p className="decorat_tag">Affiliates</p>
                </li>
                <li>
                  <p className="decorat_tag">Sell Your Art</p>
                </li>
                <li>
                  <p className="decorat_tag">Jobs</p>
                </li>
                <li>
                  <p className="decorat_tag">Artist Blog</p>
                </li>
              </ul>
              <ul className="tag_links flex-grow">
                <li className="font-bold">
                  <h6>Help</h6>
                </li>
                <li>
                  <p className="decorat_tag">Delivery</p>
                </li>
                <li>
                  <p className="decorat_tag">Returns</p>
                </li>
                <li>
                  <p className="decorat_tag">Help Center</p>
                </li>
                <li>
                  <p className="decorat_tag">Guidelines</p>
                </li>
                <li>
                  <p className="decorat_tag">Copyright</p>
                </li>
                <li>
                  <p className="decorat_tag">Investor Center</p>
                </li>
                <li>
                  <p className="decorat_tag">Contact Us</p>
                </li>
                <li>
                  <p className="decorat_tag">cookie Settings</p>
                </li>
              </ul>
              <ul className="tag_links flex-grow">
                <li className="font-bold">
                  <h6>Social</h6>
                </li>
                <li>
                  <p className="decorat_tag">
                    <InstagramIcon className="mr-3" />
                    Instagram
                  </p>
                </li>
                <li>
                  <p className="decorat_tag">
                    <FacebookIcon className="mr-3" />
                    Facebook
                  </p>
                </li>
                <li>
                  <p className="decorat_tag">
                    <XIcon className="mr-3" />X
                  </p>
                </li>
                <li>
                  <p className="decorat_tag">
                    <PinterestIcon className="mr-3" />
                    Pinterest
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-[2px] w-full bg-[#40354E]"></div>
          <div className="flex justify-center">
            <div className="max-w-[1440px] p-8 w-full">
              <Link to="/">
                <h1 className="text-4xl leading-[initial] whitespace-nowrap max-h-[59px] min-h-[59px] max-w-[180px]">
                  <span className="text-cyan-400">E</span>pic{" "}
                  <span className="text-cyan-400">S</span>tore
                </h1>
              </Link>
              <p className="decorat_tag text-[#9695A8] mr-4">User Agreement</p>
              <p className="decorat_tag text-[#9695A8] mr-4">Privacy Policy</p>
              <p className="decorat_tag text-[#9695A8]">Cookie Policy</p>
            </div>
          </div>
          <div className="h-[2px] w-full bg-[#40354E]"></div>
          <div className="flex justify-center">
            <div className="max-w-[1440px] flex flex-col items-center justify-center p-8">
              <div className="flex space-x-4 mb-5">
                <span className="decorat_tag mr-4">
                  <img
                    className="max-h-[40px]"
                    src={appleStore}
                    alt="Apple App"
                  />
                </span>
                <span className="decorat_tag">
                  <img
                    className="max-h-[40px]"
                    src={androidStore}
                    alt="Android App"
                  />
                </span>
              </div>
              <p>
                © Epic Store. By{" "}
                <a href="https://github.com/Mike-codelive">Mike-codelive</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </MainMotionSection>
  );
};
