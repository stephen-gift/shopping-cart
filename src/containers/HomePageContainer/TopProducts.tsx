"use client";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, Heading, Icon, Link, Stack } from "@chakra-ui/react";
import React from "react";
import { Product } from "../../../types/global";
import { SCProductList } from "@/components";
import products from "@/data/products";

type Props = {};

const SCTopProductsContainer = (props: Props) => {
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
      {/* Add product cards here */}
      <SCProductList products={products} />
    </Stack>
  );
};

export default SCTopProductsContainer;
