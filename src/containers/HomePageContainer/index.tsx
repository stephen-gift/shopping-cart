import SCMainLayout from "@/components/global/Layout";
import React from "react";
import SCCategoriesContainer from "./CategoriesContainer";
import { SCImageSlider } from "@/components";
import SCTopProductsContainer from "./TopProducts";
import HeroBannerContainer from "./HeroBannerContainer";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Stack } from "@chakra-ui/react";

type Props = {};

const SCHomePageContainer = (props: Props) => {
  return (
    <>
      <SCMainLayout>
        <Stack spacing={3}>
          <SCCategoriesContainer />
          <HeroBannerContainer />
          <SCTopProductsContainer />
        </Stack>
      </SCMainLayout>
    </>
  );
};

export default SCHomePageContainer;
