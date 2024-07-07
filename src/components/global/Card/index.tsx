import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Square,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Product } from "../../../../types/global";
import SCAddToCart from "../Button/AddToCart";
import products from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const SCProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card border={"2px"} borderColor={"cardBorder"}>
      <CardBody p={3}>
        <Box maxW="100%" borderRadius="lg" overflow="hidden">
          <Image
            src={product.imagePath}
            alt={product.name}
            boxSize="100%"
            objectFit="cover"
            objectPosition="center"
            borderRadius="lg"
          />
        </Box>
        <Stack mt="1" spacing="1">
          {/* <Image
           
            width={imageWidth}
            height={imageHeight}
          /> */}
          <Heading
            size={"md"}
            fontSize={{ base: "12px", md: "16px" }} // Adjust font size for different breakpoints
            lineHeight={{ base: "14px", md: "20px" }} // Adjust line height for different breakpoints
          >
            {product.name}
          </Heading>
          <Text
            fontSize={{ base: "10px", md: "16px" }}
            fontWeight={500}
            lineHeight={{ base: "12px", md: "18px" }}
            fontFamily="Archivo"
            color="#000000CC"
          >
            {product.availableSizes.join(", ")}
          </Text>

          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Square size="15px" bg={product.colors.primary} mr="2px" />
              <Square size="15px" bg={product.colors.secondary} />
            </Flex>
            <Text
              fontSize={{ base: "10px", md: "12px" }}
              fontWeight={500}
              lineHeight={{ base: "12px", md: "16px" }}
              fontFamily="Archivo"
              color="#000000CC"
            >
              ${product.price.toFixed(2)}
            </Text>
          </Flex>
          <SCAddToCart product={product} />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default SCProductCard;
