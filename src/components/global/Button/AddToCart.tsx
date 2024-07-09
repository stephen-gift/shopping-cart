import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useCartStore } from "../../../../store";
import { Product } from "../../../../types/global";
import SCRemoveFromCart from "./RemoveFromCart";
import { AddIcon } from "@chakra-ui/icons";

type Props = {
  product: Product;
};

const SCAddToCart = ({ product }: Props) => {
  const [cart, addToCart] = useCartStore((state) => [
    state.cart,
    state.addToCart,
  ]);

  const howManyInCart = cart.filter((item) => item.id === product.id).length;

  const handleAdd = () => {
    console.log("Adding to cart", product);
    addToCart(product);
  };

  if (howManyInCart > 0) {
    return (
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Flex
          justifyContent={"space-between "}
          alignItems={"center"}
          maxW={{ base: "100px", md: "200px" }}
          w={"full"}
          gap={2}
        >
          <Box
            as="button"
            onClick={handleAdd}
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
            <AddIcon boxSize={2} />
          </Box>
          <Text color={"#000000"} fontWeight={600} fontSize={14}>
            {howManyInCart}
          </Text>
          <SCRemoveFromCart product={product} />
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Button
        onClick={handleAdd}
        size="xs"
        fontSize={{ base: "7px", md: "10px" }}
        fontWeight={400}
        textAlign="left"
        border="0.5px solid #5A2C1799"
        variant={"none"}
        maxW={{ base: "100px", md: "200px" }}
        w={"full"}
        _hover={{
          bg: "#5A2C17",
          color: "#FFFFFF",
        }}
      >
        Add to Cart
      </Button>
    </Flex>
  );
};

export default SCAddToCart;
