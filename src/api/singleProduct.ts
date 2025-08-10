import axios from "axios";
import { Product } from "../../types/singleProduct";

export const fetchProductById = async (productId: string): Promise<Product> => {
  try {
    const response = await axios.get(`/api/products/${productId}`);
    return response.data as Product;
  } catch (error: any) {
    throw new Error(`Error fetching product ${productId}: ${error.message}`);
  }
};
