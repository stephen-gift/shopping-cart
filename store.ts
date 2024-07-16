import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Product } from "./types/singleProduct";
// import type {} from '@redux-devtools/extension' // required for devtools typing

interface CartState {
  products: Product[];
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
  saveProducts: (products: Product[]) => void;
}

export const useCartStore = create<CartState>()(
  //   devtools(
  persist(
    (set, get) => ({
      products: [], // Initial state of products is an empty array
      cart: [],
      addToCart: (product) => {
        set((state) => ({ cart: [...state.cart, product] }));
      },
      removeFromCart: (product) => {
        const productToRemove = get().cart.findIndex(
          (p) => p.name === product.name
        );
        set((state) => {
          const newCart = [...state.cart];
          newCart.splice(productToRemove, 1);
          return { cart: newCart };
        });
      },
      clearCart: () => {
        set(() => ({ cart: [] }));
      },
      saveProducts: (products) => {
        set({ products: [...products] }); // Sets the products state to the fetched products array
      },
    }),
    {
      name: "shopping-cart-storage",
    }
  )
  //   ),
);
