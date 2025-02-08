import { Link } from "react-router-dom";
import { Marquee } from "./PromoBanner";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { NavLinkButton } from "./NavLinkButton";
import { SearchBar } from "./SearchBar";
import { useCart } from "../context/Cart";

const Navbar = () => {
  const { totalQuantity } = useCart();

  return (
    <>
      <header>
        <div className="flex justify-center flex-col items-center">
          <div className="w-screen bg-[#ffe9a1]">
            <Marquee />
          </div>
          <div className="px-2 md:px-8 py-4 max-w-[1440px] w-full flex md:items-center justify-between flex-wrap md:flex-nowrap">
            <div className="mr-8">
              <Link to="/">
                <h1 className="text-4xl leading-[initial] whitespace-nowrap max-h-[59px] min-h-[59px] max-w-[180px]">
                  <span className="text-cyan-400">E</span>pic{" "}
                  <span className="text-cyan-400">S</span>tore
                </h1>
              </Link>
            </div>
            <SearchBar />
            <div className="flex items-center">
              <div className="hidden md:flex">
                <NavLinkButton to="/shop">Shop</NavLinkButton>
                <NavLinkButton to="/login">Login</NavLinkButton>
                <NavLinkButton to="/signup">Signup</NavLinkButton>
              </div>
              <NavLinkButton to="/signup" padding="p-[5px]">
                <FavoriteBorderIcon />
              </NavLinkButton>
              <div className="relative">
                <NavLinkButton to="/shopping" padding="p-[5px]">
                  <AddShoppingCartIcon />
                  {totalQuantity > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex justify-center items-center">
                      {totalQuantity}
                    </span>
                  )}
                </NavLinkButton>
              </div>
            </div>
            <SearchBar isMobile={true} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
