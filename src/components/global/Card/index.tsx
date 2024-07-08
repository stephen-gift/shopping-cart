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
  Tooltip,
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
    <Card border={"2px"} borderColor={"#DBDBDB"} boxShadow="sm">
      <CardBody p={3}>
        <Box borderRadius="lg" overflow="hidden">
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
        <Stack mt="1" spacing="1">
          {/* <Image
           
            width={imageWidth}
            height={imageHeight}
          /> */}
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <Box flex={1}>
            <Tooltip label={product.name} aria-label={product.name}>
            <Heading
              fontWeight={500}
              fontSize={{ base: "12px", md: "16px" }}
              lineHeight={{ base: "14px", md: "20px" }}
              // Ensure heading text truncates
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              maxWidth="calc(100% - 50px)" // Adjust the max-width as per your design
            >
              {product.name}
            </Heading>
          </Tooltip>
              <Text
                fontSize={{ base: "8px", md: "10px" }}
                fontWeight={600}
                color="#000000B2"
              >
                {product.availableSizes.join(", ")}
              </Text>
            </Box>
            <Text
              fontSize={{ base: "10px", md: "12px" }}
              fontWeight={500}
              color="#000000CC"
            >
              ${product.price.toFixed(2)}
            </Text>
          </Flex>

          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Flex justifyContent={"center"} alignItems={"center"}>
                <Square size="15px" bg={product.colors.primary} mr="2px" />
                <Square size="15px" bg={product.colors.secondary} />
              </Flex>
            </Flex>
            <SCAddToCart product={product} />
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default SCProductCard;
