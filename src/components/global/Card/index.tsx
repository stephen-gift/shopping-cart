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
import { Product } from "../../../../types/global";
import SCAddToCart from "../Button/AddToCart";
import products from "@/data/products";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

const SCProductCard = ({ product }: ProductCardProps) => {
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
      <Card
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
      >
        <CardBody p={3}>
          <Box
            borderRadius="lg"
            overflow="hidden"
            w={"full"}
            h={{ base: "108px", md: "150px", lg: "192px" }} // Adjust height for different screen sizes
          >
            <Image
              src={product.imagePath}
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
    </motion.div>
  );
};

export default SCProductCard;
