import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SCCustomBreadCrumbs from "../BreadCrumb";

type Props = {};

const SCCheckout = (props: Props) => {
  const breadcrumbs = [
    { label: "1.Cart", href: "/cart" },
    { label: "2.Checkout", isCurrentPage: true },
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
          <Box w={"full"} flex={2}>
            <Text>Under Construction</Text>
          </Box>
          <Stack flex={1}>
            <Text>Under Construction</Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default SCCheckout;
