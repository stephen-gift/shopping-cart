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
  HStack,
  Spacer,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "../../../../store";
import { getCartTotal } from "@/lib/getCartTotal";
import { calculateDiscountTaxTotal } from "@/lib/calculateDiscountTaskTotal";

type Props = {};

const SCCartSummaryCard = (props: Props) => {
  const router = useRouter();
  const toast = useToast();

  const cart = useCartStore((state) => state.cart);
  const subTotal: number = getCartTotal(cart);

  // Define discount and tax rates
  const discountRate = 0.1; // 10% discount
  const taxRate = 0.05; // 5% tax

  // Calculate discount, tax, and total values
  const { discount, tax, total } = calculateDiscountTaxTotal(
    subTotal,
    discountRate,
    taxRate
  );

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

  const handleCheckoutClick = () => {
    if (cart.length === 0) {
      toast({
        title: "Your cart is empty.",
        description: "Please go to the homepage to add items to your cart.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      router.push("/checkout");
    }
  };

  return (
    <Card bg={"#D9D9D966"}>
      <CardHeader justifyContent={"center"} alignItems={"center"}>
        <Heading
          textAlign={"center"}
          fontWeight={600}
          fontSize={{ base: 18, md: 25 }}
          color={"#ED121280"}
        >
          Order summary
        </Heading>
      </CardHeader>

      <Divider color={"#4F4F4F40"} />
      <CardBody>
        <Stack spacing={5}>
          <Flex flexDir={"column"} w={"full"} gap={5}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>Sub total</Text>
              <Text
                fontSize={{ base: "15px", md: "20px" }}
                fontWeight={500}
                lineHeight="30px"
                textAlign="left"
              >
                {formatCurrency(subTotal)}
              </Text>
            </Flex>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>Discount</Text>
              <Text
                fontSize={{ base: "15px", md: "20px" }}
                fontWeight={500}
                lineHeight="30px"
                textAlign="left"
              >
                {formatCurrency(discount)}
              </Text>
            </Flex>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>Tax</Text>
              <Text
                fontSize={{ base: "15px", md: "20px" }}
                fontWeight={500}
                lineHeight="30px"
                textAlign="left"
              >
                {formatCurrency(tax)}
              </Text>
            </Flex>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>Shipping</Text>
              <Text
                fontSize={{ base: "15px", md: "20px" }}
                fontWeight={500}
                lineHeight="30px"
                textAlign="left"
                color={"#ED1212CC"}
              >
                FREE
              </Text>
            </Flex>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>Total</Text>
              <Text
                fontSize={{ base: "15px", md: "20px" }}
                fontWeight={500}
                lineHeight="30px"
                textAlign="left"
              >
                {formatCurrency(total)}
              </Text>
            </Flex>
          </Flex>

          <Button
            onClick={handleCheckoutClick}
            bg={"#48474CB2"}
            color={"white"}
            _hover={{ bg: "#48474CB2" }}
            textDecor={"none"}
            borderRadius={20}
          >
            Proceed To Checkout
          </Button>
        </Stack>
      </CardBody>
      <Divider color={"#4F4F4F40"} />
      <CardFooter>
        <Flex
          w={"full"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={1}
        >
          <Text>Estimated Delivery by: </Text>
          <Text
            as={"span"}
            fontSize={{ base: "15px", md: "20px" }}
            fontWeight={500}
            lineHeight="30px"
            textAlign="left"
          >
            {" "}
            {getEstimatedDeliveryDate()}
          </Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default SCCartSummaryCard;
