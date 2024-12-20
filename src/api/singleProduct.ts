import axios from "axios";
import { Product } from "../../types/singleProduct";

// Define the base URL and API key as constants
const BASE_URL = process.env.NEXT_PUBLIC_TIMBU_BASE_URL;
const ORGANIZATION_ID = process.env.NEXT_PUBLIC_TIMBU_ORGANIZATION_ID;
const APPID = process.env.NEXT_PUBLIC_TIMBU_APPID;
const APIKEY = process.env.NEXT_PUBLIC_TIMBU_APIKEY;

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
