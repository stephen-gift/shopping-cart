"use client";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import SCCustomBreadCrumbs from "../BreadCrumb";
import SCInput from "../Input";
import { AddIcon, CheckCircleIcon } from "@chakra-ui/icons";
import SCCheckoutProductCardList from "../Card/SCCheckoutProductCardList";
import products from "@/data/products";
import { calculateDiscountTaxTotal } from "@/lib/calculateDiscountTaskTotal";
import { useCartStore } from "../../../../store";
import { getCartTotal } from "@/lib/getCartTotal";
import { useRouter } from "next/navigation";

type Props = {};

const SCCheckout = (props: Props) => {
  const router = useRouter();
  const clearCart = useCartStore((state) => state.clearCart);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const breadcrumbs = [
    { label: "1.Cart", href: "/cart" },
    { label: "2.Checkout", isCurrentPage: true },
  ];

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

  const handleClose = () => {
    clearCart(); // Clear the cart
    router.push("/"); // Route to the home page
    onClose(); // Close the modal
  };

  return (
    <Box px={{ base: 0, md: 10 }}>
      <Box pl={{ base: 10, md: 0 }}>
        <Heading>Checkout</Heading>
        <SCCustomBreadCrumbs items={breadcrumbs} />
      </Box>
      <Box>
        <Stack
          flexDir={{ base: "column", md: "column", lg: "row" }}
          justifyContent={"space-between"}
          spacing={10}
          pt={5}
        >
          <Box w={"full"} flex={1.5}>
            <Stack>
              <Accordion
                defaultIndex={[3]}
                allowToggle
                display={"flex"}
                flexDir={"column"}
                gap={3}
              >
                <AccordionItem
                  gap={2}
                  flexDir={"column"}
                  border={"none"}
                  display={{ base: "none", md: "none", lg: "flex" }}
                >
                  <h2>
                    <AccordionButton
                      h={"60px"}
                      borderRadius={15}
                      bg={"white"}
                      _expanded={{
                        fontWeight: "600",
                        fontsize: "22px",
                      }}
                    >
                      <Box as="span" flex="1" textAlign="left">
                        Contact information
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel bg={"white"}>
                    <Box>
                      <strong>Name:</strong> Stephen Gift
                      <br />
                      <strong>Email:</strong> stephengift43@gmail.com
                      <br />
                      <strong>Phone:</strong> +234 812 363 9058
                      <br />
                      <strong>Address:</strong> Alagomegi, Yaba, Lagos, Nigeria.
                      <br />
                    </Box>{" "}
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem
                  gap={2}
                  flexDir={"column"}
                  border={"none"}
                  display={{ base: "none", md: "none", lg: "flex" }}
                >
                  <h2>
                    <AccordionButton
                      h={"60px"}
                      borderRadius={15}
                      bg={"white"}
                      _expanded={{
                        fontWeight: "600",
                        fontsize: "22px",
                      }}
                    >
                      <Box as="span" flex="1" textAlign="left">
                        Delivery options
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel bg={"white"}>
                    <Box>
                      <strong>Delivery Method:</strong> Express Shipping
                      <br />
                      <strong>Estimated Delivery:</strong> July 15, 2024
                      <br />
                      <strong>Tracking Number:</strong> ABC123456XYZ
                      <br />
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem
                  gap={2}
                  border={"none"}
                  display={{ base: "none", md: "none", lg: "Flex" }}
                  flexDir={"column"}
                >
                  <Flex as={"h2"}>
                    <AccordionButton
                      h={"60px"}
                      borderRadius={15}
                      bg={"white"}
                      _expanded={{
                        fontWeight: "600",
                        fontsize: "22px",
                      }}
                    >
                      <Box as="span" flex="1" textAlign="left">
                        Shipping address
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Flex>
                  <AccordionPanel bg={"white"}>
                    <Box>
                      <strong>Address:</strong> 123 Main Street, City, Country
                      <br />
                      <strong>Postal Code:</strong> A1B 2C3
                      <br />
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem
                  border={"none"}
                  gap={2}
                  display={"flex"}
                  flexDir={"column"}
                >
                  <Flex as={"h2"}>
                    <AccordionButton
                      h={"60px"}
                      borderRadius={15}
                      bg={"white"}
                      _expanded={{
                        fontWeight: "600",
                        fontsize: "22px",
                        borderRadius: "20px, 20px, 0px, 0px",
                      }}
                    >
                      <Box as="span" flex="1" textAlign="left">
                        Payment Method
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Flex>
                  <AccordionPanel bgColor={"white"}>
                    <Stack>
                      <RadioGroup defaultValue="mastercard">
                        <Stack>
                          <Box
                            display="flex"
                            alignItems="flex-start"
                            justifyContent={"flex-start"}
                          >
                            <Radio
                              value="mastercard"
                              mr={3}
                              colorScheme="blackAlpha"
                            />
                            <Image
                              src="/images/Mastercard.png"
                              alt="Mastercard"
                              w={"40px"}
                              h={"auto"}
                              mr={3}
                            />
                            <Box>
                              <Text
                                fontWeight={600}
                                fontSize={{ base: 14, md: 18 }}
                              >
                                Pay with Mastercard
                              </Text>
                              <Text
                                fontWeight={500}
                                fontSize={{ base: 10, md: 13 }}
                              >
                                Default card Expire : 04/2027
                              </Text>

                              <InputGroup size="md" maxW={"125px"}>
                                <Input
                                  type={"number"}
                                  placeholder="CVV/CVC"
                                  _placeholder={{
                                    fontWeight: "400",
                                    fontsize: "10px",
                                  }}
                                  flex={2}
                                  w={"full"}
                                />
                                <InputRightElement>
                                  <Icon />
                                </InputRightElement>
                              </InputGroup>
                            </Box>
                          </Box>
                          <Divider />
                          <Box
                            display="flex"
                            alignItems="flex-start"
                            justifyContent={"flex-start"}
                          >
                            <Radio
                              value="paypal"
                              mr={3}
                              colorScheme="blackAlpha"
                            />
                            <Image
                              src="/images/Paypal.png"
                              alt="Paypal"
                              w={"40px"}
                              h={"auto"}
                              mr={3}
                            />
                            <Stack>
                              <Text
                                fontWeight={600}
                                fontSize={{ base: 14, md: 18 }}
                              >
                                Pay with Paypal
                              </Text>
                            </Stack>
                          </Box>
                        </Stack>
                      </RadioGroup>
                      <Divider />
                      <Flex
                        justifyContent={"flex-start"}
                        alignItems={"center"}
                        gap={2}
                      >
                        <Icon as={AddIcon} />
                        <Image
                          src="/images/Card.png"
                          alt="Mastercard"
                          w={"40px"}
                          h={"auto"}
                          mr={3}
                        />
                        <Text fontWeight={600} fontSize={{ base: 12, md: 16 }}>
                          Add a new debit or credit card
                        </Text>
                      </Flex>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Stack>
          </Box>
          <Stack flex={1} bg={"white"} p={5} spacing={3}>
            <Heading
              color={"dark3"}
              fontWeight={600}
              fontSize={{ base: 18, md: 25 }}
            >
              Order summary
            </Heading>
            <SCCheckoutProductCardList products={products} />
            <Divider />
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Heading
                fontWeight={600}
                color={"dark3"}
                fontSize={{ base: 12, md: 18 }}
              >
                Promo code
              </Heading>
              <IconButton
                icon={<AddIcon />}
                aria-label="Add Promo"
                variant={"none"}
              />
            </Flex>
            <Divider />
            <Flex flexDirection={"column"} gap={5}>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text
                  fontSize="12px"
                  fontWeight="400"
                  textAlign="left"
                  color={"dark3"}
                >
                  Subtotal
                </Text>
                <Text
                  fontSize="12px"
                  fontWeight="400"
                  textAlign="left"
                  color={"dark3"}
                >
                  {formatCurrency(subTotal)}
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text
                  fontSize="12px"
                  fontWeight="400"
                  textAlign="left"
                  color={"dark3"}
                >
                  Shipping
                </Text>
                <Text
                  fontSize="12px"
                  fontWeight="400"
                  textAlign="left"
                  color={"dark3"}
                >
                  FREE
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text
                  fontSize="12px"
                  fontWeight="400"
                  textAlign="left"
                  color={"dark3"}
                >
                  Estimated tax
                </Text>
                <Text
                  fontSize="12px"
                  fontWeight="400"
                  textAlign="left"
                  color={"dark3"}
                >
                  {formatCurrency(tax)}
                </Text>
              </Flex>
            </Flex>
            <Divider />
            <Stack spacing={5}>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text
                  fontWeight={600}
                  fontSize={{ base: 14, md: 18 }}
                  color={"#000000B2"}
                >
                  Estimated Total
                </Text>
                <Text
                  fontSize="12px"
                  fontWeight="400"
                  textAlign="left"
                  color={"dark3"}
                >
                  {formatCurrency(total)}
                </Text>
              </Flex>
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                spacing={5}
              >
                <Button
                  maxW={{ base: "150px", md: "271px" }}
                  w={"100%"}
                  bg={"#000000CC"}
                  onClick={onOpen}
                  color={"white"}
                  borderRadius={"lg"}
                  _hover={{bg:'#5A2C17'}}
                >
                  Place Order
                </Button>

                <Box>
                  <Text
                    fontWeight={500}
                    fontSize={{ base: 9.5, md: 10 }}
                    color={"dark3"}
                  >
                    By placing an order,you agree to the isabella’s
                  </Text>
                  <Flex
                    justifyContent={"center"}
                    alignItems={"flex-end"}
                    gap={1}
                  >
                    <Text
                      fontWeight={500}
                      fontSize={{ base: 7, md: 8 }}
                      color={"dark3"}
                      textDecor={"underline"}
                    >
                      Terms & Conditions
                    </Text>
                    <Text
                      fontWeight={500}
                      fontSize={{ base: 7, md: 8 }}
                      color={"#000000bb"}
                    >
                      and
                    </Text>
                    <Text
                      fontWeight={500}
                      fontSize={{ base: 7, md: 8 }}
                      color={"dark3"}
                      textDecor={"underline"}
                    >
                      Privacy Policy
                    </Text>
                  </Flex>
                </Box>
              </Stack>
              <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
              >
                <ModalOverlay onClick={handleClose} />
                <ModalContent>
                  <ModalHeader textAlign={"center"}>
                    Order Confirmation
                  </ModalHeader>
                  <ModalCloseButton onClick={handleClose} />
                  <ModalBody>
                    <Center>
                      <Image
                        src="/images/Logo.png"
                        alt="Logo"
                        boxSize={100}
                        mb={{ base: 2, md: 4 }}
                      />
                    </Center>
                    <Center>
                      <Icon
                        as={CheckCircleIcon}
                        w={20}
                        h={20}
                        color="green.500"
                      />
                    </Center>
                    <Center mt={4}>
                      <Text fontSize="xl" fontWeight="bold">
                        Thank you for your order!
                      </Text>
                    </Center>
                    <Center mt={2}>
                      <Text
                        fontSize={{ base: "xl", md: "2xl" }}
                        fontWeight="bold"
                        color="blue.600"
                      >
                        Total Amount Paid: {formatCurrency(total)}
                      </Text>
                    </Center>
                  </ModalBody>

                  <ModalFooter>
                    <Button onClick={handleClose}>Close</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default SCCheckout;
