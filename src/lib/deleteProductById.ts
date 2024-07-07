import { Product } from "../../types/global";

// Function to delete a product by id
export function deleteProductById(
  products: Product[],
  idToDelete: string
): Product[] {
  return products.filter((product) => product.id !== idToDelete);
}
