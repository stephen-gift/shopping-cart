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
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SCAddToCart from "../Button/AddToCart";
import products from "@/data/products";
import { Product } from "../../../../types/global";
import { DeleteIcon } from "@chakra-ui/icons";
import { deleteProductById } from "@/lib/deleteProductById";

interface ProductCartCardProps {
  product: Product;
  onDelete: (productId: string) => void; // Callback function for deleting a product
}
const SCProductCartCard = ({ product, onDelete }: ProductCartCardProps) => {
  const updatedProducts = deleteProductById(products, "2");
  const handleDelete = () => {
    onDelete(product.id); // Call onDelete callback with product id
  };
  return (
    <Card w={"full"} bg={"none"} borderRadius={0} shadow={0}>
      <CardBody w={"full"} bg={"none"}>
        <HStack alignItems={"center"} gap={{ base: 2, md: 5 }}>
          <Box
            width={{ base: "101px", md: "228px" }}
            height={{ base: "80px", md: "185px" }}
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
          <Stack spacing={1} w={"full"}>
            <Heading
              fontSize={{ base: "15px", md: "22px" }} // Adjust font size for different breakpoints
            >
              {product.name}
            </Heading>
            <Flex
              justifyContent={"flex-start"}
              alignItems={"center"}
              gap={1}
              flexWrap={"wrap"}
            >
              <Text
                display={"flex"}
                gap={2}
                fontSize={{ base: "14px", md: "20px" }}
                fontWeight={400}
                lineHeight={{ base: "12px", md: "18px" }}
                color="#00000080"
              >
                Size:{" "}
                <Text
                  fontSize={{ base: "14px", md: "20px" }}
                  fontWeight={600}
                  color={"dark3"}
                  isTruncated
                  maxW={"70px"}
                >
                  {product.availableSizes.join(", ")}
                </Text>
              </Text>
              <Text>/</Text>

              <Text
                display={"flex"}
                gap={2}
                fontSize={{ base: "14px", md: "20px" }}
                fontWeight={400}
                lineHeight={{ base: "12px", md: "18px" }}
                color="#00000080"
              >
                Color:
                <Text
                  fontSize={{ base: "14px", md: "20px" }}
                  fontWeight={600}
                  color={"dark3"}
                >
                  {product.colorName}
                </Text>
              </Text>
            </Flex>

            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              w={"full"}
            >
              <Flex justifyContent={"center"} alignItems={"center"}>
                <Square size="15px" bg={product.colors.primary} mr="2px" />
                <Square size="15px" bg={product.colors.secondary} />
              </Flex>
              <Text
                fontSize={{ base: "15px", md: "20px" }}
                fontWeight={500}
                lineHeight={{ base: "22px", md: "20px" }}
                color="#000000CC"
              >
                ${product.price.toFixed(2)}
              </Text>
            </Flex>
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
      <Divider color={"#B7B8BC"} />
      <CardFooter>
        <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
          <SCAddToCart product={product} />
          <IconButton
            aria-label="delete Product"
            icon={<DeleteIcon />}
            variant={"none"}
            onClick={handleDelete}
          />
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default SCProductCartCard;
