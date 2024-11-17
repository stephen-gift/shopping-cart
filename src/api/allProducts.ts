import axios from "axios";
import { Product } from "../../types/singleProduct";

// Define the base URL and API key as constants
const BASE_URL = process.env.TIMBU_BASE_URL;
const ORGANIZATION_ID = process.env.TIMBU_ORGANIZATION_ID;
const APPID = process.env.TIMBU_APPID;
const APIKEY = process.env.TIMBU_APIKEY;

// Interface for the API response (adjust as needed based on the actual API response structure)
interface ApiResponse {
  data: Product; // Replace 'any' with the actual data structure returned by the API
}

// : Promise<ApiResponse>

// Function to fetch products
export const fetchProducts = async (page: number, size: number) => {
  try {
    const response = await axios.get(BASE_URL as string, {
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
