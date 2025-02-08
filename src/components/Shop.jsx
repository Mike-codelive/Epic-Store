import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";
import { MainMotionSection } from "./MainMotionSection";
import { formatPrice } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import VerifiedIcon from "@mui/icons-material/Verified";
import { LoadinSpinner } from "./LoadinSpinner";
import { FavoriteBtn } from "./FavoriteBtn";

export const Shop = () => {
  const [products, setProducts] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddIconClick = (event, productId) => {
    event.stopPropagation();
    setActiveProduct((prev) => (prev === productId ? null : productId));
  };

  const handleCardClick = (productId) => {
    navigate(`/shop/${productId}`);
  };

  return (
    <MainMotionSection>
      {loading ? (
        <LoadinSpinner />
      ) : (
        <div className="products_grid grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 my-4 px-4 md:px-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="product_card cursor-pointer"
              onClick={() => handleCardClick(product.id)}
            >
              <div className="relative h-[70%] rounded overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product_card_img hover:scale-[1.75] h-[250px] sm:h-[400px] w-full object-cover"
                />
                {activeProduct === product.id && (
                  <div className="absolute inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center">
                    <p className="text-white text-sm p-4">
                      {product.description}
                    </p>
                  </div>
                )}

                <FavoriteBtn />
              </div>
              <div className="relative">
                <div className="relative group">
                  <div
                    className="absolute group-hover:text-black bottom-1 left-1 cursor-pointer text-gray-300"
                    onClick={(event) => handleAddIconClick(event, product.id)}
                  >
                    <AddCircleOutlineIcon />
                  </div>
                  <div className="hidden group-hover:flex absolute top-full left-0 mt-1 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg">
                    Show Description
                  </div>
                </div>
              </div>
              <div className="h-[30%] py-3">
                <h3 className="truncate">{product.description}</h3>
                <p>
                  By {product.company}{" "}
                  <VerifiedIcon className="text-[#0066ff] !text-[16px]" />
                </p>
                <p className="mt-2 text-[16px] font-semibold text-[#5137D7]">
                  {formatPrice(product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </MainMotionSection>
  );
};
