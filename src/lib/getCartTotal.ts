import { Product } from "../../types/singleProduct";

/**
 * Function to calculate the total price from items in a cart.
 * @param cart Array of Product objects in the cart.
 * @returns Total price of all items in the cart.
 */

export function calculateTotalPrice(cart: Product[]): number {
  return cart.reduce((totalPrice: number, product: Product) => {
    // Assuming each product has a `current_price` property with NGN array as defined
    const priceInNGN = product.current_price[0]?.NGN[0] || 0; // Default to 0 if price is undefined

    return totalPrice + priceInNGN;
  }, 0);
}
