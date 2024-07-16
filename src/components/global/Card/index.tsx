"use client";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Square,
  Stack,
  StackDivider,
  Text,
  Tooltip,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Product } from "../../../../types/singleProduct";
import SCAddToCart from "../Button/AddToCart";
import { motion } from "framer-motion";
import { useState } from "react";
import { fetchProductById } from "@/api/singleProduct";
import ProductImageCarousel from "../Carousel/ProductImageCarousel";

interface ProductCardProps {
  product: Product;
}

const SCProductCard = ({ product }: ProductCardProps) => {
  const baseImageUrl = "https://api.timbu.cloud/images";

  // Get the first image from the photos array
  const imageUrl =
    product.photos?.length > 0
      ? `${baseImageUrl}/${product.photos[0].url}`
      : "";

  // Get the price in NGN from the current_price array
  const priceNGN = product.current_price?.[0]?.NGN[0] || 0;

  const handleClick = async () => {
    try {
      const detailedProduct = await fetchProductById(product.id);
      if (detailedProduct) {
        setModalProduct(detailedProduct);
        onOpen();
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalProduct, setModalProduct] = useState<Product | null>(null); // State to store detailed product info

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.5 },
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Box
        border={"2px"}
        borderColor={"#DBDBDB"}
        boxShadow="sm"
        _hover={{
          boxShadow: "md",
          borderColor: "gray.200",
          transform: "scale(1.02)", // Scale up by 2% on hover
          transition:
            "box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out, transform 0.3s ease-in-out",
          cursor: "pointer", // Optional: Change cursor on hover
          bg: "gray.50", // Background color on hover
        }}
        borderRadius={"lg"}
      >
        <Card
          p={0}
          boxShadow={"none"}
          onClick={handleClick} // Call fetchProductDetails function on click
        >
          <CardBody p={2}>
            <Box
              borderRadius="lg"
              overflow="hidden"
              w={"full"}
              h={{ base: "108px", md: "150px", lg: "192px" }} // Adjust height for different screen sizes
            >
              <Image
                src={imageUrl}
                alt={product.name}
                objectFit="cover"
                objectPosition="center"
                w="full"
                h="full"
              />
            </Box>
            <Stack mt="1" spacing="1">
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                flexWrap={"wrap"}
              >
                <Box flex={1}>
                  <Tooltip label={product.name}>
                    <Heading
                      w={"full"}
                      fontWeight={500}
                      fontSize={{ base: "12px", md: "16px" }} // Adjust font size for different breakpoints
                      lineHeight={{ base: "14px", md: "20px" }} // Adjust line height for different breakpoints
                    >
                      <Text
                        maxW={{ base: "70px", md: "100px", lg: "100px" }}
                        isTruncated
                      >
                        {product.name}
                      </Text>
                    </Heading>
                  </Tooltip>

                  <Text
                    fontSize={{ base: "8px", md: "10px" }}
                    fontWeight={600}
                    color="#000000B2"
                  >
                    {product.available_quantity}
                  </Text>
                </Box>
                <Text
                  fontSize={{ base: "10px", md: "12px" }}
                  fontWeight={500}
                  color="#000000CC"
                >
                  ₦{priceNGN.toFixed(2)}
                </Text>
              </Flex>

              {/* <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Flex justifyContent={"center"} alignItems={"center"}>
                  <Square size="15px" bg={product.colors.primary} mr="2px" />
                  <Square size="15px" bg={product.colors.secondary} />
                </Flex>
              </Flex> */}
              {/* <SCAddToCart product={product} /> */}
            </Stack>
          </CardBody>
        </Card>
        {/* Add to Cart button outside the Card */}
        <Box my={2}>
          <SCAddToCart product={product} />
        </Box>
      </Box>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalProduct?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProductImageCarousel
              images={
                modalProduct?.photos.map(
                  (photo) => `${baseImageUrl}/${photo.url}`
                ) || []
              }
            />
            <Text>{modalProduct?.description}</Text>
            <Text>Price: ₦{modalProduct && priceNGN.toFixed(2)}</Text>
          </ModalBody>
          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button> */}
            <SCAddToCart product={product} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </motion.div>
  );
};

export default SCProductCard;
