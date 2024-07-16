import axios from "axios";
import { Product } from "../../types/singleProduct";

// Define the base URL and API key as constants
const BASE_URL = "https://timbu-get-single-product.reavdev.workers.dev/";
const ORGANIZATION_ID = "ce1da40dce9f479a8df0bbafa2ab70be";
const APPID = "B0CQ0BFYMWHFAU7";
const APIKEY = "ef92591846c74a1f99d664feae97687f20240712153408182398";

// Function to fetch a specific product by ID
export const fetchProductById = async (productId: string): Promise<Product> => {
  try {
    const url = `${BASE_URL}/${productId}`;
    const response = await axios.get(url, {
      params: {
        organization_id: ORGANIZATION_ID,
        Appid: APPID,
        Apikey: APIKEY,
      },
    });
    return response.data as Product; // Assuming response.data is of type Product
  } catch (error: any) {
    throw new Error(`Error fetching product ${productId}: ${error.message}`);
  }
};
