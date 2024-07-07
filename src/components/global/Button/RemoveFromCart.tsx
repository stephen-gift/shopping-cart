import { Button } from "@chakra-ui/react";
import React from "react";
import { Product } from "../../../../types/global";
import { useCartStore } from "../../../../store";

type Props = {};

const SCRemoveFromCart = ({ product }: { product: Product }) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleRemove = () => {
    removeFromCart(product);
  };

  return (
    <Button
      onClick={handleRemove}
      size="xs"
      fontSize={{ base: "10px", md: "14px" }}
      fontWeight={500}
      lineHeight={{ base: "12px", md: "16px" }}
      textAlign="left"
      border="0.5px solid #5A2C1799"
    >
      -
    </Button>
  );
};

export default SCRemoveFromCart;
