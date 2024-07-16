import { Box, Button, useToast } from "@chakra-ui/react";
import React from "react";
import { useCartStore } from "../../../../store";
import { MinusIcon } from "@chakra-ui/icons";
import { Product } from "../../../../types/singleProduct";

type Props = {};

const SCRemoveFromCart = ({ product }: { product: Product }) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const toast = useToast();
  const handleRemove = () => {
    removeFromCart(product);
    toast({
      title: "Item removed from cart.",
      description: `${product.name} has been removed from your cart.`,
      status: "warning",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
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
      _hover={{
        bg: "#B0B0B0", // Change background color on hover
        borderColor: "#5A2C1799", // Add border color on hover
        borderWidth: "0.5px", // Define the border width on hover
      }}
    >
      <MinusIcon boxSize={2} />
    </Box>
  );
};

export default SCRemoveFromCart;
