'use client'
import React from "react";
import {
  Box,
  Flex,
  Link,
  Text,
  IconButton,
  VStack,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import SCFooter from ".";
import { FiSettings } from "react-icons/fi";

type Props = {};

const SCMainFooter = (props: Props) => {
  return (
    <Box mt={5} borderTop={"1px"} borderTopColor={"#5A2C17"} p={5}>
      {/* <SCFooter /> */}
      <Flex direction={["row", "row", "row"]} justify="space-between" gap={6}>
        <Flex w={"full"} direction={["column", "column", "column"]}>
          <Flex>
            <VStack align="start" spacing={0} flex="2" w={"full"}>
              <Text
                fontWeight="600"
                fontSize={{ base: "12", md: "18px" }}
                mb={2}
              >
                Online Shop
              </Text>
              <Text
                fontSize={{
                  base: "7px",
                  sm: "8px",
                  md: "10px",
                  lg: "12px",
                  xl: "14px",
                }}
                color={"#00000099"}
                fontWeight={400}
              >
                <b>isabella cribb </b>is a fashion house that provide trending
                and fashionable wears, for both men and women.
              </Text>
            </VStack>
            <VStack align="start" spacing={0} flex="1">
              <Text
                fontWeight="600"
                fontSize={{ base: "12", md: "18px" }}
                mb={2}
              >
                Get Help
              </Text>
              <Text
                fontSize={{
                  base: "7px",
                  sm: "8px",
                  md: "10px",
                  lg: "12px",
                  xl: "14px",
                }}
                color={"#00000099"}
                fontWeight={400}
              >
                Order status
              </Text>
              <Text
                fontSize={{
                  base: "7px",
                  sm: "8px",
                  md: "10px",
                  lg: "12px",
                  xl: "14px",
                }}
                color={"#00000099"}
                fontWeight={400}
              >
                Delivery
              </Text>
              <Text
                fontSize={{
                  base: "7px",
                  sm: "8px",
                  md: "10px",
                  lg: "12px",
                  xl: "14px",
                }}
                color={"#00000099"}
                fontWeight={400}
              >
                Payment option
              </Text>
              <Text
                fontSize={{
                  base: "7px",
                  sm: "8px",
                  md: "10px",
                  lg: "12px",
                  xl: "14px",
                }}
                color={"#00000099"}
                fontWeight={400}
              >
                Contact Us
              </Text>
            </VStack>
            <VStack align="start" spacing={0} flex="1">
              <Text
                fontWeight="600"
                fontSize={{ base: "12", md: "18px" }}
                mb={2}
              >
                Support
              </Text>

              <Text
                fontSize={{
                  base: "7px",
                  sm: "8px",
                  md: "10px",
                  lg: "12px",
                  xl: "14px",
                }}
                color={"#00000099"}
                fontWeight={400}
              >
                FAQ
              </Text>
              <Text
                fontSize={{
                  base: "7px",
                  sm: "8px",
                  md: "10px",
                  lg: "12px",
                  xl: "14px",
                }}
                color={"#00000099"}
                fontWeight={400}
              >
                My Account
              </Text>
              <Text
                fontSize={{
                  base: "7px",
                  sm: "8px",
                  md: "10px",
                  lg: "12px",
                  xl: "14px",
                }}
                color={"#00000099"}
                fontWeight={400}
              >
                Track Order
              </Text>
            </VStack>
          </Flex>
          <Flex
            direction="row"
            gap={4}
            flex="1"
            justify={["center", "center", "flex-start"]}
          >
           <Flex justifyContent={"flex-start"} w={"full"} position="sticky" bottom="">
              <Button
                size="md"
                variant={"none"}
                display={{ base: "flex", md: "none" }}
              >
                <Icon as={FiSettings} />
              </Button>
              <Button
                size="md"
                variant={"none"}
                display={{ base: "none", md: "flex" }}
                gap={2}
              >
                <Icon as={FiSettings} /> Settings
              </Button>
            </Flex>
            <Flex>
              <IconButton
                aria-label="Facebook"
                icon={<FaFacebook />}
                isRound
                variant="ghost"
                color="#5A2C17"
                _hover={{ bg: "gray.600" }}
                mx={2}
              />
              <IconButton
                aria-label="Twitter"
                icon={<FaTwitter />}
                isRound
                variant="ghost"
                color="#5A2C17"
                _hover={{ bg: "gray.600" }}
                mx={2}
              />
              <IconButton
                aria-label="Instagram"
                icon={<FaInstagram />}
                isRound
                variant="ghost"
                color="#5A2C17"
                _hover={{ bg: "gray.600" }}
                mx={2}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SCMainFooter;
