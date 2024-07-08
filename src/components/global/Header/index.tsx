"use client";
import {
  CheckCircleIcon,
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
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  OrderedList,
  Skeleton,
  Square,
  Stack,
  Text,
  UnorderedList,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiCart, BiUser } from "react-icons/bi";
import { useCartStore } from "../../../../store";
import { getCartTotal } from "@/lib/getCartTotal";
import { useRouter } from "next/navigation";
import { groupById } from "@/lib/groupById";

type Props = {};

const SCHeader = (props: Props) => {
  const router = useRouter();
  const [showSearch, setShowSearch] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const total = getCartTotal(cart);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isSearchOpen,
    onOpen: onSearchOpen,
    onClose: onSearchClose,
  } = useDisclosure();

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const grouped = groupById(cart);

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
          <Link href="/" textDecor={"none"}>
            <Image src="/images/Logo.png" alt="Logo" />
          </Link>
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
          // onClick={onSearchOpen}
        />

        {/* <Modal isOpen={isSearchOpen} onClose={onSearchClose} size="full">
          <ModalOverlay bg={"rgba(0,0,0,0.5)"} />
          <ModalContent maxW="654px" mx="auto">
            <ModalCloseButton zIndex={10} />
            <ModalBody p={5} bg={"transparent"}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input type="search" placeholder="Search..." />
              </InputGroup>
            </ModalBody>
          </ModalContent>
        </Modal> */}
      </Flex>
      <InputGroup
        display={{ base: "none", md: "flex" }}
        maxW={"654px"}
        w={"100%"}
      >
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input type="search" placeholder="Search..." />
      </InputGroup>

      <Link href="/" textDecoration={"none"}>
        <Square size={"72px"} display={{ base: "flex", md: "none" }}>
          <Image src="/images/Logo.png" alt="Logo" />
        </Square>
      </Link>

      <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
        {/* <IconButton
          display={{ base: "none", md: "flex" }}
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          variant={"none"}
          aria-label="Open Menu"
        /> */}

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
                <Text fontSize="xs" fontWeight="bold" color={"red"}>
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
          <DrawerHeader borderBottomWidth="1px">
            <Link href="/" textDecoration={"none"}>
              <Square size={"72px"}>
                <Image src="/images/Logo.png" alt="Logo" />
              </Square>
            </Link>
          </DrawerHeader>
          <DrawerBody>
            {/* <IconButton
              display={{ base: "flex", md: "none" }}
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              variant={"none"}
              aria-label="Open Menu"
            /> */}

            <Stack spacing={2}>
              <Heading fontSize="lg" mb={2}>
                Items in Cart
              </Heading>

              {/* Conditionally render based on grouped cart state */}
              {Object.keys(grouped).length > 0 ? (
                Object.keys(grouped).map((id) => {
                  const item = grouped[id][0];
                  return (
                    <UnorderedList listStyleType={'none'} key={id}>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        {item.name}
                      </ListItem>
                    </UnorderedList>
                  );
                })
              ) : (
                <>
                  <Text>Your cart is empty.</Text>
                  <Stack spacing={2}>
                    {/* Skeleton components for visual consistency */}
                    {Array.from({ length: 3 }).map((_, index) => (
                      <Skeleton key={index} height="20px" />
                    ))}
                  </Stack>
                  <Button
                    onClick={() => router.push("/")}
                    mt={4}
                    colorScheme="blue"
                  >
                    Add Items to Cart
                  </Button>
                </>
              )}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default SCHeader;
