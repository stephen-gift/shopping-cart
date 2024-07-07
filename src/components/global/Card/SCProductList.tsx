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
        columns={{ base: 3, sm: 3, md: 4 }}
        gap={{ base: "5px", sm: "16px", md: "27px" }}
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
