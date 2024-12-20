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
// import products from "@/data/products";
import SCCartSummaryCard from "../Card/SCCartSummaryCard";
import SCCartCouponCard from "../Card/SCCartCouponCard";
import { Product } from "../../../../types/singleProduct";

// type Props = {};
interface Props {
  products: Product[]; // Assuming products are passed as props
}

const SCCart = ({ products }: Props) => {
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
          flexDir={{ base: "column", md: "column", lg: "row" }}
          justifyContent={"space-between"}
          spacing={{ base: 8, md: 15, lg: 20 }}
        >
          <Box w={"full"} flex={1.5} overflowX="auto">
            <Box maxH={["400px", "600px"]} overflowY="auto">
              <SCProductCartCardList products={products} />
            </Box>
          </Box>
          <Stack flex={1} p={[2, 4, 6]}>
            <SCCartSummaryCard />
            {/* <SCCartCouponCard /> */}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default SCCart;
