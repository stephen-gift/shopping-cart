import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
  HStack,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import SCCustomBreadCrumbs from "../BreadCrumb";
import SCProductCartCardList from "../Card/SCProductCartCardList";
import products from "@/data/products";
import SCCartSummaryCard from "../Card/SCCartSummaryCard";
import SCCartCouponCard from "../Card/SCCartCouponCard";

type Props = {};

const SCCart = (props: Props) => {
  const breadcrumbs = [
    { label: "1.Cart", isCurrentPage: true },
    { label: "2.Checkout", href: "/checkout" },
  ];
  return (
    <Box>
      <Heading>Cart</Heading>
      <SCCustomBreadCrumbs items={breadcrumbs} />
      <Box>
        <Stack
          flexDir={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          spacing={10}
          p={5}
        >
          <Box w={'full'} flex={2}>
            <SCProductCartCardList products={products} />
          </Box>
          <Stack flex={1}>
            <SCCartSummaryCard />
            <SCCartCouponCard />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default SCCart;
