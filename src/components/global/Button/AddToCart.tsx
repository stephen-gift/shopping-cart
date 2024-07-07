import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useCartStore } from "../../../../store";
import { Product } from "../../../../types/global";
import SCRemoveFromCart from "./RemoveFromCart";

type Props = {
  product: Product;
};

const SCAddToCart = ({ product }: Props) => {
  const [cart, addToCart] = useCartStore((state) => [
    state.cart,
    state.addToCart,
  ]);

  const howManyInCart = cart.filter(
    (item) => item.name === product.name
  ).length;

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
          w={{ base: "100px", md: "200px" }}
        >
          <SCRemoveFromCart product={product} />
          <Text>{howManyInCart}</Text>
          <Button
            onClick={handleAdd}
            size="xs"
            fontSize={{ base: "10px", md: "14px" }}
            fontWeight={500}
            lineHeight={{ base: "12px", md: "16px" }}
            textAlign="left"
            variant={"none"}
            border="0.5px solid #5A2C1799"
          >
            +
          </Button>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Button
        onClick={handleAdd}
        size="xs"
        fontFamily="Archivo"
        fontSize={{ base: "6px", md: "10px" }}
        fontWeight={400}
        lineHeight={{ base: "6.53px", md: "10.88px" }}
        textAlign="left"
        border="0.5px solid #5A2C1799"
        variant={"none"}
        w={{ base: "100px", md: "200px" }}
      >
        Add to Cart
      </Button>
    </Flex>
  );
};

export default SCAddToCart;
