/**
 * Function to group products by their `id`.
 * @param products Array of Product objects to be grouped.
 * @returns Record<string, Product[]> Object where keys are product IDs and values are arrays of products with that ID.
 */

import { Product } from "../../types/singleProduct";

export function groupById(products: Product[]): Record<string, Product[]> {
  return products.reduce(
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
