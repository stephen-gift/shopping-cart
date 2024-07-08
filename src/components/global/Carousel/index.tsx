"use client";
// components/SCCustomCarousel.tsx
import {
  Box,
  Button,
  Heading,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const carouselItems = [
  {
    id: 1,
    image: "/images/Banner1.png",
    text: "Show More",
  },
  {
    id: 2,
    image: "/images/Banner2.jpg",
    text: "Show More",
  },
  {
    id: 3,
    image: "/images/Banner3.jpg",
    text: "Show More",
  },
];

const MotionBox = motion(Box);

const SCCustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
  };

  // Set up auto-scroll
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slides every 5 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const boxSize = useBreakpointValue({
    base: "100vw",
    md: "100vw",
    lg: "100vw",
  });

  return (
    <Box
      position="relative"
      w="full"
      h="325px"
      overflow="hidden"
      borderRadius="md"
    >
      <AnimatePresence initial={false}>
        {carouselItems.map((item, index) => (
          <MotionBox
            key={item.id}
            initial={{ opacity: 0, x: index > currentIndex ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: index > currentIndex ? -100 : 100 }}
            transition={{ duration: 0.5 }}
            position={index === currentIndex ? "relative" : "absolute"}
            width={boxSize}
            height="100%"
            display={index === currentIndex ? "block" : "none"}
          >
            <Box
              as="img"
              src={item.image}
              alt={`Slide ${index + 1}`}
              w="full"
              h="100%"
            />
            <Stack
              pos={"absolute"}
              top={{ base: "60px", md: "70px", lg: "75px" }}
              left={{ base: "23px", md: "50px", lg: "106px" }}
              justifyContent={"center"}
              alignItems={"center"}
              gap={2}
            >
              <Heading fontWeight={700} fontSize={{ base: "30px", md: "70px" }}>
                Extra 10% Off
              </Heading>
              <Text fontSize={{ base: "15px", md: "25px" }}>EVERYTHING</Text>
            </Stack>
            <Box
              textAlign="center"
              fontSize="xl"
              mt="4"
              color="white"
              position="absolute"
              bottom="20px"
              w="full"
            >
              <Button
                bg={"#F6F6F6"}
                color={"#5A2C1799"}
                fontSize={{ base: 15, md: 18 }}
                border={"1px"}
                borderColor={"#5A2C17"}
                maxW={{ base: "150px", md: "200px" }}
                w={"full"}
              >
                Show More
              </Button>
            </Box>
          </MotionBox>
        ))}
      </AnimatePresence>

      <IconButton
        aria-label="Previous Slide"
        icon={<ChevronLeftIcon boxSize={10} />}
        position="absolute"
        top="50%"
        left="2"
        transform="translateY(-50%)"
        zIndex={2}
        onClick={prevSlide}
        variant={"none"}
        color={"#F6F6F6"}
      />
      <IconButton
        aria-label="Next Slide"
        icon={<ChevronRightIcon boxSize={10} />}
        position="absolute"
        top="50%"
        right="2"
        transform="translateY(-50%)"
        zIndex={2}
        onClick={nextSlide}
        variant={"none"}
        color={"#F6F6F6"}
      />
    </Box>
  );
};

export default SCCustomCarousel;
