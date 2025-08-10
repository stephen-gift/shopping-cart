import axios from "axios";

export const fetchProducts = async (page: number, size: number) => {
  try {
    const res = await axios.get(`/api/products`, {
      params: { page, size }
    });
    return res.data;
  } catch (error: any) {
    throw new Error(`Error fetching products: ${error.message}`);
  }
};
