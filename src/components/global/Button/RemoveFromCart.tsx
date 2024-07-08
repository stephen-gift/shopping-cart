import { Button } from "@chakra-ui/react";
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
    <Button
      onClick={handleRemove}
      size="xs"
      fontSize={{ base: "10px", md: "14px" }}
      fontWeight={500}
      lineHeight={{ base: "12px", md: "16px" }}
      textAlign="left"
      variant={"none"}
      // border="0.5px solid #5A2C1799"
      bg={"#D9D9D9"}
      borderRadius={0}
    >
      <MinusIcon />
    </Button>
  );
};

export default SCRemoveFromCart;
