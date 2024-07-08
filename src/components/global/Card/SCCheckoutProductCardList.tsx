import React from "react";
import { Product } from "../../../../types/global";
import { useCartStore } from "../../../../store";
import { groupById } from "@/lib/groupById";
import { Box, Stack, Text } from "@chakra-ui/react";
import SCCheckoutProductCard from "./SCCheckoutProductCard";

interface SCProductCheckoutCardListProps {
  products: Product[];
}
const SCCheckoutProductCardList = ({
  products,
}: SCProductCheckoutCardListProps) => {
  const cart = useCartStore((state) => state.cart);
  const grouped = groupById(cart);

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
      <Box overflowY="auto" maxHeight={{ base: "80px", md: "130px" }} mt={3}>
        {Object.keys(grouped).map((id) => {
          const item = grouped[id][0];
          return (
            <Box key={id}>
              <SCCheckoutProductCard product={item} />
            </Box>
          );
        })}
      </Box>
    </Stack>
  );
};

export default SCCheckoutProductCardList;
