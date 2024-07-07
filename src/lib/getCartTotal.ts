import { Product } from "../../types/global";

export function getCartTotal(products: Product[]): number {
  return products.reduce((accumulator: number, currentProduct: Product) => {
    return accumulator + currentProduct.price;
  }, 0);
}
