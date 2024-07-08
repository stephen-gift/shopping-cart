import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Product } from "../../../../types/global";
import { useCartStore } from "../../../../store";
import { MinusIcon } from "@chakra-ui/icons";

type Props = {};

const SCRemoveFromCart = ({ product }: { product: Product }) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleRemove = () => {
    removeFromCart(product);
  };

  return (
    <Box
      as="button"
      onClick={handleRemove}
      w="15px"
      h="15px"
      p={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontSize={{ base: "10px", md: "14px" }}
      fontWeight={500}
      lineHeight={{ base: "12px", md: "16px" }}
      textAlign="left"
      // border="0.5px solid #5A2C1799"
      bg={"#D9D9D9"}
      borderRadius={0}
    >
      <MinusIcon boxSize={2} />
    </Box>
  );
};

export default SCRemoveFromCart;
