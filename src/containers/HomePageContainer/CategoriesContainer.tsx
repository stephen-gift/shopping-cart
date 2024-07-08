import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};
const categories = ["New in", "Dresses", "Shoes", "Accessories"];

const SCCategoriesContainer = (props: Props) => {
  return (
    <Flex
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      wrap="wrap"
      gap="4"
      padding="2"
    >
      {categories.map((category, index) => (
        <Link
          key={index}
          href={`#${category.toLowerCase().replace(/ /g, "-")}`} // Assuming you want the links to scroll to sections with corresponding ids
          fontSize={{ base: "14px", md: "18px" }}
          fontWeight="500"
          textAlign="left"
          color="#5A2C17"
          _hover={{ textDecoration: "none", color: "#374382" }} // Optional: add hover styles
        >
          <Text
            key={index}
            fontSize={{ base: "14px", md: "18px" }}
            fontWeight="500"
            lineHeight={{ base: "21px", md: "27px" }}
            textAlign="left"
            color="#5A2C17"
          >
            {category}
          </Text>
        </Link>
      ))}
    </Flex>
  );
};

export default SCCategoriesContainer;
