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
  useToast,
} from "@chakra-ui/react";
import React from "react";
import SCAddToCart from "../Button/AddToCart";
import products from "@/data/products";
import { Product } from "../../../../types/singleProduct";
import { DeleteIcon } from "@chakra-ui/icons";
import { deleteProductById } from "@/lib/deleteProductById";
import { motion } from "framer-motion";
import { formatNumberWithCommas } from "@/lib/formatNumbersWithCommas";

interface ProductCartCardProps {
  product: Product;
  onDelete: (productId: string) => void; // Callback function for deleting a product
}
const SCProductCartCard = ({ product, onDelete }: ProductCartCardProps) => {
  const toast = useToast();
  const updatedProducts = deleteProductById(products, "2");
  const handleDelete = () => {
    onDelete(product.id); // Call onDelete callback with product id
    toast({
      title: "Product Deleted.",
      description: `${product.name} has been deleted from your cart.`,
      status: "warning",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };
  const baseImageUrl = "https://api.timbu.cloud/images";
  // Get the first image from the photos array
  const imageUrl =
    product.photos?.length > 0
      ? `${baseImageUrl}/${product.photos[0].url}`
      : "";

  // Get the price in NGN from the current_price array
  const priceNGN = product.current_price?.[0]?.NGN[0] || 0;

  return (
    <motion.div
      whileHover={
        {
          // scale: 1.0091,
          // rotate: 5, // Rotates the element by 5 degrees on hover
          // transition: { duration: 0.5 },
        }
      }
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Card
        w={"full"}
        bg={"none"}
        borderRadius={0}
        shadow={0}
        _hover={{
          boxShadow: "md",
          borderColor: "gray.200",
          // transform: "scale(1.01)", // Scale up by 2% on hover
          transition:
            "box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out, transform 0.3s ease-in-out",
          cursor: "pointer", // Optional: Change cursor on hover
          bg: "gray.50", // Background color on hover
        }}
      >
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
                src={imageUrl}
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
                  Qty:{" "}
                  <Text
                    fontSize={{ base: "14px", md: "20px" }}
                    fontWeight={600}
                    color={"dark3"}
                    isTruncated
                    maxW={"70px"}
                  >
                    {product.available_quantity}
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
                  Desc.:
                  <Text
                    fontSize={{ base: "14px", md: "20px" }}
                    fontWeight={600}
                    color={"dark3"}
                  >
                    {product.description}
                  </Text>
                </Text>
              </Flex>

              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                w={"full"}
              >
                {/* <Flex justifyContent={"center"} alignItems={"center"}>
                  <Square size="15px" bg={product.colors.primary} mr="2px" />
                  <Square size="15px" bg={product.colors.secondary} />
                </Flex> */}
                <Text
                  fontSize={{ base: "15px", md: "20px" }}
                  fontWeight={500}
                  lineHeight={{ base: "22px", md: "20px" }}
                  color="#000000CC"
                >
                  ₦{formatNumberWithCommas(priceNGN.toFixed(2))}
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
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
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
    </motion.div>
  );
};

export default SCProductCartCard;
