import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SCSeparatorIcon from "../CustomIcon/SCSeparatorIcon";

interface BreadcrumbsProps {
  items: { label: string; href?: string; isCurrentPage?: boolean }[];
}

const SCCustomBreadCrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <Breadcrumb separator={<SCSeparatorIcon />}>
      {items.map((item, index) => (
        <BreadcrumbItem key={index} isCurrentPage={item.isCurrentPage}>
          {item.href ? (
            <BreadcrumbLink
              href={item.href}
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
