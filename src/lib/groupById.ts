import { Product } from "../../types/global";

export function groupById(products: Product[]): Record<string, Product[]> {
  return products?.reduce(
    (accumulator: Record<string, Product[]>, currentProduct: Product) => {
      const id = currentProduct.id;
      if (!accumulator[id]) {
        accumulator[id] = [];
      }

      accumulator[id].push(currentProduct);
      return accumulator;
    },
    {}
  );
}
