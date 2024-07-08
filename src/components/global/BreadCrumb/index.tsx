import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import SCSeparatorIcon from "../CustomIcon/SCSeparatorIcon";
import { useRouter } from "next/navigation";
import { useCartStore } from "../../../../store";

interface BreadcrumbsProps {
  items: { label: string; href?: string; isCurrentPage?: boolean }[];
}

const SCCustomBreadCrumbs = ({ items }: BreadcrumbsProps) => {
  const toast = useToast();
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);

  const handleCheckoutClick = () => {
    if (cart.length === 0) {
      toast({
        title: "Your cart is empty.",
        description: "Please go to the homepage to add items to your cart.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } else {
      router.push("/checkout");
    }
  };

  return (
    <Breadcrumb separator={<SCSeparatorIcon />}>
      {items.map((item, index) => (
        <BreadcrumbItem key={index} isCurrentPage={item.isCurrentPage}>
          {item.href ? (
            <BreadcrumbLink
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                if (item.label === "2.Checkout") {
                  handleCheckoutClick();
                }else if (item.label === "1.Cart"){
                  router.push("/cart");
                }
              }}
              _hover={{ textDecoration: "none" }}
            >
              <Text
                fontSize={{ base: "15px", md: "20px" }}
                fontWeight={item.isCurrentPage ? "600" : "400"}
                textAlign="left"
              >
                {item.label}
              </Text>
            </BreadcrumbLink>
          ) : (
            <BreadcrumbLink _hover={{ textDecoration: "none" }}>
              <Text
                fontSize={{ base: "15px", md: "20px" }}
                fontWeight={item.isCurrentPage ? "600" : "400"}
                textAlign="left"
              >
                {item.label}
              </Text>
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default SCCustomBreadCrumbs;
