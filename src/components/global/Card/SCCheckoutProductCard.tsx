import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SCAddToCart from "../Button/AddToCart";
import { DeleteIcon } from "@chakra-ui/icons";
import { Product } from "../../../../types/global";
import { useCartStore } from "../../../../store";

interface ProductCheckoutCardProps {
  product: Product;
}

const SCCheckoutProductCard = ({ product }: ProductCheckoutCardProps) => {
  const [cart] = useCartStore((state) => [state.cart]);

  const howManyInCart = cart.filter(
    (item) => item.name === product.name
  ).length;
  return (
    <Card w={"full"} bg={"none"} boxShadow={"none"}>
      <CardBody w={"full"} bg={"none"} p={1}>
        <HStack alignItems={"center"} gap={{ base: 2, md: 5 }}>
          <Box
            width={{ base: "82px", md: "120px" }}
            height={{ base: "66px", md: "97px" }}
            gap="0px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image
              src={product.imagePath}
              alt={product.name}
              objectFit="cover"
              objectPosition="center"
              w="full"
              h="full"
              borderRadius="lg"
            />
          </Box>
          <Stack gap={0} w={"full"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Heading
                fontWeight={600}
                color={"dark3"}
                fontSize={{ base: "12px", md: "16px" }} // Adjust font size for different breakpoints
              >
                {product.name}
              </Heading>
              <Text
                fontWeight={500}
                color={"dark3"}
                fontSize={{ base: "13px", md: "15px" }} // Adjust font size for different breakpoints
              >
                ${product.price.toFixed(2)}
              </Text>
            </Flex>
            <Text
              fontWeight={500}
              color={"dark3"}
              fontSize={{ base: "10px", md: "12px" }} // Adjust font size for different breakpoints
            >
              Color: White
            </Text>
            <Text
              fontWeight={500}
              color={"dark3"}
              fontSize={{ base: "10px", md: "12px" }} // Adjust font size for different breakpoints
            >
              Size: {product.availableSizes.join(", ")}
            </Text>
            <Text
              fontWeight={500}
              color={"dark3"}
              fontSize={{ base: "10px", md: "12px" }} // Adjust font size for different breakpoints
            >
              Qty: {howManyInCart}
            </Text>
          </Stack>
        </HStack>

        {/* <Flex>
        <SCAddToCart product={product} />
        <IconButton
          aria-label="delete Product"
          icon={<DeleteIcon />}
          variant={"none"}
        />
      </Flex> */}
      </CardBody>
    </Card>
  );
};

export default SCCheckoutProductCard;
