// components/SCCustomCarousel.tsx
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const carouselItems = [
  {
    id: 1,
    image: "/images/Banner1.png",
    text: "Slide 1",
  },
  {
    id: 2,
    image: "/images/Banner2.png",
    text: "Slide 2",
  },
  {
    id: 3,
    image: "/images/Banner1.png",
    text: "Slide 3",
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
            <Box
              textAlign="center"
              fontSize="xl"
              mt="4"
              color="white"
              position="absolute"
              bottom="20px"
              w="full"
            >
              {item.text}
            </Box>
          </MotionBox>
        ))}
      </AnimatePresence>

      <IconButton
        aria-label="Previous Slide"
        icon={<FaArrowLeft />}
        position="absolute"
        top="50%"
        left="2"
        transform="translateY(-50%)"
        zIndex={2}
        onClick={prevSlide}
        variant={'none'}
      />
      <IconButton
        aria-label="Next Slide"
        icon={<FaArrowRight />}
        position="absolute"
        top="50%"
        right="2"
        transform="translateY(-50%)"
        zIndex={2}
        onClick={nextSlide}
variant={'none'}
      />
    </Box>
  );
};

export default SCCustomCarousel;
