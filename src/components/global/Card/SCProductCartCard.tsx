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

interface ProductCartCardProps {
  product: Product;
}

const SCProductCartCard = ({ product }: ProductCartCardProps) => {
  return (
    <Card w={"full"}>
      <CardBody w={"full"}>
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
          <Stack spacing={3} w={'full'}>
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
      <Divider />
      <CardFooter>
        <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
          <SCAddToCart product={product} />
          <IconButton
            aria-label="delete Product"
            icon={<DeleteIcon />}
            variant={"none"}
          />
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default SCProductCartCard;
