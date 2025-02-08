import axios from "axios";
import { products_url, single_product_url } from "../utils/constants";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${products_url}`);
    const products = response.data;
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchProductById = async (productId) => {
  try {
    const response = await axios.get(`${single_product_url}${productId}`);
    const productDetails = response.data;
    return productDetails;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
};
