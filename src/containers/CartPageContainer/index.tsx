"use client";
import { SCCart, SCMainLayout } from "@/components";
import React from "react";
import { useCartStore } from "../../../store";

type Props = {};

const SCCartPageContainer = (props: Props) => {

  const cart = useCartStore((state) => state.cart);
  return (
    <>
      <SCMainLayout>
        <SCCart products={cart} />
      </SCMainLayout>
    </>
  );
};

export default SCCartPageContainer;
