"use client";
import {
  HamburgerIcon,
  MoonIcon,
  PhoneIcon,
  SearchIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Square,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BiCart, BiUser } from "react-icons/bi";
import { useCartStore } from "../../../../store";
import { getCartTotal } from "@/lib/getCartTotal";

type Props = {};

const SCHeader = (props: Props) => {
  const cart = useCartStore((state) => state.cart);
  const total = getCartTotal(cart);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      h={"73px"}
      p={2}
      borderBottom={"1px"}
      borderBottomColor={"#BE827DB2"}
    >
      <Flex justifyContent={"center"} alignItems={"center"} gap={5}>
        <Square size={"72px"} display={{ base: "none", md: "flex" }}>
          <Image src="/images/Logo.png" alt="Logo" />
        </Square>
        <IconButton
          //   display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          icon={<HamburgerIcon />}
          variant={"none"}
          aria-label="Open Menu"
        />

        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Search"
          icon={<SearchIcon color="gray.300" />}
          variant={"none"}
          onClick={() => console.log("Search icon clicked")}
        />
      </Flex>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <InputGroup display={{ base: "none", md: "flex" }} maxW={"654px"}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="search" placeholder="Search..." />
        </InputGroup>
      </Flex>
      <Square size={"72px"} display={{ base: "flex", md: "none" }}>
        <Image src="/images/Logo.png" alt="Logo" />
      </Square>

      <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
        <IconButton
          display={{ base: "none", md: "flex" }}
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          variant={"none"}
          aria-label="Open Menu"
        />

        <Flex alignItems={"center"} justifyContent={"center"} gap={5}>
          <IconButton
            //   display={{ base: "flex", md: "none" }}
            onClick={() => {}}
            icon={<BiUser />}
            variant={"none"}
            aria-label="Open Menu"
          />

          <Link
            href="/cart"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            fontWeight="bold"
            fontSize="sm"
            p={2} // Adding padding for clickable area
            borderRadius="md" // Adding rounded corners
            _hover={{ bg: "gray.100" }} // Adding hover effect
            position="relative" // Ensure position relative for absolute positioning of Badge
          >
            <Flex alignItems="center">
              <Icon as={BiCart} boxSize={5} />
              <Box ml={2} position="absolute" top="-1" right="1">
                <Text fontSize="xs" fontWeight="bold" color={'red'}>
                  {cart.length > 0 ? `${cart.length}` : "0"}
                </Text>
              </Box>
            </Flex>
          </Link>
        </Flex>
      </Flex>

      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <IconButton
              display={{ base: "flex", md: "none" }}
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              variant={"none"}
              aria-label="Open Menu"
            />

            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default SCHeader;
