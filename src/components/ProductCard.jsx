import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";

const ProductCard = ({ product }) => {
  const { id, name, image, price, company, category } = product;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden border border-gray-200 transition-all duration-300"
    >
      <Link to={`/products/${id}`} className="block">
        <div className="relative w-full h-60 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        <div className="p-4">
          <h3 className="text-base font-semibold text-gray-900 truncate capitalize">
            {name}
          </h3>
          {company && (
            <p className="text-sm text-gray-500 capitalize">{company}</p>
          )}
          {category && (
            <p className="text-xs text-gray-400 uppercase mt-1">{category}</p>
          )}

          <div className="flex items-center justify-between mt-3">
            <span className="text-lg font-bold text-indigo-700">
              {formatPrice(price)}
            </span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="text-sm bg-indigo-600 text-white py-1 px-3 rounded-full hover:bg-indigo-700 transition-colors"
            >
              View
            </motion.button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
