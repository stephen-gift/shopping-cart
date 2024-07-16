import { Product } from "./singleProduct";

export interface ProductsResponse {
  page: number;
  size: number;
  total: number;
  debug: any | null; // The structure of debug is not defined
  previous_page: string | null;
  next_page: string | null;
  items: Product[] | undefined; //
}
