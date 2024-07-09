import React from "react";
import { Product } from "../../../../types/global";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SCProductCard from ".";

interface SCProductListProps {
  products: Product[];
}

const SCProductList = ({ products }: SCProductListProps) => {
  return (
    <SimpleGrid
      columns={{ base: 2, md: 3, lg: 5 }}
      spacing={{ base: "9px", md: "16px", lg: "27px" }}
      p={{ base: 3, md: 5, lg: 5 }}
    >
      {products.map((product, index) => (
        <ProductCardWithScrollAnimation
          key={product.id}
          product={product}
          index={index}
        />
      ))}
    </SimpleGrid>
  );
};

const ProductCardWithScrollAnimation = ({
  product,
  index,
}: {
  product: Product;
  index: number;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.5, // Trigger animation when 50% of the card is in view
  });

  return (
    <motion.div
      key={product.id}
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <Box>
        <SCProductCard product={product} />
      </Box>
    </motion.div>
  );
};

export default SCProductList;
