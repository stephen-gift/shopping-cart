import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Product } from "../../../../types/global";
import SCProductCartCard from "./SCProductCartCard";
import { useCartStore } from "../../../../store";
import { groupById } from "@/lib/groupById";
import { deleteProductById } from "@/lib/deleteProductById";

interface SCProductCartCardListProps {
  products: Product[];
}
const SCProductCartCardList = ({ products }: SCProductCartCardListProps) => {
  const cart = useCartStore((state) => state.cart);
  const grouped = groupById(cart);

  const handleDeleteProduct = (productId: string) => {
    // Update cart state by deleting the product with the specified id
    useCartStore.setState((state) => ({
      cart: deleteProductById(state.cart, productId),
    }));
  };

  // Check if cart is empty
  if (Object.keys(grouped).length === 0) {
    return (
      <Box>
        <Text>Your cart is empty.</Text>
      </Box>
    );
  }

  return (
    <Stack spacing={3}>
      {Object.keys(grouped).map((id) => {
        const item = grouped[id][0];
        return (
          <Box key={id}>
            <SCProductCartCard product={item} onDelete={handleDeleteProduct} />
          </Box>
        );
      })}
    </Stack>
  );
};

export default SCProductCartCardList;
