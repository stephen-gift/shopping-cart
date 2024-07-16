import { Box, Button, Link, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SCProductCartCard from "./SCProductCartCard";
import { useCartStore } from "../../../../store";
import { groupById } from "@/lib/groupById";
import { deleteProductById } from "@/lib/deleteProductById";
import SCProductCartCardSkeleton from "../Skeleton/SCProductCartCardSkeleton ";
import { Product } from "../../../../types/singleProduct";

interface SCProductCartCardListProps {
  products: Product[];
}
const SCProductCartCardList = ({ products }: SCProductCartCardListProps) => {
  const [loading, setLoading] = useState(true); // State to track loading
  const cart = useCartStore((state) => state.cart);
  const grouped = groupById(cart);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDeleteProduct = (productId: string) => {
    // Update cart state by deleting the product with the specified id
    useCartStore.setState((state) => ({
      cart: deleteProductById(state.cart, productId),
    }));
  };

  // Check if cart is empty
  if (Object.keys(grouped).length === 0) {
    return (
      <Box textAlign="center" py={10}>
        {loading ? (
          // Display skeleton components if still loading
          Array.from({ length: 3 }).map((_, index) => (
            <Box key={index} mb={4}>
              <SCProductCartCardSkeleton />
            </Box>
          ))
        ) : (
          // Display empty cart message and skeleton components once loading is complete
          <>
            <Text mb={4}>
              Your cart is empty. Please go to the home page to add items to
              your cart.
            </Text>

            {Array.from({ length: 1 }).map((_, index) => (
              <Box key={index} mb={4}>
                <SCProductCartCardSkeleton disableAnimation={true} />
              </Box>
            ))}
            <Link href="/">
              <Button>Go to Home Page</Button>
            </Link>
          </>
        )}
      </Box>
    );
  }

  return (
    <Stack spacing={3}>
      {loading
        ? Array.from({ length: 3 }).map((_, index) => (
            <Box key={index}>
              <SCProductCartCardSkeleton />
            </Box>
          ))
        : Object.keys(grouped).map((id) => {
            const item = grouped[id][0];
            return (
              <Box key={id}>
                <SCProductCartCard
                  product={item}
                  onDelete={handleDeleteProduct}
                />
              </Box>
            );
          })}
    </Stack>
  );
};

export default SCProductCartCardList;
