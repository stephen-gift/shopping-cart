import axios from "axios";
import { Product } from "../../types/singleProduct";

// Define the base URL and API key as constants
const BASE_URL = "https://timbu-get-all-products.reavdev.workers.dev/";
const ORGANIZATION_ID = "ce1da40dce9f479a8df0bbafa2ab70be";
const APPID = "B0CQ0BFYMWHFAU7";
const APIKEY = "ef92591846c74a1f99d664feae97687f20240712153408182398";

// Interface for the API response (adjust as needed based on the actual API response structure)
interface ApiResponse {
  data: Product; // Replace 'any' with the actual data structure returned by the API
}

// : Promise<ApiResponse>

// Function to fetch products
export const fetchProducts = async (page: number, size: number) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        organization_id: ORGANIZATION_ID,
        reverse_sort: "false",
        page: page,
        size: size,
        Appid: APPID,
        Apikey: APIKEY,
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching products: ${error.message}`);
  }
};
