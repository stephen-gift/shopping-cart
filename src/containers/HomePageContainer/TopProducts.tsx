"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Icon,
  Link,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SCProductList } from "@/components";
import { Product } from "../../../types/singleProduct";
import { fetchProducts } from "@/api/allProducts";
import { useCartStore } from "../../../store";

type Props = {};

const SCTopProductsContainer = (props: Props) => {
  const { products, saveProducts } = useCartStore();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1); // Current page state
  const pageSize = 10; // Number of items per page
  const maxPages = 3;

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetchProducts(currentPage, pageSize); // Fetch products for page 2 with size 10
        // console.log("API Response:", response.items); // Log the API response
        // saveProducts(response.items); // Adjust based on actual response structure
        saveProducts(response.items); // Save fetched products into the store
        setLoading(false);
      } catch (err: any) {
        // console.error("API Error:", err); // Log any errors
        setError(err.message);
        setLoading(false);
      }
    };

    loadProducts();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, maxPages)); // Move to the next page, with maxPages limit
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)); // Move to the previous page, ensure it doesn't go below 1
  };

  return (
    <Stack p={{ base: 1, md: 5, lg: 7 }}>
      <Flex justifyContent={{ base: "space-between" }} alignItems="center">
        <Heading
          fontSize={{ base: "18px", md: "23px", lg: "25px" }}
          color={"#5A2C17"}
          fontWeight={600}
        >
          Top Products
        </Heading>
        <Flex justifyContent="center" alignItems="center" gap={3}>
          <Link fontSize={{ base: "xs", sm: "md", md: "lg" }}>View All</Link>
          <Icon boxSize={6} as={ChevronRightIcon} />
        </Flex>
      </Flex>
      {loading ? (
        <Flex justifyContent="center" alignItems="center" mt={4}>
          <Spinner size="lg" />
        </Flex>
      ) : error ? (
        <Flex justifyContent="center" alignItems="center" mt={4}>
          <Text color="red.500">Error: {error}</Text>
        </Flex>
      ) : (
        <Stack>
          <SCProductList products={products} />
          <Flex justifyContent="center" alignItems="center" mt={4}>
            <Icon
              as={ChevronLeftIcon}
              boxSize={6}
              onClick={prevPage}
              cursor="pointer"
              visibility={currentPage > 1 ? "visible" : "hidden"}
              mr={2}
            />
            <Text>{`Page ${currentPage}`}</Text>
            <Icon
              as={ChevronRightIcon}
              boxSize={6}
              onClick={nextPage}
              cursor="pointer"
              ml={2}
              visibility={currentPage < maxPages ? "visible" : "hidden"}
            />
          </Flex>
        </Stack>
      )}
    </Stack>
  );
};

export default SCTopProductsContainer;
