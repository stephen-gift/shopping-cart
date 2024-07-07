'use client'
import { SCCheckout, SCMainLayout } from "@/components";
import { Heading } from "@chakra-ui/react";
import React from "react";

type Props = {};

const SCCheckoutContainer = (props: Props) => {
  return (
    <>
      <SCMainLayout>
        <SCCheckout />
      </SCMainLayout>
    </>
  );
};

export default SCCheckoutContainer;
