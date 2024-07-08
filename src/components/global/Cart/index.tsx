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
    <Box px={{ base: 0, md: 10 }}>
      <Box pl={{ base: 10, md: 0 }}>
        <Heading>Cart</Heading>
        <SCCustomBreadCrumbs items={breadcrumbs} />
      </Box>
      <Box>
        <Stack
          flexDir={{ base: "column", md: "column" ,lg:'row'}}
          justifyContent={"space-between"}
          spacing={10}
        >
          <Box w={"full"} flex={1.5}>
            <SCProductCartCardList products={products} />
          </Box>
          <Stack flex={1}>
            <SCCartSummaryCard />
            {/* <SCCartCouponCard /> */}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default SCCart;
