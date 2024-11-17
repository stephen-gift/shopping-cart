"use client";
import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import React, { useState } from "react";

interface ImageCarouselProps {
  images: string[];
}

const ProductImageCarousel = ({ images }: ImageCarouselProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleThumbnailClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  return (
    <Box>
      {/* Main Big Image */}
      <Box
        w="100%"
        mb={4}
        // Responsive padding and margin
        p={{ base: 2, md: 4 }}
        mx="auto" // Center align horizontally
        // Responsive max width
        maxW={{ base: "100%", sm: "90%", md: "80%" }}
        h={'full'}
        maxH={["200px", "250px", "300px"]}
        overflow={"auto"}
        borderRadius={'lg'}
      >
        <Image
          src={selectedImage}
          alt="Main Image"
          w="full"
          h="100%"
          objectFit="contain"
        />
      </Box>

      {/* Thumbnails */}
      <Flex justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={2} overflow={'auto'}>
          {images.map((imageUrl, index) => (
            <Image
              key={index}
              src={imageUrl}
              alt={`Thumbnail ${index + 1}`}
              w="60px"
              h="60px"
              objectFit="cover"
              onClick={() => handleThumbnailClick(imageUrl)}
              cursor="pointer"
              borderRadius="md"
              boxShadow={selectedImage === imageUrl ? "md" : "none"}
              _hover={{
                boxShadow: "md",
              }}
            />
          ))}
        </Stack>
      </Flex>
    </Box>
  );
};

export default ProductImageCarousel;
