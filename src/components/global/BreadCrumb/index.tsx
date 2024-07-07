import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
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
            <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
          ) : (
            <BreadcrumbLink>{item.label}</BreadcrumbLink>
          )}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default SCCustomBreadCrumbs;
