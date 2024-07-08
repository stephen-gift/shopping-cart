import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Product } from "./types/global";
// import type {} from '@redux-devtools/extension' // required for devtools typing

interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  //   devtools(
  persist(
    (set, get) => ({
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
    }),
    {
      name: "shopping-cart-storage",
    }
  )
  //   ),
);
