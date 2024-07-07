import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Link,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useCartStore } from "../../../../store";
import { getCartTotal } from "@/lib/getCartTotal";

type Props = {};

const SCCartSummaryCard = (props: Props) => {
  const cart = useCartStore((state) => state.cart);
  const subTotal: number = getCartTotal(cart);

  // Define discount and tax rates
  const discountRate = 0.1; // 10% discount
  const taxRate = 0.05; // 5% tax

  // Calculate discount, tax, and total values
  const discount = subTotal * discountRate;
  const tax = (subTotal - discount) * taxRate;
  const total = subTotal - discount + tax;

  const formatCurrency = (value: number) => {
    return `$ ${value.toFixed(2)}`;
  };

  const getEstimatedDeliveryDate = () => {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 7); // Add 7 days for delivery
    return deliveryDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card>
      <CardHeader>
        <Heading size="md">Client Report</Heading>
      </CardHeader>
      <Divider />
      <CardBody>
        <Stack>
          <Box>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>sub total</Text>
              <Text
                fontFamily="Poppins"
                fontSize="20px"
                fontWeight="500"
                lineHeight="30px"
                textAlign="left"
              >
                {formatCurrency(subTotal)}
              </Text>
            </Flex>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>Discount</Text>
              <Text
                fontFamily="Poppins"
                fontSize="20px"
                fontWeight="500"
                lineHeight="30px"
                textAlign="left"
              >
                {formatCurrency(discount)}
              </Text>
            </Flex>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>Tax</Text>
              <Text
                fontFamily="Poppins"
                fontSize="20px"
                fontWeight="500"
                lineHeight="30px"
                textAlign="left"
              >
                {formatCurrency(tax)}
              </Text>
            </Flex>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>shipping</Text>
              <Text
                fontFamily="Poppins"
                fontSize="20px"
                fontWeight="500"
                lineHeight="30px"
                textAlign="left"
                color={"red"}
              >
                free
              </Text>
            </Flex>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>Total</Text>
              <Text
                fontFamily="Poppins"
                fontSize="20px"
                fontWeight="500"
                lineHeight="30px"
                textAlign="left"
              >
                {formatCurrency(total)}
              </Text>
            </Flex>
          </Box>
          <Link
            href="/checkout"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            textDecoration={'none'}
          >
            <Button>Proceed To Checkout</Button>
          </Link>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
          <Text>Estimated Delivery </Text>
          <Text
            fontFamily="Poppins"
            fontSize="20px"
            fontWeight="500"
            lineHeight="30px"
            textAlign="left"
          >
            {getEstimatedDeliveryDate()}
          </Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default SCCartSummaryCard;
