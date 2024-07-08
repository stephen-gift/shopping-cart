import React from "react";
import { Product } from "../../../../types/global";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import SCProductCard from ".";

interface SCProductListProps {
  products: Product[];
}

const SCProductList = ({ products }: SCProductListProps) => {
  return (
    <>
      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 5 }}
        spacing={{ base: "9px", md: "16px", lg: "27px" }}
        p={{ base: 3, md: 5, lg: 5 }}
      >
        {products.map((product) => (
          <Box key={product.id}>
            <SCProductCard product={product} />
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default SCProductList;
